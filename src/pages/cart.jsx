import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { addCart, deleteCart } from "../Redux/Action"

const Cart =()=>{
    const state = useSelector((state) => state.Handle)
    const dispatch = useDispatch()

    const removePro =(product)=>{
        dispatch(deleteCart(product))
    }
    const addPro =(product)=>{
        dispatch(addCart(product))
    }
    
    
    
    const EmptyCart=()=>{
        return(
            <section id="PageNotFound" className="empty">
                <div className="page text-center">
                    <h1>Your Cart is Empty</h1>
                    <Link to="/" className="btn btn-outline-dark mt-3"><i className="fa fa-arrow-left"></i> Continue Shopping</Link>
                </div>
            </section>
        )
    }
    const ShowCart=()=>{
            let totalPrice = 0
            let qtyProducts = 0
            state.map((pro)=>{
                let pricePro = pro.qty * pro.price
                totalPrice += pricePro
            })
            state.map((pro)=>{
                qtyProducts += pro.qty
            }) 
        return(
            <>
            <section className="continer m-auto">  
                <div className="prods-check  row justify-content-between">
                    <div className="prods-cart m-auto card col-md-8 col-11">
                        <div className="card-header py-3">
                            <h4 className="mb-0">Item List</h4>
                        </div>
                        <div className="card-body">
                            {state.map((pro)=>{
                                return(
                                    <>
                                        <div className="prod row justify-content-between m-auto">
                                            <div className="prod-image col-md-4 col-12 text-center mb-md-0 mb-3">
                                                <img src={pro.image}  width={150} height={100} alt="" />
                                            </div>
                                            <p className="col-md-5 col-12 pt-2">{pro.title}</p>
                                            <div className="price text-center m-auto col-md-3 col-6">
                                                <div className="quntatiy col-12 d-flex justify-content-between">
                                                    <p className="minus" onClick={()=>removePro(pro)}><FontAwesomeIcon icon={faMinus}/></p> 
                                                    <p className="pro-qty text-center">{pro.qty}</p>
                                                    <p className="plus" onClick={()=>addPro(pro)}><FontAwesomeIcon icon={faPlus}/></p>
                                                </div>
                                                <p className="price-qty pt-3">{pro.qty} x {pro.price}$</p>
                                            </div>
                                        </div>
                                        <hr />
                                    </>
                            )})}
                        </div>
                    </div>
                    <div className="checkout col-md-4 col-sm-6 col-8 ">
                        <div className="card">
                            <div className="card-header py-3 text-center">
                                <h5>Order Summary</h5>
                            </div>
                            <div className="card-body ">
                                <div className="price-prods d-flex justify-content-between">
                                    <p>Products({qtyProducts})</p>
                                    <p>{Math.floor(totalPrice)}$</p>
                                </div>
                                <div className="price-ship d-flex justify-content-between">
                                    <p>shipping </p>
                                    <p>30$</p>
                                </div>
                                <div className="price-total d-flex justify-content-between">
                                    <p>Total : </p>
                                    <p>{Math.floor(totalPrice) + 30}$</p>
                                </div>
                                <Link to="/checkout" className="btn btn-dark w-100">Go To Checkout</Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
return(
        <>
        <div >
            <div className="cart-title ">
                <h2 className="text-center">Cart</h2>
                <div className="cart-line line bg-dark m-auto mt-2 mb-4"></div>
            </div>
            {state.length > 0 ? <ShowCart /> : <EmptyCart />}
        </div>
        </>
)
}
export default Cart