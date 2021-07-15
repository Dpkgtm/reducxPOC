import React from 'react'
import {connect} from "react-redux";
function NaVBar(props) {
    //const cartCount = 0;
    console.log("in nav bar", props.count);
    return (

        <div style={{ height: "3rem", backgroundColor: "lightgray", color: "black", fontSize: "150%", }}>
            NavBar
            <span style={{ marginLeft: "4rem" }}>{props.count}</span>
        </div>
    )
}
const mapStatetoProps=store=>{
    console.log(store);
    return store;
}
const HigerOrderComponent=connect(mapStatetoProps)(NaVBar)
export default HigerOrderComponent;