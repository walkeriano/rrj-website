import "./SocialBtns.css";
import cel from "../../assets/cel.svg";
import wss from "../../assets/wss.svg";
import mail from "../../assets/mail.svg";
import inst from "../../assets/inst.svg";
import fb from "../../assets/fb.svg";

export default function SocialBtns() {
  return (
    <div className="cont-social-media">
      <a href="tel:5025454375" className="item-social">
        <img src={cel} alt="icon-cel" />
      </a>
      <a href="https://wa.me/15025454375?text=Hello,%20i%20need%20more%20information" target="_blank" className="item-social">
        <img src={wss} alt="icon-wss" />
      </a>
      <a href="mailto:rrjconstructionremodeling@gmail.com"  className="item-social">
        <img src={mail} alt="icon-mail" />
      </a>
      <a href="https://www.instagram.com/rrjconstructionremodelingllc/" target="_blank" className="item-social">
        <img src={inst} alt="icon-inst" />
      </a>
      <a href="https://www.facebook.com/RRJConstructionRemodeling" target="_blank" className="item-social">
        <img src={fb} alt="icon-fb" />
      </a>
    </div>
  );
}
