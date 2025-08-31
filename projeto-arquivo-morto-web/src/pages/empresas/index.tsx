import EmpresaLayout from "./layout";
import { Col, Row, Divider, Typography, Form, FormProps, Input, Button, Flex } from 'antd';

export default function Empresas() {

    type FieldType = {
        nome?: string;
    };

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    return (
        <EmpresaLayout breadCrumbList={[{ title: 'Empresas' }, { title: 'Pesquisar' }]}>
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

                        <Button type="default">
                            Novo
                        </Button>
                    </Flex>
                </Form.Item>

                
            
            </Form>
        </EmpresaLayout>
    );
}
