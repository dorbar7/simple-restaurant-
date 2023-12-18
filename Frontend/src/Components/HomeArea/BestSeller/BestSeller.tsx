import { useState } from "react";
import "./BestSeller.css";

function BestSeller(): JSX.Element {

    // Long syntax - without Destructuring Assignment
    const nameArr = useState(""); // "" is the initial value
    const name = nameArr[0]; // The value we need.
    const setName = nameArr[1]; // A function for changing the value and for rerendering the component.

    // Short syntax - using Destructuring Assignment:
    const [totalItems, setTotalItems] = useState(0);

    function showBestSeller(): void {
        setName("Exotic Liquids"); // a. change the value, b. rerender the component
        setTotalItems(17); // a. change the value, b. rerender the component
    }

    return (
        <div className="BestSeller Box">

			<button onClick={showBestSeller}>Best Seller</button>

            <span> Name: {name} | </span>
            <span> Total Items: {totalItems}</span>

        </div>
    );
}

export default BestSeller;
