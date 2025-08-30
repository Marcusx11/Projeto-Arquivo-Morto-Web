import EmpresaLayout from "./layout";

export default function Empresas() {
    return (
        <EmpresaLayout breadCrumbList={[{ title: 'Empresas' }, { title: 'Pesquisar' }]}>
            <main><h1>Empresas</h1></main>
        </EmpresaLayout>
    );
}
