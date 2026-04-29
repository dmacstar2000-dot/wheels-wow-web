import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — DMAC Media" },
      { name: "description", content: "Drift event coverage, rolling shots, livery reveals and sponsor edits across New Zealand." },
      { property: "og:title", content: "Services — DMAC Media" },
      { property: "og:description", content: "Drift photography & film services in NZ." },
    ],
  }),
  component: Services,
});

const services = [
  {
    n: "01",
    title: "Event Coverage",
    desc: "Full-day shoots at D1NZ, Drift South, club days and private events. Pit lane to podium.",
    price: "From $850",
  },
  {
    n: "02",
    title: "Rolling Shots",
    desc: "Cinematic moving shots of your build on NZ's best back roads. Includes location scouting.",
    price: "From $650",
  },
  {
    n: "03",
    title: "Livery Reveals",
    desc: "Studio + outdoor reveal package for new wraps, builds and sponsor announcements.",
    price: "From $1,200",
  },
  {
    n: "04",
    title: "Sponsor Edits",
    desc: "Short-form video edits built for socials. Helping drivers land and keep sponsors.",
    price: "From $950",
  },
];

function Services() {
  return (
    <div>
      <SiteHeader />
      <section className="pt-40 pb-16 container-x">
        <p className="eyebrow mb-4">What we do</p>
        <h1 className="font-display text-6xl md:text-8xl uppercase">Services</h1>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Built for drivers, teams and shops. Every package is shaped around your
          car and your weekend — no cookie cutters.
        </p>
      </section>

      <section className="container-x pb-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
        {services.map((s) => (
          <div key={s.n} className="bg-background p-10 group hover:bg-surface transition">
            <div className="flex items-start justify-between">
              <span className="font-display text-5xl text-primary">{s.n}</span>
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.price}</span>
            </div>
            <h3 className="font-display text-3xl uppercase mt-8">{s.title}</h3>
            <p className="mt-3 text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </section>

      <section className="container-x pb-24">
        <Link to="/contact" className="btn-primary">Request a quote →</Link>
      </section>
      <SiteFooter />
    </div>
  );
}
