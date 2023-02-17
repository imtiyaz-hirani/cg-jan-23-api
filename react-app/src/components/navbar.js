import { Component } from "react";
import { Link, Outlet } from "react-router-dom";

export default class NavBar extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div >
           <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                My-App
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/posts">
                      Posts
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/employee">
                      Employee
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/users">
                      Users
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sign-up">
                      Sign Up
                    </Link>
                  </li>
                </ul>
              <div className="col-sm-2">
              <button className="btn btn-outline-success"  >Login</button>
              </div>
            </div>
            </div>
          </nav>
         
      </div>
    );
  }
}
