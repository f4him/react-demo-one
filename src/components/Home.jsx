import React from 'react';
import vg from "../assets/2.png";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
    <div className="home" id="home">
        <main>
            <h1>TechStar</h1>
            <p>little bit you know!</p>

        </main>



    </div>

    <div className="home2">
        <img src={vg} alt="Vector graphics" />

        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatum in veritatis, omnis quisquam, officia sint qui laborum, esse dicta optio a magni! Ducimus quia hic quaerat rem esse cumque.</p>
        </div>
    </div>
    
    <div className="home3" id='about'>
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, pariatur? Culpa quibusdam dignissimos excepturi animi optio corrupti tempore expedita dolores tempora. Laudantium eos fugit vel sunt facere perspiciatis id error.</p>
        </div>
    </div>
    
    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>

            <article>
                <div style={{
                    animationDelay: "0.3s",
                }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>


                </div>
 
                <div style={{animationDelay: "0.5s"}}>
                <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                    
                
                <div style={{
                animationDelay: "0.7s",
            }}>
                <AiFillYoutube/>
                <p>Youtube</p>
                </div>


                <div style={{
                    animationDelay: "1s",
                }}>
                    <AiFillInstagram/>
                    <p>Instagram</p>

                </div>


            </article>
        </div>
    </div>
    </>
  )
}

export default Home