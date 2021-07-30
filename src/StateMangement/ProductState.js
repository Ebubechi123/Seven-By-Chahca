import React,{useState,createContext} from 'react';

export const ProductStateProvider = createContext();


export  const ProductState = (props) => {
   
const [product,setProduct] = useState([]);

    return ( 
        <>
        <ProductStateProvider.Provider value={[product,setProduct]}>
                {props.children}
        </ProductStateProvider.Provider>
        </>
     );
}
 
