import EmpresasFormTableData from "@/formtabledata/EmpresasFormTableData";
import ContentContainerLayout from "@/components/contentcontainer/contentcontainer";
import DataTableForm from "@/components/datatableform/datatableform";

export default function Empresas() {
  return (
    <ContentContainerLayout breadCrumbList={[{ title: "Empresas" }]}>
      <DataTableForm {...EmpresasFormTableData} />
    </ContentContainerLayout>
  );
}
