import "./Specials.css";

function Specials(): JSX.Element {

    function isWeekend(): boolean {
        const now = new Date();
        const day = now.getDay() + 1; // starts with 0
        return day >= 6;
    }

    function isTuesdayOrFriday(): boolean {
        const now = new Date();
        const day = now.getDay() + 1; // starts with 0
        return day === 3 || day === 6;
    }

    return (
        <div className="Specials Box">

            <span>Our specials: </span>

            {/* Conditional rendering - first way - ternary operator: */}
            {isWeekend() ? <span>Pizza | </span> : <span>Pasta | </span>}

            {/* Conditional rendering - second way - short circuit: */}
            {isTuesdayOrFriday() && <span>Sushi</span>}

        </div>
    );
}

export default Specials;
