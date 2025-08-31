'use client';

import React from 'react';
import { Layout, Menu } from 'antd';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { usePathname } from 'next/navigation';

const { Header } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#8eadd3ff',
};

const textStyle: React.CSSProperties = {
  float: 'left',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '18px',
  marginRight: '20px',
};

export default function AppBarLayout() {

    const pathname = usePathname();
    const router = useRouter();
    const [current, setCurrent] = useState(pathname ? pathname : '/');

    const handleClick = (e: { key: string }) => {
        setCurrent(e.key);
        router.push(e.key);
    };

    const menuItems = [
        { key: '/', label: 'Principal', style: { ...textStyle, fontSize: '14px' }, },
        { key: '/empresas', label: 'Empresas', style: { ...textStyle, fontSize: '14px' } },
    ];

    return (
        <Header style={headerStyle}>
            <div className="logo" style={textStyle}>
                Projeto Arquivo Morto
            </div>
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['/']}
                selectedKeys={[current]}
                items={menuItems}
                style={{ flex: 1, minWidth: 0, backgroundColor: '#8eadd3ff' }}
                onClick={handleClick}
            />
        </Header>
    );
}