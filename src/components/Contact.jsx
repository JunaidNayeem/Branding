import { useState } from "react";
import { motion } from "framer-motion";

import { socials } from "../constants";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/junaid85210@gmail.com";

const inputClasses =
  "w-full px-4 py-3 bg-n-7 border border-n-6 rounded-lg text-n-1 placeholder:text-n-4 outline-none transition-colors focus:border-color-1";

const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="contact" crosses>
      <div className="container relative z-2">
        <Heading
          tag="Get In Touch"
          title="Let's Build Something Great"
          text="Open to Senior/Staff Full Stack roles and impactful freelance work. I usually reply within a day."
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-[62rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="body-2 text-n-3 mb-8">
              Whether it's a role, a project, or just a technical question —
              drop me a message and I'll get back to you directly. Based in
              London, UK and happy to work across time zones.
            </p>

            <a
              href="mailto:junaid85210@gmail.com"
              className="block h6 text-n-1 mb-8 transition-colors hover:text-color-1"
            >
              junaid85210@gmail.com
            </a>

            <ul className="flex gap-4">
              {socials.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.title}
                    className="flex items-center justify-center w-11 h-11 bg-n-7 border border-n-6 rounded-full transition-colors hover:bg-n-6 hover:border-n-5"
                  >
                    <img src={social.iconUrl} alt="" aria-hidden="true" width={18} height={18} />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input type="hidden" name="_subject" value="New message from junaidnayeem.in" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className={inputClasses}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className={inputClasses}
            />
            <textarea
              name="message"
              placeholder="Tell me about the opportunity or project…"
              required
              rows={5}
              className={`${inputClasses} resize-none`}
            />

            <Button
              className="w-full"
              type="submit"
              disabled={status === "sending"}
              white
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </Button>

            {status === "success" && (
              <p className="body-2 text-color-4" role="status">
                Thanks — your message is on its way. I'll reply soon.
              </p>
            )}
            {status === "error" && (
              <p className="body-2 text-color-3" role="alert">
                Something went wrong. Please email me directly instead.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
