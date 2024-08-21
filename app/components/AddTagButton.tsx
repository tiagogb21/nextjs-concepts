'use client';

import { useFormStatus } from "react-dom";

export const AddTagButton = () => {
    // retorna um booleano, se está carregando ou não
    const { pending } = useFormStatus()

    return (
        <button type="submit" disabled={pending}>
            {pending ? 'Carregando...' : 'Salvar tag'}
        </button>
    )
}
