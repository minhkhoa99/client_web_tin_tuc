import image from "../../image/z5045518417593_c54a7cef1208cf2504c1c8f918ce813c.jpg"
import "./Contact.css"
import image1 from "../../image/NHNTTT.jpg"
import image3 from "../../image/NKTDTD (1).jpg"
import image4 from "../../image/NKTDTD.jpg"
import image5 from "../../image/THU VIEN.jpg"
import image7 from "../../image/TTVH.jpg"
import image8 from "../../image/XTDL.jpg"
import image9 from "../../image/VHNT.jpg"
import image2 from "../../image/BAO TANG.jpg"



const Contact = () => {
    return(
        <div>
            <div className="container-link">
                <h3 className="text-center my-3">LIÊN KẾT WEBSITE</h3>
                <div className="py-5 row">
                    <div className="col-1">
                    <img src={image1} className="w-100" alt="" />

                    </div>
                    <div className="col-1">
                    <img src={image2} className="w-100" alt="" />

                    </div>
                    <div className="col-1">
                    <img src={image3} className="w-100" alt="" />

                    </div>
                    <div className="col-1">
                    <img src={image4} className="w-100" alt="" />

                    </div>
                    <div className="col-1">
                    <img src={image5} className="w-100" alt="" />

                    </div>
                    <div className="col-1">
                    <img src={image7} className="w-100" alt="" />

                    </div>
                    <div className="col-1">
                    <img src={image8} className="w-100" alt="" />

                    </div>
                    <div className="col-1">
                    <img src={image9} className="w-100" alt="" />

                    </div>

                </div>
            </div>
             <div className="text-center card-contact my-3">
            <h3>LIÊN HỆ CHÚNG TÔI</h3>
            <p>số 100, sa lộ Hà nội, Phường Tân Biên, Thành Phố Biên Hòa, Tỉnh Đồng Nai</p>
            <p>sđt: (02513) 881 196, email: trungtamvanhoadongnai@gmail.com</p>
            <img src={image} className="w-100" alt="" />
        </div>
        </div>
       
    )
}

export default Contact