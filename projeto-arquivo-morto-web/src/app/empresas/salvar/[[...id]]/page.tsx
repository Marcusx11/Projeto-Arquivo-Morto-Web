'use client';

import { useRouter, useParams } from 'next/navigation';
import { Col, Divider, Row } from 'antd';
import { Typography } from 'antd';
import ContentContainerLayout from "@/components/contentcontainer/contentcontainer";

export default function SalvarEmpresas() {
    const params = useParams();
    const { id } = params;

    return (
        <ContentContainerLayout breadCrumbList={[{ title: 'Empresas' }, { title: 'Salvar' }]}>
            <Row>
                <Col span={24}>
                    <Typography.Title level={3}>Salvar Empresa</Typography.Title>
                </Col>
            </Row>
            <Divider />
        </ContentContainerLayout>
    );
}