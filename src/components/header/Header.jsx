import React, { useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  function toggleNavbar() {
    setIsNavbarOpen(!isNavbarOpen);
  }
  return (
    <>
      <div
        className="container"
        style={{
          boxSizing: "border-box",
          paddingRight: "5px",
          paddingLeft: "5px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <header
          style={{
            boxSizing: "border-box",
            display: "block",
            padding: "0px",
            margin: "0px",
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <ul
            id="cbp-bislideshow"
            className="cbp-bislideshow"
            style={{
              boxSizing: "border-box",
              listStyle: "none",
              padding: "0px",
              margin: "0px",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            <li
              style={{
                boxSizing: "border-box",
                lineHeight: 1.3,
                transition: "opacity 1s ease 0s",
                position: "absolute",
                width: "42%",
                height: "100%",
                top: "0px",
                right: "0px",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundImage:
                  'url("https://svhttdl.dongnai.gov.vn/Style%20Library/banner/slide-top1.jpg")',
                opacity: 0,
              }}
            >
              <img
                alt="image01"
                src="https://svhttdl.dongnai.gov.vn/Style Library/banner/slide-top1.jpg"
                style={{
                  boxSizing: "border-box",
                  verticalAlign: "middle",
                  border: "none",
                  margin: "0px",
                  padding: "0px",
                  maxWidth: "100%",
                  width: "100%",
                  display: "none",
                }}
              />
            </li>
            <li
              style={{
                boxSizing: "border-box",
                lineHeight: 1.3,
                transition: "opacity 1s ease 0s",
                position: "absolute",
                width: "42%",
                height: "100%",
                top: "0px",
                right: "0px",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundImage:
                  'url("https://svhttdl.dongnai.gov.vn/Style%20Library/banner/slide-top2.jpg")',
                opacity: 1,
              }}
            >
              <img
                alt="image01"
                src="https://svhttdl.dongnai.gov.vn/Style Library/banner/slide-top2.jpg"
                style={{
                  boxSizing: "border-box",
                  verticalAlign: "middle",
                  border: "none",
                  margin: "0px",
                  padding: "0px",
                  maxWidth: "100%",
                  width: "100%",
                  display: "none",
                }}
              />
            </li>
            <li
              style={{
                boxSizing: "border-box",
                lineHeight: 1.3,
                transition: "opacity 1s ease 0s",
                position: "absolute",
                width: "42%",
                height: "100%",
                top: "0px",
                right: "0px",
                opacity: 0,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundImage:
                  'url("https://svhttdl.dongnai.gov.vn/Style%20Library/banner/slide-top3.jpg")',
              }}
            >
              <img
                alt="image01"
                src="https://svhttdl.dongnai.gov.vn/Style Library/banner/slide-top3.jpg"
                style={{
                  boxSizing: "border-box",
                  verticalAlign: "middle",
                  border: "none",
                  margin: "0px",
                  padding: "0px",
                  maxWidth: "100%",
                  width: "100%",
                  display: "none",
                }}
              />
            </li>
            <li
              style={{
                boxSizing: "border-box",
                lineHeight: 1.3,
                transition: "opacity 1s ease 0s",
                position: "absolute",
                width: "42%",
                height: "100%",
                top: "0px",
                right: "0px",
                opacity: 0,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundImage:
                  'url("https://svhttdl.dongnai.gov.vn/Style%20Library/banner/slide-top4.jpg")',
              }}
            >
              <img
                alt="image01"
                src="https://svhttdl.dongnai.gov.vn/Style Library/banner/slide-top4.jpg"
                style={{
                  boxSizing: "border-box",
                  verticalAlign: "middle",
                  border: "none",
                  margin: "0px",
                  padding: "0px",
                  maxWidth: "100%",
                  width: "100%",
                  display: "none",
                }}
              />
            </li>
            <li
              style={{
                boxSizing: "border-box",
                lineHeight: 1.3,
                transition: "opacity 1s ease 0s",
                position: "absolute",
                width: "42%",
                height: "100%",
                top: "0px",
                right: "0px",
                opacity: 0,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundImage:
                  'url("https://svhttdl.dongnai.gov.vn/Style%20Library/banner/slide-top5.jpg")',
              }}
            >
              <img
                alt="image01"
                src="https://svhttdl.dongnai.gov.vn/Style Library/banner/slide-top5.jpg"
                style={{
                  boxSizing: "border-box",
                  verticalAlign: "middle",
                  border: "none",
                  margin: "0px",
                  padding: "0px",
                  maxWidth: "100%",
                  width: "100%",
                  display: "none",
                }}
              />
            </li>
          </ul>
          <div
            className="row"
            style={{
              boxSizing: "border-box",
              marginRight: "-5px",
              marginLeft: "-5px",
            }}
          >
            <div
              className="col-sm-8"
              style={{
                boxSizing: "border-box",
                position: "relative",
                minHeight: "1px",
                paddingRight: "5px",
                paddingLeft: "5px",
                cssFloat: "left",
                width: "66.6667%",
              }}
            >
              <div
                className="bg-head"
                style={{
                  boxSizing: "border-box",
                  background:
                    'url("https://svhttdl.dongnai.gov.vn/Style%20Library/images/bg-slide.png") left center / cover no-repeat',
                  paddingLeft: "15px",
                }}
              >
                <h2
                  className="slogan"
                  style={{
                    boxSizing: "border-box",
                    fontFamily: "inherit",
                    lineHeight: 1.3,
                    margin: "0px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontSize: "36px",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    color: "rgb(235, 36, 36)",
                    textAlign: "center",
                    paddingLeft: "140px",
                    display: "inline-block",
                  }}
                >
                  {" "}
                  <img
                    src="https://svhttdl.dongnai.gov.vn/Style Library/images/slogan.png"
                    style={{
                      boxSizing: "border-box",
                      verticalAlign: "middle",
                      border: "none",
                      margin: "0px",
                      padding: "0px",
                      maxWidth: "100%",
                    }}
                    alt=""
                  />
                </h2>
              </div>
            </div>
            <a
              id="hamburger"
              href="https://svhttdl.dongnai.gov.vn/Pages/home.aspx#menu_m"
              style={{
                transition: "all 0.4s ease 0s",
                textShadow: "none",
                textDecoration: "none",
                color: "rgb(22, 89, 216)",
                background: "rgb(1, 117, 64)",
                boxSizing: "border-box",
                width: "45px",
                height: "30px",
                position: "absolute",
                bottom: "-30px",
                backgroundColor: "rgb(1, 117, 64)",
                left: "0px",
                zIndex: 8,
                display: "none",
              }}
            >
              <span
                style={{
                  boxSizing: "border-box",
                  background: "rgb(255, 255, 255)",
                  content: '""',
                  display: "block",
                  width: "25px",
                  height: "3px",
                  position: "absolute",
                  left: "10px",
                  top: "14px",
                  transition:
                    "transform 0.5s ease 0.5s, top, bottom, left, opacity",
                }}
              />
            </a>
          </div>
        </header>
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
                  <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
                        <ul class="navbar-nav container-menu-nav-items ">
                          <li class="nav-item">
                            <a
                              class="nav-link active"
                              aria-current="page"
                              href="/"
                            >
                              Trang Chủ
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link active" href="/introduce">
                              Giới Thiệu Chung
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link active" href="/promotional-media">
                              Truyền thông cổ động
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link active" href="/public-art">
                              Nghệ thuật quần chúng
                            </a>
                          </li>
                          <li class="nav-item">
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
        <div
          className="box_head"
          style={{
            boxSizing: "border-box",
            background: "rgb(233, 233, 233)",
            margin: "0px 0px 20px",
            height: "30px",
            lineHeight: "30px",
          }}
        ></div>
        <div
          id="MenuControlContainer"
          style={{ boxSizing: "border-box", background: "rgb(1, 117, 64)" }}
        >
          <noscript style={{ boxSizing: "border-box" }}>
            {
              "<div class='noindex'>You may be trying to access this site from a secured browser on the server. Please enable scripts and reload this page.</div>"
            }
          </noscript>
          <div
            id="TurnOnAccessibility"
            className="s4-notdlg noindex"
            style={{ boxSizing: "border-box", display: "none" }}
          >
            <a
              id="linkTurnOnAcc"
              className="ms-TurnOnAcc"
              href="https://svhttdl.dongnai.gov.vn/Pages/home.aspx#"
              style={{
                boxSizing: "border-box",
                backgroundColor: "transparent",
                transition: "all 0.4s ease 0s",
                textShadow: "none",
                textDecoration: "none",
                color: "rgb(22, 89, 216)",
                overflow: "hidden",
                position: "absolute",
                top: "-2000px",
                width: "1px",
                height: "1px",
                zIndex: 3,
                overflowWrap: "normal",
                left: "2px",
              }}
            >
              {"Turn on more accessible mode"}
            </a>
          </div>
          <div
            id="TurnOffAccessibility"
            className="s4-notdlg noindex"
            style={{ boxSizing: "border-box", display: "none" }}
          >
            <a
              id="linkTurnOffAcc"
              className="ms-TurnOffAcc"
              href="https://svhttdl.dongnai.gov.vn/Pages/home.aspx#"
              style={{
                boxSizing: "border-box",
                transition: "all 0.4s ease 0s",
                textShadow: "none",
                textDecoration: "none",
                borderColor: "black",
                borderWidth: "1px",
                borderStyle: "solid",
                padding: "2px 4px",
                position: "absolute",
                top: "2px",
                width: "auto",
                height: "auto",
                backgroundColor: "white",
                color: "black",
                zIndex: 12,
                right: "150px",
              }}
            >
              {"Turn off more accessible mode"}
            </a>
          </div>
          <div
            className="s4-notdlg s4-skipribbonshortcut noindex"
            style={{ boxSizing: "border-box" }}
          >
            <a
              className="ms-SkiptoNavigation"
              href="/#"
              style={{
                boxSizing: "border-box",
                backgroundColor: "transparent",
                transition: "all 0.4s ease 0s",
                textShadow: "none",
                textDecoration: "none",
                color: "rgb(22, 89, 216)",
                overflow: "hidden",
                position: "absolute",
                top: "-2000px",
                width: "1px",
                height: "1px",
                zIndex: 3,
                overflowWrap: "normal",
                right: "50%",
              }}
            >
              {"Skip Ribbon Commands"}
            </a>
          </div>
          <div
            className="s4-notdlg noindex"
            style={{ boxSizing: "border-box" }}
          >
            <a
              className="ms-SkiptoMainContent"
              href="/#"
              style={{
                boxSizing: "border-box",
                backgroundColor: "transparent",
                transition: "all 0.4s ease 0s",
                textShadow: "none",
                textDecoration: "none",
                color: "rgb(22, 89, 216)",
                overflow: "hidden",
                position: "absolute",
                top: "-2000px",
                width: "1px",
                height: "1px",
                zIndex: 3,
                overflowWrap: "normal",
                right: "2px",
              }}
            >
              {"Skip to main content"}
            </a>
          </div>

          <div
            id="s4-ribbonrow111"
            className="s4-pr s4-ribbonrowhidetitle"
            style={{ boxSizing: "border-box", width: "100%" }}
          >
            <div
              id="s4-ribboncont"
              style={{
                boxSizing: "border-box",
                padding: "0px",
                background:
                  'url("https://svhttdl.dongnai.gov.vn/_catalogs/theme/Themed/67B9FADD/bgximg-294A8903.png?ctag") 0px -565px repeat-x',
              }}
            />
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  min-height: 100%;
  font-family: sans-serif;
  text-size-adjust: 100%;
  font-size: 10px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  background-color: rgb(255, 255, 255);
  font: 12px / 18px Arial, Helvetica, sans-serif;
  margin: 0px;
  padding: 0px;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  line-height: 18px;
}
`,
        }}
      />
    </>
  );
}
