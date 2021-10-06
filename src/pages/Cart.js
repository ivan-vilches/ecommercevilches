import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,Link,
} from "react-router-dom";
import Checkout from "./Checkout";


function Cart() {
  return (
    <div className="App-body">
      <Router>
    <h1>Tu carrito</h1>
      <Link to="/Checkout"><button>Comprar</button></Link>
        <Switch>
            <Route path="/Checkout">
                <Checkout/>
            </Route>
        </Switch>
    </Router>
      </div>
  );
}

export default Cart;