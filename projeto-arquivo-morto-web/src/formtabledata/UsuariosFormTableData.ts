const UsuariosFormTableData = {
  columns: [
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
    },
    {
      title: "Login",
      dataIndex: "login",
      key: "login",
    },
  ],
  fieldsValue: [
    {
      name: "nome",
      label: "Nome",
      initialValue: "",
      type: "text",
      wrapperCol: { span: 24 },
    },
    {
      name: "login",
      label: "Login",
      initialValue: "",
      type: "text",
      wrapperCol: { span: 24 },
    },
    {
      name: "senha",
      label: "Senha",
      initialValue: "",
      type: "text",
      wrapperCol: { span: 24 },
      esconderFiltro: true,
      esconderEdicao: true,
    },
  ],
  context: "/api/v1/usuarios",
  title: "Usuários",
  saveTitle: "Novo Usuário",
  saveNewRoute: "/usuarios/salvar",
};

export default UsuariosFormTableData;
