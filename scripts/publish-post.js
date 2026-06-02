import fs from 'fs';
import path from 'path';

// Load GitHub Event payload
const eventPath = process.env.GITHUB_EVENT_PATH;
if (!eventPath) {
  console.error("Error: GITHUB_EVENT_PATH is not set.");
  process.exit(1);
}

const event = JSON.parse(fs.readFileSync(eventPath, 'utf8'));
const issue = event.issue;
const action = event.action;

console.log(`Action: ${action}, Issue: #${issue.number}`);

const postsFilePath = path.join(process.cwd(), 'src/posts.json');
let posts = [];
try {
  posts = JSON.parse(fs.readFileSync(postsFilePath, 'utf8'));
} catch (e) {
  console.log("No existing posts found, starting fresh.");
}

const issueId = `issue-${issue.number}`;

// Check if it has the "publish" label
const isPublish = issue.labels.some(l => l.name === 'publish');

// If the issue is closed, unlabeled (losing 'publish' label), or does not have 'publish' label
if (action === 'closed' || (action === 'unlabeled' && event.label && event.label.name === 'publish') || !isPublish) {
  console.log(`Unpublishing post for Issue #${issue.number}`);
  posts = posts.filter(post => post.id !== issueId);
  fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2) + '\n');
  console.log("Post removed successfully.");
  process.exit(0);
}

// Otherwise, parse the issue body and publish/update
console.log(`Publishing/Updating post for Issue #${issue.number}`);
const body = issue.body || "";

// Extract fields using Regex
const authorMatch = body.match(/### Author\s*\n+([\s\S]*?)(?=\n+###|$)/i);
const urlMatch = body.match(/### (?:YouTube|Spotify) URL\s*\n+([\s\S]*?)(?=\n+###|$)/i);
const contentMatch = body.match(/### Content\s*\n+([\s\S]*)/i);

const author = authorMatch && authorMatch[1].trim() ? authorMatch[1].trim() : (issue.user ? issue.user.login : 'Beating Sisyphus Team');
const youtubeUrl = urlMatch && urlMatch[1].trim() ? urlMatch[1].trim() : "";
const content = contentMatch && contentMatch[1].trim() ? contentMatch[1].trim() : "";

const title = issue.title.replace(/^\[Blog Post\]:\s*/i, '').trim();
const createdAt = issue.created_at || new Date().toISOString();

const postData = {
  id: issueId,
  title,
  author,
  createdAt,
  youtubeUrl,
  content
};

// Check if post already exists
const existingIndex = posts.findIndex(post => post.id === issueId);
if (existingIndex !== -1) {
  console.log("Updating existing post.");
  // Keep original createdAt so updates don't change the publication date
  postData.createdAt = posts[existingIndex].createdAt;
  posts[existingIndex] = postData;
} else {
  console.log("Adding new post to the top of the list.");
  posts.unshift(postData);
}

fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2) + '\n');
console.log("Post saved successfully.");
