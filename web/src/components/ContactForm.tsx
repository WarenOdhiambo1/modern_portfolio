"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState("submitting");
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? "")
    };

    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000";
      const response = await fetch(`${baseUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const detail = await response.text();
        throw new Error(`Request failed (${response.status}): ${detail}`);
      }

      setState("success");
      form.reset();
    } catch (err) {
      console.error("Contact form submit failed", err);
      setState("error");
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unable to send message. Please try again.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4 text-left">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-slate">
          Name
          <input
            name="name"
            required
            minLength={2}
            className="rounded-2xl border border-bone bg-white/70 px-4 py-3 text-charcoal"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate">
          Email
          <input
            type="email"
            name="email"
            required
            className="rounded-2xl border border-bone bg-white/70 px-4 py-3 text-charcoal"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm text-slate">
        Message
        <textarea
          name="message"
          required
          minLength={10}
          rows={5}
          className="rounded-2xl border border-bone bg-white/70 px-4 py-3 text-charcoal"
        />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={state === "submitting"}
          className="rounded-full bg-deepblue px-6 py-3 text-sm uppercase tracking-[0.2em] text-white"
        >
          {state === "submitting" ? "Sending" : "Send Message"}
        </button>
        {state === "success" ? (
          <span className="text-sm text-slate">Message sent.</span>
        ) : null}
        {state === "error" && error ? (
          <span className="text-sm text-red-600">{error}</span>
        ) : null}
      </div>
    </form>
  );
}
