'use client';

import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import ContentContainerLayout from '@/components/contentcontainer/layout';

export default function EmpresaLayout() {
    return (
        <Layout>
            <Breadcrumb
                style={{ margin: '16px 0', color: '#fff' }}
                items={[{ title: 'Empresas' }, { title: ' / Pesquisar' }]}
            />
           <ContentContainerLayout />
        </Layout>
    );
}