import React, { useState } from 'react'
import {connect} from "react-redux";
function Home(props) {
    let { products } = props;
    console.log(props.count);
    console.log(products);
        return (
        <div style={{display:"flex"}}>
            {
                products.map(product=>{
                    return (
                        <div key={product.id}>
                            <img src={product.image} style={{height:"20vw"}}></img>
                            <h2>{product.title}</h2>
                            <div>{product.description}</div>
                            <h3>{product.price}</h3>
                            <button onClick={()=>{props.increaseCount()}}>Add to Cart</button>
                        </div>
                    )
                })}
        </div>

    )
}
const mapStatetoProps=store=>{
    console.log(store);
    return store;
}
const mapDispatchtoProps = dispatch => {
    //    action
    // handler function 
    return {
        increaseCount: () => {
            dispatch({
                type: "increaseCount"
                // data send to reducer function 
            })
        }
    }
}
const HigerOrderComponent=connect(mapStatetoProps,mapDispatchtoProps)(Home)

export default HigerOrderComponent;
