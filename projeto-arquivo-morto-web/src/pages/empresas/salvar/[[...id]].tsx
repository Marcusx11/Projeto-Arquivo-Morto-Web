import { useRouter } from "next/router";

export default function SalvarEmpresas() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Salvar Empresa</h1>
            {id && <p>ID: {id}</p>}
        </div>
    );
}