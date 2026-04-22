"use client";

import { FormEvent, useState } from "react";

type SubmissionState = {
  type: "idle" | "success" | "error";
  message: string;
};

const initialState: SubmissionState = {
  type: "idle",
  message: "",
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmissionState>(initialState);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(initialState);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Something went wrong. Please try again.");
      }

      form.reset();
      setStatus({
        type: "success",
        message:
          data.message ?? "Thanks for reaching out. We will be in touch shortly.",
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "We could not send your request right now. Please try again.";

      setStatus({
        type: "error",
        message,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-intro">
        <span className="panel-kicker">Request a tailored walkthrough</span>
        <p>
          No spam, just a practical look at how FlowPilot could fit your team.
        </p>
      </div>

      <div className="field-grid">
        <label className="form-field">
          <span>Name</span>
          <input
            autoComplete="name"
            name="name"
            placeholder="Alex Morgan"
            required
            type="text"
          />
        </label>

        <label className="form-field">
          <span>Work email</span>
          <input
            autoComplete="email"
            name="email"
            placeholder="alex@company.com"
            required
            type="email"
          />
        </label>
      </div>

      <label className="form-field">
        <span>Company</span>
        <input
          autoComplete="organization"
          name="company"
          placeholder="Northbeam Labs"
          required
          type="text"
        />
      </label>

      <label className="form-field">
        <span>What are you solving for?</span>
        <textarea
          name="message"
          placeholder="We need a CRM that gives sales and customer success one shared view of accounts, better forecasting, and cleaner automation."
          required
          rows={5}
        />
      </label>

      <button className="button primary-button full-width-button" disabled={isSubmitting} type="submit">
        {isSubmitting ? "Sending request..." : "Request Demo"}
      </button>

      <p
        className={`form-status${status.type !== "idle" ? ` ${status.type}` : ""}`}
        role="status"
      >
        {status.message}
      </p>
    </form>
  );
}
