import { useState } from "react";
import PortfolioModal from "@/components/PortfolioModal";
import heroImageSplit from "@/assets/hero-image-split.jpg";

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
      {/* Hero */}
      <section className="min-h-screen grid lg:grid-cols-2 grid-cols-1">
        {/* Left — Content */}
        <div className="flex items-center px-8 md:px-16 lg:px-20 py-20 lg:py-0">
          <div className="max-w-xl space-y-6">
            <h1 className="font-heading text-7xl md:text-8xl lg:text-9xl leading-[0.9] text-foreground">
              I'm Andrew
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              I'm a builder, marketer, and product guy
            </p>
            <div className="flex gap-5 pt-2">
              <a href="https://www.linkedin.com/in/andrewwilliamscanada/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">LinkedIn</a>
              <a href="https://resetskillpoints.substack.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Substack</a>
              <a href="https://x.com/andrew_reset" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">X</a>
            </div>
          </div>
        </div>

        {/* Right — Image */}
        <div
          className="min-h-[50vh] lg:min-h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImageSplit})` }}
        />
      </section>

      {/* Current Focus */}
      <section className="py-20 px-8 md:px-16 lg:px-20 border-t border-border">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="font-heading text-5xl md:text-6xl text-foreground">Current Focus</h2>

          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Founder @ <span className="text-primary">Heyday</span></h3>
              <p className="text-muted-foreground leading-relaxed">
                A product studio building tools to help people reclaim their attention in a manipulative digital world.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">
                CEO @ <a href="http://tpma.ca/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Toronto Product Management Association</a>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The largest product management association in Canada, serving 2500 product leaders and managers in the GTA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formerly */}
      <section className="py-20 px-8 md:px-16 lg:px-20 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="font-heading text-5xl md:text-6xl text-foreground">Formerly</h2>

          <ul className="space-y-4 text-lg">
            <li className="text-foreground">
              Director of Product @ <a href="https://verticalcity.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Vertical City</a> & <a href="https://verticalimpression.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Vertical Impression</a>
            </li>
            <li className="text-foreground">
              Co-Founder @ <a href="https://www.downtowndefrost.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">The Downtown Defrost Music & Arts Festival</a>
            </li>
            <li className="text-foreground">
              Co-Founder @ <button onClick={() => openModal("aemc")} className="text-primary hover:underline">The Alberta Electronic Music Conference</button>
            </li>
            <li className="text-foreground">
              Co-Founder @ <button onClick={() => openModal("vems")} className="text-primary hover:underline">The Virtual Electronic Music Summit</button>
            </li>
            <li className="text-foreground">
              Co-Founder @ <a href="https://nightvisionmusic.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Night Vision Music</a>
            </li>
            <li className="text-foreground">
              Co-Founder @ <a href="https://nvmastudio.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Night Vision Music Academy</a>
            </li>
          </ul>
        </div>
      </section>

      {/* Side Quests */}
      <section className="py-20 px-8 md:px-16 lg:px-20 border-t border-border">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="font-heading text-5xl md:text-6xl text-foreground">Side Quests</h2>

          <ul className="space-y-4 text-lg">
            <li className="text-foreground">
              Host / Moderator / Curator @ <a href="http://tpma.ca/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">TPMA</a>'s monthly meet-up <span className="text-muted-foreground">2022–2025</span>
            </li>
            <li className="text-foreground">
              Podcast Guest @ <a href="https://www.youtube.com/watch?v=TEDtkkQxKtU" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Prompt & Circumstance</a>
            </li>
            <li className="text-foreground">
              Speaker @ Fuckup Nights Toronto — <a href="https://www.youtube.com/watch?v=q9uwKIoQk6M" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">"The Worst Job I've Ever Had"</a>
            </li>
            <li className="text-foreground">
              Featured Artist @ <button onClick={() => openModal("wired")} className="text-primary hover:underline">Wired Magazine 2022</button>
            </li>
            <li className="text-foreground">
              Investor @ <button onClick={() => openModal("aurora")} className="text-primary hover:underline">Aurora Beer</button>
            </li>
            <li className="text-foreground">
              Music Curator @ DECIEM: The Abnormal Beauty Company
            </li>
            <li className="text-foreground">
              Sound Designer @ <button onClick={() => openModal("spectra")} className="text-primary hover:underline">Vignettes — "Spectra: Interactive Art Exhibit"</button>
            </li>
            <li className="text-foreground">
              Speaker @ <a href="https://www.youtube.com/watch?v=jewHIpd_jPs&t=1s" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Pecha Kucha — "Why Pineapples are The World's Most Interesting Fruit"</a>
            </li>
            <li className="text-foreground">
              Speaker @ Edmonton Nerd Night — "Why Pineapples are The World's Most Interesting Fruit"
            </li>
            <li className="text-foreground">
              Digital Advisory Board Member @ Alberta Music
            </li>
            <li className="text-foreground">
              Marketing Advisory Group Member @ Magazines Canada
            </li>
            <li className="text-foreground">
              Advisory Member @ Edmonton City Council — Large-Scale Events Board
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-8 border-t border-border text-center">
        <p className="text-muted-foreground text-sm">
          Site made by Andrew, 2025
        </p>
      </footer>

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
