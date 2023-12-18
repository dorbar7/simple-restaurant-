import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import notifyService from "../../../Services/NotifyService";
import productsService from "../../../Services/ProductsService";
import useVerifyLoggedIn from "../../../Utils/useVerifyLoggedIn";
import "./AddProduct.css";

function AddProduct(): JSX.Element {

    // useVerifyLoggedIn();

    const { register, handleSubmit, formState } = useForm<ProductModel>();
    const navigate = useNavigate();

    async function send(product: ProductModel) {
        try {
            await productsService.addProduct(product);
            notifyService.success("Product has been successfully added");
            navigate("/products");
        }
        catch (err: any) {
            notifyService.error(err);
        }
    }

    return (
        <div className="AddProduct Box">

            <form onSubmit={handleSubmit(send)}>

                <h2>Add Product</h2>

                <label>Name: </label>
                <input type="text" {...register("name", ProductModel.nameValidation)} />
                <span className="Error">{formState.errors.name?.message}</span>

                <label>Price: </label>
                <input type="number" {...register("price", ProductModel.priceValidation)} />
                <span className="Error">{formState.errors.price?.message}</span>

                <label>Stock: </label>
                <input type="number" {...register("stock", ProductModel.stockValidation)} />
                <span className="Error">{formState.errors.stock?.message}</span>

                <label>Image: </label>
                <input type="file" accept="image/*" {...register("image")} />

                <button>Add</button>

            </form>

        </div>
    );
}

export default AddProduct;
