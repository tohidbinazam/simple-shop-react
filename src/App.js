import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Shop from './components/pages/Shop';
import 'bootstrap/dist/css/bootstrap.min.css'
import './_assets/css/bundle.css'
import './_assets/css/style.css'
import SingleProduct from './components/pages/SingleProduct';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Admin from './components/Admin/Admin';
import Dashboard from './components/Admin/Dashboard';
import Products from './components/Admin/Products';
import Category from './components/Admin/Category';
import Tag from './components/Admin/Tag';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  
  // Show products in shop
  const [products, setProducts] = useState([])

  // Cat state
  const [cats, setCats] = useState([])

  // Tag state
  const [tags, setTags] = useState([])

  // Get products for shop
  useEffect(() => {
    axios.get('http://localhost:5050/products').then(res => {
      setProducts(res.data.reverse())
    })    
  }, [])
  
  // Get Cat
  useEffect(() => {
    axios.get('http://localhost:5050/categories').then(res => {
    setCats(res.data.reverse())
    })
  }, [cats])

  // Get Tags
  useEffect(() => {
    axios.get('http://localhost:5050/tags').then(res => {
    setTags(res.data.reverse())
    })
  }, [tags])

  return (
    <div className="App">
        <Header />
          <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/shop' element={ <Shop products={ products } cats={ cats } tags={ tags } setProducts={ setProducts }/>}/>
            <Route path='/shop/:product_slug' element={ <SingleProduct /> }/>
            <Route path='/admin' element={ <Admin /> }>
              <Route path='/admin/dashboard' element={ <Dashboard /> } />
              <Route path='/admin/products' element={ <Products cats={ cats } tags={ tags }/>}/>
              <Route path='/admin/category' element={ <Category cats={ cats }/> }/>
              <Route path='/admin/tag' element={ <Tag tags={ tags } />}/>
            </Route>
          </Routes>
        <Footer />
    </div>
  );
}

export default App;
