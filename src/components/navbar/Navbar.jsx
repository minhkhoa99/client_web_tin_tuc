import { useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  function toggleNavbar() {
    setIsNavbarOpen(!isNavbarOpen);
  }
  return (
    <div id="navbarConatainerBackgroud">
      <div className="row">
        <div className="col-xs-12">
          <div id="MenuBarContainer">
            <div id="TopMenuLeft">
              <nav
                className="navbar navbar-expand-lg bg-body-tertiary"
                id="nav-header"
              >
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
                          className="nav-link active"
                          aria-current="page"
                          href="/"
                        >
                          Trang Chủ
                        </a>
                      </li>
                      <NavDropdown
                        title="Giới thiệu"
                        id="basic-nav-dropdown"
                        className="p-0 mx-2"
                      >
                        <NavDropdown.Item
                          href="/page"
                          className="nav-dropdown"
                        >
                          Giới thiệu chung
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="/introduce"
                          className="nav-dropdown"
                        >
                          Tổ chức bộ máy
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="/introduce/sitemap"
                          className="nav-dropdown"
                        >
                          Sơ đồ trang
                        </NavDropdown.Item>
                      </NavDropdown>
                      <li className="nav-item mx-2">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="/news"
                        >
                          Tin tức sự kiện
                        </a>
                      </li>
                      <NavDropdown
                        title="Nghiệp vụ văn hóa"
                        id="basic-nav-dropdown"
                        className="p-0 mx-2"
                      >
                        <NavDropdown.Item
                          href="/promotional-media"
                          className="nav-dropdown pb-2"
                        >
                          Tuyên truyền cổ động - Triển lãm
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="/public-art"
                          className="nav-dropdown"
                        >
                          Nghệ thuật quần chúng
                        </NavDropdown.Item>
                      </NavDropdown>

                      <NavDropdown
                        title="Tuyên truyền lưu động"
                        id="basic-nav-dropdown"
                        className="p-0 mx-2"
                      >
                        <NavDropdown.Item
                          href="/propagate/"
                          className="nav-dropdown pb-2"
                        >
                          Hoạt động tuyên truyền
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="/script/"
                          className="nav-dropdown"
                        >
                          Kịch bản tuyên truyền
                        </NavDropdown.Item>
                      </NavDropdown>
                      <li className="nav-item mx-2">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="/movies/"
                        >
                          Nghiệp vụ điện ảnh
                        </a>
                      </li>
                      <NavDropdown
                        title="Thông tin nghiệp vụ"
                        id="basic-nav-dropdown"
                        className="p-0 mx-2"
                      >
                        <NavDropdown.Item
                          href="/DirectiveText"
                          className="nav-dropdown pb-2"
                        >
                          Văn bản chỉ đạo - Điều hành
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="/commands"
                          className="nav-dropdown"
                        >
                          Khẩu lệnh
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="/radioarticle"
                          className="nav-dropdown"
                        >
                          Bài phát thanh
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="/exhibitionset"
                          className="nav-dropdown"
                        >
                          Bộ triển lãm
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="/paintingset"
                          className="nav-dropdown"
                        >
                          Bộ tranh cổ động
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="/notification"
                          className="nav-dropdown"
                        >
                          Thông báo
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
  );
};

export default Navbar;
