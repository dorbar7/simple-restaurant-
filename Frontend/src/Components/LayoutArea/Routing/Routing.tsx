import { Navigate, Route, Routes } from "react-router-dom";
import About from "../../AboutArea/About/About";
import Login from "../../AuthArea/Login/Login";
import Logout from "../../AuthArea/Logout/Logout";
import Register from "../../AuthArea/Register/Register";
import ContactUs from "../../ContactUsArea/ContactUs/ContactUs";
import Home from "../../HomeArea/Home/Home";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import EditProduct from "../../ProductsArea/EditProduct/EditProduct";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>

                {/* Register */}
                <Route path="/register" element={<Register />} />

                {/* Login */}
                <Route path="/login" element={<Login />} />

                {/* Logout */}
                <Route path="/logout" element={<Logout />} />

                {/* Home: */}
                <Route path="/home" element={<Home />} />

                {/* Product List: */}
                <Route path="/products" element={<ProductList />} />

                {/* Product Details: */}
                <Route path="/products/details/:prodId" element={<ProductDetails />} />

                {/* Add Product: */}
                <Route path="/products/new" element={<AddProduct />} />

                {/* Edit Product: */}
                <Route path="/products/edit/:prodId" element={<EditProduct />} />

                {/* About: */}
                <Route path="/about" element={<About />} />

                {/* Contact Us: */}
                <Route path="/contact-us" element={<ContactUs />} />

                {/* Default Route: */}
                <Route path="/" element={<Navigate to="/home" />} />

                {/* Page Not Found: */}
                <Route path="*" element={<PageNotFound />} />

            </Routes>
        </div>
    );
}

export default Routing;
