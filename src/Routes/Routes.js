import React from 'react';
import { Route } from "react-router-dom";
import MainSection from '../Component/MainSection/MainSection';
import Cart from '../Pages/Cart/Cart';

const Routes = () => {
    return ( 

        <>
    <Route exact={true} path="/" component={MainSection} />
    <Route exact={true} path="/cart" component={Cart}/>

        </>
     );
}
 
export default Routes;