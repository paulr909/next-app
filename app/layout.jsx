import { Roboto } from "next/font/google";
import Header from "@/app/components/Header";
import "./globals.css";

const roboto = Roboto({
  weight: ["300"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Next JS",
  description: "Web development tutorials and courses",
  keywords:
    "web development, python, django, javascript, react, vue, html, css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
