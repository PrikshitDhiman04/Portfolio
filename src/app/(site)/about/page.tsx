import PageShell from "@/components/pageshell";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="About me"
      intro="A little about who I am and what I build."
    />
  );
}
