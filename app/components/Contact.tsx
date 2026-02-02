"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Send, Mail, Linkedin, Github, CheckCircle, AlertCircle, Phone } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    mode: "onBlur",
  });

  const onSubmit = async (data: FormData) => {
    try {
      setSubmitStatus({ type: null, message: "" });

      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        setSubmitStatus({
          type: "error",
          message: "Chyba konfigurace formuláře. Kontaktujte mě prosím přímo na email.",
        });
        return;
      }

      const formData = new FormData();
      formData.append("access_key", accessKey);
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);
      formData.append("subject", "Nová zpráva z kontaktního formuláře");
      formData.append("from_name", "Portfolio Contact Form");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Děkuji za vaši zprávu! Budu se snažit odpovědět co nejdříve.",
        });
        reset();
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ type: null, message: "" });
        }, 5000);
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Něco se pokazilo. Zkuste to prosím znovu později.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Něco se pokazilo. Zkuste to prosím znovu později.",
      });
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4 text-center"
        >
          Máte zájem o spolupráci?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto"
        >
          Máte v plánu nový projekt nebo chcete spolupracovat? Pošlete mi zprávu, rád vám pomohu.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Kontaktujte mě</h3>
              <p className="text-foreground/70 mb-6">
                Jsem vždy otevřen pro diskusi nových projektů, kreativních nápadů nebo příležitostí, jak se stát součástí vaší vize.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="tel:+420739254222"
                className="flex items-center gap-3 text-foreground/70 hover:text-foreground hover:translate-x-1 transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                +420 739 254 222
              </a>
              <a
                href="mailto:info@jakublipar.cz"
                className="flex items-center gap-3 text-foreground/70 hover:text-foreground hover:translate-x-1 transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
                info@jakublipar.cz
              </a>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/jakub-lip%C3%A1r-5093b0363/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-foreground/5 dark:bg-foreground/10 hover:bg-foreground/10 hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/da-jacob"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-foreground/5 dark:bg-foreground/10 hover:bg-foreground/10 hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <p
                className="flex items-center gap-3 text-foreground/70 mt-8"
              >
                <b>IČO:</b> 14086344
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
              >
                Jméno
              </label>
              <input
                type="text"
                id="name"
                {...register("name", {
                  required: "Jméno je povinné",
                  minLength: {
                    value: 2,
                    message: "Jméno musí mít alespoň 2 znaky",
                  },
                  maxLength: {
                    value: 50,
                    message: "Jméno může mít maximálně 50 znaků",
                  },
                })}
                className={`w-full px-4 py-3 rounded-lg bg-foreground/5 dark:bg-foreground/10 border ${errors.name
                  ? "border-red-500 focus:border-red-500"
                  : "border-foreground/10 focus:border-foreground/30"
                  } focus:outline-none transition-colors`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
              >
                Emailová adresa
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Emailová adresa je povinná",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Neplatná emailová adresa",
                  },
                })}
                className={`w-full px-4 py-3 rounded-lg bg-foreground/5 dark:bg-foreground/10 border ${errors.email
                  ? "border-red-500 focus:border-red-500"
                  : "border-foreground/10 focus:border-foreground/30"
                  } focus:outline-none transition-colors`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Zpráva
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message", {
                  required: "Zpráva je povinná",
                  minLength: {
                    value: 10,
                    message: "Zpráva musí mít alespoň 10 znaků",
                  },
                  maxLength: {
                    value: 1000,
                    message: "Zpráva může mít maximálně 1000 znaků",
                  },
                })}
                className={`w-full px-4 py-3 rounded-lg bg-foreground/5 dark:bg-foreground/10 border ${errors.message
                  ? "border-red-500 focus:border-red-500"
                  : "border-foreground/10 focus:border-foreground/30"
                  } focus:outline-none transition-colors resize-none`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.message.message}
                </p>
              )}
            </div>
            {submitStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg flex items-center gap-2 ${submitStatus.type === "success"
                  ? "bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400"
                  : "bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400"
                  }`}
              >
                {submitStatus.type === "success" ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <AlertCircle className="w-5 h-5" />
                )}
                <p className="text-sm font-medium">{submitStatus.message}</p>
              </motion.div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⏳</span>
                  Odesílám...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Odeslat zprávu
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
