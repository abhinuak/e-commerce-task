
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './pages/Products';
import Details from './pages/Details';
import SingleProduct from './pages/SingleProduct';
import User from './pages/User';
import "./bootstrap.min.css"
import Header from './components/Header';
import Footer from './components/Footer';
import Category from './pages/Category';

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/products/:productId' element={<Details/>}/>
      <Route path='/categories' element={<SingleProduct/>}/>
      <Route path='/categories/:categoryId' element={<Category/>}/>
      <Route path='/users' element={<User/>}/>


     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
