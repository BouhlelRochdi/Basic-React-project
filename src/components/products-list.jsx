import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { setCategorieByName } from '../store/action-api/products';
import { selectCategorieByName } from '../store/reducers/products.reducer';
import ListArray from './list-array';


function ProductsList() {

  let dispatch = useDispatch();
  const { name } = useParams();

  const listCategories = useSelector(selectCategorieByName);

  useEffect(()=>{
    dispatch(setCategorieByName(name))
  },[name])

  return (
    <div>
      <table className="table table-striped tableau">
        <thead>
          <tr>
            <th scope="id"> id </th>
            <th scope="title"> title </th>
            <th scope="description"> description </th>
            <th scope="price"> price </th>
            <th scope="discountPercentage"> discountPercentage </th>
            <th scope="rating"> rating </th>
            <th scope="category"> category </th>
            <th scope="actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          {listCategories.map(element => {
            // <p>element: {element} </p>
            return (
              <ListArray key={element.id} element={element} />
            )
          })}

        </tbody>
      </table>
    </div>
  )
}

export default ProductsList;