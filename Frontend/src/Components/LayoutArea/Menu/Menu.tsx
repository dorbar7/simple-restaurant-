import { NavLink } from "react-router-dom";
import TotalProducts from "../../ProductsArea/TotalProducts/TotalProducts";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact-us">Contact Us</NavLink>

            <TotalProducts />

        </div>
    );
}

export default Menu;
