import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import notifyService from "../../../Services/NotifyService";
import productsService from "../../../Services/ProductsService";
import appConfig from "../../../Utils/Config";
import "./ProductDetails.css";

function ProductDetails(): JSX.Element {

    const params = useParams();
    const [product, setProduct] = useState<ProductModel>();
    const navigate = useNavigate();

    useEffect(() => {
        const id = +params.prodId; // prodId must be same name as declared in the routing!
        productsService.getOneProduct(id)
            .then(product => setProduct(product))
            .catch(err => notifyService.error(err));
    }, []);

    async function deleteProduct(id: number) {
        try {
            await productsService.deleteProduct(id);
            notifyService.success("Product has been deleted");
            navigate("/products");
        }
        catch(err: any) {
            notifyService.error(err);
        }
    }

    return (
        <div className="ProductDetails">

            <h2>Product Details</h2>

            {product &&
                <>
                    {/* <h3>Name: {product?.name}</h3> */}
                    <h3>Name: {product.name}</h3>
                    <h3>Price: {product.price}</h3>
                    <h3>Stock: {product.stock}</h3>
                    <img src={appConfig.productImagesUrl + product.imageName} />
                </>
            }

            <br />
            <br />

            <NavLink to="/products">Back</NavLink>
            <span> | </span>
            <NavLink to={"/products/edit/" + product?.id}>Edit</NavLink>
            <span> | </span>
            <NavLink to="#" onClick={() => deleteProduct(product.id)}>Delete</NavLink>

        </div>
    );
}

export default ProductDetails;
