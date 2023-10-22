import React, { useEffect, useState } from "react";
// import ruvenLogo from "../assets/RuvenaLogo.svg";
// import logo_Ruvena from "../assets/Logo-Ruvena.svg";
// import { Link } from "react-router-dom";
// import { Blogs } from "./Blogs";
// import { Button } from "primereact/button";
export const Navbar = () => {
  const [scrollShow, setscrollShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 56) {
        setscrollShow(true);
      } else {
        setscrollShow(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  console.log(scrollShow, "fgfgscrollShow");
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{
          backgroundColor: "rgb(255 252 235)",
          position: "fixed",
          width: "-webkit-fill-available",
          zIndex: " 999",
        }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand fw-bold"
            href="#"
            style={{ textTransform: "capitalize" }}
          >
            candid content creation
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contact</a>
              </li>
            </ul> */}
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-dark" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};
