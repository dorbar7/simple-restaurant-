class Config {
    public productsUrl = "http://localhost:3001/api/products/";
    public productImagesUrl = "http://localhost:3030/api/products/images/";
    public registerUrl = "http://localhost:3030/api/auth/register/";
    public loginUrl = "http://localhost:3030/api/auth/login/";
    public categoriesUrl = "http://localhost:3030/api/categories/";
}

const appConfig = new Config(); // Singleton

export default appConfig;
