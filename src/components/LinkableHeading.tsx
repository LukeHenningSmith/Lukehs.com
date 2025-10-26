import React from "react";
import { Link } from "lucide-react";

interface Props {
  id: string;
  children: React.ReactNode;
}

export default function LinkableHeading({ id, children }: Props) {
  //   const handleClick = async (e: React.MouseEvent) => {
  //     e.preventDefault();
  //     const hash = `#${id}`;
  //     // update URL fragment without reloading
  //     if (window?.history?.replaceState) {
  //       window.history.replaceState(null, "", hash);
  //     } else {
  //       window.location.hash = id;
  //     }
  //     // copy full link to clipboard if available
  //     try {
  //       const href = `${location.origin}${location.pathname}${hash}`;
  //       await navigator.clipboard.writeText(href);
  //     } catch {
  //       /* ignore clipboard errors */
  //     }
  //   };

  return (
    <div className={`group relative flex items-center cursor-pointer text-xl`}>
      <button
        // onClick={handleClick}
        aria-label={`Link to ${id}`}
        title="Copy link"
        className="absolute -left-10 top-1/2 -translate-y-1/2 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 z-50 cursor-pointer"
      >
        <Link className="w-5 h-5" />
      </button>

      <h2 id={id} className="pointer-events-none">
        {children}
      </h2>
    </div>
  );
}
