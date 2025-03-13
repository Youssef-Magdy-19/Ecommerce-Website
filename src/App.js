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
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Check/>}/>
      <Route path="/products/:id" element={<ProductBuy/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
