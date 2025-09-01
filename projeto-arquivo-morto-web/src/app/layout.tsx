import "./globals.css";
import AppBarLayout from "@/components/appbar/layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppBarLayout />
        {children}
      </body>
    </html>
  );
}
