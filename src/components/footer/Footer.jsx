import { useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import imageBackgroud from "../../image/backgroud.jpg"

import "./footer.css";

const Footer = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  function toggleNavbar() {
    setIsNavbarOpen(!isNavbarOpen);
  }
  return (
    <div>
      <div
          className="row"
          style={{
            boxSizing: "border-box",
            marginRight: "-5px",
            marginLeft: "-5px",
          }}
        >
          <div
            className="col-xs-12"
            style={{
              boxSizing: "border-box",
              position: "relative",
              minHeight: "1px",
              paddingRight: "5px",
              paddingLeft: "5px",
              cssFloat: "left",
              width: "100%",
            }}
          >
            <div id="MenuBarContainer" style={{ boxSizing: "border-box" }}>
              <div id="TopMenuLeft" style={{ boxSizing: "border-box" }}>
                <div
                  id="ctl00_g_e803a2bb_79d8_4279_880c_15c8682f4c5c"
                  style={{ boxSizing: "border-box" }}
                >
                  <nav className="navbar navbar-expand-lg bg-body-tertiary" id="nav-header">
                    <div className="container-fluid">
                      <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleNavbar}
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div
                        className={`collapse navbar-collapse ${
                          isNavbarOpen ? "show" : ""
                        }`}
                        id="navbarNav"
                      >
                        <ul class="navbar-nav container-menu-nav-items m-auto">
                          <li class="nav-item mx-3">
                            <a
                              class="nav-link active"
                              aria-current="page"
                              href="/"
                            >
                              Trang Chủ
                            </a>
                          </li>
                          <li class="nav-item mx-3">
                            <a class="nav-link active" href="/introduce">
                              Giới Thiệu Chung
                            </a>
                          </li>
                          <li class="nav-item mx-3">
                            <a class="nav-link active" href="/promotional-media">
                              Truyền thông cổ động
                            </a>
                          </li>
                          <li class="nav-item mx-3">
                            <a class="nav-link active" href="/public-art">
                              Nghệ thuật quần chúng
                            </a>
                          </li>
                          <li class="nav-item mx-3">
                            <a class="nav-link active" href="/news">
                              Tin Tức Sự Kiện
                            </a>
                          </li>
                          <NavDropdown title="Lưu động" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/propagate" className="nav-dropdown mt-3 pb-2">
                              Tuyên truyền lưu động
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/movies" className="nav-dropdown mt-3">
                              Chiếu phim lưu động
                            </NavDropdown.Item>
                            
                          </NavDropdown>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      <div className="container-footer">
        <img src={imageBackgroud} alt="" className="w-100" />
      </div>
    </div>
  );
};
export default Footer;
