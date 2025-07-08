import "../styles/globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Consult a Doctor - Book Online with Verified Specialists",
  description:
    "Easily consult with trusted doctors online for dermatology, cardiology, and more. Book appointments now!",
  keywords: [
    "doctor consultation",
    "online doctor",
    "book doctor",
    "healthcare",
    "Apollo alternative",
  ],
  openGraph: {
    title: "Consult a Doctor",
    description: "Book appointments with verified specialists online.",
    url: "https://consult-doctor-feature.vercel.app/",
    siteName: "Consult a Doctor",
    images: [
      {
        url: "doctor/image-3.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow p-4">
          <nav className="max-w-7xl mx-auto flex gap-6">
            <Link
              href="/"
              className="text-blue-600 font-semibold hover:underline"
            >
              Home
            </Link>
            <Link
              href="/consult"
              className="text-blue-600 font-semibold hover:underline"
            >
              Consult a Doctor
            </Link>
          </nav>
        </header>
        <main className="min-h-screen px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
