import { ContactForm } from "@/components/contact/contact-form";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Start a project, request a collaboration, or ask a quick question. I typically respond within two business days.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactForm />;
}
