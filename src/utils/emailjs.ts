import { init } from "@emailjs/browser";

// Initialize EmailJS with your public key
export const initEmailJS = (): void => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (!publicKey) {
    console.warn("VITE_EMAILJS_PUBLIC_KEY is not set in environment variables");
    return;
  }
  init(publicKey);
};
