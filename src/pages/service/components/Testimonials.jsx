import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "../data/testimonials";
import ScrollReveal from "../../../components/animations/ScrollReveal";

export default function Testimonials() {
  // Duplicate for seamless infinite scroll
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <ScrollReveal className="text-center mb-10 sm:mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-bold uppercase tracking-[0.18em] text-xs border border-secondary/20 mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-[1.1]">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-sm lg:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            Customer satisfaction is at the heart of everything we do. Here's
            feedback from our clients.
          </p>
        </ScrollReveal>
      </div>

      {/* AUTO-SCROLLING CAROUSEL — full width, edge fades */}
      <ScrollReveal delay={0.1}>
        <div className="relative fade-edges">
          <div
            className="flex gap-5 w-max animate-bank-scroll"
            style={{ animationDuration: "60s" }}
            onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
            onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
          >
            {doubled.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="w-72 sm:w-80 flex-shrink-0 bg-slate-50 rounded-2xl shadow-sm p-6 border border-slate-200/60 hover:border-secondary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Quote Icon */}
                  <div className="text-secondary text-xl mb-3">
                    <FaQuoteLeft />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-0.5 text-secondary mb-3 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-600 text-sm leading-relaxed italic line-clamp-4">
                    &#8220;{item.review}&#8221;
                  </p>
                </div>

                {/* User Identity */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <h3 className="font-bold text-sm text-slate-900 leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-slate-400 text-xs mt-0.5">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
