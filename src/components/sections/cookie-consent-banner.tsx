"use client";

import { useState } from "react";

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  const handleClose = () => {
    // In a real application, you would set a cookie here to remember the user's choice.
    setIsVisible(false);
  };

  return (
    <div
      className="fixed inset-x-4 bottom-4 z-[99999] md:inset-auto md:bottom-8 md:right-8 md:w-full md:max-w-md lg:max-w-[448px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="bg-secondary text-foreground p-8 rounded-lg shadow-2xl flex flex-col gap-4">
        <h2 id="cookie-consent-title" className="font-bold text-lg">
          Choose your cookies
        </h2>
        <p
          id="cookie-consent-description"
          className="text-sm text-muted-foreground leading-normal"
        >
          Cookies help up to enhance your experience, tailor ads to your
          interest, and improve our website. Find out more about our{" "}
          <a
            href="https://www.addisonlee.com/cookie-policy"
            className="underline text-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            cookie policy
          </a>
          .
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-2">
          <button
            onClick={handleClose}
            className="w-full bg-primary text-primary-foreground py-3 px-6 uppercase text-sm font-medium tracking-[1.4px] rounded-none hover:opacity-60 transition-opacity"
          >
            ACCEPT ALL
          </button>
          <button
            onClick={handleClose}
            className="w-full bg-transparent border border-foreground text-foreground py-3 px-6 uppercase text-sm font-medium tracking-[1.4px] rounded-none hover:opacity-60 transition-opacity"
          >
            REJECT NON-ESSENTIAL COOKIES
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;