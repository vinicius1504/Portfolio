"use client";

import { useState } from "react";
import type { Content } from "@/content/types";
import { site } from "@/content/site";
import { MailIcon, WhatsappIcon } from "./Icons";

export function ContactForm({ labels: t }: { labels: Content["contact"] }) {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [error, setError] = useState(false);

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(false);
  };

  const valid = () => {
    const ok = form.name.trim() !== "" && form.message.trim() !== "";
    setError(!ok);
    return ok;
  };

  const sendWhatsapp = () => {
    if (!valid()) return;
    const text = `${t.whatsappPrefix} ${form.name.trim()}. ${form.message.trim()}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  const sendEmail = () => {
    if (!valid()) return;
    const subject = `${t.emailSubject} - ${form.name.trim()}`;
    const body = `${t.nameLabel}: ${form.name.trim()}\n${t.phoneLabel}: ${form.phone.trim()}\n\n${t.messageLabel}:\n${form.message.trim()}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="contact-form" onSubmit={(e) => e.preventDefault()} noValidate>
      <div className="field-row">
        <label>
          <span>{t.nameLabel} *</span>
          <input name="name" value={form.name} onChange={update} placeholder={t.namePlaceholder} autoComplete="name" required />
        </label>
        <label>
          <span>{t.phoneLabel}</span>
          <input name="phone" type="tel" value={form.phone} onChange={update} placeholder={t.phonePlaceholder} autoComplete="tel" />
        </label>
      </div>
      <label>
        <span>{t.messageLabel} *</span>
        <textarea name="message" rows={5} value={form.message} onChange={update} placeholder={t.messagePlaceholder} required />
      </label>
      <p className="form-error" role="alert">
        {error ? t.fillRequired : ""}
      </p>
      <div className="form-actions">
        <button type="button" className="btn btn-whatsapp" onClick={sendWhatsapp}>
          <WhatsappIcon size={18} />
          {t.whatsappButton}
        </button>
        <button type="button" className="btn btn-ghost" onClick={sendEmail}>
          <MailIcon size={18} />
          {t.emailButton}
        </button>
      </div>
    </form>
  );
}
