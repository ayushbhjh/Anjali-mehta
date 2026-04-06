"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  category: string;
  goals: string;
  timeline: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  category: "MBA Career Mentorship",
  goals: "",
  timeline: ""
};

export default function MentorshipForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/mentorship", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Unable to submit right now.");
      }

      setStatus("success");
      setMessage(data.message || "Thanks. Your mentorship request has been received.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="surface-card p-6 sm:p-8" aria-live="polite">
      <h3 className="font-[var(--font-display)] text-2xl font-semibold text-navy">Book a Mentorship Session</h3>
      <p className="mt-2 text-sm text-muted">Share your goals and Anjali can follow up with a tailored guidance plan.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-ink">
          Full Name
          <input
            required
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            className="rounded-xl border border-line bg-white px-3 py-2.5 text-sm outline-none transition focus:border-teal"
            placeholder="Your name"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-ink">
          Email
          <input
            type="email"
            required
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            className="rounded-xl border border-line bg-white px-3 py-2.5 text-sm outline-none transition focus:border-teal"
            placeholder="you@example.com"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-ink">
          Phone / WhatsApp
          <input
            value={form.phone}
            onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
            className="rounded-xl border border-line bg-white px-3 py-2.5 text-sm outline-none transition focus:border-teal"
            placeholder="+91..."
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-ink">
          Guidance Track
          <select
            value={form.category}
            onChange={(event) => setForm((prev) => ({ ...prev, category: event.target.value }))}
            className="rounded-xl border border-line bg-white px-3 py-2.5 text-sm outline-none transition focus:border-teal"
          >
            <option>MBA Career Mentorship</option>
            <option>Startup Strategy & Funding Guidance</option>
            <option>Research, Publication & Methodology Support</option>
            <option>PhD & Academic Guidance</option>
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-ink sm:col-span-2">
          Current Goals
          <textarea
            required
            rows={4}
            value={form.goals}
            onChange={(event) => setForm((prev) => ({ ...prev, goals: event.target.value }))}
            className="rounded-xl border border-line bg-white px-3 py-2.5 text-sm outline-none transition focus:border-teal"
            placeholder="What are you trying to achieve in the next 3-6 months?"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-ink sm:col-span-2">
          Preferred Timeline
          <input
            value={form.timeline}
            onChange={(event) => setForm((prev) => ({ ...prev, timeline: event.target.value }))}
            className="rounded-xl border border-line bg-white px-3 py-2.5 text-sm outline-none transition focus:border-teal"
            placeholder="Example: Need support starting this month"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#18345f] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Submitting..." : "Submit Mentorship Request"}
      </button>

      {message && (
        <p className={`mt-4 text-sm ${status === "success" ? "text-teal" : "text-red-600"}`}>{message}</p>
      )}
    </form>
  );
}
