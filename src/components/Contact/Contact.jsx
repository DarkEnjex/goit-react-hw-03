import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({
  id,
  name,
  number,
  onDelate,
}) => {
  return (
    <li className={s.listItm}>
      <p className={s.pragraph}>
        <span>
          <FaUser className={s.icon} /> {name}
        </span>
        <span>
          <BsFillTelephoneFill
            className={s.icon}
          />
          {number}
        </span>
      </p>
      <button
        type="button"
        className={s.btn}
        onClick={() => onDelate(id)}
      >
        Delate
      </button>
    </li>
  );
};

export default Contact;
