


export const setCategoriesAction = (payload) => {
    return {
        type: 'products/setCategories',
        payload: payload
    }
}

export const setarticleByCategorieAction = (payload) => {
    return {
        type: 'products/setarticleByCategorie',
        payload: payload
    }
}

export const setarticleByIdAction = (payload) => {
    return {
        type: 'products/setarticleById',
        payload: payload
    }
}

export const setSearchResultAction = (payload) => {
    return {
        type: 'products/setSearchResult',
        payload: payload
    }
}

export const emptySearchInputAction = () => {
    return {
        type: 'products/setEmptyStore'
    }
}