import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function OrderDetailedComponent({ orderId }) {
  const navigate = useNavigate();

  const [Data, setData] = useState(null); // Initial data state
  const [error, setError] = useState(null); // Error state
  const [approveBtn, setApproveBtn] = useState(false);

  const approveData = {
    order_id: orderId,
    status: "approve",
  };

  const rejectData = {
    order_id: orderId,
    status: "reject",
  };

  const handleApprove = () => {
    fetch(`${import.meta.env.VITE_APP_BASE_URL}/order/approval`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": true,
      },
      body: JSON.stringify(approveData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        navigate(0);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handleReject = () => {
    fetch(`${import.meta.env.VITE_APP_BASE_URL}/order/approval`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": true,
      },
      body: JSON.stringify(rejectData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        navigate(0);
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    setError(null); // Reset any previous errors

    fetch(`${import.meta.env.VITE_APP_BASE_URL}/order/details/${orderId}`, {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": true,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.data.order_details.status == "approved") {
          setApproveBtn(true);
        }
        setData(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  console.log(Data);

  return (
    <main id="main" class="main">
      <div class="pagetitle">
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item">Task</li>
            <li class="breadcrumb-item active">Details</li>
          </ol>
        </nav>
      </div>

      <section class="section">
        <div class="row">
          <div class="col-12">
            <div class="card recent-sales overflow-auto">
              <div class="card-body">
                <h5 class="card-title">Taks Details</h5>

                <table class="table table-borderless datatable_0  ">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Participant ID</th>
                      <th scope="col">Legal Name</th>
                      <th scope="col">Phone Number</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <a href="#">{Data?.data.order_details.id}</a>
                      </th>
                      <td>{Data?.data.order_details.provider_id}</td>
                      <td>
                        <a href="#" class="text-primary">
                          {Data?.data.order_details.legal_name}
                        </a>
                      </td>
                      <td> {Data?.data.order_details.sap_vendor_number}</td>
                      <td>
                        <span class="badge bg-warning">
                          {Data?.data.order_details.status}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table
                  class="table table-borderless datatable_0  "
                  style={{ width: "80%", margin: "0 auto" }}
                >
                  <thead>
                    <tr>
                      <th scope="col">&nbsp;</th>
                      <th scope="col">&nbsp;</th>
                      <th scope="col">&nbsp;</th>

                      <th scope="col">&nbsp;</th>
                      <th scope="col">&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">Phone Number</td>
                      <td> {Data?.data.order_details.sap_vendor_number}</td>
                      <td>&nbsp;</td>
                      <td></td>
                      <td></td>
                    </tr>

                    <tr>
                      <td scope="row">Fax Number</td>
                      <td> </td>
                      <td>&nbsp;</td>
                      <td>Participant TTY</td>
                      <td>{Data?.data.order_details.student_tty}</td>
                    </tr>
                    <tr>
                      <td scope="row">Provider ID</td>
                      <td> {Data?.data.order_details.provider_id}</td>
                      <td>&nbsp;</td>
                      <td>Order ID </td>
                      <td> {Data?.data.order_details.order_id}</td>
                    </tr>

                    <tr>
                      <td scope="row">Legal Name</td>
                      <td> {Data?.data.order_details.legal_name}</td>
                      <td>&nbsp;</td>
                      <td></td>
                      <td></td>
                    </tr>

                    <tr>
                      <td scope="row">SAP Vendor Number</td>
                      <td> {Data?.data.order_details.sap_vendor_number}</td>
                      <td>&nbsp;</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>

                <div
                  id="purchase_order_information"
                  style={{ backgroundColor: "gray" }}
                >
                  Purchase Order Information
                </div>

                <table
                  class="table table-borderless datatable_0  "
                  style={{ width: "70%", margin: "0 auto" }}
                >
                  <thead>
                    <tr>
                      <th scope="col">&nbsp;</th>
                      <th scope="col">&nbsp;</th>
                      <th scope="col">&nbsp;</th>

                      <th scope="col">&nbsp;</th>
                      <th scope="col">&nbsp;</th>
                      <th scope="col">&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">Purchase Order Number</td>
                      <td> {Data?.data.order_details.order_id}</td>
                      <td>Fund Code</td>
                      <td>{Data?.data.order_details.fund_code}</td>
                      <td></td>
                      <td></td>
                    </tr>

                    <tr>
                      <td scope="row">Create Date</td>
                      <td> {Data?.data.order_details.created_at}</td>

                      <td>Process Date</td>
                      <td>02/03/2023</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>

                <div
                  id="line_items_header"
                  style={{
                    backgroundColor: "gray",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Line Items
                </div>
                <div class="col-12">
                  <div class="card recent-sales overflow-auto">
                    <div class="filter">
                      <a class="icon" href="#" data-bs-toggle="dropdown">
                        <i class="bi bi-three-dots"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li class="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>

                        <li>
                          <a class="dropdown-item" href="#">
                            Today
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            This Month
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="card-body">
                      <h5 class="card-title">
                        Line Items <span>| Today</span>
                      </h5>

                      <table class="table table-borderless datatable">
                        <thead>
                          <tr>
                            <th scope="col">Line Item ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Total</th>
                            <th scope="col">Total units</th>
                            <th scope="col">Unit per Customer</th>
                            <th scope="col">Unit Price</th>
                            <th scope="col">Unit Remaining</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Data?.data.order_line_items.map((datas) => (
                            <tr key={datas.line_item_id}>
                              <td>{datas.student_id}</td>
                              <td>{datas.title}</td>
                              <td>{datas.total}</td>
                              <td>{datas.total_units}</td>
                              <td>{datas.unit_per_customer}</td>
                              <td>{datas.unit_price}</td>
                              <td>{datas.units_remaining}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {approveBtn ? (
                  <button
                    onClick={handleReject}
                    id="action_tobe_taken"
                    class="action_tobe_taken text-center mx-auto p-2 text-white"
                    style={{
                      marginTop: "40px",
                      backgroundColor: "red",
                      width: "20%",
                    }}
                  >
                    Reject
                  </button>
                ) : (
                  <button
                    onClick={handleApprove}
                    id="action_tobe_taken"
                    class="action_tobe_taken text-center mx-auto p-2 text-white"
                    style={{
                      marginTop: "40px",
                      backgroundColor: "green",
                      width: "20%",
                    }}
                  >
                    Approve Now
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default OrderDetailedComponent;
