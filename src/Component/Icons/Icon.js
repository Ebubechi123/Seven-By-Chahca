import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingBag,faBars,faArrowLeft,faArrowRight} from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingBag,faBars,faArrowLeft,faArrowRight)
export const CartIcon =()=>{
      
    return(
        <>
            <FontAwesomeIcon  icon="shopping-bag" />
        </>
    )
}
export const MenuIcon =()=>{
    return(
        <>
            <FontAwesomeIcon icon="bars" />
        </>
    )
}
export const RightIcon =()=>{
    return(
        <>
            <FontAwesomeIcon icon="arrow-right" />
        </>
    )
    }

export const LeftIcon =()=>{
    return(
        <>
            <FontAwesomeIcon icon="arrow-left" />
        </>
    )
}