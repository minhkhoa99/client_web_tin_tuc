import React from "react";
import "./sideBar.css";
import image1 from "../../image/TAP SAN T8-2016_jpg.jpg";
import image2 from "../../image/Du lich Dong nai_jpg.jpg";
import image3 from "../../image/DuLichXuanLoc.jpg";
import { Select } from "antd";

export default function SideBar() {
  return (
    <div className="my-5 sideBar">
      <div className="titleNews">
        <h2>Tin Nổi Bật</h2>
      </div>
      <p className="my-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, qui!
      </p>
      <ul>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam porro
          quibusdam accusantium dolor tenetur perferendis magni laborum quisquam
          ea libero.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam porro
          quibusdam accusantium dolor tenetur perferendis magni laborum quisquam
          ea libero.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam porro
          quibusdam accusantium dolor tenetur perferendis magni laborum quisquam
          ea libero.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam porro
          quibusdam accusantium dolor tenetur perferendis magni laborum quisquam
          ea libero.
        </li>
      </ul>
      <div className="menu my-5">
        <div>
          <a href="/">
            <h5>TRANG CHỦ</h5>
          </a>
        </div>
        <div>
          <a href="/introduce">
            <h5>GIỚI THIỆU CHUNG</h5>
          </a>
        </div>
        <div>
          <a href="/promotional-media">
            <h5>TRUYỀN THÔNG CỔ ĐỘNG</h5>
          </a>
        </div>
        <div>
          <a href="/public-art">
            <h5>NGHỆ THUẬT QUẦN CHÚNG</h5>
          </a>
        </div>
        <div>
          <a href="/news">
            <h5>TIN TỨC SỰ KIỆN</h5>
          </a>
        </div>
        <div>
          <a href="/propagate/">
            <h5>TUYÊN TRUYỀN LƯU ĐỘNG</h5>
          </a>
        </div>
        <div>
          <a href="/movies/">
            <h5>CHIẾU PHIM LƯU ĐỘNG</h5>
          </a>
        </div>
      </div>
      <div className="titleNews">
        <h2>Văn Bản</h2>
      </div>
      <h4 className="mt-5">205/KH-TTVH </h4>
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
        <div className="statistical py-3 mb-3">
          <h6>THÔNG KÊ LƯỢT TRUY CẬP</h6>
        </div>
        <p>Hôm nay: 898</p>
        <p>Hôm qua: 2,898</p>
        <p>Tất cả: 3,7884,898</p>

      </div>
    </div>
  );
}
