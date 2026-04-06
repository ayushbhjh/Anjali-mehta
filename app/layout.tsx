import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anjali Mehta | MBA, Startup, Research & PhD Mentorship",
  description:
    "Premium mentorship for MBA careers, startup strategy, funding preparation, research methodology, publication support, and PhD guidance.",
  keywords: [
    "Anjali Mehta",
    "MBA mentorship",
    "startup funding guidance",
    "research publication support",
    "PhD academic guidance"
  ],
  openGraph: {
    title: "Anjali Mehta | Mentor for Careers, Startups, Research & PhD",
    description:
      "Helping ambitious students and professionals build stronger careers, startups, and academic outcomes with structured mentorship.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" id="home">
      <body className="font-[var(--font-body)] antialiased">{children}</body>
    </html>
  );
}
