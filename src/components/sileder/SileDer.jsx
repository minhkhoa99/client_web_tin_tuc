import "./sileder.css";
import { Carousel } from "antd";
import img1 from "../../image/th (1).jpg";
import img2 from "../../image/th (2).jpg";
import img3 from "../../image/th.jpg";
import img4 from "../../image/thiep-chuc-mung-ngay-quan-doi-nhan-dan-viet-nam_6297f.jpg";
import Navbar from "../navbar/Navbar";



const SileDer = () => {

  return (
    <div className="text-center container-sileder">
      <h1>TRUNG TÂM VĂN HÓA - ĐIỆN ẢNH ĐỒNG NAI</h1>
      <Navbar />
      <div className="my-5">
        <Carousel autoplay>
          <div>
            <img src={img1} className="w-100" alt="" />
          </div>
          <div>
            <img src={img2} className="w-100" alt="" />
          </div>
          <div>
            <img src={img3} className="w-100" alt="" />
          </div>
          <div>
            <img src={img4} className="w-100" alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default SileDer;
