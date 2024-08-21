export const User = async () => {
    const response = await fetch('https://api.github.com/users/tiagogb21/repos');

    const repos = await response.json();

    return (
        <div>
            <h1>User</h1>
            <pre>
                {
                    JSON.stringify(repos, null, 2)
                }
            </pre>
        </div>
    )
}