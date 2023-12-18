import BestSeller from "../BestSeller/BestSeller";
import Clock from "../Clock/Clock";
import ClockEx from "../ClockEx/ClockEx";
import Desserts from "../Desserts/Desserts";
import Discount from "../Discount/Discount";
import RandomDiscount from "../RandomDiscount/RandomDiscount";
import Recommendations from "../Recommendations/Recommendations";
import Sale from "../Sale/Sale";
import Specials from "../Specials/Specials";
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">

            {/* Interpolation: */}
			<Discount />

            {/* Conditional Rendering: */}
            <Specials />

            {/* Displaying Lists: */}
            <Desserts />

            {/* Events: */}
            <Recommendations />

            {/* Props: */}
            <Sale category="Beverages" percent={10} />
            <Sale category="Candies" percent={15} />

            {/* State: */}
            <BestSeller />
            <RandomDiscount />

            {/* useEffect: */}
            <Clock />

            {/* Class Component: */}
            <ClockEx format="12h" />

        </div>
    );
}

export default Home;
