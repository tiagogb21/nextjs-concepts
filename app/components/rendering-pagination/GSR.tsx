export const GithubGSR = async () => {
    const response = await fetch('https://api.github.com/users/tiagogb21');

    const user = await response.json();

    return (
        <div>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    )
}