import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { setCategories } from '../store/action-api/products';
import { selectAllCategories } from '../store/reducers/products.reducer';

function Categories() {

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCategories());
    }, [])
    const listCategories = useSelector(selectAllCategories);

    return (
        <div>
            {listCategories.map(element => {
                return (
                    // <button key={element.toString()}
                    //     type="button"
                    //     className="btn btn-primary"
                    //     style={{ padding: 5, margin: 5 }}
                    //     onClick={()=> { categorieByName(element) }}>
                    //     {element}
                    // </button>
                    <Link to={`/products/categories/${element}`} key={element.toString()} className="btn btn-primary" style={{ padding: 5, margin: 5 }}> {element} </Link>

                )
            })}
            <Outlet />
        </div>

    )
}

export default Categories;
