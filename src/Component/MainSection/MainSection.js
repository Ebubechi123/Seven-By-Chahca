import React from 'react';
import "./MainSection.css";
import AboutImage from "../../Assets/Images/IMG-20210725-WA0042.jpg";
import { Catergory1,Catergory2,Catergory3 } from '../Images/Images';
import Title from "../Title/Title";
import Button from '../Button/Button';
import Form from '../Input/Form';
import Footer from '../Footer/Footer';
import Carousel from '../Carousel/Carousel';
import Header from '../Header/Header';
const MainSection = () => {
    return ( 
        <>
        <Header />
      <div className="main-section">
       <div className="catergory">
          <div className="small-container">
          <div className="row">
               <div className="flex-col">
                <Catergory1 />
               </div>
               <div className="flex-col">
                <Catergory2 />
               </div>
               <div className="flex-col">
                <Catergory3 />
               </div>
           </div>
          </div>
       </div>




            <div className="discover-collections-section">
                <section>
                <div className="content">
                            <div className="wrapper">
                                <span>
                                    Seven Hoddie Collection
                                </span>
                                <div className="discover-button">
                                    <Button>Shop Now</Button>
                                </div>
                            </div>
                        </div>
                    <div className="discover-img">
                        <img src={AboutImage} alt="Discover" />
                    </div>
                </section>
            </div>

            <div className="product-section">
                <div className="small-container">
                        <div className="title">
                            <Title>Available Products</Title>
                        </div>
                <Carousel />
                </div>
            </div>



            <div className="newsletter">
                <div className="newsletter-section">
                    <div className="newsletter-title">
                        <span>
                        Join our mailing list to receive email exclusives.
                        </span>
                    </div>
                    <div className="newsletter-form">
                        <Form />
                    </div>
                </div>
            </div>


            <Footer/>

        </div>
        </>
     );
}
 
export default MainSection;