import React,{useState,useEffect} from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../Redux/Action";

const Products =()=>{
    const [data,setData]=useState([])
    const [filter,setFilter] = useState(data)
    const [isClicked , setisClicked] = useState(()=>{
        return localStorage.getItem("buttonState") == "true"
    })
    let command = true
    useEffect(()=>{ 
        const getProducts = async () =>{
            const response = await fetch("https://fakestoreapi.com/products/")
            if(command){
                setData(await response.clone().json())
                setFilter(await response.json())
                console.log(response.json)
            }
            return()=> command = false
        }
        getProducts()
    }
    ,[])
    
    const updateFilter =(category)=>{
        const updateData = data.filter((pro)=> pro.category === category)
        setFilter(updateData)
    }
    let dispatch = useDispatch()
    const addProduct=(product)=>{
        dispatch(addCart(product))
    }
    
    // const updateBtn=(product)=>{
    //     let productsBtns = [...document.querySelectorAll(".product-btn")] 
    //     let prodcutBtn = productsBtns.find((btn)=> btn.getAttribute("id") == product.id)
    //     return (
    //         prodcutBtn.innerHTML = "Added in Cart",
    //         prodcutBtn.className = "btn btn-white border border-dark",
    //         prodcutBtn.style.transition = ".7s ease-in-out",
    //         prodcutBtn.style.pointerEvents = "none"
    //     )
    // }
    
    return(
        <>
        
        <section id="products" className="continer">
            <div className="products-title">
                <h2 className="text-center">Last Products</h2>
                <div className="line m-auto mb-4 bg-dark"></div>
            </div>
            <div className="buttons-category text-center mb-4">
                <button className="btn btn-outline-dark mb-2" onClick={()=> setFilter(data)}>All</button>
                <button className="btn btn-outline-dark ms-2 mb-2" onClick={()=> updateFilter("men's clothing")}>Men's Clothing</button>
                <button className="btn btn-outline-dark ms-2 mb-2" onClick={()=> updateFilter("women's clothing")}>Women's Clothing</button>
                <button className="btn btn-outline-dark ms-2 mb-2" onClick={()=> updateFilter("jewelery")}>Jewelery</button>
                <button className="btn btn-outline-dark ms-2 mb-2" onClick={()=> updateFilter("electronics")}>Electronics</button>
            </div>
            <div className="cards row justify-content-center">
                {
                    filter.map((pro)=>{
                       return( 
                        <>
                        {/* {updateBtn(pro)} */}
                        <div className="space col-md-4 col-sm-6 col-11 mb-3">
                            <div className="card">
                                <img src={pro.image} alt="" className= "product-image p-2" height={270}/>
                                <div className="card-bod">
                                    
                                    <h4 className="product-title text-center mt-2 mb-2">{pro.title.substring(0,10)}...</h4>
                                    <p className="product-description text-center ps-2 pe-2">{pro.description.substring(0,90)}...</p>
                                    <hr />
                                    <p className="products-price text-center">price : {pro.price} $</p>
                                    <hr />
                                    <div className="buttons-buy text-center pb-3">
                                        <Link to={"/Ecommerce-Website/products/"+ pro.id} className="btn btn-dark me-3" >Buy Now</Link>
                                        <button className="product-btn btn btn-dark m-1"id={pro.id}onClick={() => {
                                        toast.success("Added to cart");addProduct(pro )}} 
                                        >Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </>
                        )
                    })
                }
            </div>
        </section>
        </>
    )
}

export default Products