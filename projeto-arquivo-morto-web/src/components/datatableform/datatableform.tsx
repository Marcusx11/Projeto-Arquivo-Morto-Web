'use client';

import { useEffect, useState, useRef } from "react";
import api from "@/libs/api";
import { Col, Row, Divider, Typography, Form, Input, Button, Flex, Table, Space, Tooltip } from 'antd';
import Link from "next/link";
import FieldsValueData from "@/models/FieldsValueData";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import ConfirmModal, { ConfirmModalRef } from "../confirmmodal/confirmmodal";

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

    interface DataTableType {
        id: number;
        [key: string]: string | number | boolean;
    }

    const confirmDialogRef = useRef<ConfirmModalRef>(null);
    const [form] = Form.useForm();

    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
        total: 0,
        content: []
    });

    const [loading, setLoading] = useState(false);

    const columnsWithActions = [...columns, {
        title: 'Ações',
        key: 'acoes',
        render: (record: DataTableType) => (
            <Space size="middle">
                <Tooltip title="Editar Registro">
                    <Link href={`${saveNewRoute}/${record.id}`}>
                        <Button disabled={loading} type="primary">
                            <EditFilled />
                        </Button>
                    </Link>
                </Tooltip>
                
                <Tooltip title="Excluir Registro">
                    <Button danger onClick={() => handleDelete(record.id)} disabled={loading} type="primary">
                        <DeleteFilled />
                    </Button>
                </Tooltip>        
            </Space>
        ),
    }];

    const [selectedId, setSelectedId] = useState<number | null>(null);

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

        api.get(`${context}?page=${page - 1}&size=${pagination.pageSize}${requestParams}`).then(({ data }) => {
            console.log(data);
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

    const handleDelete = (id: number) => {
        setSelectedId(id);
        confirmDialogRef.current?.show();
    }

    const deleteData = (id?: number) => {
        setLoading(true);   

        if (id) {
            api.delete(`${context}/${id}`).then(() => {
                fetchData(pagination.current);
            }).finally(() => {
                setLoading(false);
                setSelectedId(null);
            });
        }
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
                        <Button disabled={loading} type="primary" htmlType="submit">
                            Pesquisar
                        </Button>

                        <Link href={saveNewRoute}>
                            <Button disabled={loading} type="default">
                                Novo
                            </Button>
                        </Link>
                    </Flex>
                </Form.Item>

                <Table<DataTableType>
                    columns={columnsWithActions}
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

                <ConfirmModal
                    ref={confirmDialogRef}
                    onConfirmAction={() => {
                        deleteData(selectedId ?? undefined);
                    }}
                    title="Deletar Registro"
                    message="Tem certeza de que deseja deletar o registro?"
                />  
            </Form>            
        </>
    );
}