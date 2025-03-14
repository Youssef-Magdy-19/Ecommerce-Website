import React,{useState} from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Register =()=>{
    const [user,setuser] = useState({
            name:"",
            email:"",
            password:""
        })

        const check =()=>{
            if(user.name && user.email && user.password){
                toast.success("signed up")
                const userInfo = localStorage.setItem("userInfo", JSON.stringify(user))
                const Name = localStorage.setItem("name" , JSON.stringify(user.name))
                setTimeout(()=><Link to="/login"/>,2000)
            }else{
                toast.error("Enter full Data");
            }
        }
    return(
        <>
        <form className="register hero m-auto align-items-center">
            <div className="register-title mb-4">
                <h2 className="mb-2 text-center">Register</h2>
                <div className="register-line line bg-dark m-auto"></div>
            </div>
            <div class="mb-3 col-md-5 col-sm-7 col-10">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="text" class="form-control" value={user.name} onChange={(e)=> setuser({...user,name:e.target.value})} placeholder="Enter Name" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3 col-md-5 col-sm-7 col-10">
                <label for="exampleInputEmail3" class="form-label">Email address</label>
                <input type="email" class="form-control" value={user.email} onChange={(e)=> setuser({...user,email:e.target.value})} placeholder="name@gmail.com" id="exampleInputEmail3" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3 col-md-5 col-sm-7 col-10">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" value={user.password} onChange={(e)=> setuser({...user,password:e.target.value})} placeholder="Enter Password" id="exampleInputPassword1"/>
            </div>
            <div class="mb-3 form-check col-md-5 col-sm-7 col-10">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Already has an account? </label>
                <Link to="/login"> Login</Link>
            </div>
            <div className="btn-login text-center mt-3">
                <Link  type="submit" class="btn-link btn btn-dark" onClick={()=>check()}>Register</Link>
            </div>
        </form>
        </>
    )
}
export default Register