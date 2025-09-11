'use client';

import { useParams } from 'next/navigation';
import ContentContainerLayout from "@/components/contentcontainer/contentcontainer";
import Link from 'next/link';
import SaveForm from '@/components/saveform/saveform';
import EmpresasFormTableData from '@/formtabledata/EmpresasFormTableData';

export default function SalvarEmpresas() {
    const params = useParams();
    const { id } = params;

    return (
        <ContentContainerLayout breadCrumbList={[{ title: <Link href="/empresas">Empresas</Link> }, { title: 'Salvar' }]}>
            <SaveForm 
                {...EmpresasFormTableData} 
                title="Salvar Empresa" 
                id={id ? Number(id) : undefined} />
        </ContentContainerLayout>
    );
}