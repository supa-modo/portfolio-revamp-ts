import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";
import { TbMailFilled } from "react-icons/tb";
import { SOCIAL_LINKS, NAV_ITEMS } from "@/utils/constants";
import { Card } from "../ui/Card";
import { LuCopyright } from "react-icons/lu";

export const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_name: "Eddy Odhiambo",
    };

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "default_service";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!templateId || !publicKey) {
      console.error("EmailJS configuration missing");
      setIsSubmitting(false);
      setSubmitError(true);
      return;
    }

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setSubmitSuccess(false), 3000);
      })
      .catch(() => {
        setIsSubmitting(false);
        setSubmitError(true);
      });
  };

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string): void => {
    const element = document.getElementById(href.substring(1));
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative bg-linear-to-b from-gray-950 via-gray-900 to-primary-900/80 border-t border-primary-300/20 overflow-hidden">
      
      <div className="container relative z-10 mx-auto px-4 pt-12 pb-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Info Section */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-10 rounded-xl overflow-hidden">
                <img src="/logo.gif" alt="logo" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold gradient-text">Eddy Ochieng Odhiambo</h3>
            </div>
            <p className="text-secondary-400 text-sm max-w-md">
              Fullstack Developer passionate about crafting modern web and mobile applications with clean code and exceptional user experiences.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href={SOCIAL_LINKS.email}
                className="flex items-center gap-2 text-secondary-300 hover:text-primary-400 transition-colors"
              >
                <TbMailFilled className="h-5 w-5" />
                eddie.oodhiambo@gmail.com
              </a>
              <div className="flex items-center gap-2 text-secondary-300">
                <span>📍</span>
                <span>Nairobi, Kenya</span>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary-800 text-secondary-300 hover:text-primary-400 hover:bg-primary-500/10 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary-800 text-secondary-300 hover:text-primary-400 hover:bg-primary-500/10 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary-800 text-secondary-300 hover:text-primary-400 hover:bg-primary-500/10 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-base lg:text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="text-secondary-400 hover:text-accent-400 transition-colors text-sm lg:text-[0.95rem] font-semibold"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div className="-mx-4 lg:mx-0 lg:col-span-5">
            <h4 className="text-base lg:text-lg font-bold text-white px-4 lg:px-0 mb-4">Contact Me</h4>
            <Card>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full bg-secondary-800/50 text-sm border border-secondary-700/50 rounded-lg px-4 py-2 text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all"
                    required
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="w-full bg-secondary-800/50 text-sm border border-secondary-700/50 rounded-lg px-4 py-2 text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all"
                    required
                  />
                </div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-secondary-800/50 text-sm border border-secondary-700/50 rounded-lg px-4 py-2 text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all resize-none"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-bg text-white text-sm lg:text-[0.95rem] rounded-xl px-6 py-2.5 font-medium hover:shadow-lg hover:shadow-primary-500/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
                {submitSuccess && (
                  <p className="text-green-400 text-sm text-center">
                    Message sent successfully!
                  </p>
                )}
                {submitError && (
                  <p className="text-red-400 text-sm text-center">
                    Failed to send message. Please try again later.
                  </p>
                )}
              </form>
            </Card>
          </div>
        </div>

        <div className="-mx-4 lg:mx-0 lg:mt-8 pt-4 border-t border-secondary-700 flex items-center justify-center lg:justify-start text-xs lg:text-sm text-secondary-400">
          
            {/* copyright symbol */}
            <LuCopyright className="h-3.5 lg:h-4 w-3.5 lg:w-4 mr-1" /> <p>
            {new Date().getFullYear()} Eddy Ochieng Odhiambo. All rights reserved.</p>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 gradient-bg rounded-full p-3 text-white shadow-lg hover:shadow-primary-500/30 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <HiArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
};
