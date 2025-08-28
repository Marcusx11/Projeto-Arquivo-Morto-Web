'use client';

import React from 'react';
import { Layout, Menu } from 'antd';

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

    const menuItems = [
        { key: '1', label: 'Principal', style: { ...textStyle, fontSize: '14px' } },
        { key: '2', label: 'Empresas', style: { ...textStyle, fontSize: '14px' } },
    ];

    return (
        <Header style={headerStyle}>
            <div className="logo" style={textStyle}>
                Projeto Arquivo Morto
            </div>
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['1']}
                items={menuItems}
                style={{ flex: 1, minWidth: 0, backgroundColor: '#8eadd3ff' }}
            />
        </Header>
    );
}