import React,{useState} from "react";
import { Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";

const Login =()=>{
    const [currentUserInfo , setCurrentUserInfo] = useState(localStorage.getItem("currentUser") ?? false)
    const [user,setuser] = useState({
            email:"",
            password:""
        })
    
        const userInfo = JSON.parse(localStorage.getItem("userInfo"))
        const check =()=>{
            if(user.email && user.password != ""){
                if(userInfo.email == user.email && userInfo.password == user.password){
                    toast.success("signed in")
                    setTimeout(()=>window.location="/Ecommerce-Website/",2000)
                }else{
                    toast.error("The Email or Password Is false")
                }
            }else{
                toast.error("Enter full Data");
            }
        }
    return(
        <>
            <form className="login hero m-auto align-items-center">
                <div className="login-title mb-4">
                    <h2 className="mb-2 text-center">Login</h2>
                    <div className="login-line line bg-dark m-auto"></div>
                </div>
                <div class="mb-3 col-md-5 col-sm-7 col-10">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" value={user.email} onChange={(e)=> setuser({...user , email:e.target.value})} class="form-control" placeholder="name@gmail.com" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <span id="emailHelp" class="form-text"></span>
                </div>
                <div class="mb-3 col-md-5 col-sm-7 col-10">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" value={user.password} onChange={(e)=> setuser({...user , password:e.target.value})} placeholder="Enter Password" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3 form-check col-md-5 col-sm-7 col-10">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">New Here? </label>
                    <Link to="/Ecommerce-Website/register"> Register</Link>
                </div>
                <div className="btn-login text-center mt-3">
                    <a  type="submit" class="btn-link btn btn-dark" onClick={()=>{check();localStorage.setItem("currentUser" , currentUserInfo === false ? true : false)}}>Login</a>
                </div>
            </form>
        </>
    )
}
export default Login