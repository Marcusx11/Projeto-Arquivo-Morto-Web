'use client';

import { useEffect, useState } from "react";
import api from "@/libs/api";
import { Col, Row, Divider, Typography, Form, Input, Button, Flex, Spin, message } from 'antd';
import FieldsValueData from "@/models/FieldsValueData";
import { useRouter } from "next/navigation";

export default function SaveForm({
    title,
    id,
    formValues,
    context
}: Readonly<{
    title: string;
    id?: number;
    formValues: FieldsValueData[];
    context: string;
}>) {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [initialValues, setInitialValues] = useState({});
    const router = useRouter();

    const getDataById = (id: number) => {
        setLoading(true);
        
        api.get(`${context}/${id}`).then(({ data }) => {
            form.setFieldsValue(data);
        }).finally(() => {
            setLoading(false);
        });
    }

    useEffect(() => {
        if (id) {
            getDataById(id);
        } else {
            setInitialValues(formValues.reduce((acc, e) => {
                acc[e.name] = e.initialValue;
                return acc;
            }, {} as Record<string, string | number | boolean>));
        }
    }, []);

    const saveData = () => {
        setLoading(true);
        const values = form.getFieldsValue();
        const request = id ? api.put(`${context}/${id}`, values) : api.post(context, values);

        request.then(() => {
            alert('Salvo com sucesso!');
            // TODO -> Estado global de gerenciamento de mensagens
            router.back();
        }).finally(() => {
            setLoading(false);
        });
    }

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
                onFinish={saveData}
                labelCol={{ span: 4 }}
                initialValues={initialValues}
                disabled={loading}  
                >
                {formValues.map(field => {
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

                <Form.Item label={null} wrapperCol={{ offset: 0 }}>
                    <Flex vertical gap="small" style={{ width: '100%' }}>
                        <Button disabled={loading} type="primary" htmlType="submit" block>
                            Salvar
                        </Button>
                    </Flex>
                </Form.Item>

            </Form>

            <Spin spinning={loading} size="large" tip="Salvando..." fullscreen />
        </>
    );
}