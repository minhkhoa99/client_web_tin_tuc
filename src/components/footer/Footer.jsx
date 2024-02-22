
import imageBackgroud from "../../image/z5182758804531_0805fc750005a590ffae56140ee8f2de.jpg"

import "./footer.css";
import Navbar from "../navbar/Navbar";

const Footer = () => {


  return (
    <div>
    <Navbar />
      <div className="container-footer">
          <h4>TRANG THÔNG TIN ĐIỆN TỬ <span className="title-footer">TRUNG TÂM VĂN HÓA - TỈNH ĐỒNG NAI</span></h4>
          <p>CHỊU TRÁCH NHIỆM CHÍNH: Bà TÔN THỊ THANH TÌNH - Giám đốc trung tâm văn hóa - Điện ảnh tỉnh đồng nai</p>
          <p>Liên hệ quản trị: 0949.477.009 - Ông Phạm Thanh Sinh - Phó trưởng phòng nghiệp cụ điện ảnh</p>
          <p>Website chạy tốt trên các trình duyệt: Firefox, Chrome, Exprorer 9.0 trở lên và Safari</p>
        </div>
    </div>
  );
};
export default Footer;
