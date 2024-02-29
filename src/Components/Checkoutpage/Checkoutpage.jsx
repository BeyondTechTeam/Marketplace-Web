import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const CheckoutPage = () => {
  const basketItems = [];

  return (
    <Router>
      <Switch>
        <Route exact path="/Checkout">
          <div>
            <h2>Checkout </h2>
            <div>
              {basketItems.map((item, index) => (
                <div key={index}>
                  <p>{item.name}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price}</p>
                </div>
              ))}
            </div>

            <form>
              <label htmlFor="fullName">Full Name:</label>
              <input type="text" id="fullName" name="fullName" required />
              <button type="submit">Place Order</button>
            </form>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default CheckoutPage;
