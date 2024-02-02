
import imageBackgroud from "../../image/backgroud.jpg"

import "./footer.css";
import Navbar from "../navbar/Navbar";

const Footer = () => {


  return (
    <div>
    <Navbar />
      <div className="container-footer">
        <img src={imageBackgroud} alt="" className="w-100" />
      </div>
    </div>
  );
};
export default Footer;
