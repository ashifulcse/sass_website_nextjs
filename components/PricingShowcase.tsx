"use client";

import { useState } from "react";

type Plan = {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  cadence: string;
  description: string;
  cta: string;
  featureList: string[];
  featured?: boolean;
};

type ComparisonGroup = {
  title: string;
  rows: {
    label: string;
    values: string[];
  }[];
};

type PricingShowcaseProps = {
  plans: Plan[];
  comparisonGroups: ComparisonGroup[];
};

export function PricingShowcase({
  plans,
  comparisonGroups,
}: PricingShowcaseProps) {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");

  return (
    <>
      <section className="pricing-section section" id="pricing">
        <div className="container">
          <div className="pricing-header">
            <div className="section-heading center-heading">
              <span className="eyebrow">Pricing</span>
              <h2>Ready to get started?</h2>
              <p className="pricing-subcopy">
                Try FlowPilot free for 14 days. No contract or credit card required.
              </p>
            </div>

            <div className="pricing-toggle-row" aria-label="Billing frequency toggle">
              <span className="pricing-toggle-label">Monthly</span>
              <button
                aria-label={`Switch to ${
                  billing === "monthly" ? "yearly" : "monthly"
                } billing`}
                className={`pricing-toggle${
                  billing === "yearly" ? " is-yearly" : ""
                }`}
                onClick={() =>
                  setBilling((current) =>
                    current === "monthly" ? "yearly" : "monthly",
                  )
                }
                type="button"
              />
              <span className="pricing-toggle-label">Yearly</span>
            </div>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => {
              const price =
                billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

              return (
                <article
                  className={`pricing-card ${
                    plan.featured ? "featured" : ""
                  } ${
                    plan.name === "Basic"
                      ? "pricing-card-basic"
                      : plan.name === "Professional"
                        ? "pricing-card-pro"
                        : ""
                  }`}
                  key={plan.name}
                >
                  <span className="tier-kicker">{plan.name}</span>
                  <h3>{plan.name}</h3>

                  <div className="price-row">
                    <span className="price-value">${price}</span>
                    <span className="price-cadence">{plan.cadence}</span>
                  </div>

                  <p className="price-note">{plan.description}</p>

                  <ul className="pricing-list">
                    {plan.featureList.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  <a className="button" href="#contact">
                    {plan.cta}
                  </a>
                </article>
              );
            })}
          </div>

          <div className="cta-band">
            <div className="cta-band-inner">
              <h2>Ready to transform your business?</h2>
              <ul className="cta-benefits">
                <li>Cancel anytime</li>
                <li>Access all core CRM workflows</li>
                <li>Priority onboarding support</li>
              </ul>
              <form action="#contact" className="cta-inline-form">
                <input
                  className="cta-inline-input"
                  name="email"
                  placeholder="Your email address"
                  type="email"
                />
                <button className="button cta-inline-button" type="submit">
                  Get a 14 day trial
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="compare-section section" id="compare">
        <div className="container">
          <div className="comparison-wrap">
            <h3>Not sure yet?</h3>
            <p>
              Explore all the features in each plan to choose the right CRM setup
              for your business.
            </p>

            <table className="comparison-table">
              <thead>
                <tr>
                  <th scope="col">Features</th>
                  {plans.map((plan) => {
                    const price =
                      billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

                    return (
                      <th key={plan.name} scope="col">
                        {plan.name}
                        <small>{billing === "monthly" ? "Monthly" : "Yearly"}</small>
                        <span>${price}</span>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              {comparisonGroups.map((group) => (
                <tbody key={group.title}>
                  <tr className="group-row">
                    <th colSpan={4} scope="colgroup">
                      {group.title}
                    </th>
                  </tr>
                  {group.rows.map((row) => (
                    <tr key={`${group.title}-${row.label}`}>
                      <td>{row.label}</td>
                      {row.values.map((value, index) => (
                        <td
                          className={value === "-" ? "feature-cell-muted" : ""}
                          key={`${row.label}-${plans[index]?.name}`}
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
