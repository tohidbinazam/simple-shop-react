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



function App() {
  return (
    <div className="App">
        <Header />
          <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/shop' element={ <Shop /> }/>
            <Route path='/shop/:product_name' element={ <SingleProduct /> }/>
            <Route path='/admin' element={ <Admin /> }>
              <Route path='/admin/dashboard' element={ <Dashboard /> } />
              <Route path='/admin/products' element={ <Products /> } />
              <Route path='/admin/category' element={ <Category /> } />
              <Route path='/admin/tag' element={ <Tag /> } />
            </Route>
          </Routes>
        <Footer />
    </div>
  );
}

export default App;
