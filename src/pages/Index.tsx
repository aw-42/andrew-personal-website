import { useState } from "react";
import { ExternalLink } from "lucide-react";
import PortfolioModal from "@/components/PortfolioModal";
import andrewPortrait from "@/assets/andrew-portrait.png";

const portfolioItems: Record<string, { title: string; description: string }> = {
  aemc: {
    title: "Alberta Electronic Music Conference",
    description: "Co-founded the Alberta Electronic Music Conference, bringing together artists, industry professionals, and music lovers to discuss and celebrate electronic music culture in Alberta.",
  },
  vems: {
    title: "Virtual Electronic Music Summit",
    description: "Co-founded the Virtual Electronic Music Summit, a fully online conference connecting electronic music professionals worldwide during a time when in-person events weren't possible.",
  },
  wired: {
    title: "Wired Magazine — Featured Artist",
    description: "Featured as an artist in Wired Magazine in 2022, showcasing creative work at the intersection of technology and art.",
  },
  aurora: {
    title: "Aurora Beer — Investor & Co-Founder",
    description: "Invested in and co-founded Aurora Beer, a craft beer brand blending creativity with entrepreneurship.",
  },
  spectra: {
    title: "Spectra: Interactive Art Exhibit",
    description: "Designed the sound for Spectra, an interactive art exhibit at the Vignettes Art and Design Festival, creating immersive audio experiences that responded to visitor interactions.",
  },
};

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (key: string) => {
    setActiveModal(key);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-16 space-y-16">
        {/* Hero */}
        <section className="space-y-4">
          <div>
            <img src={andrewPortrait} alt="Andrew" className="w-32 h-auto object-contain" style={{ transform: 'scaleX(-1)' }} />
          </div>
          <div className="space-y-8">
            <h1 className="font-heading text-6xl md:text-7xl leading-[0.95] text-foreground">
              I'm Andrew
            </h1>
            <p className="text-lg text-muted-foreground">
              I'm a builder, designer, and product leader focusing on creating a happier, healthier future
            </p>
          </div>
          <div className="flex gap-3">
            <a href="https://www.linkedin.com/in/andrewwilliamscanada/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-card transition-colors">
              <span className="text-sm font-semibold">in</span>
            </a>
            <a href="https://x.com/andrew_reset" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-card transition-colors">
              <span className="text-sm font-semibold">𝕏</span>
            </a>
            <a href="https://resetskillpoints.substack.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-card transition-colors">
              <span className="text-sm font-semibold">S</span>
            </a>
          </div>
        </section>

        {/* Current Focus */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Current Focus</h2>
          <div className="space-y-4">
            <div className="bg-card rounded-xl p-6 space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Founder @ <a href="https://heydayfocus.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">Heyday <ExternalLink size={14} /></a></h3>
              <p className="text-muted-foreground leading-relaxed">
                A product studio building tools to help people reclaim their attention in a manipulative digital world.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 space-y-2">
              <h3 className="text-xl font-semibold text-foreground">
                CEO @ <a href="http://tpma.ca/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">Toronto Product Management Association <ExternalLink size={14} /></a>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The largest product management association in Canada, serving 2500 product leaders and managers in the GTA.
              </p>
            </div>
          </div>
        </section>

        {/* Formerly */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Formerly</h2>
          <div className="bg-card rounded-xl p-6">
            <ul className="space-y-3 text-foreground">
              <li>
                Director of Product @ <a href="https://verticalcity.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">Vertical City <ExternalLink size={12} /></a> & <a href="https://verticalimpression.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">Vertical Impression <ExternalLink size={12} /></a>
              </li>
              <li>
                Co-Founder @ <a href="https://www.downtowndefrost.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">The Downtown Defrost Music & Arts Festival <ExternalLink size={12} /></a>
              </li>
              <li>
                Co-Founder @ <button onClick={() => openModal("aemc")} className="text-primary hover:underline">The Alberta Electronic Music Conference</button>
              </li>
              <li>
                Co-Founder @ <button onClick={() => openModal("vems")} className="text-primary hover:underline">The Virtual Electronic Music Summit</button>
              </li>
              <li>
                Co-Founder @ <a href="https://nightvisionmusic.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">Night Vision Music <ExternalLink size={12} /></a>
              </li>
              <li>
                Co-Founder @ <a href="https://nvmastudio.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">Night Vision Music Academy <ExternalLink size={12} /></a>
              </li>
            </ul>
          </div>
        </section>

        {/* Side Quests */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Side Quests</h2>
          <div className="bg-card rounded-xl p-6">
            <ul className="space-y-3 text-foreground">
              <li>
                Host / Moderator / Curator @ <a href="http://tpma.ca/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">TPMA <ExternalLink size={12} /></a>'s monthly meet-up <span className="text-muted-foreground">2022–2025</span>
              </li>
              <li>
                Podcast Guest @ <a href="https://www.youtube.com/watch?v=TEDtkkQxKtU" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">Prompt & Circumstance <ExternalLink size={12} /></a>
              </li>
              <li>
                Speaker @ Fuckup Nights Toronto — <a href="https://www.youtube.com/watch?v=q9uwKIoQk6M" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">"The Worst Job I've Ever Had" <ExternalLink size={12} /></a>
              </li>
              <li>
                Featured Artist @ <button onClick={() => openModal("wired")} className="text-primary hover:underline">Wired Magazine 2022</button>
              </li>
              <li>
                Investor @ <button onClick={() => openModal("aurora")} className="text-primary hover:underline">Aurora Beer</button>
              </li>
              <li>Music Curator @ DECIEM: The Abnormal Beauty Company</li>
              <li>
                Sound Designer @ <button onClick={() => openModal("spectra")} className="text-primary hover:underline">Vignettes — "Spectra: Interactive Art Exhibit"</button>
              </li>
              <li>
                Speaker @ <a href="https://www.youtube.com/watch?v=jewHIpd_jPs&t=1s" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">Pecha Kucha — "Why Pineapples are The World's Most Interesting Fruit" <ExternalLink size={12} /></a>
              </li>
              <li>Speaker @ Edmonton Nerd Night — "Why Pineapples are The World's Most Interesting Fruit"</li>
              <li>Digital Advisory Board Member @ Alberta Music</li>
              <li>Marketing Advisory Group Member @ Magazines Canada</li>
              <li>Advisory Member @ Edmonton City Council — Large-Scale Events Board</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Portfolio Modal */}
      {activeModal && portfolioItems[activeModal] && (
        <PortfolioModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          title={portfolioItems[activeModal].title}
          description={portfolioItems[activeModal].description}
        />
      )}
    </div>
  );
};

export default Index;
