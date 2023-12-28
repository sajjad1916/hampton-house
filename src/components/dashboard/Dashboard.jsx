import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import OrderList from "./OrderList";

function Dashboard() {
  const [Data, setData] = useState(null); // Initial data state
  const [error, setError] = useState(null); // Error state
  useEffect(() => {
    setError(null); // Reset any previous errors

    fetch(`${import.meta.env.VITE_APP_BASE_URL}/order/get_status_count`, {
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
        setData(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <>
      <main id="main" class="main">
        <div class="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>
        <section class="section dashboard">
          <div class="row">
            <div class="col-lg-12">
              <div class="row">
                <div class="col-xxl-4 col-md-4">
                  <div class="card info-card sales-card">
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
                        Total <span>| So Far</span>
                      </h5>

                      <div class="d-flex align-items-center">
                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i class="bi bi-cart"></i>
                        </div>
                        <div class="ps-3">
                          <h6>{Data?.data.total || "0"}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xxl-4 col-md-4">
                  <div class="card info-card revenue-card">
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
                        Approved <span>| So Far</span>
                      </h5>

                      <div class="d-flex align-items-center">
                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i class="bi bi-cart"></i>
                        </div>
                        <div class="ps-3">
                          <h6>{Data?.data.approved || "0"}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xxl-4 col-md-4">
                  <div class="card info-card customers-card">
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
                        Pending <span>| So Far</span>
                      </h5>

                      <div class="d-flex align-items-center">
                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i class="bi bi-cart"></i>
                        </div>
                        <div class="ps-3">
                          <h6>{Data?.data.pending || "0"}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Here will be orderlist */}
                <OrderList />
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

export default Dashboard;
