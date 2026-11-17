import type { ComponentType } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import PageShell from "@/components/pageshell";

export const metadata = { title: "Connect" };

type Contact = {
  label: string;
  value: string; // what visitors read
  href: string;
  icon: ComponentType<{ className?: string }>;
  external?: boolean;
};

// TODO: replace the placeholder values with your own
const CONTACTS: Contact[] = [
  {
    label: "GitHub",
    value: "github.com/PrikshitDhiman04",
    href: "https://github.com/PrikshitDhiman04",
    icon: FaGithub,
    external: true,
  },
  {
    label: "Email",
    value: "dhimanprikshit04@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=dhimanprikshit04@gmail.com&su=Hello%20Prikshit",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Prikshit Dhiman",
    href: "https://www.linkedin.com/in/prikshit-dhiman-b4aa41421/",
    icon: FaLinkedin,
    external: true,
  },
  {
    label: "Instagram",
    value: "dhimanprikshit04",
    href: "https://www.instagram.com/dhimanprikshit04?rpxt=YWJzNmd2NTc4Ynp1",
    icon: FaInstagram,
    external: true,
  },
];

export default function ConnectPage() {
  return (
    <PageShell
      center
      eyebrow="03 · Connect"
      title="Let's connect"
      intro="Say hello, ask a question, or let's build something together."
    >
      <ul className="mx-auto max-w-xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card text-left shadow-card">
        {CONTACTS.map((c) => (
          <li key={c.label}>
            <a
              href={c.href}
              {...(c.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex items-center gap-4 p-5 transition-colors hover:bg-card-hover"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-accent/10 text-accent transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                <c.icon className="size-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium">{c.label}</span>
                <span className="block truncate text-sm text-muted">
                  {c.value}
                </span>
              </span>
              <ArrowUpRight
                className="size-4 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                aria-hidden
              />
            </a>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
