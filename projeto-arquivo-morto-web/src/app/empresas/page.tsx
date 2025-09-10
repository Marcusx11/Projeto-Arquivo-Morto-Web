import EmpresasTableData from "@/tabledata/EmpresasTableData";
import DataTableForm from "@/components/datatableform/datatableform";
import ContentContainerLayout from "@/components/contentcontainer/contentcontainer";

export default function Empresas() {
    return (
        <ContentContainerLayout breadCrumbList={[{ title: 'Empresas' }]}>
            <DataTableForm {...EmpresasTableData} />
        </ContentContainerLayout>
    );
}
