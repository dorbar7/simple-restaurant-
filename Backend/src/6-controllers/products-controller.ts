import express, { Request, Response, NextFunction } from "express";
import ProductModel from "../4-models/product-model";
import productsLogic from "../5-logic/products-logic";

const router = express.Router(); // Capital R

// GET http://localhost:3001/api/products
router.get("/products", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const products = await productsLogic.getAllProducts();
        response.json(products);
    }
    catch (err: any) {
        next(err);
    }
});

// GET http://localhost:3001/api/products/:id
router.get("/products/:id([0-9]+)", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const id = +request.params.id;
        const product = await productsLogic.getOneProduct(id);
        response.json(product);
    }
    catch (err: any) {
        next(err);
    }
});

// POST http://localhost:3001/api/products
router.post("/products", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const product = new ProductModel(request.body);
        const addedProduct = await productsLogic.addProduct(product);
        response.status(201).json(addedProduct);
    }
    catch (err: any) {
        next(err);
    }
});

// PUT http://localhost:3001/api/products/:id
router.put("/products/:id([0-9]+)", async (request: Request, response: Response, next: NextFunction) => {
    try {
        request.body.id = +request.params.id;
        const product = new ProductModel(request.body);
        const updatedProduct = await productsLogic.updateProduct(product);
        response.json(updatedProduct);
    }
    catch (err: any) {
        next(err);
    }
});

// DELETE http://localhost:3001/api/products/:id
router.delete("/products/:id([0-9]+)", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const id = +request.params.id;
        await productsLogic.deleteProduct(id);
        response.sendStatus(204);
    }
    catch (err: any) {
        next(err);
    }
});

// GET http://localhost:3001/api/products-cheaper-than/:minPrice
router.get("/products-cheaper-than/:minPrice", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const minPrice = +request.params.minPrice;
        const products = await productsLogic.getProductsCheaperThan(minPrice);
        response.json(products);
    }
    catch (err: any) {
        next(err);
    }
});

// GET http://localhost:3001/api/products-expensive-than?maxPrice=___
router.get("/products-expensive-than", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const maxPrice = +request.query.maxPrice;
        const products = await productsLogic.getProductsExpensiveThan(maxPrice);
        response.json(products);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;
