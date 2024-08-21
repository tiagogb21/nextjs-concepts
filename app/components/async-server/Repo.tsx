export const Repo = async () => {
    const response = await fetch('https://api.github.com/users/tiagogb21');

    const repos = await response.json();

    return (
        <div>
            <h1>Repo</h1>
            <pre>
                {
                    JSON.stringify(repos, null, 2)
                }
            </pre>
        </div>
    )
}