import React from "react";
import "./sideBar.css";
import image1 from "../../image/TAP SAN T8-2016_jpg.jpg";
import image2 from "../../image/Du lich Dong nai_jpg.jpg";
import image3 from "../../image/DuLichXuanLoc.jpg";

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
            <h3>TRANG CHỦ</h3>
          </a>
        </div>
        <div>
          <a href="/introduce">
            <h3>GIỚI THIỆU CHUNG</h3>
          </a>
        </div>
        <div>
          <a href="/promotional-media">
            <h3>TRUYỀN THÔNG CỔ ĐỘNG</h3>
          </a>
        </div>
        <div>
          <a href="/public-art">
            <h3>NGHỆ THUẬT QUẦN CHÚNG</h3>
          </a>
        </div>
        <div>
          <a href="/news">
            <h3>TIN TỨC SỰ KIỆN</h3>
          </a>
        </div>
        <div>
          <a href="/propagate/">
            <h3>TUYÊN TRUYỀN LƯU ĐỘNG</h3>
          </a>
        </div>
        <div>
          <a href="/movies/">
            <h3>CHIẾU PHIM LƯU ĐỘNG</h3>
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
    </div>
  );
}
