'use client';

import "./globals.css";
import AppBarLayout from "@/components/appbar/layout";
import ContentContainerLayout from "@/components/contentcontainer/layout";
import { Breadcrumb } from 'antd';

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
