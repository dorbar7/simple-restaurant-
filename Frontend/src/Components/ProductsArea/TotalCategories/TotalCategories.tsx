import { useState } from "react";
import notifyService from "../../../Services/NotifyService";
import productsService from "../../../Services/ProductsService";
import "./TotalCategories.css";

function TotalCategories(): JSX.Element {

    const [totalCategories, setTotalCategories] = useState<number>(0);

    async function showTotalCategories() {
        try {
            const categories = await productsService.getAllCategories();
            setTotalCategories(categories.length);
        }
        catch(err: any) {
            notifyService.error(err);
        }
    }

    return (
        <div className="TotalCategories">

			<button onClick={showTotalCategories}>Total Categories</button>

            <span>Total Categories: {totalCategories}</span>

        </div>
    );
}

export default TotalCategories;
