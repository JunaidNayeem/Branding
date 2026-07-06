import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const SESSION_KEY = "jn-portfolio-intro-seen";
const AUTO_DISMISS_MS = 2200;

// One-time animated intro per browser session — skippable, off for
// prefers-reduced-motion so it never blocks anyone who's already seen it.
const PageIntro = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const alreadySeen = sessionStorage.getItem(SESSION_KEY);

    if (reduceMotion || alreadySeen) return;

    setVisible(true);
    disablePageScroll();

    const timer = setTimeout(dismiss, AUTO_DISMISS_MS);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    enablePageScroll();
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-n-8"
          role="dialog"
          aria-label="Loading intro"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center px-6"
          >
            <p className="tagline text-color-1 mb-4">
              Portfolio · London, UK
            </p>
            <h1 className="h1 text-n-1">Junaid Nayeem</h1>
            <p className="body-2 text-n-3 mt-3">
              Senior Full Stack Engineer
            </p>

            <div className="h-[2px] w-40 mx-auto mt-8 overflow-hidden rounded-full bg-n-6">
              <motion.div
                className="h-full bg-gradient-to-r from-color-1 via-color-5 to-color-4"
                style={{ transformOrigin: "left" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: AUTO_DISMISS_MS / 1000, ease: "linear" }}
              />
            </div>
          </motion.div>

          <button
            type="button"
            onClick={dismiss}
            className="absolute bottom-8 right-8 font-code text-xs uppercase tracking-wider text-n-4 transition-colors hover:text-n-1"
          >
            Skip →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageIntro;
