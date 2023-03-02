import { getAllCategories, getArticleById, getCategoriesByName, searchApi } from "../../services/products.services";
import { setarticleByCategorieAction, setarticleByIdAction, setCategoriesAction, setSearchResultAction } from "../actions/products.actions";



export const setCategories = () => async (dispatch) => {
    // this will return data from service
    let categories = await getAllCategories();
    // after return data we launch an action that with it we trigger another action
    dispatch(setCategoriesAction(categories));
}

export const setCategorieByName = (name) => async (dispatch) => {
    // this will return data from service
    let categorieByName = await getCategoriesByName(name);
    // after return data we launch an action that with it we trigger another action
    dispatch(setarticleByCategorieAction(categorieByName));
}

export const setArticleById = (id) => async (dispatch) => {
    // this will return data from service
    let articleById = await getArticleById(id);
    // after return data we launch an action that with it we trigger another action
    dispatch(setarticleByIdAction(articleById));
}

export const searchAction = (data) => async (dispatch) => {
    // this will return data from service
    let result = await searchApi(data);
    // after return data we launch an action that with it we trigger another action
    dispatch(setSearchResultAction(result));
}