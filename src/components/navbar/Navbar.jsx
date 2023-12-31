import { useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css"

const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    function toggleNavbar() {
      setIsNavbarOpen(!isNavbarOpen);
    }
    return(
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
                      <ul className="navbar-nav container-menu-nav-items m-auto">
                        <li className="nav-item mx-2">
                          <a
                            className="nav-link active p-0"
                            aria-current="page"
                            href="/"
                          >
                            Trang Chủ
                          </a>
                        </li>
                        <li className="nav-item mx-2">
                          <a className="nav-link active p-0" href="/introduce">
                            Giới Thiệu Chung
                          </a>
                        </li>
                        <li className="nav-item mx-2">
                          <a className="nav-link active p-0" href="/promotional-media">
                            Truyền thông cổ động
                          </a>
                        </li>
                        <li className="nav-item mx-2">
                          <a className="nav-link active p-0" href="/public-art">
                            Nghệ thuật quần chúng
                          </a>
                        </li>
                        <li className="nav-item mx-2">
                          <a className="nav-link active p-0" href="/news">
                            Tin Tức Sự Kiện
                          </a>
                        </li>
                        <NavDropdown title="Lưu động" id="basic-nav-dropdown" className="p-0 mx-2">
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
    )
}

export default Navbar