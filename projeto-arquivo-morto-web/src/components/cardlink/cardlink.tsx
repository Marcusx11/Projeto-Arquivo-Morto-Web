"use client";

import { Card, Col, Row, Flex, Divider, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function CardLink({
  route,
  imageSrc,
  title,
}: Readonly<{
  route: string;
  imageSrc: string;
  title: string;
}>) {
  return (
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
      <Link href={route}>
        <Image
          src={imageSrc}
          alt={title}
          width={200}
          height={200}
          style={{ display: "block", margin: "0 auto" }}
        />
        <Divider />
        <Typography.Title level={4}>{title}</Typography.Title>
      </Link>
    </Card>
  );
}
