import { products } from "../data/products";


export const getProductByName = (name = '') => {


    if (name == '') {
        return products
    }

    name = name.toLowerCase();

    return (products.filter(product => product.name.toLowerCase().includes(name)).length > 0)
        ? products.filter(product => product.name.toLowerCase().includes(name))
        : [];

}
