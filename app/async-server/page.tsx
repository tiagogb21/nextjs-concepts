import { Repo } from "../components/async-server/Repo";
import { User } from "../components/async-server/User";

export default function AsyncServer() {
    return (
        <div>
            <User />
            <Repo />
        </div>
    )
}