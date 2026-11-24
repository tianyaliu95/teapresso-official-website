"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export type EnquiryState = "idle" | "sending" | "sent" | "error";

/**
 * Sends a form to /api/contact. `form` says which form it is; the server decides which inbox it goes to.
 * No email address is ever sent to, or shown in, the browser.
 */
export function useEnquiry(form: "contact" | "franchise") {
  const [state, setState] = useState<EnquiryState>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const element = event.currentTarget;
    const fields = Object.fromEntries(new FormData(element).entries());
    setState("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form, ...fields }),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      element.reset();
      setState("sent");
    } catch {
      setState("error");
    }
  }

  const message =
    state === "sent"
      ? "Thank you. Your message has been sent."
      : state === "error"
        ? "Your message could not be sent. Please try again in a moment."
        : "";

  return { state, message, onSubmit };
}
