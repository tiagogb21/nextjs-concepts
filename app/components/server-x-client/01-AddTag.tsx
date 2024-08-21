"use client";
import { FormEvent, useState } from "react";

// relacionado a hidratação

// Esse componente continua sendo criado do lado do servidor
// A diferença é que esse componente vai ser hidratado - vai ser injetado na aplicação para que os eventos funcionem
export function AddTag() {
    // react query => tanstack query => http state
    const [slug, setSlug] = useState<string>("");

    const handleCreateTag = async (e: FormEvent) => {
        e.preventDefault();

        if(!slug) return;

        await fetch("http://localhost:3333/tags", {
            method: 'POST',
            body: JSON.stringify({
                slug
            })
        });
    };

    return (
        <form action="" onSubmit={handleCreateTag}>
            <input
                type="text"
                name="slug"
                placeholder="slug da tag"
                id="add-tag"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
            />
            <button type="submit">
                Criar Tag
            </button>
        </form>
    );
}
