import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import OrderDetailedComponent from "../../components/orderDetails/OrderDetailedComponent";

function DetailedOrder() {
  const { orderId } = useParams();
  return (
    <>
      <Header />
      <Sidebar />
      <OrderDetailedComponent orderId={orderId} />

      <footer id="footer" class="footer">
        <div class="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Hampton House</span>
          </strong>
          . All Rights Reserved
        </div>
        <div class="credits"></div>
      </footer>

      <a
        href="#"
        class="back-to-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default DetailedOrder;
