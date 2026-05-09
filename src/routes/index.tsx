import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroCar from "@/assets/hero-car.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div>
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <img
          src={heroCar}
          alt="Drift car laying down smoke on a New Zealand touge"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />

        <div className="container-x relative z-10 pb-20 md:pb-32 pt-32">
          <p className="eyebrow mb-4">Aotearoa · Since 2025</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.9] uppercase max-w-3xl">
            Smoke. Steel. <span className="text-accent">Sideways.</span>
          </h1>
          <p className="mt-4 max-w-md text-base text-muted-foreground">
            NZ drift photography & film - trackside from Hampton Downs to Highlands.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/portfolio" className="btn-primary">View the work →</Link>
            <Link to="/contact" className="btn-ghost">Book a shoot</Link>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-background/60 backdrop-blur-sm py-4 overflow-hidden">
          <div className="flex gap-12 animate-[scroll_30s_linear_infinite] whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-12 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                <span>Hampton Downs</span><span className="text-accent">×</span>
                <span>Highlands Motorsport Park</span><span className="text-accent">×</span>
                <span>Pukekohe</span><span className="text-accent">×</span>
                <span>Manfeild</span><span className="text-accent">×</span>
                <span>Ruapuna</span><span className="text-accent">×</span>
                <span>D1NZ</span><span className="text-accent">×</span>
                <span>Drift South</span><span className="text-accent">×</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            ["120+", "Drift days shot"],
            ["38", "Pro drivers covered"],
            ["6yr", "Behind the lens"],
            ["NZ", "Born & built"],
          ].map(([n, l]) => (
            <div key={l} className="px-6 py-10 text-center">
              <div className="font-display text-5xl md:text-6xl text-foreground">{n}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="py-24">
        <div className="container-x">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="eyebrow mb-3">Recent Battles</p>
              <h2 className="font-display text-5xl md:text-7xl uppercase">From the pits</h2>
            </div>
            <Link to="/portfolio" className="hidden md:inline-flex btn-ghost">All work</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {[g1, g4, g5, g3, g2, g6].map((src, i) => (
              <div key={i} className="group relative aspect-[4/3] overflow-hidden">
                <img
                  src={src}
                  alt={`Drift photography sample ${i + 1}`}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-24">
        <div className="border border-border p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -top-1 left-0 w-24 h-1 bg-primary" />
          <p className="eyebrow mb-4">Got a build worth shooting?</p>
          <h3 className="font-display text-4xl md:text-6xl uppercase max-w-2xl">
            Let's make your car the cover shot.
          </h3>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Track days, private rolling shots, livery reveals, sponsor edits.
            We're booking the {new Date().getFullYear()} season now.
          </p>
          <Link to="/contact" className="btn-primary mt-8">Get in touch →</Link>
        </div>
      </section>

      <SiteFooter />

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
