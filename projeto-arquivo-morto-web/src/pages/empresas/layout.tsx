'use client';

import React from 'react';
import { Breadcrumb } from 'antd';
import ContentContainerLayout from '@/components/contentcontainer/layout';
import RootLayout from '@/app/layout';
import AppBarLayout from '@/components/appbar/layout';
import "../../app/globals.css";

export default function EmpresaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppBarLayout />
        <Breadcrumb
                style={{ marginLeft: '16px', color: 'black' }}
                items={[{ title: 'Empresas' }, { title: 'Pesquisar' }]}
            />
        {children}
      </body>
    </html>
  );
}