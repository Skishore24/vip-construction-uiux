import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { WaterMark } from "./WaterMark";
import { GiRotaryPhone } from "react-icons/gi";
import SymbolLogo from "../assets/logo/SymbolLogo.webp";
import NameLogo from "../assets/logo/NameLogo.webp";
import ScrollReveal from "./animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "./animations/StaggerContainer";

export default function Footer() {
  const year = new Date().getFullYear();

  const social = [
    {
      icon: FaFacebookF,
      label: "Facebook",
      link: "https://www.facebook.com/share/1DGh2xRqHR/?mibextid=wwXIfr",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      link: "https://www.instagram.com/vipconstruction_udumalpet?utm_source=qr&igsh=aDhjbGI4ZW1yamw2",
    },
    {
      icon: FaYoutube,
      label: "YouTube",
      link: "https://www.youtube.com/@vipconstruction_offical",
    },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Project", path: "/project" },
    { name: "Service", path: "/service" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-300">
      {/* Top */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-4">

          {/* Company */}
          <ScrollReveal delay={0}>
            <div>
              {/* LOGO */}
              <Link className="flex" to="/">
                <div className="h-15 w-20 lg:w-25">
                  <img className="w-full h-full object-contain" src={SymbolLogo} alt="VIP CONSTRUCTION UDUMALPET" />
                </div>
                <div className="h-15 w-45 lg:w-65">
                  <img className="w-full h-full object-contain" src={NameLogo} alt="VIP CONSTRUCTION UDUMALPET" />
                </div>
              </Link>

              <p className="mt-5 leading-7 text-slate-400 text-sm">
                Building homes, offices, and landmark projects across Coimbatore,
                Udumalpet, Tiruppur, Pollachi, Dharapuram, and Palani with quality and trust
                since 2019.
              </p>

              {/* Social Icons */}
              <div className="mt-7 flex gap-3">
                {social.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={index}
                      to={item.link}
                      aria-label={item.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 transition-all duration-300 hover:bg-secondary hover:text-primary hover:scale-110 hover:rotate-6 text-base border border-slate-800 hover:border-secondary"
                    >
                      <Icon />
                    </Link>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal delay={0.08}>
            <div className="lg:text-center">
              <h3 className="text-base font-bold text-white mb-5 uppercase tracking-widest">Quick Links</h3>
              {/* Animated amber divider */}
              <div className="w-8 h-[2px] bg-secondary mb-5 lg:mx-auto" />
              <ul className="space-y-3">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="link-hover text-sm transition-colors hover:text-secondary duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Branches */}
          <ScrollReveal delay={0.16}>
            <div>
              <h3 className="text-base font-bold text-white mb-5 uppercase tracking-widest">Branches</h3>
              <div className="w-8 h-[2px] bg-secondary mb-5" />
              <div className="space-y-5 text-sm">
                <div className="space-y-1">
                  <p className="font-bold text-white">
                    <span className="text-secondary">Main Branch</span> · Udumalpet
                  </p>
                  <span className="text-slate-400 leading-relaxed">
                    8, Durairam layout, S.V Mill (P.O), Udumalpet, Tiruppur Dist – 642128.
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-white">
                    <span className="text-secondary">Sub Office</span> · Coimbatore
                  </p>
                  <span className="text-slate-400 leading-relaxed">
                    No: 46 Srinagar, KK nagar, Ganapathi, Coimbatore – 641006.
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal delay={0.24}>
            <div>
              <h3 className="text-base font-bold text-white mb-5 uppercase tracking-widest">Contact Us</h3>
              <div className="w-8 h-[2px] bg-secondary mb-5" />
              <div className="space-y-4 text-sm">
                <div className="flex gap-3 items-center group">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-all duration-300">
                    <FaPhoneAlt className="text-secondary group-hover:text-primary transition-colors" />
                  </div>
                  <Link to="tel:+919080273030" className="hover:text-secondary transition-colors">
                    +91 90802 73030
                  </Link>
                </div>
                <div className="flex gap-3 items-center group">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-all duration-300">
                    <GiRotaryPhone size={20} className="text-secondary group-hover:text-primary transition-colors" />
                  </div>
                  <Link to="tel:+919344432923" className="hover:text-secondary transition-colors">
                    +91 93444 32923
                  </Link>
                </div>
                <div className="flex gap-3 items-center group">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-all duration-300">
                    <FaEnvelope className="text-secondary group-hover:text-primary transition-colors" />
                  </div>
                  <Link to="mailto:vipconstruction.14@gmail.com" className="hover:text-secondary transition-colors break-all">
                    vipconstruction.14@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* MIDDLE WATERMARK */}
      <WaterMark />

      {/* Bottom */}
      <div className="border-t border-slate-900 bg-slate-950/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-6 py-4 md:flex-row">
          <p className="text-slate-500 text-xs text-center">
            © {year} VIP Construction. All Rights Reserved. | Designed with excellence in Tamil Nadu.
          </p>
        </div>
      </div>
    </footer>
  );
}
