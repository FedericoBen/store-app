import { products } from "../data/products";


export const getProductById = (Id='') =>{
    return products.find(prod=>prod.id === Id);
}