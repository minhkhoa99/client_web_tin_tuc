import "./HomePage.css";
import image from "../../image/z4042263610199_ac6e69bf6f323b5fcf7a9b2df33b74de.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SileDer from "../../components/sileder/SileDer";
import Contact from "../../components/contact/Contact";

const HomePage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get("http://localhost:8000/new/")
      .then((data) => setData(data.data.data))
      .catch((err) => console.log(err));
  }, []);

  const newsEvent = data.filter((e) => e.category_id === 1);
  const newEventData = newsEvent.slice(0, 4);
  const media = data.filter((e) => e.category_id === 2);
  const newMedia = media.slice(0, 4);
  const movies = data.filter((e) => e.category_id === 4);
  const newMovies = movies.slice(0, 4);
  const propagate = data.filter((e) => e.category_id === 3);
  const newPropagate = propagate.slice(0, 4);
  const dataPublic = data.filter((e) => e.category_id === 5);
  const newPublic = dataPublic.slice(0, 4);
console.log(data);

  const handleClick = (id) => {
    navigate(`/news/${id}`);
  };

  return (
    <div className="my-5 row">
      <div className="home-page">
        <div className="divNewsTitle">
          <h2 className="mt-5 mb-5">
            TIN TỨC - <span>SỰ KIỆN</span>
          </h2>
          <div className="d-flex justify-content-between mb-5">
            <p>
              Lễ kỉ niệm 50 năm thiết lập mối quan hệ ngoại giao Việt Nam - Nhật
              bản
            </p>
            <p>
              Lễ kỉ niệm 50 năm thiết lập mối quan hệ ngoại giao Việt Nam - Nhật
              bản
            </p>
          </div>
          <div className="container">
            <div className="row">
              {newEventData.map((e) => {
                return (
                  <div className="col-3 card-news" key={e.id}
                  onClick={() => {
                    handleClick(e.id);
                  }}>
                    <img className="w-100 image-new" src={image} alt="" />
                    <h3 className="text-truncate">{e.title}</h3>
                    <p className="text-truncate">{e.short_title}</p>
                    <button>Đọc thêm</button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="divNewsTitle my-5">
          <h2 className="mt-5 mb-5">
            TUYÊN TRUYỀN CỔ ĐỘNG - <span>TRIỂN LÃM</span>
          </h2>
          <div className="d-flex justify-content-between mb-5">
            <p>
              Lễ kỉ niệm 50 năm thiết lập mối quan hệ ngoại giao Việt Nam - Nhật
              bản
            </p>
            <p>
              Lễ kỉ niệm 50 năm thiết lập mối quan hệ ngoại giao Việt Nam - Nhật
              bản
            </p>
          </div>
          <div className="container">
            <div className="row">
              {newMedia.map((e) => {
                return (
                  <div className="col-3 card-news" key={e.id}
                  onClick={() => {
                    handleClick(e.id);
                  }}>
                    <img className="w-100" src={image} alt="" />
                    <h3 className="text-truncate">{e.title}</h3>
                    <p className="text-truncate">{e.short_title}</p>
                    <button>Đọc thêm</button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="propagate">
          <h2 className="my-4">NGHỆ THUẬT QUẦN CHÚNG</h2>
          <div className="d-flex justify-content-between mb-5">
            <p>
              Lễ kỉ niệm 50 năm thiết lập mối quan hệ ngoại giao Việt Nam - Nhật
              bản
            </p>
            <p>
              Lễ kỉ niệm 50 năm thiết lập mối quan hệ ngoại giao Việt Nam - Nhật
              bản
            </p>
          </div>
          <div className="row ">
            <div className="col-7 cardVideo">
              <video width="100%" height="100%" controls>
                <source
                  src="https://youtu.be/ZaeQ6eJPFfw?si=qdiFxf-XTzdgTzmH"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="col-5 cardMenu">
              {newPublic.map((e) => {
                return (
                  <div className="d-flex card-item-menu my-3" key={e.id}
                  onClick={() => {
                    handleClick(e.id);
                  }}>
                    <img src={image} alt="" className="w-25 mx-3" />
                    <h3 className="text-truncate">{e.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="divNewsTitle my-5">
          <h2 className="mt-5 mb-5">
            TUYÊN TRUYỀN - <span>LƯU ĐỘNG</span>
          </h2>
          <div className="d-flex justify-content-between mb-5">
            <p>
              Lễ kỉ niệm 50 năm thiết lập mối quan hệ ngoại giao Việt Nam - Nhật
              bản
            </p>
            <p>
              Lễ kỉ niệm 50 năm thiết lập mối quan hệ ngoại giao Việt Nam - Nhật
              bản
            </p>
          </div>
          <div className="container">
            <div className="row">
              {newPropagate.map((e) => {
                return (
                  <div className="col-3 card-news" key={e.id}
                  onClick={() => {
                    handleClick(e.id);
                  }}>
                    <img className="w-100" src={image} alt="" />
                    <h3 className="text-truncate">{e.title}</h3>
                    <p className="text-truncate">{e.short_title}</p>
                    <button>Đọc thêm</button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="divNewsTitle divMovies">
          <h2 className="mt-5 mb-5">
            CHIẾU PHIM - <span>LƯU ĐỘNG</span>
          </h2>
          <div className="d-flex justify-content-between mb-5">
            <p>
              Lễ kỉ niệm 50 năm thiết lập mối quan hệ ngoại giao Việt Nam - Nhật
              bản
            </p>
            <p>
              Lễ kỉ niệm 50 năm thiết lập mối quan hệ ngoại giao Việt Nam - Nhật
              bản
            </p>
          </div>
          <div className="container">
            <div className="row">
              {newMovies.map((e) => {
                return (
                  <div className="col-6 movies divMovies" key={e.id}
                  onClick={() => {
                    handleClick(e.id);
                  }}>
                    <img className="image-new-movies" src={image} alt="" />
                    <div>
                      <h3 className="text-truncate">{e.title}</h3>
                      <p className="text-truncate">{e.short_title}</p>
                      <button>Đọc thêm</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Contact/>
      </div>
    </div>
  );
};

export default HomePage;
