"use client";

import { useEffect, useState } from "react";
import { Dialog, IconButton } from "@material-tailwind/react";
import {
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
  DocumentIcon,
} from "@heroicons/react/24/solid";

type Status = "checking" | "available" | "unavailable";

interface PDFViewerModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  src: string | null;
}

export default function PDFViewerModal({
  open,
  onClose,
  title,
  src,
}: PDFViewerModalProps) {
  const [status, setStatus] = useState<Status>("checking");

  useEffect(() => {
    if (!open || !src) return;
    let cancelled = false;
    setStatus("checking");

    fetch(src)
      .then((res) => {
        if (!cancelled) setStatus(res.ok ? "available" : "unavailable");
      })
      .catch((err) => {
        console.error(
          "PDFViewerModal: failed to check certificate availability",
          err
        );
        if (!cancelled) setStatus("unavailable");
      });

    return () => {
      cancelled = true;
    };
  }, [open, src]);

  if (!src) return null;

  return (
    <Dialog
      open={open}
      handler={onClose}
      size="lg"
      className="bg-ink-900 text-paper rounded-2xl overflow-hidden p-0 w-full max-w-3xl border border-ink-700 max-h-[90vh] flex flex-col"
    >

      <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-ink-700 shrink-0">
        <h3 className="font-display text-base sm:text-lg font-semibold text-paper truncate">
          {title}
        </h3>
        <div className="flex items-center gap-3 shrink-0">

          {status === "available" && (
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-xs sm:text-sm text-paper-muted hover:text-aqua transition-colors"
            >
              Open in new tab
              <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
            </a>
          )}
          <IconButton
            variant="text"
            onClick={onClose}
            className="text-paper hover:bg-ink-800"
            size="sm"
          >
            <XMarkIcon className="h-5 w-5" />
          </IconButton>
        </div>
      </div>


      <div className="flex-1 bg-ink-950 min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center">
        {status === "checking" && (
          <div className="flex flex-col items-center gap-3 text-paper-faint">
            <div className="h-6 w-6 rounded-full border-2 border-ink-700 border-t-aqua animate-spin motion-reduce:animate-none" />
            <p className="text-sm">Loading certificate…</p>
          </div>
        )}

        {status === "unavailable" && (
          <div className="flex flex-col items-center gap-2 text-center px-8">
            <DocumentIcon className="h-10 w-10 text-paper-faint mb-2" />
            <p className="text-paper font-medium">
              Certificate not available yet
            </p>
            <p className="text-sm text-paper-muted max-w-xs">
              This one hasn&rsquo;t been uploaded to the site yet — check
              back soon.
            </p>
          </div>
        )}

        {status === "available" && (
          <iframe
            src={`${src}#toolbar=0&navpanes=0`}
            title={title}
            className="w-full h-full min-h-[60vh] sm:min-h-[70vh]"
          />
        )}
      </div>


      {status === "available" && (
        <div className="sm:hidden border-t border-ink-700 px-5 py-3 shrink-0">
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 text-sm text-paper-muted hover:text-aqua transition-colors"
          >
            Open in new tab
            <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      )}
    </Dialog>
  );
}