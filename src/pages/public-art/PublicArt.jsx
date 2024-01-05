import { useEffect, useState } from "react";
import imageMovie from "../../image/z4042263610199_ac6e69bf6f323b5fcf7a9b2df33b74de.jpg";
import "./public.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
const PublicArt = () => {
  const navigate = useNavigate()
  const [data,setData] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:8000/new/")
      .then((data) => setData(data.data.data))
      .catch((err) => console.log(err));
  }, []);
  const newsEvent = data.filter((e) => e.CategoryId === 5)
  const handleClick = (id) => {
    navigate(`/public-art/${id}`);
  };
  return (
    <div>
      <h2 className="title my-5">NGHỆ THUẬT THUẦN CHÚNG</h2>
      <div className="col-12">
        <video width="100%" height="100%" controls>
          <source
            src="https://youtu.be/ZaeQ6eJPFfw?si=qdiFxf-XTzdgTzmH"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="col-12">
        <h3 className=" mt-5 see-more-title">Xem thêm</h3>
        {newsEvent.map((items) => {
        return (
          <div className="row my-5 card-media pb-5" key={items.id}
          onClick={() => {
            handleClick(items.id);
          }}>
            <div className="col-5 card-image">
              <img src={imageMovie} alt="" className="w-100 h-100" />
            </div>
            <div className="col-7 conten-card">
              <h4>{items.title}</h4>
              <p>{items.updatedAt}</p>
              <p>{items.shortTitle}</p>
              <button
                
              >
                Xem tiếp
              </button>
            </div>
          </div>
        );
      })}
       
      </div>
    </div>
  );
};

export default PublicArt;
