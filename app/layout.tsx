import "./globals.css";
import Image from "next/image";
import Link from "next/link"; // ✅ Link bileşenini ekledik

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
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-accent hover:text-secondary">Home</Link></li>
            <li><Link href="#features" className="text-accent hover:text-secondary">Features</Link></li>
            <li><Link href="#about" className="text-accent hover:text-secondary">About</Link></li>
            <li><Link href="#contact" className="text-accent hover:text-secondary">Contact</Link></li>
          </ul>
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
