import React, { useEffect, useState } from "react";
import "./sideBar.css";
import 'video-react/dist/video-react.css';
import image1 from "../../image/TAP SAN T8-2016_jpg.jpg";
import image2 from "../../image/Du lich Dong nai_jpg.jpg";
import image3 from "../../image/DuLichXuanLoc.jpg";
import { Select } from "antd";
import ReactPlayer from 'react-player/lazy';
import axios from "axios";
import Statistics from "../statistics/Statistics";

export default function SideBar() {
  const [data, setData] = useState([])
  const [video,setVideo] = useState([])

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/new/host-new/1`)
      .then((data) => setData(data.data.data))
      .catch((err) => console.log(err));
  }, []);




  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/upload-video/`)
    .then((data) => setVideo(data.data))
    .catch((err) => console.log(err))
  }, [])

const urlVideo = video?.data;
const videoHot = urlVideo?.find((e) => e.id === 1)


  const handleError = (error) => {
    console.error('An error occurred:', error);
    // You can handle the error here, e.g., display a message to the user
  };


  return (
    <div className="sideBar">
      <div className="titleNews p-1 mb-3">
        <h4>Tin Nổi Bật</h4>
      </div>
      <ul style={{ overflowY: "scroll", height: "400px", paddingRight: "3%" }}>
        {data.map((e) => {
         
          return <li key={e.id} className="my-3" ><a className="text-decoration-none text-secondary" href={`/news/${e.id}`}>{e.title}</a> </li>;
        })}
      </ul>
      <div className="p-3 text-center border-top">
        <h4>VIDEO</h4>
      </div>
      <div className="w-100">
        
      <ReactPlayer className="w-100 h-100" url={`${process.env.REACT_APP_API}/${videoHot?.link}`} controls
        onError={handleError} />
      </div>
      <div className="menu my-3">
        <div>
          <a href="/">
            <h6>TRANG CHỦ</h6>
          </a>
        </div>
        <div>
          <a href="/introduce">
            <h6>GIỚI THIỆU CHUNG</h6>
          </a>
        </div>
        <div>
          <a href="/promotional-media">
            <h6>TRUYỀN THÔNG CỔ ĐỘNG</h6>
          </a>
        </div>
        <div>
          <a href="/public-art">
            <h6>NGHỆ THUẬT QUẦN CHÚNG</h6>
          </a>
        </div>
        <div>
          <a href="/news">
            <h6>TIN TỨC SỰ KIỆN</h6>
          </a>
        </div>
        <div>
          <a href="/propagate/">
            <h6>TUYÊN TRUYỀN LƯU ĐỘNG</h6>
          </a>
        </div>
        <div>
          <a href="/movies/">
            <h6>CHIẾU PHIM LƯU ĐỘNG</h6>
          </a>
        </div>
      </div>
      <div className="titleNews p-1">
        <h4>Văn Bản</h4>
      </div>
      <h4 className="mt-3">205/KH-TTVH </h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum beatae
        dolores nam voluptatibus repudiandae labore commodi autem eveniet
        molestiae consequuntur.
      </p>
      <img src={image1} alt="" className="w-100" />
      <img src={image2} alt="" className="w-100" />

      <img src={image3} alt="" className="w-100" />
      <div className="card-title">
        <h5 className="my-3">LIÊN KẾT TRANG WEB</h5>
        <Select
          showSearch
          className="select w-100 mb-3"
          placeholder="Search to Select"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={[
            {
              value: "1",
              label: "Not Identified",
            },
            {
              value: "2",
              label: "Closed",
            },
            {
              value: "3",
              label: "Communicated",
            },
            {
              value: "4",
              label: "Identified",
            },
            {
              value: "5",
              label: "Resolved",
            },
            {
              value: "6",
              label: "Cancelled",
            },
          ]}
        />
        <Statistics />
      </div>
    </div>
  );
}
