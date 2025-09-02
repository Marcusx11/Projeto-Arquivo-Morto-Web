import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/projeto_arquivo_morto"
});

const context = "/v1/empresas"

export const getEmpresas = async (nome: string, pagina: number) => {
  const response = await api.get(`${context}${pagina ? `?pagina=${pagina}` : ''}${nome ? `&nome=${nome}` : ''}`);
  return response.data;
};
