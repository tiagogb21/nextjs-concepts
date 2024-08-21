interface ITag {
    id: string;
    slug: string;
}

// Server Component - componente renderizado pelo lado de servidor - antes de chegar ao navegador, a interface já foi criada
// Se desabilitarmos o js do navegador, vai continuar funcionando normalemnte, por que o elemento já foi criado
//podem ser asincronos e podemos fazer chamadas http diretamente dentro deles
export async function Tags() {
    const dataTag = async () => {
        const response = await fetch('http://localhost:3333/tags', {
            next: {
                // tags --> forma como o next avalia um item, é como se estivesse dando um id único
                tags: ['get-tags']
            }
        });

        return response.json();
    }

    const data: ITag[] = await dataTag();

    return (
        <ul>
            {
                data.map(({id, slug}) => (
                    <li key={id}>{slug}</li>
                ))
            }
        </ul>
    )
}