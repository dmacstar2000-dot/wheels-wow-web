import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio - DMAC Media Drift Photography" },
      { name: "description", content: "Selected drift photography from across Aotearoa - D1NZ rounds, touge sessions and private builds." },
      { property: "og:title", content: "Portfolio - DMAC Media" },
      { property: "og:description", content: "Selected NZ drift photography." },
    ],
  }),
  component: Portfolio,
});

const items = [
  { src: g1, title: "Mad Mike Drift Force", car: "Nissan Laurel C33", loc: "Hampton Downs" },
  { src: g2, title: "Mad Mike Drift Force", car: "Nissan Laurel C33", loc: "Hampton Downs" },
  { src: g3, title: "Mad Mike Drift Force", car: "Nissan Laurel C33", loc: "Hampton Downs" },
  { src: g4, title: "MSC Challenge R2", car: "Nissan S13", loc: "Meremere Driftpark" },
  { src: g5, title: "Mad Mike Drift Force", car: "Nissan Laurel C33", loc: "Hampton Downs" },
  { src: g6, title: "MSC Challenge R2", car: "Mazda RX-7 FC", loc: "Meremere Driftpark" },
];

function Portfolio() {
  return (
    <div>
      <SiteHeader />
      <section className="pt-40 pb-16 container-x">
        <p className="eyebrow mb-4">Selected work</p>
        <h1 className="font-display text-6xl md:text-8xl uppercase">Portfolio</h1>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          A rolling cut of recent shoots - comp rounds, midnight touge runs and
          one-off owner sessions across New Zealand.
        </p>
      </section>

      <section className="container-x grid grid-cols-1 md:grid-cols-2 gap-2 pb-24">
        {items.map((it, i) => (
          <figure key={i} className="group relative aspect-[4/3] overflow-hidden">
            <img
              src={it.src}
              alt={`${it.title} - ${it.car}`}
              loading="lazy"
              width={1280}
              height={896}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background to-transparent">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="font-display text-2xl uppercase">{it.title}</h3>
                  <p className="text-sm text-muted-foreground">{it.car}</p>
                </div>
                <span className="text-xs uppercase tracking-[0.25em] text-accent">{it.loc}</span>
              </div>
            </figcaption>
          </figure>
        ))}
      </section>
      <SiteFooter />
    </div>
  );
}
