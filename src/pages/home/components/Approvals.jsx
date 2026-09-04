import { FaCheckCircle, FaUniversity, FaFileSignature } from "react-icons/fa";
import ScrollReveal from "../../../components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "../../../components/animations/StaggerContainer";

const approvals = [
  "Bore & Motor Fittings",
  "Temporary EB Service",
  "Panchayat Approval",
  "Municipality Approval",
  "Corporation Approval",
  "Building Plan Approval",
  "DTCP & RERA Approval",
  "House Tax Approval",
];

const banks = [
  "25+ Leading Bank Partners",
  "Home Loan Assistance",
  "Construction Loan Support",
  "Loan Documentation Guidance",
  "Approval Process Assistance",
  "Fast & Easy Processing",
];

export default function Approvals() {
  return (
    <section className="py-20 lg:py-28 bg-slate-100">
      <div className="lg:max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <ScrollReveal className="text-center mb-12 lg:mb-16">
          <h2 className="h2-heading">
            No Paperwork Headaches, Just Your Dream Home
          </h2>
          <p className="mt-3 text-slate-600 lg:max-w-3xl lg:mx-auto leading-relaxed">
            Approvals, documentation, home loan assistance — we take care of it
            all with trusted banking partners, so you don't have to run around
            offices.
          </p>
        </ScrollReveal>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-slate-200 rounded-2xl shadow-2xl overflow-hidden lg:max-w-[1200px] m-auto">
          {/* Approvals Card */}
          <ScrollReveal className="flex-1" delay={0.1}>
            <div className="bg-white p-6 md:p-10 h-full">
              <div className="flex items-center gap-5 mb-8">
                <div className="h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <FaFileSignature className="text-2xl md:text-3xl text-secondary" />
                </div>

                <div>
                  <p className="text-primary font-bold uppercase tracking-widest text-xs">
                    Legal Services
                  </p>
                  <h3 className="text-xl md:text-2xl font-extrabold text-primary mt-1">
                    Approvals & Documentation
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 leading-7 mb-8">
                Panchayat, municipality, corporation, building plan — whatever
                approval your site needs, we handle the paperwork end-to-end so
                work starts without delay.
              </p>

              <StaggerContainer
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
                stagger={0.06}
              >
                {approvals.map((item, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0">
                        <FaCheckCircle className="text-secondary text-sm" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div className="mt-6 p-5 bg-secondary/8 rounded-xl border border-secondary/20">
                <p className="text-sm leading-6 text-slate-600">
                  <span className="font-semibold text-primary">
                    Confused about approvals?{" "}
                  </span>
                  Our team handles all the paperwork, so you get a clean approval
                  without running around offices.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Loan Card */}
          <ScrollReveal className="flex-1" delay={0.2}>
            <div className="bg-[#0F172A] text-white p-6 md:p-10 h-full">
              <div className="flex items-center gap-5 mb-8">
                <div className="h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center">
                  <FaUniversity className="text-2xl md:text-3xl text-secondary" />
                </div>

                <div>
                  <p className="uppercase tracking-widest text-secondary text-xs font-bold">
                    Financial Support
                  </p>
                  <h3 className="text-xl md:text-2xl font-extrabold mt-1">
                    Home Loan Assistance
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 leading-7 mb-8">
                Need a loan for your house? We connect you with 25+ banks and help
                with all the paperwork, start to finish.
              </p>

              <StaggerContainer
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
                stagger={0.06}
              >
                {banks.map((item, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <FaCheckCircle className="text-green-400 text-sm" />
                      </div>
                      <span className="text-gray-200 text-sm">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
                <p className="text-sm leading-6 text-gray-300">
                  <span className="text-secondary font-semibold">25+ Banks</span>{" "}
                  ready to help you get the right home or construction loan —
                  clear terms, honest process, no surprises.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
