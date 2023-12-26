import React from "react";
import { BiGridAlt, BiMenu } from "react-icons/bi";

function Sidebar() {
  return (
    <aside id="sidebar" class="sidebar">
      <ul class="sidebar-nav" id="sidebar-nav">
        <li class="nav-item">
          <a class="nav-link ">
            <BiGridAlt />
            <span className="m-2">Dashboard</span>
          </a>
        </li>

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <BiMenu />
            <span className="m-2">Menu1</span>
            <i class="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="components-nav"
            class="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="">
                <i class="bi bi-circle"></i>
                <span>Menu2</span>
              </a>
            </li>
            <li>
              <a href="">
                <i class="bi bi-circle"></i>
                <span>Menu3</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
