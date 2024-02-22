import { useEffect, useState } from "react";
import "./public.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const PublicArt = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/new/`)
      .then((data) => setData(data.data.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);
  const handleClick = (id) => {
    navigate(`/public-art/${id}`);
  };
  return (
    <div>
      <h2 className="title mb-5">NGHỆ THUẬT QUẦN CHÚNG</h2>
      <div className="col-12"></div>
      <div className="col-12">
        <h3 className=" mt-5 see-more-title">Xem thêm</h3>
        {data.map((items) => {
          return (
            <div
              className="row my-5 card-media pb-5 mx-3"
              key={items.id}
              onClick={() => {
                handleClick(items.id);
              }}
            >
              <div className="col-5">
                <img
                  className="w-100 h-100"
                  src={`${process.env.REACT_APP_API}/${items?.avatar}`}
                  alt=""
                />
              </div>

              <div className="col-7 conten-card">
                <h4>{items.title}</h4>
                <p>{items.updatedAt}</p>
                <p>{items.short_title}</p>
                <button>Xem tiếp</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PublicArt;
