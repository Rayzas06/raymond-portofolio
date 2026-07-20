import { useState } from "react";
import emailjs from "@emailjs/browser";
import { profile, contactIcons } from "../data/portfolio";

// TODO: Ganti 3 nilai ini dengan punya kamu dari dashboard EmailJS
const EMAILJS_SERVICE_ID = "service_8ql6oss";
const EMAILJS_TEMPLATE_ID = "template_esa52or";
const EMAILJS_PUBLIC_KEY = "KlfIldCRQiwaAr3R9";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const validateField = (field: keyof FormState, value: string): string | undefined => {
    if (field === "name") {
      if (!value.trim()) return "Name is required.";
      if (value.trim().length < 2) return "Name must be at least 2 characters.";
    }
    if (field === "email") {
      if (!value.trim()) return "Email is required.";
      if (!EMAIL_REGEX.test(value.trim())) return "Please enter a valid email address.";
    }
    if (field === "message") {
      if (!value.trim()) return "Message is required.";
      if (value.trim().length < 10) return "Message must be at least 10 characters.";
    }
    return undefined;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
    }
  };

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, form[field]) }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: FormErrors = {
      name: validateField("name", form.name),
      email: validateField("email", form.email),
      message: validateField("message", form.message),
    };
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    const hasErrors = Object.values(newErrors).some(Boolean);
    if (hasErrors) return;

    setStatus("loading");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: profile.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTouched({});
      setErrors({});
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const waNumber = profile.phone.replace(/\D/g, "");

  return (
    <section id="contact" className="max-w-[1400px] mx-auto px-6 py-24">
      <div className="font-mono text-xs uppercase tracking-widest text-accent mb-2">Contact · Workflow · Identity</div>
      <h2 className="text-3xl font-extrabold mb-8">Reach Out</h2>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-2xl font-bold mb-3">Tell me what you want to build.</h3>

          <div className="inline-flex items-center gap-2 bg-accentDim border border-accent/30 rounded-full px-3 py-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[11px] text-accent">
              Currently open to internships & collaborations
            </span>
          </div>

          <p className="text-textSoft text-sm mb-6">
            Open to internships, collaborations, and full-stack or backend-focused roles. I keep the conversation
            direct, technical, and focused on shipping something useful.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <Offer title="Web platforms" desc="React, Next.js, full-stack CRUD systems." />
            <Offer title="Mobile apps" desc="Native Kotlin, Material Design 3." />
            <Offer title="Backend & APIs" desc="Microservices, REST, event-driven systems." />
            <Offer title="Response time" desc="Usually within 24–48 hours." />
          </div>
        </div>

        <div className="bg-panel border border-border rounded-2xl p-6">
          <h3 className="font-bold mb-4">Contact form</h3>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <Field
              label="Your name"
              type="text"
              value={form.name}
              error={touched.name ? errors.name : undefined}
              onChange={(v) => handleChange("name", v)}
              onBlur={() => handleBlur("name")}
              disabled={status === "loading"}
            />
            <Field
              label="Email address"
              type="email"
              value={form.email}
              error={touched.email ? errors.email : undefined}
              onChange={(v) => handleChange("email", v)}
              onBlur={() => handleBlur("email")}
              disabled={status === "loading"}
            />
            <div>
              <label className="font-mono text-[11px] uppercase text-textFaint block mb-1.5">Your message</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                onBlur={() => handleBlur("message")}
                disabled={status === "loading"}
                className={`w-full bg-panelSoft border rounded-lg px-3 py-2 text-sm text-text outline-none transition-colors disabled:opacity-60 ${
                  touched.message && errors.message
                    ? "border-red-500 focus:border-red-500"
                    : "border-border/80 focus:border-accent"
                } focus:shadow-[0_0_0_3px_rgba(245,166,35,0.25)]`}
              />
              {touched.message && errors.message && (
                <p className="text-red-500 text-xs mt-1.5">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2 font-mono text-sm px-6 py-3 rounded-lg bg-accent text-[#1a1200] font-bold hover:-translate-y-0.5 transition-transform disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <span className="w-4 h-4 border-2 border-[#1a1200]/30 border-t-[#1a1200] rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>Send message →</>
              )}
            </button>

            {status === "success" && (
              <p className="text-green text-sm text-center font-mono">
                Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm text-center font-mono">
                Something went wrong. Please try again — your message wasn't lost.
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <SocialLink href={`mailto:${profile.email}`} icon={contactIcons.gmail} label="Mail" />
        <SocialLink href={profile.github} icon={contactIcons.github} label="GitHub" external />
        <SocialLink href={profile.linkedin} icon={contactIcons.linkedin} label="LinkedIn" external />
        <SocialLink href={`https://wa.me/${waNumber}`} icon={contactIcons.phone} label="WhatsApp" external />
      </div>
    </section>
  );
}

function SocialLink({
  href,
  icon,
  label,
  external,
}: {
  href: string;
  icon: string;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-2 font-mono text-xs text-textSoft border border-border rounded-full px-4 py-2 transition-all duration-200 ease-out hover:scale-[1.03] hover:border-accent hover:text-accent hover:shadow-[0_0_0_3px_rgba(245,166,35,0.15)]"
    >
      <img src={icon} alt="" className="w-4 h-4 object-contain" /> {label}
    </a>
  );
}

function Offer({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-panel border border-border rounded-xl p-4">
      <div className="text-sm font-bold mb-1">{title}</div>
      <div className="text-xs text-textSoft">{desc}</div>
    </div>
  );
}

function Field({
  label,
  type,
  value,
  error,
  onChange,
  onBlur,
  disabled,
}: {
  label: string;
  type: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  disabled?: boolean;
}) {
  return (
    <div>
      <label className="font-mono text-[11px] uppercase text-textFaint block mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className={`w-full bg-panelSoft border rounded-lg px-3 py-2 text-sm text-text outline-none transition-colors disabled:opacity-60 ${
          error ? "border-red-500 focus:border-red-500" : "border-border/80 focus:border-accent"
        } focus:shadow-[0_0_0_3px_rgba(245,166,35,0.25)]`}
      />
      {error && <p className="text-red-500 text-xs mt-1.5">{error}</p>}
    </div>
  );
}