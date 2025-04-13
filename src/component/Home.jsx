import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Products from "./products";
import { WindowScrollToTop } from "../utils/WindowScrollToTop";

const Home=()=>{
    WindowScrollToTop()
    return(
        <>
        <section id="home">
            <div className="background">
                <div className="background-info">
                    <h5>New Season Arrivals</h5>
                    <p className="card-text fs-5 d-sm-block">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </section>
        <Products/>
        </>
    )
}
export default Home