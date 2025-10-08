"use client";

import ContentContainerLayout from "@/components/contentcontainer/contentcontainer";
import { Col, Divider, Row, Typography } from "antd";

export default function NotFound() {
  return (
    <ContentContainerLayout
      breadCrumbList={[{ title: "Página não encontrada" }]}
    >
      <Row>
        <Col span={24}>
          <Typography.Title level={3}>
            404 - Página não encontrada
          </Typography.Title>
        </Col>
      </Row>
      <Divider />
    </ContentContainerLayout>
  );
}
