import { ContactForm } from "@/components/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PricingShowcase } from "@/components/PricingShowcase";

const logos = [
  "Northbeam Labs",
  "Astera Cloud",
  "SummitPath",
  "Novara Systems",
  "BluePeak Capital",
  "Metric Forge",
];

const overviewCards = [
  {
    title: "Unified customer timeline",
    description:
      "Keep sales, onboarding, and success aligned around one clean record of every deal, task, and customer interaction.",
  },
  {
    title: "Automation that reduces admin",
    description:
      "Trigger lifecycle changes, follow-ups, ownership rules, and alerts automatically as leads and accounts move forward.",
  },
  {
    title: "Forecasting leaders can trust",
    description:
      "Track pipeline quality, renewals, and rep activity in real time with reporting built for operators and executives.",
  },
];

const pricingPlans = [
  {
    name: "Basic",
    monthlyPrice: 19,
    yearlyPrice: 15,
    cadence: "/user/month",
    description: "For small teams centralizing pipeline and contact management.",
    cta: "Get Started",
    featureList: [
      "20,000 contacts",
      "Unlimited pipelines",
      "Email sync and logging",
      "Basic CRM automation",
      "Shared team inbox",
    ],
  },
  {
    name: "Starter",
    monthlyPrice: 29,
    yearlyPrice: 24,
    cadence: "/user/month",
    description: "For growing CRM teams that need automation, insights, and forecasting.",
    cta: "Start Free Trial",
    featured: true,
    featureList: [
      "50,000 contacts",
      "Advanced workflow automation",
      "Forecast dashboards",
      "Customer success workspace",
      "Priority onboarding",
    ],
  },
  {
    name: "Professional",
    monthlyPrice: 59,
    yearlyPrice: 49,
    cadence: "/user/month",
    description: "For larger businesses with advanced permissions, controls, and support.",
    cta: "Book Demo",
    featureList: [
      "150,000 contacts",
      "Role permissions",
      "Custom objects",
      "Revenue reporting",
      "Dedicated success manager",
    ],
  },
];

const comparisonGroups = [
  {
    title: "Core CRM",
    rows: [
      {
        label: "Contacts and company records",
        values: ["20,000 records", "50,000 records", "150,000 records"],
      },
      {
        label: "Shared pipelines",
        values: ["2 pipelines", "Unlimited", "Unlimited"],
      },
      {
        label: "Email and calendar sync",
        values: ["Included", "Included", "Included"],
      },
      {
        label: "Task and reminder automation",
        values: ["Basic", "Advanced", "Advanced"],
      },
      {
        label: "Activity tracking",
        values: ["Included", "Included", "Included"],
      },
    ],
  },
  {
    title: "Revenue Operations",
    rows: [
      {
        label: "Forecast dashboards",
        values: ["-", "Included", "Advanced"],
      },
      {
        label: "Custom reports",
        values: ["Basic", "Included", "Advanced"],
      },
      {
        label: "Lead scoring",
        values: ["-", "Included", "Included"],
      },
      {
        label: "Workflow automation",
        values: ["5 rules", "50 rules", "Unlimited"],
      },
      {
        label: "Renewal tracking",
        values: ["-", "Included", "Included"],
      },
    ],
  },
  {
    title: "Security and Controls",
    rows: [
      {
        label: "Role-based permissions",
        values: ["-", "Basic", "Advanced"],
      },
      {
        label: "Audit activity",
        values: ["-", "Included", "Included"],
      },
      {
        label: "Single sign-on",
        values: ["-", "-", "Included"],
      },
      {
        label: "Sandbox environment",
        values: ["-", "-", "Included"],
      },
      {
        label: "Support level",
        values: ["Email", "Priority", "Dedicated manager"],
      },
    ],
  },
];

const testimonials = [
  {
    quote:
      "FlowPilot gave our sales and success teams one shared system without the usual CRM bloat. Adoption was fast and reporting became much more reliable.",
    name: "Maya Chen",
    role: "VP of Revenue, Northbeam Labs",
  },
  {
    quote:
      "We moved weekly forecasting out of spreadsheets in less than two weeks. Leadership finally has a live view of what is closing and what is slipping.",
    name: "Jordan Patel",
    role: "Head of Sales, Altitude Cloud",
  },
  {
    quote:
      "The automation layer cut manual follow-up work immediately, and the account timeline helped onboarding and renewals feel much more coordinated.",
    name: "Elena Brooks",
    role: "Director of Customer Success, Novara Systems",
  },
];

const faqItems = [
  {
    question: "Can we start with one team and expand later?",
    answer:
      "Yes. Many customers begin with sales or customer success and expand to other teams once pipelines, automation, and reporting are in place.",
  },
  {
    question: "Do you support migration from spreadsheets or another CRM?",
    answer:
      "We do. Growth and Professional plans include guided migration support for contacts, companies, deal stages, and custom fields.",
  },
  {
    question: "How does the yearly plan work?",
    answer:
      "Yearly billing lowers the per-user monthly price and is best for teams planning a longer rollout across multiple revenue functions.",
  },
  {
    question: "Can we customize fields, pipelines, and workflows?",
    answer:
      "Yes. You can tailor lifecycle stages, custom properties, automations, views, and dashboards to fit your CRM process.",
  },
  {
    question: "What support is included?",
    answer:
      "Basic includes email support, Starter includes priority support and onboarding help, and Professional includes a dedicated success contact.",
  },
];

