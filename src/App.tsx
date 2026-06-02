import React, { useState } from 'react';
import { Youtube, Headphones, Radio, Music2, Linkedin, ChevronDown, ChevronUp } from 'lucide-react';
import Markdown from 'react-markdown';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  youtubeUrl: string;
  author?: string;
  createdAt: string;
}

import STATIC_BLOG_POSTS from './posts.json';


export default function App() {
  const [showAllPosts, setShowAllPosts] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center selection:bg-vintage-red selection:text-vintage-cream bg-vintage-cream text-vintage-black">
      
      {/* Top Border Accent */}
      <div className="w-full h-2 bg-vintage-red"></div>
      <div className="w-full h-px bg-vintage-black mt-1"></div>

      <main className="w-full max-w-5xl px-6 py-16 md:py-24 z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <header className="text-center mb-20 w-full">
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="w-full max-w-2xl border-t border-b border-vintage-black py-8 relative">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-vintage-black -mt-[1px] -ml-[1px]"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-vintage-black -mt-[1px] -mr-[1px]"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-vintage-black -mb-[1px] -ml-[1px]"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-vintage-black -mb-[1px] -mr-[1px]"></div>
              
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-vintage-red tracking-widest uppercase leading-none">
                Beating<br />Sisyphus
              </h1>
            </div>
          </div>
          
          <p className="font-serif text-xl md:text-2xl italic text-vintage-black max-w-2xl mx-auto font-medium">
            "How emerging markets overcome the impossible."
          </p>
        </header>

        {/* Listen On Section */}
        <section className="w-full mb-24">
          <div className="flex items-center justify-center gap-6 mb-10 w-full max-w-2xl mx-auto">
            <div className="h-px bg-vintage-border flex-1"></div>
            <h2 className="font-sans text-sm tracking-[0.3em] uppercase text-vintage-black/60 font-semibold">
              Available On
            </h2>
            <div className="h-px bg-vintage-border flex-1"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <PlatformLink 
              href="https://youtube.com/playlist?list=PLsusrzm7-OaTbS2kVoUfYs78COGlG85wf&si=tw2DmU1HmtYRqocG"
              icon={<Youtube size={20} strokeWidth={1.5} />}
              name="YouTube"
            />
            <PlatformLink 
              href="https://open.spotify.com/show/7DOx0zfgbVNiluDSoQJCmI"
              icon={<Headphones size={20} strokeWidth={1.5} />}
              name="Spotify"
            />
            <PlatformLink 
              href="https://podcasts.apple.com/us/podcast/beating-sisyphus-how-emerging-markets-overcome-the/id1855339237"
              icon={<Radio size={20} strokeWidth={1.5} />}
              name="Apple Podcasts"
            />
            <PlatformLink 
              href="https://music.amazon.com/podcasts/eaafd303-1fc3-47a2-ad3b-655c19be7dd1/beating-sisyphus-how-emerging-markets-overcome-the-impossible"
              icon={<Music2 size={20} strokeWidth={1.5} />}
              name="Amazon Music"
            />
          </div>
        </section>

        {/* Episodes Section */}
        <section className="w-full mb-24">
          <div className="flex items-center justify-center gap-6 mb-12 w-full max-w-2xl mx-auto">
            <div className="h-px bg-vintage-border flex-1"></div>
            <h2 className="font-serif text-3xl md:text-4xl italic text-vintage-black">
              Latest Episodes
            </h2>
            <div className="h-px bg-vintage-border flex-1"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Apple Podcasts Player */}
            <div className="p-3 bg-white rounded-2xl shadow-sm border border-vintage-border transition-all duration-500 hover:shadow-md hover:border-vintage-black/30">
              <iframe 
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
                frameBorder="0" 
                height="450" 
                style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', borderRadius: '12px', backgroundColor: 'transparent' }} 
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                src="https://embed.podcasts.apple.com/us/podcast/beating-sisyphus-how-emerging-markets-overcome-the/id1855339237">
              </iframe>
            </div>

            {/* Spotify Player */}
            <div className="p-3 bg-white rounded-2xl shadow-sm border border-vintage-border transition-all duration-500 hover:shadow-md hover:border-vintage-black/30">
              <iframe 
                data-testid="embed-iframe" 
                style={{ borderRadius: '12px', backgroundColor: 'transparent' }} 
                src="https://open.spotify.com/embed/show/7DOx0zfgbVNiluDSoQJCmI?utm_source=generator&theme=0" 
                width="100%" 
                height="450" 
                frameBorder="0" 
                allowFullScreen={false} 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
              </iframe>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full">
          <div className="flex items-center justify-center gap-6 mb-12 w-full max-w-2xl mx-auto">
            <div className="h-px bg-vintage-border flex-1"></div>
            <h2 className="font-serif text-3xl md:text-4xl italic text-vintage-black">
              About the Show
            </h2>
            <div className="h-px bg-vintage-border flex-1"></div>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="font-serif text-lg md:text-xl leading-relaxed text-vintage-black/90">
              Beating Sisyphus brings together leaders across economics, tech, finance, policy, and entrepreneurship to explore how innovation emerges under pressure. Through deep, intellectually honest conversations, we uncover the strategies, mindsets, and systems that allow emerging markets to overcome barriers and build lasting growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Host 1 */}
            <div className="flex flex-col">
              <div className="w-full max-w-[280px] mb-8 overflow-hidden rounded-2xl border border-vintage-border shadow-sm mx-auto md:mx-0 relative group bg-vintage-border/30">
                <div className="absolute inset-0 bg-vintage-red/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                <img 
                  src={`${import.meta.env.BASE_URL}Casanova_Lourdes_.lc683_Johnson_DONE.jpg`} 
                  alt="Lourdes Casanova" 
                  className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 block"
                />
              </div>
              <div className="flex items-center justify-between border-b border-vintage-border pb-4 mb-6">
                <h3 className="font-serif text-2xl font-bold text-vintage-black">Lourdes Casanova</h3>
                <a href="https://www.linkedin.com/in/lourdescasanova" target="_blank" rel="noopener noreferrer" className="text-vintage-black/60 hover:text-vintage-red transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
              <div className="font-sans text-sm leading-relaxed text-vintage-black/80 space-y-4">
                <p>Lourdes Casanova is the Gail and Roberto Cañizares Director of the <a href="https://business.cornell.edu/centers-institutes/emerging-markets/" target="_blank" rel="noopener noreferrer" className="text-vintage-red hover:text-vintage-black underline decoration-vintage-red/30 hover:decoration-vintage-black transition-colors font-medium">Cañizares Center for Emerging Markets</a> and senior lecturer at the Samuel Curtis Johnson Graduate School of Management at Cornell University. Formerly of the strategy department at INSEAD, she specializes in international business with a focus on Latin America and multinationals from emerging markets.</p>
                <p>In 2014 and 2015, Casanova was named as one of the 50 most influential Iberoamerican intellectuals by Esglobal. She is a member of the board of directors of Boyce Thompson Institute.</p>
                <p>Casanova is a Fulbright Scholar who holds a PhD from Universidad de Barcelona and MA from the University of Southern California.</p>
              </div>
            </div>

            {/* Host 2 */}
            <div className="flex flex-col">
              <div className="w-full max-w-[280px] mb-8 overflow-hidden rounded-2xl border border-vintage-border shadow-sm mx-auto md:mx-0 relative group bg-vintage-border/30">
                <div className="absolute inset-0 bg-vintage-red/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                <img 
                  src={`${import.meta.env.BASE_URL}Headshot.jpeg`} 
                  alt="Thomas Riveros" 
                  className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 block"
                />
              </div>
              <div className="flex items-center justify-between border-b border-vintage-border pb-4 mb-6">
                <h3 className="font-serif text-2xl font-bold text-vintage-black">Thomas Riveros</h3>
                <a href="https://www.linkedin.com/in/thomas-riveros-336b992a9" target="_blank" rel="noopener noreferrer" className="text-vintage-black/60 hover:text-vintage-red transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
              <div className="font-sans text-sm leading-relaxed text-vintage-black/80 space-y-4">
                <p>Thomas Riveros ’27 is an undergraduate at Cornell University majoring in economics with a minor in business. He is passionate about finance, emerging markets and macroeconomics. He is the co-host of “Beating Sisyphus,” a podcast that brings on experts from different industries to discuss how emerging markets succeed under pressure.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Episode Insights Section */}
        <section className="w-full mt-24">
          <div className="flex items-center justify-center gap-6 mb-12 w-full max-w-2xl mx-auto">
            <div className="h-px bg-vintage-border flex-1"></div>
            <h2 className="font-serif text-3xl md:text-4xl italic text-vintage-black">
              Episode Insights
            </h2>
            <div className="h-px bg-vintage-border flex-1"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {STATIC_BLOG_POSTS.slice(0, showAllPosts ? STATIC_BLOG_POSTS.length : 1).map((post, index) => (
                <div key={post.id} className="bg-white p-8 rounded-2xl border border-vintage-border shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-sans text-xs tracking-[0.2em] uppercase text-vintage-red font-semibold block">
                      {index === 0 ? 'Latest Episode' : 'Previous Episode'}
                    </span>
                    <a href={post.youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-vintage-black/50 hover:text-vintage-red transition-colors flex items-center gap-1 text-xs font-sans uppercase tracking-wider">
                      <Youtube size={14} /> Watch
                    </a>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-vintage-black mb-2">{post.title}</h3>
                  <div className="mb-4">
                    <span className="font-sans text-xs tracking-widest uppercase text-vintage-black/60 font-medium pb-1 border-b border-vintage-red/30">
                      By {post.author || 'Beating Sisyphus Team'}
                    </span>
                  </div>
                  <div className="prose prose-stone max-w-none prose-headings:font-serif prose-a:text-vintage-red hover:prose-a:text-vintage-black prose-p:leading-relaxed text-vintage-black/80 text-sm">
                    <Markdown>{post.content}</Markdown>
                  </div>
                </div>
              ))}
              
              {STATIC_BLOG_POSTS.length > 1 && (
                <div className="flex justify-center mt-8">
                  <button 
                    onClick={() => setShowAllPosts(!showAllPosts)}
                    className="flex items-center gap-2 px-6 py-3 rounded-full border border-vintage-border bg-white text-vintage-black/70 hover:text-vintage-red hover:border-vintage-red transition-all shadow-sm font-sans text-sm font-medium uppercase tracking-wider cursor-pointer"
                  >
                    {showAllPosts ? (
                      <>Collapse Older Episodes <ChevronUp size={16} /></>
                    ) : (
                      <>Show {STATIC_BLOG_POSTS.length - 1} Older Episode{STATIC_BLOG_POSTS.length > 2 ? 's' : ''} <ChevronDown size={16} /></>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

      </main>

      <footer className="w-full py-12 text-center border-t border-vintage-border mt-auto flex flex-col items-center gap-4">
        <p className="font-serif italic text-vintage-black/70 text-sm">
          © {new Date().getFullYear()} Beating Sisyphus. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function PlatformLink({ href, icon, name }: { href: string, icon: React.ReactNode, name: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 px-8 py-3 rounded-full border border-vintage-black/20 bg-white/50 backdrop-blur-sm text-vintage-black hover:bg-vintage-red hover:text-vintage-cream hover:border-vintage-red transition-all duration-300 shadow-sm"
    >
      <span className="opacity-70 group-hover:opacity-100 transition-opacity">
        {icon}
      </span>
      <span className="font-sans text-xs tracking-[0.2em] uppercase font-medium mt-[2px]">
        {name}
      </span>
    </a>
  );
}
