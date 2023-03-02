
import React from 'react';
import { Link } from "react-router-dom";


function ListArray({ element }) {
    return (
        <tr>
            <th scope="id"> {element.id} </th>
            <th scope="title"> {element.title} </th>
            <th scope="description"> {element.description} </th>
            <th scope="price"> {element.price} </th>
            <th scope="discountPercentage"> {element.discountPercentage} </th>
            <th scope="rating"> {element.rating} </th>
            <th scope="category"> {element.category} </th>
            <th scope="actions">
                <Link to={`/products/single-product/${element.id}`} className="btn btn-primary">display</Link>
            </th>
        </tr>
    )
}

export default ListArray;