import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Commerce Core | Shop Online",
    template: "%s | Commerce Core",
  },
  description:
    "Discover quality products and enjoy a simple, secure online shopping experience.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <nav className="wrap nav">
            <Link className="brand" href="/">
              Commerce Core
            </Link>

            <div className="links">
              <Link href="/shop">Shop</Link>
              <Link href="/cart">Cart</Link>
              <Link href="/account">Account</Link>
              <Link href="/admin">Admin</Link>
            </div>
          </nav>
        </header>

        <main className="wrap">{children}</main>

        <footer className="wrap muted">
          © Commerce Core · Secure shopping
        </footer>
      </body>
    </html>
  );
}
