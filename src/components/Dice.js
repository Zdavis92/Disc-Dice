import { React, useState } from "react";
import roll from "../utils/logic";

const Dice = () => {
    const [ results, setResults ] = useState(["Disc Type", "Disc Shot"]);
    const rollDice = () => {
        setResults(roll());
    }
    return (
        <>
        <p>{results[0]}</p>
        <p>{results[1]}</p>
        <button className="bg-blue-500" onClick={rollDice}>Roll!</button>
        </>
    )
}

export default Dice;