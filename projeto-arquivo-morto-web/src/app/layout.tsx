import "./globals.css";
import AppBarLayout from "@/components/appbar/layout";
import { App } from "antd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppBarLayout />
        <App>{children}</App>
      </body>
    </html>
  );
}
