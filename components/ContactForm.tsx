"use client";

import { useState } from "react";
import Button from "@/components/Button";

const inputClasses =
  "w-full rounded-lg border border-line bg-paper px-4 py-3 text-ink placeholder:text-muted focus:border-accent focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-line bg-mist p-8">
        <p className="font-display text-2xl tracking-wide text-ink">
          Sent.
        </p>
        <p className="mt-2 text-muted">
          Thanks &mdash; we&rsquo;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-6"
      onSubmit={async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);

        setSending(true);
        setError(null);

        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: data.get("name"),
              venue: data.get("brewery"),
              email: data.get("email"),
              message: data.get("message"),
              fax_number: data.get("fax_number"),
            }),
          });

          if (!response.ok) {
            const result = await response.json().catch(() => null);
            throw new Error(result?.error ?? "Something went wrong. Please email us instead.");
          }

          setSubmitted(true);
        } catch (err) {
          setError(err instanceof Error ? err.message : "Something went wrong. Please email us instead.");
        } finally {
          setSending(false);
        }
      }}
    >
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ink">
          Name
        </label>
        <input id="name" name="name" type="text" required className={inputClasses} />
      </div>

      <div>
        <label htmlFor="brewery" className="mb-2 block text-sm font-semibold text-ink">
          Brewery / taproom / pub
        </label>
        <input id="brewery" name="brewery" type="text" className={inputClasses} />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink">
          Email
        </label>
        <input id="email" name="email" type="email" required className={inputClasses} />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink">
          What&rsquo;s not working right now?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={inputClasses}
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="fax_number">Leave this empty</label>
        <input id="fax_number" name="fax_number" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {error && (
        <p role="alert" className="text-sm font-semibold text-accent-dark">
          {error}
        </p>
      )}

      <Button type="submit" disabled={sending}>
        {sending ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
