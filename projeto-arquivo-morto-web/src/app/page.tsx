"use client";

import "@ant-design/v5-patch-for-react-19";
import { Card, Col, Row, Flex, Divider, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Flex
      justify="center"
      align="center"
      style={{ minHeight: "100vh", padding: "20px" }}
    >
      <Row gutter={24}></Row>
      <Col style={{ padding: "5px" }}>
        <Card
          hoverable
          style={{
            width: 340,
            height: 340,
            textAlign: "center",
            borderRadius: 8,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
          }}
        >
          <Link href="/empresas">
            <Image
              src="/office-building.png"
              alt="Company"
              width={200}
              height={200}
              style={{ display: "block", margin: "0 auto" }}
            />
            <Divider />
            <Typography.Title level={4}>Empresas</Typography.Title>
          </Link>
        </Card>
      </Col>

      <Col style={{ padding: "5px" }}>
        <Card
          hoverable
          style={{
            width: 340,
            height: 340,
            textAlign: "center",
            borderRadius: 8,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
          }}
        >
          <Link href="/usuarios">
            <Image
              src="/Sample_User_Icon.png"
              alt="User"
              width={200}
              height={200}
              style={{ display: "block", margin: "0 auto" }}
            />
            <Divider />
            <Typography.Title level={4}>Usuários</Typography.Title>
          </Link>
        </Card>
      </Col>
    </Flex>
  );
}
