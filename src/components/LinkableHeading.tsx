import React, { useState } from "react";
import { Clipboard, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  id: string;
  children: React.ReactNode;
}

export default function LinkableHeading({ id, children }: Props) {
  const [copied, setCopied] = useState(false);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    const hash = `#${id}`;

    // update URL fragment without reloading
    try {
      if (window?.history?.replaceState) {
        window.history.replaceState(null, "", hash);
      } else {
        window.location.hash = id;
      }
    } catch (err) {
      // ignore
    }

    // copy full link to clipboard
    try {
      const href = `${location.origin}${location.pathname}${hash}`;
      await navigator.clipboard.writeText(href);
    } catch {
      /* ignore clipboard errors */
    }

    // show checkmark and copied text briefly
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="flex">
      <button
        type="button"
        onClick={handleClick}
        aria-label={`Link to ${id}`}
        title="Click to copy link"
        className="group relative flex items-center gap-3"
      >
        <h2 id={id} className="pointer-events-none text-xl">
          {children}
        </h2>

        <div
          className={`flex gap-1 items-center text-muted-foreground min-w-[1.5rem] transition-opacity duration-250 ease-in-out
            ${copied ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
        >
          <AnimatePresence initial={false} mode="wait">
            {copied ? (
              <motion.span
                key="check"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.1 }}
                aria-hidden
                className="text-xs"
              >
                <div className="flex gap-1 justify-center items-center">
                  <Check className="w-5 h-5" />
                  Copied
                </div>
              </motion.span>
            ) : (
              <motion.span
                key="clipboard"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.1 }}
                aria-hidden
              >
                <Clipboard className="w-4 h-4" />
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </button>
    </div>
  );
}
