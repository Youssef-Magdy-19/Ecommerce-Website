import React from "react";
import { Link } from "react-router-dom";
const PageNotFound =()=>{
    return(
        <>
        <section id="PageNotFound">
            <div className="page text-center mt-4 ">
                <h1>404: Page Not Found</h1>
                <Link to="/" className="btn btn-outline-dark mt-3"><i className="fa fa-arrow-left"></i> Go Back To Home</Link>
            </div>
        </section>
        </>
    )
}
export default PageNotFound