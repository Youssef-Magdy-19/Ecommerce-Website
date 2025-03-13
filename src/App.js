import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import './App.css';
import NavBar from './component/NavBar';
import Home from "./component/Home";
import Products from "./component/products";
import Footer from "./component/Footer";
import Login from "./pages/Login"
import Register from "./pages/Register"
import Contact from "./pages/contact"
import { Toaster } from "react-hot-toast";
import { Route,BrowserRouter,Routes } from "react-router-dom";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Cart from "./pages/cart";
import Check from "./pages/Check";
import ProductBuy from "./pages/product";


function App() {
  return (
    <>
    <Toaster/>

    <NavBar/>
    <Routes>
      <Route path="/Ecommerce-Website/" element={<Home/>}/>
      <Route path="/Ecommerce-Website/products" element={<Products/>}/>
      <Route path="/Ecommerce-Website/about" element={<About/>}/>
      <Route path="/Ecommerce-Website/login" element={<Login/>}/>
      <Route path="/Ecommerce-Website/register" element={<Register/>}/>
      <Route path="/Ecommerce-Website/contact" element={<Contact/>}/>
      <Route path="/Ecommerce-Website/cart" element={<Cart/>}/>
      <Route path="/Ecommerce-Website/checkout" element={<Check/>}/>
      <Route path="/Ecommerce-Website/products/:id" element={<ProductBuy/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
