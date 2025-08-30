'use client';

import React from 'react';
import ContentContainerLayout from '@/components/contentcontainer/layout';
import AppBarLayout from '@/components/appbar/layout';
import "../../app/globals.css";

export default function EmpresaLayout({
  children,
  breadCrumbList
}: Readonly<{
  children: React.ReactNode;
  breadCrumbList: { title: string }[];
}>) {
  return (
    <html lang="en">
      <body>
        <AppBarLayout />
        <ContentContainerLayout breadCrumbList={breadCrumbList}>
          {children}
        </ContentContainerLayout>
      </body>
    </html>
  );
}