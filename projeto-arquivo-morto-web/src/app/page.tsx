"use client";

import '@ant-design/v5-patch-for-react-19';
import { Card, Col, Row, Flex, Divider, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Flex justify='center' align='center' style={{ minHeight: '100vh', padding: '20px' }}>
      <Row gutter={24}></Row>
      <Col span={8}>
        <Card 
          hoverable
          style={{ width: 340, height: 340, textAlign: 'center', justifyContent: "center",
             borderRadius: 8, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)' }}
          >
          <Link href="/empresas">
            <Image src="/office-building.png" alt="Company" width={200} height={200} style={{ display: 'block', margin: '0 auto' }} />
            <Divider />
            <Typography.Title level={4}>Empresas</Typography.Title>
          </Link>
        </Card>
      </Col>
    </Flex>
  );
}
