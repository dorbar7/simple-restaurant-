class ProductModel {

    // public id: number = 0;
    // public id: number | undefined;
    // public id?: number; // optional
    // public id!: number; // can get also undefined

    public id: number; // "strictNullChecks": false inside tsconfig.json
    public name: string;
    public price: number;
    public stock: number;
    public imageName: string;
    public image: FileList;


    public static nameValidation = {
        required: { value: true, message: "Missing name" },
        minLength: { value: 3, message: "Name too short" },
        maxLength: { value: 100, message: "Name too long" }
    }

    // required, min --> 0, max --> 1000
    public static priceValidation = {
        required: { value: true, message: "Missing price" },
        min: { value: 0, message: "Price can't be negative" },
        max: { value: 1000, message: "Price can't exceed 1000" }
    }
    
    // required, min --> 0, max --> 10000
    public static stockValidation = {
        required: { value: true, message: "Missing stock" },
        min: { value: 0, message: "Stock can't be negative" },
        max: { value: 10000, message: "Stock can't exceed 10000" }
    }
}

export default ProductModel;
