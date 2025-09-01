'use client';

import ContentContainerLayout from "@/components/contentcontainer/contentcontainer";
import { Col, Row, Divider, Typography, Form, FormProps, Input, Button, Flex } from 'antd';
import Link from "next/link";

export default function Empresas() {

    type FieldType = {
        nome?: string;
    };

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    return (
        <ContentContainerLayout breadCrumbList={[{ title: 'Empresas' }]}>
            <Row>
                <Col span={24}>
                    <Typography.Title level={3}>Empresas</Typography.Title>
                </Col>
            </Row>
            <Divider />
            <Form 
                name="formPesquisaEmpresa"
                onFinish={onFinish}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ nome: "" }}
                >
         
                <Form.Item<FieldType> label="Nome" layout="vertical">
                    <Input placeholder="Nome" />  
                </Form.Item>

                <Form.Item label={null} wrapperCol={{ offset: 6 }}>
                    <Flex gap="small" align="flex-end" justify="flex-end">
                        <Button type="primary" htmlType="submit">
                            Pesquisar
                        </Button>

                        <Link href="/empresas/salvar">
                            <Button type="default">
                                Novo
                            </Button>
                        </Link>
                    </Flex>
                </Form.Item>

                
            
            </Form>
        </ContentContainerLayout>
    );
}
