import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import g5 from "@/assets/gallery-5.jpg";
const founderPhoto = g5; // replace with: import founderPhoto from "@/assets/about-founder.jpg"

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - DMAC Media" },
      { name: "description", content: "DMAC Media - a one-man drift photography crew based in NZ, shooting since 2025." },
      { property: "og:title", content: "About - DMAC Media" },
      { property: "og:description", content: "About DMAC Media." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <SiteHeader />
      <section className="pt-40 pb-16 container-x grid md:grid-cols-2 gap-12 items-end">
        <div>
          <p className="eyebrow mb-4">Who we are</p>
          <h1 className="font-display text-6xl md:text-8xl uppercase leading-[0.9]">
            One mate.<br />
            <span className="text-accent">One camera.</span><br />
            One scene.
          </h1>
        </div>
        <div className="text-muted-foreground space-y-4 text-lg">
          <p>
            DMAC Media started in 2025 in a Hamilton garage, shooting mates'
            S-chassis builds on grainy 35mm. Six years later we're trackside at
            every major NZ drift round.
          </p>
          <p>
            We don't do glossy, sterile car ads. We shoot the smell of two-stroke
            and the bend of a fender - the bits that make this scene <em>ours</em>.
          </p>
        </div>
      </section>

      <section className="relative h-[70vh] my-16 overflow-hidden">
        <img
          src={founderPhoto}
          alt="DMAC Media founder with his car, mountain backdrop"
          loading="lazy"
          width={1320}
          height={880}
          className="w-full h-full object-cover object-bottom"
          style={{ transform: "scaleX(-1)" }}
        />
      </section>

      <section className="container-x pb-24 grid md:grid-cols-3 gap-12">
        {[
          { n: "01", t: "Local", d: "From Whangarei to Bluff. We know the spots, we know the corners." },
          { n: "02", t: "Fast", d: "Same-day socials, full edits in 7 days. No waiting weeks for your hero shot." },
          { n: "03", t: "In it", d: "We don't just photograph the scene - we're part of it. You'll see us at the next round." },
        ].map((b) => (
          <div key={b.t}>
            <span className="eyebrow text-muted-foreground">{b.n}</span>
            <h3 className="font-display text-3xl uppercase mt-3">{b.t}</h3>
            <p className="mt-2 text-muted-foreground">{b.d}</p>
          </div>
        ))}
      </section>

      <SiteFooter />
    </div>
  );
}
