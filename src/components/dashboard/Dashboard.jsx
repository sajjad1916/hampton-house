import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
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
                          <h6>5</h6>
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
                          <h6>2</h6>
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
                        Unappproved <span>| So Far</span>
                      </h5>

                      <div class="d-flex align-items-center">
                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i class="bi bi-cart"></i>
                        </div>
                        <div class="ps-3">
                          <h6>3</h6>
                        </div>
                      </div>
                    </div>
                  </div>
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
                        Recent Sales <span>| Today</span>
                      </h5>

                      <table class="table table-borderless datatable">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Participant ID</th>
                            <th scope="col">Task</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
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
                            <td>(267) 625 - 4063</td>
                            <td>
                              <span class="badge bg-warning">Pending</span>
                            </td>
                            <td>
                              <span class="badge bg-success">
                                <Link to="/12345" className="text-white">
                                  View
                                </Link>
                              </span>
                            </td>
                          </tr>

                          <tr>
                            <th scope="row">
                              <a href="#">#2</a>
                            </th>
                            <td>5481568</td>
                            <td>
                              <a href="#" class="text-primary">
                                At recusandae consectetur
                              </a>
                            </td>
                            <td>(267) 625 - 4065</td>
                            <td>
                              <span class="badge bg-success">Approved</span>
                            </td>
                            <td>
                              <span class="badge bg-success">
                                <Link to="/12345" className="text-white">
                                  View
                                </Link>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="#">#3</a>
                            </th>
                            <td>5481569</td>
                            <td>
                              <a href="#" class="text-primar">
                                Ut voluptatem id earum et
                              </a>
                            </td>
                            <td>(267) 625 - 4066</td>
                            <td>
                              <span class="badge bg-danger">Rejected</span>
                            </td>
                            <td>
                              <span class="badge bg-success">View</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="#">#4</a>
                            </th>
                            <td>5481567</td>
                            <td>
                              <a href="#" class="text-primary">
                                Blanditiis dolor omnis similique
                              </a>
                            </td>
                            <td>(267) 625 - 4064</td>
                            <td>
                              <span class="badge bg-warning">Pending</span>
                            </td>
                            <td>
                              <span class="badge bg-success">View</span>
                            </td>
                          </tr>

                          <tr>
                            <th scope="row">
                              <a href="#">#5</a>
                            </th>
                            <td>5481570</td>
                            <td>
                              <a href="#" class="text-primary">
                                Sunt similique distinctio
                              </a>
                            </td>
                            <td>(267) 625 - 4067</td>
                            <td>
                              <span class="badge bg-success">Approved</span>
                            </td>
                            <td>
                              <span class="badge bg-success">View</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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

export default Dashboard;
