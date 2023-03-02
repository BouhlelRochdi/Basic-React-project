import { createSlice } from "@reduxjs/toolkit"


// Initialize our state
const initialState = {
    categories: [],
    articleByCategorie: [],
    article: {},
    searchResult: []
}


// Create slice
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setCategories: (state, { payload }) => {
            return {
                ...state,
                categories: payload
            }
        },
        setarticleByCategorie: (state, { payload }) => {
            return {
                ...state,
                articleByCategorie: payload
            }
        },
        setarticleById: (state, { payload }) => {
            return {
                ...state,
                article: payload
            }
        },
        setSearchResult: (state, { payload }) => {
            return {
                ...state,
                searchResult: payload
            }
        },
        setEmptyStore: (state) => {
            return {
                ...state,
                searchResult: []
            }
        }
    }
})



// selectors
export const selectAllCategories = (state) => state.products.categories;
export const selectCategorieByName = (state) => state.products.articleByCategorie;
export const selectArticleById = (state) => state.products.article;
export const selectSearchResult = (state) => state.products.searchResult;


// Export slice
export default productsSlice.reducer;