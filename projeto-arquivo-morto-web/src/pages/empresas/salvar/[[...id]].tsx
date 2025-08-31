import { useRouter } from "next/router";
import EmpresaLayout from "../layout";
import { Col, Row } from 'antd';
import { Typography } from 'antd';

export default function SalvarEmpresas() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <EmpresaLayout breadCrumbList={[{ title: 'Empresas' }, { title: 'Salvar' }]}>
            <h1>Salvar Empresa</h1>
            {id && <p>ID: {id}</p>}
        </EmpresaLayout>
    );
}