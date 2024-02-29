import React, { useState } from "react";
import "./Checkoutpage.css";

const CheckoutPage = () => {
  const [basketItems, setBasketItems] = useState([
    { id: 1, name: "Product 1", quantity: 2, price: 10 },
    { id: 2, name: "Product 2", quantity: 1, price: 20 },
  ]);

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    deliveryAddress: "",
    phone: "",
    country: "",
    email: "",
    state: "",
  });

  const totalCost = basketItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const handleQuantityChange = (id, newQuantity) => {
    const updatedItems = basketItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setBasketItems(updatedItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setOrderPlaced(true);
  };

  return (
    <div className="checkout-page">
      <h1>Checkout Your Order</h1>
      <div className="basket"></div>

      <div className="checkout-form">
        {orderPlaced ? (
          <div className="thank-you-message">
            <h2>Thank You For Your Order!</h2>
            <p>
              We've received your order. Confirmation email will be sent
              shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form-grid">
            <div className="form-group-horizontal">
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="deliveryAddress">Delivery Address:</label>
              <input
                type="text"
                id="deliveryAddress"
                name="deliveryAddress"
                value={formData.deliveryAddress}
                onChange={(e) =>
                  setFormData({ ...formData, deliveryAddress: e.target.value })
                }
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country:</label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State:</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={(e) =>
                  setFormData({ ...formData, state: e.target.value })
                }
                required
              />
            </div>
            <div className="payment-options">
              <label>Payment Options:</label>
              <div>
                <input
                  type="radio"
                  id="paypal"
                  name="paymentOption"
                  value="paypal"
                />
                <label htmlFor="paypal">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/PayPal_Logo_Icon_2014.svg/730px-PayPal_Logo_Icon_2014.svg.png"
                    alt="PayPal"
                    className="paypal"
                  />
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="mastercard"
                  name="paymentOption"
                  value="card"
                />
                <label htmlFor="card">
                  <img
                    src="https://www.nicepng.com/png/full/54-542683_credit-card-pay-now-visa-and-mastercard-accepted.png"
                    alt="Card"
                    className="card"
                  />
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="bankTransfer"
                  name="paymentOption"
                  value="bankTransfer"
                />
                <label htmlFor="bankTransfer">Bank Transfer</label>
              </div>
            </div>
            <button type="submit" className="place-order-btn">
              Place Order
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
