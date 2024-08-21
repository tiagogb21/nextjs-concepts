import { AddTag } from "./components/server-x-client/01-AddTag";
import { Tags } from "./components/server-side/01-Tags";
import { AddTagServer } from "./components/server-x-client/02-AddTag";
import { Suspense } from "react";
import { GithubGSR } from "./components/rendering-pagination/GSR";

export default function Home() {
    return (
        <main className="min-h-screen">
            <div className="container mx-auto p-10">
                <Suspense fallback={<p>Carregando tags...</p>}>
                    <Tags />
                </Suspense>
                <AddTag />
                <AddTagServer />
                <GithubGSR />
            </div>
        </main>
    );
}
