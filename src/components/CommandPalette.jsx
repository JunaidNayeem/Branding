import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { resumeUrl } from "../constants";

const ACTIONS = [
  { id: "about", label: "Go to About", hint: "Section", type: "anchor", target: "#about" },
  { id: "experience", label: "Go to Experience", hint: "Section", type: "anchor", target: "#experience" },
  { id: "work", label: "Go to Featured Work", hint: "Section", type: "anchor", target: "#featured-work" },
  { id: "skills", label: "Go to Skills", hint: "Section", type: "anchor", target: "#skills" },
  { id: "contact", label: "Go to Contact", hint: "Section", type: "anchor", target: "#contact" },
  { id: "resume", label: "Open my Resume", hint: "Link", type: "link", target: resumeUrl },
  { id: "github", label: "Open GitHub", hint: "Link", type: "link", target: "https://github.com/JunaidNayeem" },
  { id: "linkedin", label: "Open LinkedIn", hint: "Link", type: "link", target: "https://www.linkedin.com/in/junaid-nayeem-51041a16a/" },
  { id: "projects", label: "Open Projects site", hint: "Link", type: "link", target: "https://projects.junaidnayeem.in" },
  { id: "email", label: "Copy email address", hint: "junaid85210@gmail.com", type: "copy", target: "junaid85210@gmail.com" },
];

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ACTIONS;
    return ACTIONS.filter(
      (a) =>
        a.label.toLowerCase().includes(q) || a.hint.toLowerCase().includes(q)
    );
  }, [query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
    setCopied(false);
  }, []);

  const run = useCallback(
    (action) => {
      if (!action) return;
      if (action.type === "anchor") {
        close();
        document.querySelector(action.target)?.scrollIntoView();
      } else if (action.type === "link") {
        close();
        window.open(action.target, "_blank", "noreferrer,noopener");
      } else if (action.type === "copy") {
        navigator.clipboard?.writeText(action.target);
        setCopied(true);
        setTimeout(close, 900);
      }
    },
    [close]
  );

  // Global shortcut + open events from the header hint button
  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    const onOpen = () => setOpen(true);

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("open-command-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-command-palette", onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const onInputKeyDown = (e) => {
    if (e.key === "Escape") {
      close();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      run(results[activeIndex]);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[60] flex items-start justify-center px-5 pt-[15vh] bg-n-8/80 backdrop-blur-sm"
          onMouseDown={close}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -12 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            className="w-full max-w-[34rem] overflow-hidden rounded-2xl border border-n-6 bg-n-7 shadow-2xl"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onInputKeyDown}
              placeholder="Type a command or search…"
              aria-label="Search commands"
              className="w-full px-5 py-4 bg-transparent border-b border-n-6 font-code text-sm text-n-1 placeholder:text-n-4 outline-none"
            />

            <ul className="max-h-[19rem] overflow-y-auto py-2" role="listbox">
              {results.length === 0 && (
                <li className="px-5 py-4 caption text-n-4">No results</li>
              )}
              {results.map((action, i) => (
                <li key={action.id} role="option" aria-selected={i === activeIndex}>
                  <button
                    type="button"
                    onClick={() => run(action)}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={`flex w-full items-center justify-between px-5 py-3 text-left transition-colors ${
                      i === activeIndex ? "bg-n-6 text-n-1" : "text-n-2"
                    }`}
                  >
                    <span className="body-2">
                      {copied && action.type === "copy"
                        ? "Copied to clipboard ✓"
                        : action.label}
                    </span>
                    <span className="caption text-n-4">{action.hint}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 px-5 py-3 border-t border-n-6 caption text-n-4">
              <span>↑↓ navigate</span>
              <span>↵ select</span>
              <span>esc close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
