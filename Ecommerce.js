import React from 'react'
import Home from './cartComponent/Home'
import Cart from './cartComponent/CartPage'
import Product from './cartComponent/ProductPage'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import NaVBar from './cartComponent/NavBar'
export default function Ecommerce() {
    console.log("ecommerce");
    return (
        <>
         <Router>
            <NaVBar/>
            <Switch>
                <Route path={"/product"} component={Product}></Route>
                <Route path={"/cart"} component={Cart}></Route>
                <Route path={"/"} component={Home}></Route>
            {/* <Route path={"/f"} component={Ecommerce}></Route> */}
            </Switch>
        </Router>
        </>
       
    )
}
