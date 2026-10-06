"use client";

import { useState, type FormEvent } from "react";
import { profile } from "../content";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT || "";
  const configured = Boolean(endpoint);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) { setStatus("Please complete all fields, including your message."); return; }
    if (!configured) { setStatus("Contact delivery is not configured yet."); return; }
    setSending(true);
    setStatus("");
    try {
      const response = await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" }, signal: AbortSignal.timeout(15000) });
      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setStatus("Thank you! Your message was submitted successfully.");
    } catch {
      setStatus("Your message could not be submitted. Please try again, or use the email link below.");
    } finally { setSending(false); }
  }

  return <form className="contact-form" onSubmit={submit}>
    <div className="form-row"><label htmlFor="contact-name">Your name<input id="contact-name" name="name" autoComplete="name" required maxLength={100} placeholder="Your name" /></label><label htmlFor="contact-email">Your email<input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" /></label></div>
    <label htmlFor="contact-message">Message<textarea id="contact-message" name="message" required minLength={10} maxLength={5000} rows={6} placeholder="Tell me about the role, project, or idea you have in mind…" /></label>
    <button className="button" type="submit" disabled={sending || !configured}>{sending ? "Sending…" : "Send message ↗"}</button>
    <p className="form-note">{endpoint ? "Your name, email, and message will be sent through the contact form service." : "Contact form setup is in progress. Message delivery is not available yet."}</p>
    <p role="status" aria-live="polite" className="form-status">{status}</p>
    <div className="contact-links">{profile.email && <a href={`mailto:${profile.email}`}>Email me ↗</a>}{profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}{profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>}</div>
  </form>;
}
