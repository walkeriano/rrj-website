import "./FormContact.css";
import cel from "../../assets/cel.svg";
import user from "../../assets/user.svg";
import mail from "../../assets/mail.svg";

export default function FormContact() {
  return (
    <form className="form-container">
      <label htmlFor="">
        <div className="box-icon-form">
          <img src={user} alt="" />
        </div>
        <input type="text" placeholder="Name" />
      </label>
      <label htmlFor="">
        <div className="box-icon-form">
          <img src={cel} alt="" />
        </div>
        <input type="number" placeholder="Phone" />
      </label>
      <label htmlFor="">
        <div className="box-icon-form">
          <img src={mail} alt="" />
        </div>
        <input type="email" placeholder="Email" />
      </label>
      <button>
        Send Reserve
      </button>
    </form>
  );
}
