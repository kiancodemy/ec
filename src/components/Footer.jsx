import logo from "../assets/logo_big.png";
import whits from "../assets/whatsapp_icon.png";
import pin from "../assets/pintester_icon.png";
import instagram from "../assets/instagram_icon.png";

function Footer() {
  return (
    <div>
      <div>
        <img src={logo} alt="kian" />
        <p>Shopping</p>
      </div>

      <ul className="capitalize">
        <li>company</li>
        <li>products </li>
        <li>office</li>
        <li>about</li>
        <li>contracts</li>
      </ul>
      <div>
        <div>
          <img src={whits} alt="" />
        </div>
        <div>
          <img src={pin} alt="" />
        </div>
        <div>
          <img src={instagram} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
