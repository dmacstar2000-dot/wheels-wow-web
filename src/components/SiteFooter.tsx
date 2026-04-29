import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-baseline gap-1">
            <span className="font-display text-2xl">DMAC</span>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Media</span>
          </div>
          <p className="mt-4 text-muted-foreground max-w-sm">
            Cinematic automotive photography & visual storytelling for
            collectors, dealerships, and enthusiasts.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/portfolio" className="hover:text-primary">Portfolio</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Studio</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>hello@dmacmedia.co</li>
            <li>+1 (555) 014 9821</li>
            <li>Los Angeles, CA</li>
          </ul>
        </div>
      </div>
      <div className="container-x py-6 border-t border-border flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} DMAC Media. All rights reserved.</p>
        <p className="uppercase tracking-[0.2em]">Driven by light</p>
      </div>
    </footer>
  );
}
