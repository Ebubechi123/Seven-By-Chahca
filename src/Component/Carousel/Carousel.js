// import React,{useState} from 'react';
// import { RightArrow,LeftArrow } from "./Move";
// const Carousel = () => {
//     const [activeIndex,setActiveIndex] = useState(0);
//     const [lengthno,setLengthno] = useState(0)

//  const   goToPrevSlide=()=>{

//            let index = activeIndex;
//           let length = lengthno;
          
//           if(index < 1) {
//           index = length - 1;
//            }

//            else {

//              index--;

//            }
//            setActiveIndex( activeIndex=index);
//          }
         
//          goToNextSlide=()=>{
     
//              let index = activeIndex;
    
//              let length = lengthno;if(index === length - 1) {
    
//                index = 0
    
//              }
    
//              else {
    
//                index++;
    
//              }

//              setActiveIndex(activeIndex=index)

//              ;
//          }

//     return ( 

  

// <div className='slider'>
// <div className='slider-items'>

// <LeftArrow goToPrevSlide={() =>goToPrevSlide()}/>
// </div>
// </div>
//      );
// }
 
// export default Carousel;



import React,{useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"
import Card from '../Cards/Card';
import catergory1  from "../../Assets/Images/category-1.jpg"
const Carousel = () => {
  let initialState = 4;
  const [Screensize,setScreensize] = useState(initialState)
  var settings = {
    infinite: true,
    speed: 800,
    slidesToShow:Screensize,
    slidesToScroll: 1,
    dots: false,
    autoplay:true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024, // width to change options
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }
    ]
  
  };
  return ( 

    <>
    <Slider {...settings}>
   
<Card  img={catergory1} product_description={"Classic Hoodie"} product_price={"£500"}  />
<Card img={catergory1} product_description={"Classic Hoodie"} product_price={"£500"}  />
<Card img={catergory1} product_description={"Classic Hoodie"} product_price={"£900"}  />
<Card img={catergory1} product_description={"Classic Hoodie"} product_price={"£590"}  />
<Card img={catergory1} product_description={"Classic Hoodie"} product_price={"£500"}  />
<Card img={catergory1} product_description={"Classic Hoodie"} product_price={"£30"}  />
<Card img={catergory1} product_description={"Classic Hoodie"} product_price={"£500"}  />
<Card img={catergory1} product_description={"Classic Hoodie"} product_price={"£500"}  />


    </Slider>
    </>
   );
}
 
export default Carousel;








