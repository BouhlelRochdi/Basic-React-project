import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Categories from './components/categories';
import ProductsList from './components/products-list';
import Search from './components/search';
import SingleProduct from './components/single-product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/products' />} />
          <Route path='/products' element={<App />}>
            <Route path='/products/categories' element={<Categories />} >
              <Route path=':name' element={<ProductsList />} />
            </Route>
            <Route path='/products/search' element={<Search />} />
            <Route path='/products/single-product/:id' element={<SingleProduct />} />
          </Route>
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
