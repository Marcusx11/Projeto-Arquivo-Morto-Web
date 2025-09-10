const EmpresasTableData = {
    columns: [
        {
            title: 'Nome',
            dataIndex: 'nome',
            key: 'nome',
        }
    ],
    fieldsValue: [
        { filterName: "nome", label: "Nome", initialValue: "", filterType: "text" }
    ],
    context: "/api/v1/empresas",
    title: "Empresas",
    saveNewRoute: "/empresas/salvar"
}

export default EmpresasTableData;