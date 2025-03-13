import React from "react";

const About =()=>{
    return(
        <>
        <section id="about" className="container">
            <div className="about-info mb-4">
                <div className="about-title text-center mb-2">
                    <h2>About Us</h2>
                    <div className="about-line line bg-dark m-auto"></div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo accusantium deserunt repudiandae quasi eum, facilis neque eveniet nisi, recusandae, obcaecati laboriosam. Aut fuga ullam impedit numquam similique tempore iure. Dignissimos enim facilis saepe. Repellendus optio officiis, dolor eaque consequatur odit accusantium ducimus natus assumenda vel ipsa totam a voluptas dicta recusandae commodi? Sint, et assumenda deserunt magnam, quo iusto laudantium optio quis tenetur vero, voluptatum consectetur distinctio id? Inventore, nostrum praesentium eos ipsam debitis sint fugiat esse perferendis quod optio doloribus labore quos veritatis quia eligendi id voluptates repellendus quis voluptatibus qui saepe ducimus. Facere commodi quae earum veritatis, temporibus adipisci minus voluptate ipsa quam dolores nulla dolor dolorem. Magni, assumenda cum. Explicabo, cupiditate natus dolore aperiam quo corrupti corporis veritatis nostrum optio praesentium odit ducimus maiores esse earum temporibus, consectetur ratione, enim soluta laborum debitis nesciunt. Voluptatum iusto iure nulla, voluptates autem placeat quasi esse qui expedita minima nam cum accusantium nostrum. Nam saepe quibusdam, dolorem velit officiis ex neque ipsa quo obcaecati fugit soluta assumenda exercitationem atque? Exercitationem, ipsa amet perferendis nihil alias doloribus accusantium mollitia sint quod est modi tempore eligendi unde, quis dolorum? Harum quos, odit voluptatum nulla sapiente sequi, assumenda illo neque explicabo cumque quas?</p>
            </div>
            <h3 className="text-center mb-4">Our Products</h3>
            <div className="types-products row justify-content-center">
                <div className="space col-lg-3 col-md-4 col-sm-6 col-10 ">
                    <div className="card text-center mb-3">
                        <img  src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <h5 className="pt-2 pb-2 ">Men's Clothing</h5>
                    </div>
                </div>
                <div className="space col-lg-3 col-md-4 col-sm-6 col-10 ">
                    <div className="card text-center mb-3">
                        <img  src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <h5 className="pt-2 pb-2 ">Women's Clothing</h5>
                    </div>
                </div>
                <div className="space col-lg-3 col-md-4 col-sm-6 col-10 ">
                    <div className="card text-center mb-3">
                        <img  src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <h5 className="pt-2 pb-2 ">Jewelery</h5>
                    </div>
                </div>
                <div className="space col-lg-3 col-md-4 col-sm-6 col-10 ">
                    <div className="card text-center">
                        <img  src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <h5 className="pt-2 pb-2 ">Electronics </h5>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default About