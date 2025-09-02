'use client';

import ContentContainerLayout from "@/components/contentcontainer/contentcontainer";
import api from "@/libs/api";
import { Col, Row, Divider, Typography, Form, FormProps, Input, Button, Flex, Table, TableProps, Pagination } from 'antd';
import Link from "next/link";
import { useEffect, useState } from "react";
import EmpresasTableData from "@/tabledata/EmpresasTableData";

export default function Empresas() {
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
        total: 0,
        content: []
    });

    const fetchEmpresas = (nome: string, page: number) => {
        api.get(`/v1/empresas?pagina=${page}${(nome ? "&nome=" + nome : '')}`).then(({ data }) => {
            setPagination({
                current: page + 1,
                pageSize: data.size,
                total: data.totalElements,
                content: data.content
            });
        });
    }

    useEffect(() => {
        fetchEmpresas("", pagination.current - 1)
    }, []);

    type FieldType = {
        nome?: string;
    };

    interface EmpresaDataType {
        id: string;
        nome: string;
    }

    const novaPesquisa: FormProps<FieldType>['onFinish'] = (values) => {
        fetchEmpresas(values.nome || "", 0)
    };

    const [form] = Form.useForm();

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
                onFinish={novaPesquisa}
                labelCol={{ span: 4 }}
                initialValues={{ nome: "" }}
                >
         
                <Form.Item<FieldType> wrapperCol={{ span: 24 }} name="nome" label="Nome" layout="vertical">
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

                <Table<EmpresaDataType> 
                    dataSource={pagination.content} 
                    {...EmpresasTableData}
                    rowKey="id"
                    pagination={{
                        position: ['bottomCenter'],
                        current: pagination.current,
                        pageSize: pagination.pageSize,
                        total: pagination.total
                    }} />
            </Form>

            
        </ContentContainerLayout>
    );
}
