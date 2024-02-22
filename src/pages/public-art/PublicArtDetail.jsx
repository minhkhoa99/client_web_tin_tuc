import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import cheerio from "cheerio"

const PublicArtDetail = () => {
  const { id } = useParams();
  const [dataDetail, setDataDetail] = useState();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/new/${id}`)
      .then((data) => setDataDetail(data.data.data))
      .catch((err) => console.log(err));
  }, [id]);
  const renderHTML = () => {
    if (!dataDetail) return null;

    const $ = cheerio.load(dataDetail.content);

    // Tìm và chọc vào các thẻ <img> và <iframe>
    $('img, iframe').each((index, element) => {
      if ($(element).is('img')) {
        // Xử lý cho thẻ <img>
        $(element).attr('style', 'max-width: 100%; height: auto;');
      } else if ($(element).is('iframe')) {
        // Xử lý cho thẻ <iframe>
        $(element).attr('style', 'width: 100%; height: 500px; border: 1px solid black;');
      }
    });

    return $.html();
  };

  

  return (
    <div className="container-detail mx-3">
      <h3>{dataDetail?.title}</h3>
      <img
        className="w-100 h-100"
        src={`${process.env.REACT_APP_API}/${dataDetail?.avatar}`}
        alt=""
      />
      <p>{dataDetail?.createdAt}</p>
      <div dangerouslySetInnerHTML={{ __html: renderHTML() }} />
    </div>
  );
};

export default PublicArtDetail;
