import { Breadcrumb } from "antd";
import { Content } from "antd/es/layout/layout";

export default function ContentContainerLayout({
  children,
  breadCrumbList,
}: Readonly<{
  children: React.ReactNode;
  breadCrumbList: { title: React.ReactNode | string }[];
}>) {
  return (
    <Content style={{ padding: "0 48px", marginBottom: "24px" }}>
      <Breadcrumb style={{ margin: "16px 0" }} items={breadCrumbList} />
      <div
        style={{
          background: "#ffffff",
          minHeight: 300,
          padding: 24,
          borderRadius: 8,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
        }}
      >
        {children}
      </div>
    </Content>
  );
}
