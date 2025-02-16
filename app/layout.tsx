import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Nemo - Learn Languages",
  description: "The best way to learn new languages.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {/* Navbar */}
        <nav className="flex items-center justify-between p-6 bg-primary shadow-md">
          <div className="flex items-center space-x-3">
            {/* Logo ve Ana Sayfa Linki */}
            <Link href="/">
              <Image src="/logo.png" alt="Nemo Logo" width={40} height={40} />
            </Link>
            <span className="text-2xl font-bold text-accent">Nemo</span>
          </div>
        </nav>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-primary text-white py-8 text-center mt-10">
          <p>© 2025 Nemo. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
