"use client"
import Link from 'next/link';
import {ArrayGames} from "@/Component/data.js";
import {Button} from "@/app/games/[id]/change/javascript";




export default function Page({params}) {



    const game = ArrayGames.find(game => String(game.id) === params.id);

    return (
        <div>
            <div>Change the info fo game: {game.name} </div>
            <Button/>
<div>
            <Link href="/games">
                Dashboard
            </Link>
</div>
        </div>
    );
}
