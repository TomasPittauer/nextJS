"use client"

import Link from 'next/link';
import {ArrayGames} from "@/Component/data.js";
import {useState} from "react";

export default function Games() {

    const [games, setGames] = useState(ArrayGames)


    function addGame(game) {
        setGames([games, game])
    }
    return (
        <div>
            <h1>Seznam her</h1>
            <ul>
                {games.map((game) => (
                    <li key={game.id}>
                        <Link href={`/games/${game.id}`}>
                            {game.name}
                        </Link>{' '}
                         {game.genre}
                    </li>
                ))}
            </ul>
        </div>
    );
}
