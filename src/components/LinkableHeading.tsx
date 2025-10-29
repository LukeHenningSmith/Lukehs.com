import React, { useState } from "react";
import { Clipboard } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";

interface Props {
  id: string;
  children: React.ReactNode;
}

export default function LinkableHeading({ id, children }: Props) {
  const [open, setOpen] = useState(false);

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

    // show tooltip briefly
    setOpen(true);
    window.setTimeout(() => setOpen(false), 1400);
  };

  // Only allow programmatic opening (click) — ignore attempts to open via hover.
  const handleTooltipOpenChange = (v: boolean) => {
    // allow closing from tooltip internals (v === false) but ignore open requests from hover (v === true)
    if (!v) setOpen(false);
  };

  return (
    <Tooltip open={open} onOpenChange={handleTooltipOpenChange}>
      <TooltipTrigger asChild>
        <button
          type="button"
          onClick={handleClick}
          aria-label={`Link to ${id}`}
          title="Copy link"
          className="group relative w-full text-left flex items-center gap-3 py-1 cursor-pointer"
        >
          <h2 id={id} className="pointer-events-none text-xl">
            {children}
          </h2>

          <span
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-in-out transform translate-x-1 group-hover:translate-x-0"
            aria-hidden
          >
            <Clipboard className="w-5 h-5" />
          </span>
        </button>
      </TooltipTrigger>

      <TooltipContent side="bottom" align="center">
        Copied!
      </TooltipContent>
    </Tooltip>
  );
}
