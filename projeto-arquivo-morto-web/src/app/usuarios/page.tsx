import ContentContainerLayout from "@/components/contentcontainer/contentcontainer";
import DataTableForm from "@/components/datatableform/datatableform";
import UsuariosFormTableData from "@/formtabledata/UsuariosFormTableData";

export default function Usuarios() {
  return (
    <ContentContainerLayout breadCrumbList={[{ title: "Usuários" }]}>
      <DataTableForm {...UsuariosFormTableData} />
    </ContentContainerLayout>
  );
}