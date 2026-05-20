"use client";

import { Col, Row, Flex } from "antd";
import "@ant-design/v5-patch-for-react-19";
import CardLink from "@/components/cardlink/cardlink";

export default function Home() {
  return (
    <Flex
      justify="center"
      align="center"
      style={{ minHeight: "100vh", padding: "20px" }}
    >
      <Row gutter={24}></Row>
      <Col style={{ padding: "5px" }}>
        <CardLink
          route="/empresas"
          imageSrc="/office-building.png"
          title="Empresas"
        />
      </Col>

      <Col style={{ padding: "5px" }}>
        <CardLink
          route="/usuarios"
          imageSrc="/Sample_User_Icon.png"
          title="Usuários"
        />
      </Col>
    </Flex>
  );
}
