import React, { useState } from "react";
import { ArrayGames } from "@/Component/data";

export function Button({ params }) {
    const [value, changeValue] = useState("");
    const [games, setGames] = useState(ArrayGames);


    function zmena(event) {
        changeValue(event.target.value);
    }

    function funkce() {
        alert(value);

        const updatedGames = [...games];
        updatedGames[params.id].genre = value;
        setGames(updatedGames);
    }

    let x = "zde";
    return (
        <>
            <input type="text" className="text" value={value} onChange={zmena} />
            <button onClick={funkce}>{x}</button>
        </>
    );
}