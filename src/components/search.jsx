import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchAction } from '../store/action-api/products';
import { emptySearchInputAction } from '../store/actions/products.actions';
import { selectSearchResult } from '../store/reducers/products.reducer';
import ListArray from './list-array';

function Search() {

  let dispatch = useDispatch();
  const handleChange = (event) => {
    console.log('value: ', event.target.value);
    if (event.target.value.length == 0) {
      dispatch(emptySearchInputAction())
    } else dispatch(searchAction(event.target.value))
  }

  const searchResult = useSelector(selectSearchResult);

  return (
    <>
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">@</span>
        <input type="text" className="form-control" placeholder="Search" onChange={handleChange} />
      </div>

      {searchResult.map(element => {
        return (
          <table key={element.id} className="table table-striped tableau">

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
              {/* {searchResult.map(element => {
            // <p>element: {element} </p>
            return (
              <ListArray key={element.id} element={element} />
            )
          })} */}
              <ListArray key={element.id} element={element} />

            </tbody>
          </table>
        )

      })}
    </>
  )
}

export default Search;