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

const STATIC_BLOG_POSTS: BlogPost[] = [
  {
    id: "C61RDi9dJn6botHF55Gb",
    title: "Remittance Shock - How the West's Immigration Policy is Affecting Those Abroad",
    author: "Daniel Young Kim",
    createdAt: "2026-05-29T22:26:38.844Z",
    youtubeUrl: "https://open.spotify.com/show/7DOx0zfgbVNiluDSoQJCmI",
    content: `Every month, somewhere in a Houston apartment or a London suburb or a Dubai labor camp, a migrant worker opens an app, types in a number, and hits send. The money arrives in a village in Nepal, a city in El Salvador, a household in Nicaragua. That money will go to pay school fees, rent, medicine, or any host of other necessities. This is what’s known as remittances: one of the most direct, unglamorous, and consequential flows of capital in the global economy. 

Unfortunately, such remittances are under threat amidst a general crackdown of immigration, especially by those in the west. Most people think of foreign aid when they imagine wealthy countries helping poorer ones. Yet, remittances dwarf it. In 2024, officially recorded remittances to low- and middle-income countries reached nearly $700 billion — exceeding the combined total of foreign direct investment and foreign aid flowing to the developing world three times over. 

Protecting these remittances is especially important for countries on the top of the dependency scale. Tajikistan receives remittances equal to nearly 48% of its entire GDP. Tonga sits close behind. Nicaragua, Nepal, Honduras, and Samoa each rely on these inflows for roughly a quarter of national output. In Lebanon, amid banking collapse and hyperinflation, remittances are one of the last functioning financial lifelines. Even the large absolute recipients — India ($129 billion annually), Mexico ($68 billion), the Philippines ($40 billion) — have millions of households whose daily survival depends on the monthly transfer.

This is the context that seems to be absent in almost every immigration debate held in Brussels, or Washington, or London. The policies decided there don’t just affect domestic lives but those abroad. Whether or not these administrative bodies have the obligations to those abroad populations is a separate discussion but understanding the effects of these policies is prudent before a decision can be made. 

The shift in Western immigration policy over the past two years has been sweeping and, in several countries, historically aggressive. In the United States, the current administration began 2025 with a surge in deportations that is unprecedented in modern memory. For the first time in decades, the vast majority of those deported had lived in the US for more than four years  and had been sending money home regularly. The immediate effect was paradoxical. Remittance volumes to Latin America and the Caribbean in 2025 hit their highest growth rates in twenty years. But analysts largely attribute this to a "send now" panic: migrants rushing to transfer as much as possible before conditions deteriorated further. Think of it as a stress-induced savings drawdown. 

It would be more accurate to view the effects of these policies on a longer time horizon. The structural damage from such aggressive immigration policies runs on a lag. Researchers at the Institute of International Finance show that the relationship between migration levels and remittance flows is persistent but slow-moving, meaning the full effect of reduced migration and mass deportations will weigh on inflows for years, possibly a decade. Countries with high dependence, particularly in Central America, are most exposed. 
One of the most direct attacks on remittances is tucked into President Trump’s “One Big Beautiful Bill” (OBBB). The OBBB proposed a remittances tax, starting at 5%, negotiated down to 3.5%, and ultimately passed in the Senate at 1%. However, that negotiation down to 1% came with the stipulation that the remittances tax would apply to all remittance senders, including US citizens, instead of the original target on solely non-US citizens. A 1% rate sounds modest. However, consider that migrants already pay roughly 6% in transfer fees to services like Western Union or digital competitors — more than double the UN's Sustainable Development Goal target of 3%. Stacking a government tax on top of that further discourages individuals from sending money through formal channels. Researchers at the Inter-American Dialogue estimated that informal transfers could grow to 30% of total flows under a punishing tax regime. Informal money movement is harder to track, harder to regulate, more expensive for recipients, and more dangerous for everyone involved.

It would be a mistake to frame this as purely an American policy problem. Across Europe, the political center of gravity on immigration has shifted significantly. The UK has tightened its visa regimes. Several EU member states have pushed for stricter enforcement, faster deportations, and reduced pathways for low-skilled migration. The remittance corridors that flow from Europe are distinct from US corridors — heavily weighted toward North Africa, West Africa, South Asia, and Eastern Europe — but the dynamics are structurally similar. The Philippines, for instance, has long operated a deliberate policy of labor export; its Overseas Filipino Workers (OFWs) send home over $40 billion annually, with significant flows from Europe and the Middle East alongside the US. Any contraction in legal migration pathways tightens the spigot. For smaller Pacific Island nations — Tonga, Samoa, the Marshall Islands — remittances from diaspora communities in New Zealand, Australia, and the US are woven into the basic functioning of the economy. These are nations without the economic mass to absorb a sustained shock.

The uncomfortable truth that development economists wrestle with is that remittance dependence, even while it sustains millions of families, creates structural fragility. Countries that rely on a quarter or more of their GDP from money wired in from abroad have, in effect, outsourced a chunk of their economic engine to the policy decisions of foreign governments. The debate about whether remittances foster dependency or development has run for decades. The evidence is mixed: remittances do reduce poverty and fund education and healthcare at the household level. But they can also suppress the domestic investment and institutional pressure that might otherwise drive economic transformation. However, this debate has flared up in the past two years and will likely continue to do so. When remittances were growing steadily and immigration policy in the West was relatively stable, the dependency was manageable. Now, with host-country politics swinging sharply against migration, the vulnerability of remittance-dependent economies is moving from theoretical to acute. 

Analysts at the Inter-American Dialogue project that the 2025 surge in average remittance sizes — migrants sending more per transaction to compensate for fewer migrants sending — is likely to slow by mid-2026, as the upward cycle exhausts itself. The underlying migration pipeline is thinner. The deported are gone. And the political winds in the West are not shifting back anytime soon.
For a country like Honduras, where remittances represent over a quarter of GDP, or Nepal, where a record 500,000 foreign employment permits were issued in a single recent year as citizens sought opportunity abroad — the stakes are not abstract. They are the difference between a family that can pay for school and one that cannot.

The wire transfer is quiet. It doesn't show up in the headlines the way a trade war does, or a currency crisis, or a collapsed bank. But follow the money, and you'll find one of the most consequential stories in global economics today: the slow rewiring of a lifeline, one policy at a time.

Note: The previous work is original work.`
  },
  {
    id: "Kb3eZH4gOGz3pGGP5qUy",
    title: "The Next Leap: AI, Access & Innovation in Emerging Market Healthcare",
    author: "Melissa Linares, MSN, APRN, MBA",
    createdAt: "2026-04-23T14:44:29.018Z",
    youtubeUrl: "https://youtu.be/5QJn1mJrjMQ",
    content: `INTRODUCTION

AI in healthcare is often discussed through the lens of developed markets: incremental efficiency gains, administrative automation, and optimization of already-digitized systems. But in emerging markets, the story is fundamentally different. AI is not a convenience; it is a catalyst for access, equity, and system-level transformation.

In this episode of Beating Sisyphus, produced by the Canizares Center for Emerging Markets in collaboration with the Cornell Emerging Markets Institute Club, I moderated a conversation with four extraordinary leaders working at the intersection of clinical care, engineering, digital health, and AI-enabled safety systems. Together, we explored how emerging markets are leapfrogging legacy barriers and building AI-native healthcare models that look nothing like the U.S. and in many ways, are moving faster.

AI'S BIGGEST OPPORTUNITY: ACCESS OVER EFFICIENCY

When asked about the single biggest opportunity AI creates for emerging markets, our panelists converged on one theme: access.

In countries where specialists are scarce and infrastructure is thin, AI becomes a force multiplier. As Brian Baldeo noted, AI-guided diagnostic tools in places like Kenya allow frontline nurses to perform screenings once reserved for specialists. This is not about shaving seconds off workflows, it is about bringing lifesaving care to communities that have never had it.

Fumei Cerecino Mayer emphasized AI's ability to reduce friction across fragmented systems, triage, routing, documentation, and decision support, especially in regions where out-of-pocket costs and travel distances create enormous barriers.

Dr. Joe Benson highlighted a unique advantage: emerging markets can build AI-native systems from scratch, unburdened by legacy EHRs. They can design for their own realities rather than retrofitting U.S. systems.

INFRASTRUCTURE: BUILDING THE FOUNDATION WHILE SCALING INNOVATION

Deploying AI in environments with unreliable power grids and limited broadband requires more than software, it requires engineering foresight.

Brian outlined three foundational pillars:

Stable power: Africa's rapid expansion of solar and hydropower is creating the backbone for digital health.

Reliable broadband: Many countries are leapfrogging landlines entirely, moving straight to 4G/5G mobile networks.

End-user hardware: Affordable smartphones and tablets are becoming the new clinical interface.

Examples like Indonesia's SATUSEHAT platform and Kenya's mHealth ecosystem show how infrastructure constraints can spark innovation rather than limit it.

SAFETY, COMPLIANCE & GUARDRAILS FOR RESPONSIBLE AI

AI cannot scale without trust. And trust requires safety. Dr. Benson underscored the importance of "designing for safe speed", moving quickly without compromising patient protection. Emerging markets must adopt:

Risk-tiered oversight (as seen in India's SAHI framework)

AI sandboxes for controlled testing

Continuous monitoring and incident reporting

Shared accountability among governments, clinicians, and developers

Workflow tools like triage and audits can scale rapidly, while clinical decision support must move more cautiously with human-in-the-loop oversight.

DATA AS THE FOUNDATION FOR AI

AI is only as strong as the data beneath it. In many emerging markets, that data is fragmented or non-existent.

Dr. Andres Suarez-Londono highlighted Brazil's national AI plan (PBIA), which includes:

Spoken medical records

AI-driven procurement

Diagnostic optimization

Anomaly detection

Centralized purchasing power that outperforms even the U.S. on drug pricing

Colombia's interoperability legislation is another model ensuring EMRs can finally communicate across systems. These examples show that emerging markets are not copying U.S. systems, they are building better ones.

CLINICAL OPERATIONS: WHAT TRANSFERS AND WHAT DOESN'T

Drawing from U.S. health-system experience, Fumei outlined what translates well:

Workflow mapping

Root-cause analysis

Change management

Data governance

Quality measurement

But she also noted what breaks down: assumptions about staffing ratios, specialist availability, reimbursement models, and digital maturity. Emerging markets require solutions designed for scarcity, not abundance.

ENTREPRENEURSHIP & CAPITAL: DESIGNING FOR REAL-WORLD CONSTRAINTS

Founders building for emerging markets must design differently. Solutions must:

Work offline

Function on low-cost devices

Scale without donor dependency

Align with local payment realities

Nigeria's booming health-tech sector and Rwanda's AI-driven procurement platform (Viebeg) demonstrate what's possible when innovation meets local need.

LOOKING AHEAD: WHAT SUCCESS LOOKS LIKE IN 2031

We closed with a forward-looking question: If we reconvene in 2031, what headline do we hope to celebrate? Across the panel, the vision was clear:

AI-enabled primary care reaching every village

National digital health systems rivaling developed markets

Reduced diagnostic delays for cancer, stroke, and chronic disease

Universal access to safe, high-quality care

Emerging markets leading, not following, the global AI health movement

The velocity of change is the story. Indonesia, India, Brazil, and Nigeria have shown how quickly transformation can happen when innovation meets urgency.

CONCLUSION

This conversation made one thing clear: emerging markets are not waiting for the future of healthcare, they are building it. And in many ways, they are building it faster, smarter, and more equitably than the systems that came before them.

AI is not the solution. But in the hands of innovators across Africa, Asia, and Latin America, it is becoming the accelerant.`
  },
  {
    id: "QbLSPd5iGTj3bGi3SEjo",
    title: "Leading Under Pressure: Stoicism, Democracy, and the \"Orange Economy\" with Former Colombian President Iván Duque",
    author: "Beating Sisyphus Team",
    createdAt: "2026-04-21T13:09:53.568Z",
    youtubeUrl: "https://youtu.be/5OIX8_YjROA?si=uw5BqkmSLroRFRSh",
    content: `In our latest episode, Beating Sisyphus teamed up with Tres Respuestas—a space dedicated to leaders shaping Latin America—for an unforgettable conversation. Co-hosts Thomas Riveros and Lourdes Casanova sat down with Iván Duque, who served as the President of Colombia from 2018 to 2022.

From his unexpected passion as "DJ Duque" spinning classic rock to his profound reliance on ancient Stoic philosophy during times of unprecedented national crisis, President Duque brought a wealth of insight to the table. We explored how innovation emerges under extreme pressure and what the future holds for emerging markets.

If you haven’t listened to the full episode yet, here is a quick summary of the most powerful highlights and takeaways.

### 🎧 Key Takeaways

* **The Power of the "Orange Economy":** A lifelong lover of history and music, President Duque realized early on that cultural and creative assets—the arts, media, and heritage—are just as vital as traditional infrastructure. He championed the "Orange Economy," which grew to represent over 5% of Colombia's GDP, proving that investing in human talent and culture is a massive engine for job creation and economic growth.
* **Stoicism as a Leadership Toolkit:** How do you lead a country through a global pandemic, a Category 5 hurricane, and the influx of two million Venezuelan refugees? For President Duque, the answer lies in Stoicism. He leans heavily on concepts like Amor Fati (loving your fate) and Arete (the constant pursuit of excellence). Instead of complaining about adversity, he views it as an opportunity to test your character and improve your society.
* **Embracing "Radical Centrism":** In a deeply polarized world, Duque identifies as a "Radical Centrist." He firmly believes in the power of free-market capitalism, but insists it must be balanced with equity. A successful state must solve market failures and invest in social safety nets to ensure that every citizen has the opportunity to flourish.
* **True Innovation Requires Democracy:** When asked about the future of emerging markets, Duque drew a sharp line between free markets and authoritarian regimes. While planned economies can generate wealth, true, sustainable innovation only thrives where people are free to think, speak, and organize. Democracy may be difficult and time-consuming, but it is the ultimate prerequisite for real prosperity.
* **Market-Driven Climate Action:** Since leaving office, Duque has continued to lead on a global scale. Through Concordia Amazonas, he is bringing together heads of state, private sector leaders, and indigenous communities to build market-driven, nature-based solutions to protect the Amazon rainforest.
* **Advice to the Next Generation (Escape the "Infinite Scroll"):** In a profound message to young listeners, Duque warned against the dangers of digital addiction. He urged the next generation to put down their phones, embrace boredom (which drives creativity), keep an analog journal, and focus on holistic, humanistic self-improvement rather than just chasing metrics and KPIs.

### Final Thoughts

President Iván Duque's tenure is a masterclass in what it means to push the boulder up the hill. Faced with compounding historical crises, he utilized a blend of fiscal prudence, deep empathy, and ancient philosophy to guide his nation. His perspective is an essential reminder that true leadership requires us to remain anchored in our values, even when the pressure is at its highest.

Want to hear the full conversation? Tune in to the crossover episode of Beating Sisyphus and Tres Respuestas wherever you get your podcasts!`
  },
  {
    id: "SDPnSA2bQ7fWNMmJjOzX",
    title: "Beating Sisyphus Episode Recap: From Wall Street to the Village with Nicholas Swanson ",
    author: "Beating Sisyphus Team",
    createdAt: "2026-04-14T18:29:36.589Z",
    youtubeUrl: "https://youtu.be/KuLfwmVjtLo?si=lnKMMkLIpR3k1JEQ",
    content: `Welcome back to the *Beating Sisyphus* blog! In our latest episode, co-hosts Thomas Riveros and Lourdes Casanova sit down with Nicholas Swanson, an Assistant Professor of Economics at Cornell University. 

Nicholas has a fascinating career trajectory. Starting out as an investment banker in the metals and mining sector, he spent his days analyzing macroeconomic risk in emerging markets. But a late-night reading of Banerjee and Duflo’s *Poor Economics* changed his path entirely. Swapping the ideological debates of international aid for the technocratic, data-driven world of Randomized Controlled Trials (RCTs), Nicholas now works on the ground in sub-Saharan Africa to figure out exactly which development policies *actually* work.

From the psychology of saving money to the hidden costs of hiring your cousin, this episode is packed with counter-intuitive insights. Here are the key takeaways from our conversation.

### 💡 Key Takeaways: Rethinking Development Economics

*   **The \"Under-Training\" Puzzle:** Why do firms in low-income countries rarely train their employees? It’s not because training isn't valuable. Through an RCT in Burundi, Nicholas found that when employers train workers, they only capture about a third of the value—the other two-thirds is captured by rival employers when the worker inevitably leaves. *The policy fix?* Instead of relying on external NGOs to run training camps, governments could provide targeted subsidies to local private businesses to train their own workers.
*   **The \"Hungry Season\" and the Failure of Memory:** In places like Zambia, farmers get a lump sum of income post-harvest, but often run out of food by the \"hungry season\" months later. While behavioral economists often blame \"present bias\" (the temptation to consume today rather than tomorrow), Nicholas’s research points to a different culprit: **memory**. When farmers were asked to simply map out a concrete budget for easily forgotten future expenses (like emergencies or gifts to extended family), their savings jumped by 10%.
*   **The \"Kinship Tax\" (Why Nepotism is a Constraint, Not a Preference):** It is incredibly common for business owners in developing markets to hire family members, even if they are unproductive workers. Nicholas explains that this isn't necessarily out of love; it's driven by intense social pressure. In societies lacking formal social safety nets like unemployment insurance, hiring a relative acts as a form of informal, forced wealth redistribution. 
*   **Why Good Technology Gets Blocked:** Why don't new, efficient technologies transfer easily to low-income countries? We often assume that a good technology \"lifts all boats,\" but Nicholas points out that new tech often creates immediate winners and losers. If a new technology threatens the wages or power dynamics of a specific group in society, they will actively block its adoption—proving that development is as much about human incentives as it is about innovation.

### Looking to the Future

Despite the immense hurdles, Nicholas remains optimistic about the future of emerging markets, particularly in sub-Saharan Africa. He points to rising commodity prices and countries like Rwanda, which are actively skipping traditional manufacturing phases to build service and tech-based economies. When asked about the countries he holds the most hope for, he highlights Burundi—where he conducts much of his field research—and the rapidly evolving market of Ethiopia.

If you want to understand the deeply human micro-economics driving global macro-trends, this is an episode you don't want to miss!

🎧 **[Listen to the full episode of Beating Sisyphus here]** 

*Beating Sisyphus is a production of the Casanova Center for Emerging Markets in collaboration with the Cornell Emerging Markets Institute Club. Tune in next time as we continue to explore how innovation emerges under pressure.*`
  }
];

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
                  src="/Casanova_Lourdes_.lc683_Johnson_DONE.jpg" 
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
                  src="/Headshot.jpeg" 
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