const footerColumns = [
  {
    title: "Products",
    links: ["CRM Platform", "Sales Workspace", "Revenue Forecasting", "Customer Success"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API Reference", "Changelog", "Status"],
  },
  {
    title: "Company",
    links: ["Pricing", "Privacy", "Security", "Terms"],
  },
];

export default function Home() {
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "FlowPilot CRM",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "A CRM platform for sales, customer success, and revenue operations teams.",
    offers: pricingPlans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      price: plan.yearlyPrice,
      priceCurrency: "USD",
      description: plan.description,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="page-shell" id="top">
        <header className="site-header">
          <div className="container site-nav">
            <a className="brand brand-light" href="#top" aria-label="FlowPilot CRM home">
              <span className="brand-mark" aria-hidden="true" />
              <span className="brand-text">FlowPilot CRM</span>
            </a>

            <nav className="nav-links nav-links-light" aria-label="Primary navigation">
              <a href="#overview">Overview</a>
              <a href="#pricing">Pricing</a>
              <a href="#compare">Compare</a>
              <a href="#faq">FAQ</a>
              <a href="#contact">Contact</a>
            </nav>

            <div className="header-actions">
              <a className="button hero-button-secondary compact-button" href="#contact">
                Get Started
              </a>
              <a className="header-link" href="#faq">
                Sign in
              </a>
            </div>
          </div>
        </header>

        <main>
          <section className="hero-section">
            <div className="hero-backdrop" aria-hidden="true">
              <span className="hero-shape hero-shape-left" />
              <span className="hero-shape hero-shape-right" />
              <span className="hero-grid-line hero-grid-line-a" />
              <span className="hero-grid-line hero-grid-line-b" />
            </div>

            <div className="container hero-content">
              <div className="hero-copy">
                <span className="eyebrow eyebrow-light">Advanced CRM analytics for growth teams</span>
                <h1>Advanced analytics to grow your business.</h1>
                <p className="hero-description">
                  FlowPilot gives sales and customer success teams one clear place to
                  manage pipeline, forecast revenue, and automate follow-up without CRM
                  clutter.
                </p>

                <div className="hero-actions">
                  <a className="button hero-button-primary" href="#pricing">
                    See Plans
                  </a>
                  <a className="button hero-button-outline" href="#contact">
                    Request a Free Trial
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="logo-section">
            <div className="container">
              <div className="logo-strip">
                {logos.map((logo) => (
                  <span className="logo-pill" key={logo}>
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="overview-section section" id="overview">
            <div className="container">
              <div className="section-heading center-heading">
                <span className="eyebrow">Product overview</span>
                <h2>Built to help your team move faster with better visibility.</h2>
                <p>
                  Everything from lead capture to renewals lives in one CRM system,
                  with cleaner reporting and less manual admin across the business.
                </p>
              </div>

              <div className="overview-grid-cards">
                {overviewCards.map((card) => (
                  <article className="info-card" key={card.title}>
                    <span className="info-icon" aria-hidden="true" />
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <PricingShowcase plans={pricingPlans} comparisonGroups={comparisonGroups} />

          <section className="testimonials-section section">
            <div className="container">
              <div className="section-heading center-heading">
                <span className="eyebrow">Customer testimonials</span>
                <h2>Trusted by teams scaling revenue with more discipline.</h2>
                <p>
                  CRM adoption improves when the interface is clean, the reporting is
                  dependable, and every team can work from the same account context.
                </p>
              </div>

              <div className="testimonial-grid">
                {testimonials.map((testimonial) => (
                  <article className="testimonial-card" key={testimonial.name}>
                    <span className="quote-badge">Verified customer</span>
                    <p>&ldquo;{testimonial.quote}&rdquo;</p>
                    <div className="testimonial-meta">
                      <strong>{testimonial.name}</strong>
                      <span>{testimonial.role}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="assist-section section" id="faq">
            <div className="container assist-grid">
              <div className="faq-panel">
                <div className="section-heading">
                  <span className="eyebrow">FAQ</span>
                  <h2>Questions teams ask before choosing a CRM plan.</h2>
                  <p>
                    Explore implementation, billing, support, and flexibility before
                    you commit to a rollout.
                  </p>
                </div>
                <FaqAccordion items={faqItems} />
              </div>

              <div className="contact-panel" id="contact">
                <div className="section-heading">
                  <span className="eyebrow">Contact</span>
                  <h2>See how FlowPilot fits your revenue process.</h2>
                  <p>
                    Tell us about your CRM goals and we&apos;ll tailor a walkthrough to
                    your current stack, team size, and reporting needs.
                  </p>
                </div>
                <div className="contact-card">
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="container footer-shell">
            <div className="footer-brand">
              <a className="brand footer-brand-mark" href="#top">
                <span className="brand-mark" aria-hidden="true" />
                <span className="brand-text">FlowPilot CRM</span>
              </a>
              <p>
                A modern CRM for businesses that want clean reporting, faster execution,
                and a better customer journey across sales and success.
              </p>
            </div>

            <div className="footer-links-grid">
              {footerColumns.map((column) => (
                <div className="footer-column" key={column.title}>
                  <h3>{column.title}</h3>
                  {column.links.map((link) => (
                    <a href="#top" key={link}>
                      {link}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
