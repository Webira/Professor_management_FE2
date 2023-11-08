import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container">
          <h3>Professors management</h3>
          <a classNameName="navbar-brand" href="#"></a>

          <div
            className="navbar justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="btn btn-outline-black" to="/">
                  Welcome
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-outline-black" to="/home">
                  Tabeau d'Admin
                </Link>
              </li>
              <li class="nav-item">
                <Link className="btn btn-outline-black" to="/adduser">
                  Ajouter un User
                </Link>
              </li>
                                       
              <li class="nav-item">
                <Link className="btn btn-outline-black" to="/tabprofessors">
                  Tableau des Professors
                </Link>
              </li>
              <li class="nav-item">
                <Link className="btn btn-outline-black" to="/addprofessor">
                  Ajouter un Professor
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
