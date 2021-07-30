import React,{useState,useEffect,useContext} from 'react';
import { CartIcon,MenuIcon } from '../Icons/Icon';
import { ProductStateProvider } from "../../StateMangement/ProductState";
import "./Nav.css"

const Nav = () => {

    const [product] = useContext(ProductStateProvider);
    const [toggle,setToggle] = useState(false);

    const MenuHandler=()=>{
        setToggle(!toggle);
      
    }

    const ScrollHandler=()=>{
            window.onscroll=()=>{

                let nav = document.querySelector(".nav-wrapper");
                if(document.body.scrollTop > 0  || document.documentElement.scrollTop > 0) {
            nav.classList.add("background")
                }
                else{
                    nav.classList.remove("background")
                }
        }
        }

        useEffect(()=>{
                ScrollHandler()
        },[])
    return ( 
        <>
        <div  className="nav-wrapper">
            <div className="nav">
                <nav>
                    <div className="logo">
                        <h1>LOGO</h1>
                    </div>
                    <div className={toggle ? 'nav-slidein' : 'nav-links-wrapper'}>
                        <div className="nav-links">
                            <ul>
                                <li>Home</li>
                                <li>Men</li>
                                <li>Women</li>
                                <li>About Us</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div className="cart">
                        <div className="cart-no">
                            <p>{product.length}</p>
                        </div>
                        <CartIcon />
                    </div>
                    <div onClick={MenuHandler} className="menu">
                        <MenuIcon  />
                    </div>
                </nav>
            </div>
        </div>
        </>
     );
}
 
export default Nav;