import React,{useContext} from 'react';
import Button from '../Button/Button';
import { ProductStateProvider } from "../../StateMangement/ProductState";
import "./Card.css"
const Card = ({img, product_description, product_price } ) => {
    const [product,setProduct] = useContext(ProductStateProvider);
    const ButtonHandler=()=>{
        setProduct([...product,{img:img,product_description:product_description,product_price:product_price,id:Math.random()*2000}]);
    }
    return ( 

        <>
        <div className="card">
            <div className="card-img">
                <img src={img} alt="cc" />
            </div>

         <div className="card-info">
         <div className="card-description">
                <p>{product_description}</p>
            </div>
            <div className="product-price">
                <p>{product_price}</p>
            </div>
            <div className="product-button">
                <Button onClick={()=>ButtonHandler()}>Add To Cart</Button>
            </div>
         </div>

        </div>
        </>
     );
}
 
export default Card;