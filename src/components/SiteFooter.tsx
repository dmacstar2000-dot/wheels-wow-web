import { Link } from "@tanstack/react-router";
import logo from "@/assets/dmac-logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-32 bg-surface">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="DMAC Media" className="h-28 w-auto" />
          <p className="mt-4 text-muted-foreground max-w-sm">
            Drift. Create. Elevate. Impact. New Zealand drift photography &amp;
            film - trackside from Hampton Downs to Highlands.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Studio</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>dmac_media@outlook.com</li>
            <li>+64 21 014 9821</li>
            <li>Auckland · Aotearoa</li>
          </ul>
        </div>
      </div>
      <div className="container-x py-6 border-t border-border flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} DMAC Media Ltd. All rights reserved.</p>
        <p className="uppercase tracking-[0.3em]">Drift · Create · Elevate · Impact</p>
      </div>
    </footer>
  );
}
