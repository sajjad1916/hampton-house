import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function OrderList() {
  const [Data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    setError(null);

    fetch(`${import.meta.env.VITE_APP_BASE_URL}/order/list`, {
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

  console.log(Data);

  return (
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
                <th scope="col">Student ID</th>
                <th scope="col">Name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {Data?.data.map((datas) => (
                <tr key={datas.id}>
                  <th scope="row">
                    <a href="#">#{datas.order_id}</a>
                  </th>
                  <td>{datas.student_id}</td>
                  <td>
                    <a href="#" class="text-primary">
                      {datas.name}
                    </a>
                  </td>
                  <td>{datas.contact_number}</td>
                  <td>
                    <span class="badge bg-warning">{datas.status}</span>
                  </td>
                  <td>
                    <span class="badge bg-success">
                      <Link to={`/${datas.order_id}`} className="text-white">
                        View
                      </Link>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderList;
