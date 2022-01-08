import React,{useEffect} from 'react';
import Nav from '../Nav/Nav';
import { gsap } from "gsap";
import "./Header.css";
import headerImage from "../../Assets/Images/undraw_girl_just_wanna_have_fun_9d5u.svg"
const Header = () => {
    const animation =()=>{
        let tl = gsap.timeline({defaults:{duration:1}})
        tl.from(".nav",{y:-70,stagger:.6,opacity:0,duration:1});
        tl.from(".hero-title",{y:-70,stagger:.6,opacity:0,duration:1})
        tl.from(".hero-description",{y:70,stagger:.6,opacity:0,duration:1},"-=0.5");
        tl.from(".browse-link",{x:-70,stagger:.5,opacity:0,duration:1},"-=0.5");
        tl.from(".headerImage",{x:50,stagger:.5,opacity:0,duration:1},"-=1.9");
    }

    useEffect(()=>{
    animation()
    })


    return ( 
        <>
      <div className="header-wrapper">
          <div className="header">
              <header>
              {/* <Nav className="nav"/> */}
              <div className="hero">
                  <div className="col-1">
                      <div className="hero-title">
                          <h1>SEVEN BY CHACHA</h1>
                      </div>
                      <div className="hero-description">
                          <p>Causal wears to make you stand out.
                              <br/>
                            Simple but exotic.</p>
                      </div>
                        <div className="browse-link">
                            <p>Browse all catergories</p>
                        </div>
                  </div>
                  <div className="col-1">
                      <img className="headerImage"  src={headerImage} alt="" />
                  </div>
              </div>
              </header>
          </div>
      </div>
        </>
     );
}
 
export default Header;