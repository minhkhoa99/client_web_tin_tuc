import "./News.css";
import imageContent from "../../image/THE THAO_jpg.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";

const News = () => {
  const [dataNew, setDataNew] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/new/")
      .then((data) => setDataNew(data.data.data))
      .catch((err) => console.log(err));
  }, []);

  const newsEvent = dataNew.filter((e) => e.category_id === 1)

  const handleClick = (id) => {
    navigate(`/news/${id}`);
  };

  return (
    <div className="media-container text-center">
      <h2>
        TIN TỨC - <span>SỰ KIỆN</span>{" "}
      </h2>
      {newsEvent.map((items) => {
        return (
          <div className="row my-5 card-media pb-5 mx-3" key={items.id}
          onClick={() => {
            handleClick(items.id);
          }} >
            <div className="col-5 card-image">
              <img src={imageContent} alt="" className="w-100 h-100" />
            </div>
            <div className="col-7 conten-card">
              <h4>{items.title}</h4>
              <p>{items.updatedAt}</p>
              <p>{items.short_title}</p>
              <button
                
              >
                Xem tiếp
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default News;
