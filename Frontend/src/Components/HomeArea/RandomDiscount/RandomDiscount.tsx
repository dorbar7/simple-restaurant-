import { useEffect, useState } from "react";
import "./RandomDiscount.css";

function RandomDiscount(): JSX.Element {

    useEffect(() => {
        console.log("AJAX Call (Side-Effect)...");
    }, []); // [] is a dependency array - a list of variables to watch, if one changed - call again the callback.

    const [randomDiscount, setRandomDiscount] = useState(0);

    function generateRandomDiscount(): void {
        // ...
        setRandomDiscount(Math.floor(Math.random() * 91));
    }

    return (
        <div className="RandomDiscount Box">
            <button onClick={generateRandomDiscount}>Random Discount</button>
            <span> Random Discount: {randomDiscount}% </span>
        </div>
    );
}

export default RandomDiscount;
