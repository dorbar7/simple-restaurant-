import { useEffect, useState } from "react";
import { productsStore } from "../../../Redux/ProductsState";
import "./TotalProducts.css";

function TotalProducts(): JSX.Element {

    const [count, setCount] = useState<number>(0);

    useEffect(() => {

        // Take current products when component first displayed:
        setCount(productsStore.getState().products.length);

        // Listen to any change in the products global state:
        const unsubscribe = productsStore.subscribe(() => {

            // Take current products when there is a change:
            setCount(productsStore.getState().products.length);

        });

        return () => {

            // Unsubscribe: 
            unsubscribe();
        };

    }, []);

    if(count === 0) return null;

    return (
        <div className="TotalProducts Box">
            <span>Total Products: {count}</span>
        </div>
    );
}

export default TotalProducts;
