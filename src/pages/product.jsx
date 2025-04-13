import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addCart } from "../Redux/Action";
import toast from "react-hot-toast";
import Marquee from "react-fast-marquee";                       

const ProductBuy =()=>{
    const id = useParams()
    const [product , setProduct] = useState([])
    const [smilarProducts  , setSmilarProducts] = useState([])
    const dispatch = useDispatch()
    const addProduct =(prod)=>{
        dispatch(addCart(prod))
    }
    useEffect(()=>{
        const handleProduct = async ()=>{
            const response = await fetch(`https://fakestoreapi.com/products/${id.id}`)
            const data = await response.json()
            setProduct(data)
            console.log(data.category)
            const response2 = await fetch(`https://fakestoreapi.com/products/category/${data.category}`)
            const smilarData = await response2.json()
            setSmilarProducts(smilarData.filter((pro)=>{return pro.id != data.id}))
        }
        handleProduct()
    },[id])
    useEffect(()=>{
        window.scrollTo(0,0)
    },[id])
    const ShowProduct =()=>{
        return(
            <>
            <section id="product">
                <div className="product row justify-content-between">
                    <div className="product-image col-md-5 col-11 m-auto">
                        <img src={product.image} className="w-100 h-100" alt="" />
                    </div>
                    <div className="product-info col-md-6 col-11 mt-5">
                        <h4 className="product-category">{product.category}</h4>
                        <h5 className="product-title">{product.title}</h5>
                        <p className="lead product-rating">{product.rating && product.rating.rate}{" "}
                        <i className="fa fa-star"></i></p>
                        <p className="product-price">${product.price}</p>
                        <p className="lead product-descr">{product.description}</p>
                        <div className="product-buttons d-block">
                            <button className="btn btn-outline-dark me-3 mt-3" onClick={()=> {
                            addProduct(product) 
                            toast.success("Added in Cart")}}>Add To Cart</button>
                            <Link className="btn btn-dark mt-3" to="/cart">Go To Cart</Link>
                        </div>
                    </div>
                </div>

            </section>
            </>
        )
    }
    const ShowSmilarProducts =()=>{
        const updateBtn=(product)=>{
            let productsBtns = [...document.querySelectorAll(".product-btn")] 
            let prodcutBtn = productsBtns.find((btn)=> btn.getAttribute("id") == product.id)
            console.log(prodcutBtn)
            return (
            prodcutBtn.innerHTML = "Added in Cart",
            prodcutBtn.className = "btn btn-white border border-dark",
            prodcutBtn.style.transition = ".7s ease-in-out",
            prodcutBtn.style.pointerEvents = "none",
            prodcutBtn.style.marginLeft = "10px"
        )
        }
        return(
            <>
                <div className="d-flex">
                    {
                        smilarProducts.map((pro)=>{
                            return(
                                <div key={pro.id} className="card mx-4 text-center">
                                    <img
                                        className="card-img-top product-image p-3"
                                        src={pro.image}
                                        alt="Card"
                                        height={300}
                                        width={300}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                        {pro.title.substring(0, 15)}...
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <Link to={"/products/"+ pro.id} className="btn btn-dark" >Buy Now</Link>
                                        <button className="product-btn btn btn-dark m-1"id={pro.id}onClick={() => {toast.success("Added to cart");updateBtn(pro);addProduct(pro )}} >Add to Cart</button>
                                    </div>
                                </div>   
                            )
                        })
                    }
                </div>
            </>
        )
    }
    return(
        <>
        <section className="continer">
            <ShowProduct/>
            <h2 className="mb-5">You may also Like</h2>
            <Marquee
              pauseOnHover={true}
              pauseOnClick={true}
              speed={50}
            >
              <ShowSmilarProducts />
            </Marquee>
        </section>
        </>
    )
}
export default ProductBuy