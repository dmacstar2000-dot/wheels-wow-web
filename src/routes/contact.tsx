import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - DMAC Media" },
      { name: "description", content: "Book DMAC Media for your next drift shoot in New Zealand." },
      { property: "og:title", content: "Contact - DMAC Media" },
      { property: "og:description", content: "Get in touch to book a shoot." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <SiteHeader />
      <section className="pt-40 pb-16 container-x">
        <p className="eyebrow mb-4">Get in touch</p>
        <h1 className="font-display text-6xl md:text-8xl uppercase">Let's talk smoke</h1>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Drop your details below or flick us a DM. Reply within 24 hours, every time.
        </p>
      </section>

      <section className="container-x pb-24 grid md:grid-cols-3 gap-12">
        <div className="space-y-8">
          <div>
            <p className="eyebrow mb-2">Email</p>
            <p className="text-lg">dmac_media@outlook.com</p>
          </div>
          <div>
            <p className="eyebrow mb-2">Phone</p>
            <p className="text-lg">027 561 9650</p>
          </div>
          <div>
            <p className="eyebrow mb-2">Based</p>
            <p className="text-lg">Auckland · NZ wide</p>
          </div>
          <div>
            <p className="eyebrow mb-2">Socials</p>
            <ul className="text-lg space-y-1">
              <li><a href="https://www.instagram.com/dmac_media.ltd/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Instagram</a></li>
              <li><a href="https://www.tiktok.com/@dmac_media.nz" target="_blank" rel="noopener noreferrer" className="hover:text-accent">TikTok</a></li>
              <li><a href="https://www.youtube.com/@Dmac_media" target="_blank" rel="noopener noreferrer" className="hover:text-accent">YouTube</a></li>
              <li><a href="https://www.facebook.com/share/1ACu1Bdxgd/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Facebook</a></li>
            </ul>
          </div>
        </div>

        <form
          className="md:col-span-2 grid gap-6 border border-border p-8"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          {sent ? (
            <div className="py-12 text-center">
              <h3 className="font-display text-4xl uppercase text-accent">Cheers!</h3>
              <p className="mt-2 text-muted-foreground">We'll be in touch shortly.</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Name" name="name" />
                <Field label="Email" name="email" type="email" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Car / Build" name="car" />
                <Field label="Date / Event" name="date" />
              </div>
              <div className="grid gap-2">
                <label className="eyebrow" htmlFor="msg">Tell us about it</label>
                <textarea
                  id="msg"
                  name="message"
                  rows={5}
                  required
                  className="bg-transparent border border-border focus:border-primary outline-none p-3 text-foreground"
                />
              </div>
              <button type="submit" className="btn-primary justify-self-start">Send it →</button>
            </>
          )}
        </form>
      </section>
      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div className="grid gap-2">
      <label className="eyebrow" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="bg-transparent border border-border focus:border-primary outline-none p-3 text-foreground"
      />
    </div>
  );
}
