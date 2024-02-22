import "./HomePage.css";
import image from "../../image/z4042263610199_ac6e69bf6f323b5fcf7a9b2df33b74de.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Contact from "../../components/contact/Contact";
import ReactPlayer from "react-player";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [video,setVideo] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/new/`)
      .then((data) => setData(data.data.data))
      .catch((err) => console.log(err));
  }, [data]);

  useEffect(() => {
    axios.get("http://localhost:8000/upload-video/")
    .then((data) => setVideo(data.data.data))
    .catch((err) => console.log(err))
  }, [])

  const videoHot = video?.find((e) => e.id === 1)


  const newsEvent = data.filter((e) => e.category_id === 1);
  const newsHome = newsEvent.sort((a,b) => b.id - a.id)
  const newEventData = newsHome.slice(0, 5);
  const media = data.filter((e) => e.category_id === 2);
  const newMedia = media.slice(0, 4);
  const movies = data.filter((e) => e.category_id === 4);
  const newMovies = movies.slice(0, 4);
  const propagate = data.filter((e) => e.category_id === 3);
  const newPropagate = propagate.slice(0, 4);
  const dataPublic = data.filter((e) => e.category_id === 5);
  const newPublic = dataPublic.slice(0, 4);
  const handleClick = (id) => {
    navigate(`/news/${id}`);
  };
  const clickVideoDetail = (id) => {
    navigate(`/public-art/${id}`)
  }

  return (
    <div className="row">
      <div className="home-page">
        <div className="divNewsTitle mx-5">
          <h2 className="mb-5">
            TIN TỨC - <span>SỰ KIỆN</span>
          </h2>
          <div className="container">
            <div className="row carde-position">
              {newEventData.map((e) => {
                return (
                  <div
                    className="col-3 h-100 news-events card-news"
                    key={e.id}
                    onClick={() => {
                      handleClick(e.id);
                    }}
                  >
                      <img
                        className="card-img-top image-new  image-news-hompage"
                        src={`${process.env.REACT_APP_API}/${e.avatar}`}
                        alt=""
                      />

                    <div className="card-body">
                      <h6 className="card-body-title">{e.title}</h6>
                      <p>{e.createdAt}</p>
                      <p className="card-body-short_title">{e.short_title}</p>
                      <div>
                      <button className="btn-detail">Đọc thêm</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="divNewsTitle card-news-one mx-5">
          <h2 className="my-4">
            TUYÊN TRUYỀN CỔ ĐỘNG - <span>TRIỂN LÃM</span>
          </h2>
         
          <div className="container">
            <div className="row">
              {newMedia.map((e) => {
                return (
                  <div
                    className="col-2 exhibition card-news"
                    key={e.id}
                    onClick={() => {
                      handleClick(e.id);
                    }}
                  >
                    <img
                        className="card-img-top mb-3"
                        src={`${process.env.REACT_APP_API}/${e.avatar}`}
                        alt=""
                      />
                    <h6 className="card-body-title">{e.title}</h6>
                      <p className="card-body-short_title">{e.short_title}</p>
                    <button>Đọc thêm</button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="propagate py-3">
          <h3 className="my-2">NGHỆ THUẬT QUẦN CHÚNG</h3>
          
          <div className="row ">
            <div className="col-8 cardVideo">
            <ReactPlayer className="w-100 videoHot" url={`${process.env.REACT_APP_API}/${videoHot?.link}`} controls
        />
            </div>
            <div className="col-4 cardMenu">
              {video?.map((e) => {
                return (
                  <div
                    className="d-flex card-item-menu row"
                    key={e.id}
                    onClick={() => {
                      clickVideoDetail(e.id);
                    }}
                  >
                    <div className="col-6">
                               <ReactPlayer className="videoList" url={`${process.env.REACT_APP_API}/${e?.link}`} controls
        />
                    </div>
           <div className="col-6">
           <h6 className="title-video-list">{e.title}</h6>

           </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="divNewsTitle my-3 mx-5">
          <h2 className="my-4">
            TUYÊN TRUYỀN - <span>LƯU ĐỘNG</span>
          </h2>
         
          <div className="container">
            <div className="row">
              {newPropagate.map((e) => {
                return (
                  <div
                    className="col-3 card-news"
                    key={e.id}
                    onClick={() => {
                      handleClick(e.id);
                    }}
                  >
                    <img
                        className="card-img-top mb-3"
                        src={`${process.env.REACT_APP_API}/${e.avatar}`}
                        alt=""
                      />
                    <h6 className="card-body-title">{e.title}</h6>
                      <p className="card-body-short_title">{e.short_title}</p>
                    <button>Đọc thêm</button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="divNewsTitle divMovies">
          <h2 className="my-3">
            CHIẾU PHIM - <span>LƯU ĐỘNG</span>
          </h2>
         
          <div className="container">
            <div className="row">
              {newMovies.map((e) => {
                return (
                  <div
                    className="col-6 movies divMovies card-movies"
                    key={e.id}
                    onClick={() => {
                      handleClick(e.id);
                    }}
                  >
                    <div className="row">
                      <div className="col-5">
                        <img
                          className="image-new-movies w-100 "
                          src={image}
                          alt=""
                        />
                      </div>
                      <div className="col-7">
                      <h6 className="card-body-title">{e.title}</h6>
                      <p className="card-body-short_title">{e.short_title}</p>
                        <button className="btn-show-detail">Đọc thêm</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
