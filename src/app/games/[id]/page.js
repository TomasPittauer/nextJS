import Link from "next/link";
import {ArrayGames} from "@/Component/data.js";
export default function  Game( {params} ) {

    const game = ArrayGames.find(game => String(game.id) === params.id);

    if (!game || !params.id) {
        return <div>Not found</div>;
    }
    return (
        <div>
            <h1>Game Details</h1>
            <p>Name: {game.name}</p>
            <p>Genre: {game.genre}</p>
            <Link href={`/games/${game.id}/change`}>
                Link to change
            </Link>
        </div>
    );
};