// Para fazer a revalidação da página inteira
export const revalidate = 30;

export const GithubSSG = async () => {
    const response = await fetch('https://api.github.com/users/tiagogb21', {
        next: {
            // o next vai revalidar essa chamada única e não a página toda a cada 30s
            revalidate: 30,
        }
    });

    const user = await response.json();

    return (
        <div>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    )
}