import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const RobotoCondensed = Roboto_Condensed({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800', '900'] });

export const metadata = {
  title: "Md. Jahangir Alam | Portfolio",
  description: "Generated by Porfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={RobotoCondensed.className}>{children}</body>
    </html>
  );
}
