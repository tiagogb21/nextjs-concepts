import { revalidateTag } from "next/cache";
import { AddTagButton } from "../AddTagButton";

// react query => tanstack query => http state
export function AddTagServer() {

    // server action => ação executada pelo lado do servidor
    const handleCreateTag = async (form: FormData) => {
        'use server';

        const slug = form.get('slug');

        if(!slug) return;

        // Para desabilitar o botão enquanto a requisição está sendo feita:
        // Adicionamos um delay de 3s
        await new Promise(resolve => setTimeout(resolve, 3000))

        // a requisição vai para dentro do next e não para a api
        await fetch("http://localhost:3333/tags", {
            method: 'POST',
            body: JSON.stringify({
                slug
            })
        });

        revalidateTag('get-tags');
    };

    return (
        <form method="POST" action={handleCreateTag}>
            <input
                type="text"
                name="slug"
                placeholder="slug da tag"
                id="add-tag"
            />
            <AddTagButton />
        </form>
    );
}
