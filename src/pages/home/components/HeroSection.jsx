import heroVideo from "../../../assets/videos/hero-home.webm";
import heroPoster from "../../../assets/photos/hero-home.webp";
import { HeroContent } from "./HeroContent";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] lg:min-h-[100vh] flex items-center overflow-hidden">
      {/* DESKTOP BACKGROUND VIDEO — Ken Burns zoom */}
      <video
        className="hidden lg:block absolute inset-0 w-full h-full object-cover ken-burns"
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* MOBILE / TABLET BACKGROUND IMAGE — Ken Burns zoom */}
      <div
        className="lg:hidden absolute inset-0 bg-cover bg-center bg-no-repeat ken-burns"
        style={{ backgroundImage: `url(${heroPoster})` }}
        aria-hidden="true"
      />

      {/* CINEMATIC DARK OVERLAY — deeper for dramatic effect */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-950/98 via-slate-950/85 to-slate-950/50 lg:from-slate-950/96 lg:via-slate-950/78 lg:to-slate-950/35"
        aria-hidden="true"
      />

      {/* SUBTLE AMBER RADIAL GLOW — bottom left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 10% 85%, rgba(245,166,35,0.10) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* HERO CONTENT */}
      <HeroContent />
    </section>
  );
}
