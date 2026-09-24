"use client";

import { useRef } from "react";
import Button from "@/components/Button";

type MoreServicesModalProps = {
  label: string;
  title: string;
  children: React.ReactNode;
};

export default function MoreServicesModal({ label, title, children }: MoreServicesModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <Button variant="secondary" onClick={() => dialogRef.current?.showModal()}>
        {label}
      </Button>

      <dialog
        ref={dialogRef}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
        className="m-auto max-h-[85vh] w-[min(92vw,56rem)] overflow-y-auto rounded-2xl bg-paper p-8 text-ink backdrop:bg-ink/70 sm:p-10"
      >
        <div className="flex items-start justify-between gap-6">
          <h3 className="font-display text-4xl tracking-wide">{title}</h3>
          <button
            type="button"
            aria-label="Close"
            onClick={() => dialogRef.current?.close()}
            className="cursor-pointer font-sans text-3xl leading-none text-ink transition-colors hover:text-accent"
          >
            &times;
          </button>
        </div>
        <div className="mt-6 border-t border-line">{children}</div>
      </dialog>
    </>
  );
}
