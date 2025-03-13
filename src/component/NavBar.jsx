import React, { useEffect, useState } from "react";
import { Navbar,  Nav } from "react-bootstrap";
import { Link  } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket as ARight } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket as ARightFrom } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping as Cart } from "@fortawesome/free-solid-svg-icons";
import { faSun as Sun } from  "@fortawesome/free-solid-svg-icons";
import { faMoon as Moon } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
function NavBar() {
  const state = useSelector((state)=> state.Handle)
  const [active , setactive] = useState("home")
  const [theme , setTheme] = useState(localStorage.getItem("currentMode") ?? "light")
  const [currentUserInfo , setCurrentUserInfo] = useState(localStorage.getItem("currentUser") ?? false)
  useEffect(()=>{
    if(theme != "light"){
      document.body.classList.remove("light")
      document.body.classList.add(theme)
    }else{
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    }
  },[theme])
 
  useEffect(()=>{
    let userName = JSON.parse(localStorage.getItem("name"))
    console.log(userName)
    if(userName){
      setCurrentUserInfo(()=> localStorage.getItem("currentUser"))
    }
  },[currentUserInfo])
  const updateNavBar =()=>{
    let userName = JSON.parse(localStorage.getItem("name"))
    if(userName){
      localStorage.removeItem("name")
    }
  }
  return (
    <Navbar expand="md" className="navbar">
        <div className="header ">
          
            <div className="d-flex justify-content-between">
               <Navbar.Brand to="/" className="title bold">
               <h4><Link to="/" className="text-dark">OST Shop</Link></h4>
               </Navbar.Brand>
               <div className="col-6 ">
                <button className="dark-light text-center m-auto mt-1 d-flex justify-content-center align-items-center" onClick={()=>{
                  localStorage.setItem("currentMode" , theme === "light" ? "dark" : "light");
                setTheme(()=> localStorage.getItem("currentMode"))}}>
                  {theme === "light" ? <FontAwesomeIcon icon={Sun} className="sun"/> : <FontAwesomeIcon icon={Moon} className="moon" />}
                  </button>
                </div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="menu-icon col-2"/>
            </div>
            <div className="header-elements col-md-9 col-12 m-auto">
              <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="nav m-auto text-center">
                    <Link className={active === "home" ? "active links text-decoration-none ms-3 link-secondary" : "text-decoration-none ms-3 link-secondary links"}  onClick={()=>setactive("home")} to="/Ecommerce-Website/">Home</Link>
                    <Link className={active === "products" ? "active links text-decoration-none ms-3 link-secondary" : "text-decoration-none ms-3 link-secondary links"} onClick={()=>setactive("products")} to="/Ecommerce-Website/products" >Products</Link>
                    <Link className={active === "about" ? "active links text-decoration-none ms-3 link-secondary" : "text-decoration-none ms-3 link-secondary links"} onClick={()=>setactive("about")} to="/Ecommerce-Website/about" >About</Link>
                    <Link className={active === "contact" ? "active links text-decoration-none ms-3 link-secondary" : "text-decoration-none ms-3 link-secondary links"} onClick={()=>setactive("contact")} to="/Ecommerce-Website/contact">Contact</Link>
                </Nav>
                <div className="buttons d-flex justify-content-center">
                  {currentUserInfo ? <Link to="/Ecommerce-Website/login" id="logout" className={active === "login" ? "active-btn  btn btn-outline-dark ms-2" : "btn btn-outline-dark ms-2"} onClick={()=>{ updateNavBar();
                  setCurrentUserInfo(localStorage.setItem("currentUser",false));
                  setactive("logout")}}><FontAwesomeIcon icon={ARightFrom}/> Logout</Link> :
                  <><Link to="/Ecommerce-Website/login" id="login"  className={active === "login" ? "active-btn  btn btn-outline-dark ms-2" : "btn btn-outline-dark ms-2"} onClick={()=>{setactive("login");}} ><FontAwesomeIcon icon={ARight} /> Login</Link>
                    <Link to="/Ecommerce-Website/register" id="register" className={active === "register" ? "active-btn  btn btn-outline-dark ms-2" : "btn btn-outline-dark ms-2"} onClick={()=>setactive("register")}><i className="fa fa-user-plus mr-1"></i> Register</Link></>
                  }
                    <Link to="/Ecommerce-Website/cart" className={active === "cart" ? "active-btn  btn btn-outline-dark ms-2" : "btn btn-outline-dark ms-2"} onClick={()=>setactive("cart")}><FontAwesomeIcon icon={Cart} /> Cart ({state.length})</Link>
                </div> 
              </Navbar.Collapse>
            </div>
        </div>
    </Navbar>
  );
}

export default NavBar;