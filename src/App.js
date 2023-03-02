import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar/navbar';

function App() {

  const menus = [
    {label: 'categories', link: '/products/categories'}, 
    // {label: 'product-list', link: '/product-list'},
    {label: 'search', link: '/products/search'}
  ];

  return (
    <div className="App">
      <Navbar menuToSend={menus} />
      <Outlet />
    </div>
  );
}

export default App;
