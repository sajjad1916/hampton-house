import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

function DetailedOrder() {
  const { orderId } = useParams();
  console.log(orderId);
  return (
    <>
      <Header />
      <Sidebar />
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
                        <th scope="col">Task</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <a href="#">#1</a>
                        </th>
                        <td>5481566</td>
                        <td>
                          <a href="#" class="text-primary">
                            At praesentium minu
                          </a>
                        </td>
                        <td> (267) 625 - 4063</td>
                        <td>
                          <span class="badge bg-warning">Pending</span>
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
                        <td> (267) 625 - 4063</td>
                        <td>&nbsp;</td>
                        <td></td>
                        <td></td>
                      </tr>

                      <tr>
                        <td scope="row">Fax Number</td>
                        <td> </td>
                        <td>&nbsp;</td>
                        <td>Participant TTY</td>
                        <td>NO</td>
                      </tr>
                      <tr>
                        <td scope="row">Provider ID</td>
                        <td> 41637</td>
                        <td>&nbsp;</td>
                        <td>Provider ID </td>
                        <td>5481566</td>
                      </tr>

                      <tr>
                        <td scope="row">Legal Name</td>
                        <td> The Center at Hampton House </td>
                        <td>&nbsp;</td>
                        <td></td>
                        <td></td>
                      </tr>

                      <tr>
                        <td scope="row">SAP Vendor Number</td>
                        <td> 6000000</td>
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
                        <td> 1676351</td>
                        <td>Fund Code</td>
                        <td>State Only SFY 2022 VR Fund A2</td>
                        <td></td>
                        <td></td>
                      </tr>

                      <tr>
                        <td scope="row">Create Date</td>
                        <td> 02/03/2023</td>

                        <td>Process Date</td>
                        <td>02/03/2023</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>

                  <div
                    id="line_items_header"
                    style={{ backgroundColor: "gray" }}
                  >
                    Line Items
                  </div>
                  <div
                    id="line_atems_all"
                    style={{
                      textAlign: "left",
                      paddingTop: "10px",
                    }}
                  >
                    1) This is line item #1
                    <br />
                    2) This is line item #2
                    <br />
                    3) This is line item #3
                    <br />
                    4) This is line item #4
                    <br />
                  </div>

                  <div
                    id="action_tobe_taken"
                    class="action_tobe_taken text-center mx-auto p-2 text-white"
                    style={{
                      marginTop: "40px",
                      backgroundColor: "green",
                      width: "20%",
                    }}
                  >
                    Approve Now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

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
