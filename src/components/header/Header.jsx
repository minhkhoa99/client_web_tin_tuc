import {
  ContainerOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./Header.css"

const Header = () => {
  return (
    <div className="d-flex container-header py-2 mb-3">
      <div>
        <PhoneOutlined />
        <span>(02513) 881196</span>
      </div>
      <div>
        <ContainerOutlined />
        <span>(02513) 881196</span>
      </div>
      <div>
        <MailOutlined />
        <span>trungtamvanhoadongnai@gmail.com</span>
      </div>
      <UserOutlined />
    </div>
  );
};

export default Header;
