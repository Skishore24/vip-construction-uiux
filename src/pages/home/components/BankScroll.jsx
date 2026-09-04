import { banks } from "../data/banks";
import ScrollReveal from "../../../components/animations/ScrollReveal";

export function BankScroll() {
  return (
    <section className="py-16 lg:py-24 lg:max-w-[1200px] m-auto">
      <div>
        {/* BANKSCROLL HEADER */}
        <ScrollReveal className="home-container-header">
          <span className="span-heading">Banking Assistance</span>
          <h2 className="h2-heading">25+ Banking Collaborations</h2>
          <div className="divider" />
        </ScrollReveal>

        {/* BANK SCROLL — with edge fade masks */}
        <ScrollReveal delay={0.15}>
          <div className="relative overflow-hidden mx-4 md:mx-0 fade-edges">
            <div className="flex animate-bank-scroll w-max">
              {[...banks, ...banks].map((bank, index) => (
                <div
                  key={index}
                  className="mx-6 flex h-24 w-36 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm border border-slate-100 hover:border-secondary/30 hover:shadow-md transition-all duration-300"
                >
                  <img
                    src={bank.logo}
                    alt={bank.name}
                    className="max-h-12 w-full h-full object-contain px-3 transition duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
