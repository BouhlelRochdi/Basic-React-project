import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setArticleById } from '../store/action-api/products';
import { selectArticleById } from '../store/reducers/products.reducer';

function SingleProduct() {

  let dispatch = useDispatch();
  const { id } = useParams();


  useEffect(() => {
    dispatch(setArticleById(id))
  }, [])
  const singleArticle = useSelector(selectArticleById);

  return (
    <div>
       <div>
        <p> product title: {singleArticle.title}</p>
        <p> product description: {singleArticle.description}</p>
        <p> product brand: {singleArticle.brand}</p>
       </div>
    </div>
  )
}

export default SingleProduct;