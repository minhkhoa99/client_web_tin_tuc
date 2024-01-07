import React, { useEffect, useState } from "react";
import "./sideBar.css";
import image1 from "../../image/TAP SAN T8-2016_jpg.jpg";
import image2 from "../../image/Du lich Dong nai_jpg.jpg";
import image3 from "../../image/DuLichXuanLoc.jpg";
import { Select } from "antd";
import axios from "axios";

export default function SideBar() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/new/host-new/1")
      .then((data) => setData(data.data.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <div className="sideBar">
      <div className="titleNews p-1 mb-3">
        <h4>Tin Nổi Bật</h4>
      </div>
      <ul style={{ overflowY: "scroll", height: "400px" }}>
        {data.map((e) => {
          return <li key={e.id}>{e.title}</li>;
        })}
      </ul>

      {/* <div className="p-1 text-center">
        <h4 className="title-video mb-4">Video</h4>
        <video controls width="500">
          <source
            src="https://youtu.be/lfkqJOuHN14?si=VuKGiPBGj6n3Ddum"
            type="video/*"
          />
          Your browser does not support the video tag.
        </video>
        <div className="titleNews p-2">
          <h6>AUDIO PHAT THANH TUYÊN TRUYỀN</h6>
        </div>
      </div> */}
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
        <div className="statistical py-2 mb-3">
          <h6 className="m-0">THÔNG KÊ LƯỢT TRUY CẬP</h6>
        </div>
        <p>Hôm nay: 898</p>
        <p>Hôm qua: 2,898</p>
        <p>Tất cả: 3,7884,898</p>
      </div>
    </div>
  );
}
