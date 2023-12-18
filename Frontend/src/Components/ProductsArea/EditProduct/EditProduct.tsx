import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import notifyService from "../../../Services/NotifyService";
import productsService from "../../../Services/ProductsService";
import "./EditProduct.css";

function EditProduct(): JSX.Element {

    const { register, handleSubmit, formState, setValue } = useForm<ProductModel>();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        const id = +params.prodId; // Same name as router parameter.
        productsService.getOneProduct(id)
            .then(product => {
                setValue("id", product.id);
                setValue("name", product.name);
                setValue("price", product.price);
                setValue("stock", product.stock);
            })
            .catch(err => notifyService.error(err));
    }, []);

    async function send(product: ProductModel) {
        try {
            await productsService.updateProduct(product);
            notifyService.success("Product has been successfully updated");
            navigate("/products");
        }
        catch (err: any) {
            notifyService.error(err);
        }
    }

    return (
        <div className="EditProduct Box">

            <form onSubmit={handleSubmit(send)}>

                <h2>Edit Product</h2>

                <input type="hidden" {...register("id")} />

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

                <button>Update</button>

            </form>

        </div>
    );
}

export default EditProduct;
