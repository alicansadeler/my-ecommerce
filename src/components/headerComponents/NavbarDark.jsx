import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { data } from "../../data";

const NavbarDark = () => {
  const headerDark = data.header.headerNavDark;

  return (
    <div className="hidden  lg:flex flex-row justify-between lg:px-7 bg-bgDark lg:w-full text-bgWhite lg:h-14 items-center font-montserrat font-bold text-sm leading-6 tracking-wide">
      <ul className=" lg:flex flex-row justify-around lg:w-[26.25rem]">
        <li>
          <FontAwesomeIcon icon={faPhone} className="text-base" />{" "}
          {headerDark.number}
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} className="text-base" />{" "}
          {headerDark.email}
        </li>
      </ul>
      <p className="lg:w-[26.25rem]">{headerDark.text}</p>
      <ul className=" lg:flex flex-row lg:w-60 justify-around">
        Follow Us :
        <li>
          <a href="https://github.com/alicansadeler?tab=projects">
            <FontAwesomeIcon icon={faInstagram} className="text-base" />
          </a>
        </li>
        <li>
          <a href="https://github.com/alicansadeler?tab=projects">
            <FontAwesomeIcon icon={faYoutube} className="text-base" />
          </a>
        </li>
        <li>
          <a href="https://github.com/alicansadeler?tab=projects">
            <FontAwesomeIcon icon={faFacebook} className="text-base" />
          </a>
        </li>
        <li>
          <a href="https://github.com/alicansadeler?tab=projects">
            <FontAwesomeIcon icon={faTwitter} className="text-base" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarDark;
