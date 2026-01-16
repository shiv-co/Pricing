import { useEffect, useRef, useState } from "react";

export default function Pricing() {
  const sections = useRef([]);
  const [openFAQ, setOpenFAQ] = useState(null);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-show");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-[#FAF6F3] overflow-hidden">

      {/* background accents */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D4B483]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C48A8A]/20 rounded-full blur-3xl" />

      {/* ================= HEADER ================= */}
      <div
        ref={el => sections.current[0] = el}
        className="opacity-0 translate-y-10 transition-all duration-700 max-w-6xl mx-auto px-6 pt-4  pb-16 text-center"
      >
        <p className="uppercase tracking-[0.35em] text-lg text-[#4A423F] mb-4">
          Pricing & Packages
        </p>
        {/* <h2 className="text-4xl md:text-5xl font-bold text-[#4A423F] mb-6">
          Designed for Artists Who Want More Bookings
        </h2> */}
        <p className="text-gray-600 max-w-3xl text-xs mx-auto">
          Simple pricing. Premium presentation.  
          Built to convert Instagram visitors into paying clients.
        </p>
      </div>

      {/* ================= PRICING GRID ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10 pb-24">

        {/* ---------- STARTER ---------- */}
        <PricingCard
          innerRef={el => sections.current[1] = el}
          title="Starter Presence"
          subtitle="For New & Freelance Artists"
          price="₹6,000"
          time="7 days"
          color="light"
          features={[
            "One-page luxury website",
            "Portfolio gallery",
            "About & services section",
            "WhatsApp booking button",
            "Mobile-first design",
            "Basic SEO setup (Google ready)"
          ]}
        />

        {/* ---------- PROFESSIONAL ---------- */}
        <PricingCard
          innerRef={el => sections.current[2] = el}
          title="Professional Brand"
          subtitle="Most Chosen by Bridal Artists"
          price="₹12,000"
          time="10 days"
          color="gold"
          badge="MOST POPULAR"
          features={[
            "Everything in Starter",
            "Dedicated services & packages section",
            "Client reviews & testimonials",
            "Instagram + WhatsApp integration",
            "Premium layout & branding",
            "Advanced SEO for local search"
          ]}
        />

        {/* ---------- PREMIUM ---------- */}
        <PricingCard
          innerRef={el => sections.current[3] = el}
          title="Premium Studio"
          subtitle="For High-End Brands & Studios"
          price="₹15,000"
          time="10–14 days"
          color="dark"
          features={[
            "Everything in Professional",
            "Advanced portfolio showcase",
            "Booking enquiry form",
            "Google Business setup",
            "Priority support",
            "Strong SEO & keyword targeting"
          ]}
        />
      </div>

      {/* ================= DOMAIN ================= */}
      <div
        ref={el => sections.current[4] = el}
        className="opacity-0 translate-y-10 transition-all duration-700 max-w-4xl mx-auto px-6 pb-24 text-center"
      >
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-lg">
          <h3 className="text-2xl font-bold mb-3 text-[#4A423F]">
            Domain & Hosting
          </h3>
          <p className="text-gray-600 mb-4">
            Required yearly to keep your website live and accessible.
          </p>
          <p className="text-3xl font-bold text-[#4A423F]">
            ₹2,500 <span className="text-base font-medium text-gray-500">/ year</span>
          </p>
        </div>
      </div>

      {/* ================= FAQ ================= */}
      <div
        ref={el => sections.current[5] = el}
        className="opacity-0 translate-y-10 transition-all duration-700 max-w-5xl mx-auto px-6 pb-32"
      >
        <h3 className="text-4xl font-bold text-center mb-12 text-[#4A423F]">
          Frequently Asked Questions
        </h3>

        {faqData.map((faq, i) => (
          <div
            key={i}
            className="mb-5 bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <button
              onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
              className="w-full flex justify-between items-center px-6 py-5 text-left font-medium text-[#4A423F]"
            >
              {faq.q}
              <span className="text-xl">
                {openFAQ === i ? "−" : "+"}
              </span>
            </button>
            {openFAQ === i && (
              <div className="px-6 pb-5 text-gray-600">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* closing */}
      <p className="text-center italic text-gray-600 pb-20">
        “Instagram attracts attention. Your website converts it into bookings.”
      </p>

      {/* animations */}
      <style>{`
        .animate-show {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}

/* ================= CARD COMPONENT ================= */

function PricingCard({ title, subtitle, price, time, features, color, badge, innerRef }) {
  const styles = {
    light: "bg-white text-[#4A423F]",
    gold: "bg-[#FFF8EC] border border-[#D4B483]",
    dark: "bg-[#7D3C4C] text-white"
  };

  return (
    <div
      ref={innerRef}
      className={`opacity-0 translate-y-10 transition-all duration-700 rounded-[2.2rem] p-8 md:p-10 shadow-xl hover:-translate-y-2 ${styles[color]}`}
    >
      {badge && (
        <div className="inline-block mb-4 text-xs px-4 py-1 rounded-full bg-[#D4B483] text-white">
          {badge}
        </div>
      )}

      <h4 className="text-2xl font-bold mb-1">{title}</h4>
      <p className="text-sm opacity-80 mb-6">{subtitle}</p>

      <div className="text-4xl font-bold mb-6">{price}</div>

      <ul className="space-y-3 mb-6 text-sm">
        {features.map((f, i) => (
          <li key={i}>• {f}</li>
        ))}
      </ul>

      <p className="text-sm opacity-70 mb-6">
        Delivery: {time}
      </p>

      <button className={`w-full py-3 rounded-full font-medium transition ${
        color === "dark"
          ? "bg-white text-[#7D3C4C]"
          : "border border-current hover:bg-[#4A423F] hover:text-white"
      }`}>
        Get Started
      </button>
    </div>
  );
}

/* ================= FAQ DATA ================= */

const faqData = [
  {
    q: "Is this a one-time payment?",
    a: "Yes. Website design is a one-time cost. Domain & hosting are yearly."
  },
  {
    q: "Can I upgrade my package later?",
    a: "Absolutely. You can upgrade anytime as your business grows."
  },
  {
    q: "Will my website appear on Google?",
    a: "Yes. All packages include SEO setup so your site is Google-ready."
  },
  {
    q: "Do you handle content and images?",
    a: "Yes, we help structure content and guide you on best images."
  }
];
