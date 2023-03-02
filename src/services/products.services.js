import axios from "axios";



export const getAllCategories = async () => {
    const list = await axios.get('https://dummyjson.com/products/categories');
    return list.data
};

export const getCategoriesByName = async (name) => {
    const categorie = await axios.get(`https://dummyjson.com/products/category/${name}`);
    return categorie.data.products;
};

export const getArticleById = async (id) => {
    const categorie = await axios.get(`https://dummyjson.com/products/${id}`);
    return categorie.data;
};

export const searchApi = async (data) => {
    const result = await axios.get(`https://dummyjson.com/products/search?q=${data}`);
    console.log('data: ', result.data.products);
    return result.data.products;
};