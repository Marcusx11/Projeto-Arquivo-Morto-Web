"use client";

import { useParams } from "next/navigation";
import UsuariosFormTableData from "@/formtabledata/UsuariosFormTableData";
import ContentContainerLayout from "@/components/contentcontainer/contentcontainer";
import Link from "next/link";
import SaveForm from "@/components/saveform/saveform";

export default function SalvarUsuarios() {
  const params = useParams();
  const { id } = params;

  return (
    <ContentContainerLayout
      breadCrumbList={[
        { title: <Link href="/usuarios">Usuários</Link> },
        { title: "Salvar" },
      ]}
    >
      <SaveForm
        {...UsuariosFormTableData}
        title="Salvar Usuário"
        id={id ? Number(id) : undefined}
      />
    </ContentContainerLayout>
  );
}
