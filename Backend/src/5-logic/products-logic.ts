import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import { ResourceNotFoundErrorModel, ValidationErrorModel } from "../4-models/error-models";
import ProductModel from "../4-models/product-model";

// Get all products: 
async function getAllProducts(): Promise<ProductModel[]> {

    // Creating the query: 
    const sql = `
        SELECT ProductID AS id,
            ProductName AS name,
            UnitPrice AS price,
            UnitsInStock AS stock
        FROM products
    `;

    // Execute: 
    const products = await dal.execute(sql);

    // Return:
    return products;
}

// Get one product: 
async function getOneProduct(id: number): Promise<ProductModel> {

    // Creating the query: 
    const sql = `
        SELECT ProductID AS id,
            ProductName AS name,
            UnitPrice AS price,
            UnitsInStock AS stock
        FROM products
        WHERE ProductId = ${id}
    `;

    // Execute: 
    const products = await dal.execute(sql); // Always returns array

    // Extract first (and only) product: 
    const product = products[0];

    // If not exist: 
    if(!product) throw new ResourceNotFoundErrorModel(id);

    // Return:
    return product;
}

// Add new product: 
async function addProduct(product: ProductModel): Promise<ProductModel> {

    // Validation: 
    const error = product.validate();
    if(error) throw new ValidationErrorModel(error);

    // Query: 
    const sql = `
        INSERT INTO products(ProductName, UnitPrice, UnitsInStock)
        VALUES('${product.name}', ${product.price}, ${product.stock})
    `;

    // Execute: 
    const info: OkPacket = await dal.execute(sql);

    // Set auto increment id back to product: 
    product.id = info.insertId

    // Return:
    return product;
}

// Update existing product: 
async function updateProduct(product: ProductModel): Promise<ProductModel> {

    // Validation: 
    const error = product.validate();
    if(error) throw new ValidationErrorModel(error);

    // Query: 
    const sql = `
        UPDATE products SET 
            ProductName = '${product.name}',
            UnitPrice = ${product.price},
            UnitsInStock = ${product.stock}
        WHERE ProductID = ${product.id}
    `;

    // Execute: 
    const info: OkPacket = await dal.execute(sql);

    // If not exist:
    if(info.affectedRows === 0) throw new ResourceNotFoundErrorModel(product.id);

    // Return:
    return product;
}

// Delete product:
async function deleteProduct(id: number): Promise<void> {

    // Query: 
    const sql = `DELETE FROM products WHERE ProductID = ${id}`;

    // Execute: 
    const info: OkPacket = await dal.execute(sql);

    // If not exist:
    if(info.affectedRows === 0) throw new ResourceNotFoundErrorModel(id);
}

// Get products cheaper than min price: 
async function getProductsCheaperThan(minPrice: number): Promise<ProductModel[]> {

    // Creating the query: 
    const sql = `
        SELECT ProductID AS id,
            ProductName AS name,
            UnitPrice AS price,
            UnitsInStock AS stock
        FROM products
        WHERE UnitPrice <= ${minPrice}
        ORDER BY UnitPrice
    `;

    // Execute: 
    const products = await dal.execute(sql);

    // Return:
    return products;
}

// Get products expensive than max price: 
async function getProductsExpensiveThan(maxPrice: number): Promise<ProductModel[]> {

    // Creating the query: 
    const sql = `
        SELECT ProductID AS id,
            ProductName AS name,
            UnitPrice AS price,
            UnitsInStock AS stock
        FROM products
        WHERE UnitPrice >= ${maxPrice}
        ORDER BY UnitPrice
    `;

    // Execute: 
    const products = await dal.execute(sql);

    // Return:
    return products;
}

export default {
    getAllProducts,
    getOneProduct,
    addProduct,
    updateProduct,
    deleteProduct,
    getProductsCheaperThan,
    getProductsExpensiveThan
};



