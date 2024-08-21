// Para fazer a revalidação da página inteira
export const revalidate = 30;

export const GithubISR = async () => {
    const response = await fetch('https://api.github.com/users/tiagogb21', {
        cache: 'force-cache',
        // force-cache --> força a requisição ser cacheada, todas vez que um usuário acessar, ele vai receber a mesma versão da resposta

        // no-cache -->
        // no-store --> quero armazenar em cache de maneira global, para todos os usuários
    });

    const user = await response.json();

    return (
        <div>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    )
}