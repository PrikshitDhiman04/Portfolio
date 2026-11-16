// src/app/(site)/resume/page.tsx
import PageShell from "@/components/pageshell";

export const metadata = { title: "Resume" };

export default function ResumePage() {
  return (
    <PageShell
      eyebrow="02 · Resume"
      title="Resume"
      intro="The one-page version of me."
    />
  );
}
