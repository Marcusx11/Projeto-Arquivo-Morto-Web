const EmpresasFormTableData = {
    columns: [
        {
            title: 'Nome',
            dataIndex: 'nome',
            key: 'nome',
        }
    ],
    fieldsValue: [
        { name: "nome", label: "Nome", initialValue: "", type: "text", wrapperCol: { span: 24 } }
    ],
    formValues: [
        { name: "nome", label: "Nome", initialValue: "", type: "text", wrapperCol: { span: 24 } }
    ],
    context: "/api/v1/empresas",
    title: "Empresas",
    saveTitle: "Nova Empresa",
    saveNewRoute: "/empresas/salvar"
}

export default EmpresasFormTableData;