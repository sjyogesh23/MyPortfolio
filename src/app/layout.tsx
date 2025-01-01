import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Yogesh SJ",
  description: "Innovative and results-oriented ML engineer with a robust background in deep learning and natural language processing, coupled with proficiency in web and app development. Adept at combining technical expertise with a creative mindset to design user-focused solutions and contribute to meaningful projects. Passionate about driving advancements in Healthcare, Education, and Sustainability through collaborative efforts and forward-thinking approaches. A proactive leader skilled in managing multiple priorities to deliver impactful outcomes in diverse and challenging environments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
