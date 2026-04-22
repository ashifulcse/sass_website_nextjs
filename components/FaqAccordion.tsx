"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article className={`faq-item${isOpen ? " open" : ""}`} key={item.question}>
            <button
              aria-controls={`faq-answer-${index}`}
              aria-expanded={isOpen}
              className="faq-trigger"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              type="button"
            >
              <span>{item.question}</span>
              <span className="faq-icon" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div className="faq-answer" id={`faq-answer-${index}`}>
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
