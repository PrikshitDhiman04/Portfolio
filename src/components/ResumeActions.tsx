"use client";
import { useRef } from "react";
import Image from "next/image";
import { Download, Eye, X } from "lucide-react";

export default function ResumeActions() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <a
          href="/resume.pdf"
          download="Prikshit_Dhiman_Resume.pdf"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
        >
          <Download className="size-4" aria-hidden />
          Download PDF
        </a>
        <button
          type="button"
          onClick={() => dialogRef.current?.showModal()}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium shadow-card transition-colors hover:bg-card-hover"
        >
          <Eye className="size-4" aria-hidden />
          View as image
        </button>
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Resume preview"
        onClick={(e) => {
          // a click on the dark backdrop lands on the dialog element itself
          if (e.target === e.currentTarget) dialogRef.current?.close();
        }}
        className="m-auto h-[92dvh] w-[min(94vw,56rem)] bg-transparent p-0 text-foreground backdrop:bg-black/70 backdrop:backdrop-blur-sm open:animate-[pop-in_0.2s_ease-out]"
      >
        <div className="relative h-full overflow-y-auto overscroll-contain rounded-2xl border border-border bg-background">
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close preview"
            className="sticky right-3 top-3 z-10 float-right mr-3 mt-3 grid size-9 place-items-center rounded-full border border-border bg-background/90 backdrop-blur transition-colors hover:bg-card-hover"
          >
            <X className="size-4" />
          </button>
          <Image
            src="/resume-preview.webp"
            alt="Prikshit Dhiman's resume"
            width={1406}
            height={1988}
            className="h-auto w-full"
          />
        </div>
      </dialog>
    </>
  );
}
