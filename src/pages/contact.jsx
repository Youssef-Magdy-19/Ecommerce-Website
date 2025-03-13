import React, { useState } from "react";
import toast from "react-hot-toast";


const Contact =()=>{
    const [user,setuser] = useState({
        name:"",
        email:"",
        message:""
    })
    const updateBtn =()=>{
        if(user.name && user.email && user.message){
            const btnSend = document.querySelector(".btn-send")
            btnSend.innerHTML = "Arrived"
            toast.success("Data sent")
            btnSend.style.transition = ".7s ease-in-out"
            btnSend.style.pointerEvents = "none"
            if(document.body.classList == "light"){
            btnSend.className = "btn text-dark btn-white border border-dark"
            }else{
                btnSend.className = "btn text-white border border-white" 
            }
            
        }else{
            toast.error("Enter full Data");
        }
    }
    return(
        <>
        <section id="contact">
            <form className="contact hero m-auto align-items-center">
                <div className="contact-title mb-4">
                    <h2 className="mb-2 text-center">Contact Us</h2>
                    <div className="contact-line line bg-dark m-auto"></div>
                </div>
                <div class="mb-3 col-md-5 col-sm-7 col-10">
                    <label htmlFor="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-input form-control" value={user.name} placeholder="Enter Name" onChange={(e)=>setuser({...user,name:e.target.value})} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3 col-md-5 col-sm-7 col-10">
                    <label htmlFor="exampleInputEmail2" class="form-label">Email address</label>
                    <input type="email" class="form-input form-control" value={user.email} placeholder="name@gmail.com" onChange={(e)=>setuser({...user,email:e.target.value})} id="exampleInputEmail2" aria-describedby="emailHelp"/>
                    <span id="emailHelp" class="form-text"></span>
                </div>
                <div className="message mb-3 col-md-5 col-sm-7 col-10">
                    <label htmlFor="exampleInputEmail3" class="form-label">Email address</label>
                    <textarea rows={5} class="form-input form-control" value={user.message} onChange={(e)=>setuser({...user,message:e.target.value})} id="exampleInputEmail3" placeholder="message"></textarea>
                </div>
                <div className="btn-contact text-center mt-3">
                    <a class="btn-send btn btn-dark" onClick={()=>updateBtn()}>Send</a>
                </div>
            </form>
        </section>
        </>
    )
}
export default Contact