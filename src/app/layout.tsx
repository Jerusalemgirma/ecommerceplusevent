import type { Metadata } from "next";
import "./css/euclid-circular-a-font.css";
import "./css/style.css";

export const metadata: Metadata = {
  title: "NextCommerce | Nextjs E-commerce template",
  description: "Free Next.js eCommerce template - NextMerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
