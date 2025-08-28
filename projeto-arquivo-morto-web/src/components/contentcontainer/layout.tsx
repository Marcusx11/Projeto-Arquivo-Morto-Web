'use client';

import React from 'react';
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;


export default function ContentContainerLayout() {
    return (
        <Content style={{ padding: '0 48px' }}>
            <div
            style={{
                background: '#ffffff',
                minHeight: 300,
                padding: 24,
                borderRadius: 8,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
            }}
            >
                Content
            </div>
      </Content>
    );
}