import React from "react";
import "./Order.css";

function Order() {
  return (
    <div className="order-container">
      <header className="order-header">
        <h1>CHECKOUT</h1>
        <nav>
          <a href="#">Cart</a> &gt; <a href="#">Checkout</a> &gt;{" "}
          <a href="#">Confirmation</a>
        </nav>
      </header>

      <main className="main-content">
        <section className="details-section">
        <div class="section-title">SHIPPING DETAILS</div>
        <div className="shipping-details">

            <div className="details-box">
                
            </div>

        </div>
        </section>
      </main>
    </div>
  );
}

export default Order;
