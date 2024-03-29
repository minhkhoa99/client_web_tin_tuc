import "./sileder.css";
import { Carousel } from "antd";
import Navbar from "../navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const SileDer = () => {
  const [dataSlider, setDataSlider] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/upload-image-slide/`)
      .then((data) => {setDataSlider(data.data.data)})
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="text-center container-sileder">
      <h2>TRUNG TÂM VĂN HÓA - ĐIỆN ẢNH ĐỒNG NAI</h2>
      <Navbar />
      <div className="my-3">
        <Carousel autoplay>
          {dataSlider.map((e) => {
            return (
              <div key={e.id} className="carousel-slide">
                <img src={`${process.env.REACT_APP_API}/${e.link}`}  className="carousel-image" alt="" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
        </div>
      </div>
    </div>
    
  );
};

export default SileDer;
