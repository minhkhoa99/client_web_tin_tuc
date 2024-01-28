import "./sileder.css";
import { Carousel } from "antd";
import Navbar from "../navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const SileDer = () => {
  const [dataSlider, setDataSlider] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/upload-image/`)
      .then((data) => {setDataSlider(data.data.data)})
      .catch((err) => console.log(err));
  }, []);
  console.log(dataSlider);

  return (
    <div className="text-center container-sileder">
      <h2>TRUNG TÂM VĂN HÓA - ĐIỆN ẢNH ĐỒNG NAI</h2>
      <Navbar />
      <div className="my-3">
        <Carousel autoplay>
          {dataSlider.map((e) => {
            return (
              <div key={e.id}>
                <img src={`${process.env.REACT_APP_API}/${e.link}`} className="w-100" alt="" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default SileDer;
