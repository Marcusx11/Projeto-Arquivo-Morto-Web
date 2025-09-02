'use client';

import ContentContainerLayout from "@/components/contentcontainer/contentcontainer";
import { getEmpresas } from "@/services/empresaService";
import { Col, Row, Divider, Typography, Form, FormProps, Input, Button, Flex, Table, TableProps, Pagination } from 'antd';
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Empresas() {

    const [empresas, setEmpresas] = useState([]);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
        total: 0,
    });

    const fetchEmpresas = (nome: string, page: number) => {
        getEmpresas(nome, page).then(({ content, page, size, totalElements }) => {
            setEmpresas(content);
            setPagination({
                current: page + 1,
                pageSize: size,
                total: totalElements,
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

    const columns: TableProps<EmpresaDataType>['columns'] = [
        {
            title: 'Nome',
            dataIndex: 'nome',
            key: 'nome',
        }
    ];

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
                    dataSource={empresas} 
                    columns={columns} 
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
