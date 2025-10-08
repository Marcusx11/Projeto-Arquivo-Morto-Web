"use client";

import React, { useEffect } from "react";
import { Layout, Menu } from "antd";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const { Header } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#8eadd3ff",
};

const textStyle: React.CSSProperties = {
  float: "left",
  color: "white",
  fontWeight: "bold",
  fontSize: "18px",
  marginRight: "20px",
};

export default function AppBarLayout() {
  const pathname = usePathname();

  const retornarRotaCorrespondente = (rota: string): string => {
    if (rota.includes("/empresas")) {
      return "/empresas";
    }

    return "/";
  };

  useEffect(() => {
    if (pathname) {
      setCurrent(retornarRotaCorrespondente(pathname));
    }
  }, [pathname]);

  const [current, setCurrent] = useState(
    pathname ? retornarRotaCorrespondente(pathname) : "/"
  );

  const handleClick = (e: { key: string }) => {
    setCurrent(e.key);
  };

  const menuItems = [
    {
      key: "/",
      label: <Link href="/">Principal</Link>,
      style: { ...textStyle, fontSize: "14px" },
    },
    {
      key: "/empresas",
      label: <Link href="/empresas">Empresas</Link>,
      style: { ...textStyle, fontSize: "14px" },
    },
  ];

  return (
    <Header style={headerStyle}>
      <div className="logo" style={textStyle}>
        Projeto Arquivo Morto
      </div>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["/"]}
        selectedKeys={[current]}
        items={menuItems}
        style={{ flex: 1, minWidth: 0, backgroundColor: "#8eadd3ff" }}
        onClick={handleClick}
      />
    </Header>
  );
}
