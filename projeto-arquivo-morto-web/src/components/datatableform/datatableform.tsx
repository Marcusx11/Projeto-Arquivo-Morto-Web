'use client';

import { useEffect, useState } from "react";
import api from "@/libs/api";
import { Col, Row, Divider, Typography, Form, Input, Button, Flex, Table } from 'antd';
import Link from "next/link";
import FieldsValueData from "@/models/FieldsValueData";

export default function DataTableForm({
    columns,
    fieldsValue,
    context,
    title,
    saveNewRoute
}: Readonly<{
    columns: object[];
    fieldsValue: FieldsValueData[];
    context: string;
    title: string;
    saveNewRoute: string;
}>) {

    const [form] = Form.useForm();
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
        total: 0,
        content: []
    });
    const [loading, setLoading] = useState(false);

    const initialValues = fieldsValue.reduce((acc, e) => {
        acc[e.name] = e.initialValue;
        return acc;
    }, {} as Record<string, string | number | boolean>);

    const construirRequestParams = () => {
        const filters = form.getFieldsValue();
        let params = ""
        Object.entries(filters).forEach(([key, value]) => {
            if (value) {
                params += `&${key}=${value}`;
            }
        });
        return params;
    }

    const fetchData = (page: number) => {
        setLoading(true);
        const requestParams = construirRequestParams();

        api.get(`${context}?pagina=${page - 1}${requestParams}`).then(({ data }) => {
            setPagination({
                current: data.page + 1,
                pageSize: data.size,
                total: data.totalElements,
                content: data.content
            });
        }).finally(() => {
            setLoading(false);
        });
    }

    useEffect(() => {
        fetchData(1);
    }, []);
    
    return (
        <>
            <Row>
                <Col span={24}>
                    <Typography.Title level={3}>{title}</Typography.Title>
                </Col>
            </Row>
            <Divider />
            <Form
                name="form"
                form={form}
                onFinish={() => fetchData(1)}
                labelCol={{ span: 4 }}
                initialValues={initialValues}
                disabled={loading}  
                >
                {fieldsValue.map(field => {
                    if (field.type === "text") {
                        return (
                            <Form.Item
                                key={field.name}
                                label={field.label}
                                name={field.name}
                                layout="vertical"
                                wrapperCol={field.wrapperCol}
                            >
                                <Input placeholder={field.label} />
                            </Form.Item>
                        );
                    }
                })}

                <Form.Item label={null} wrapperCol={{ offset: 6 }}>
                    <Flex gap="small" align="flex-end" justify="flex-end">
                        <Button type="primary" htmlType="submit">
                            Pesquisar
                        </Button>

                        <Link href={saveNewRoute}>
                            <Button type="default">
                                Novo
                            </Button>
                        </Link>
                    </Flex>
                </Form.Item>

                <Table
                    columns={columns}
                    dataSource={pagination.content}
                    rowKey="id"
                    loading={loading}
                    pagination={{
                        position: ['bottomCenter'],
                        current: pagination.current,
                        pageSize: pagination.pageSize,
                        total: pagination.total,
                        onChange: (page) => fetchData(page)
                    }}
                />

            </Form>
        </>
    );
}