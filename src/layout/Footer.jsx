import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterMenu from "../components/footerComponent/FooterMenu";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center w-full max-w-[1440px] px-4  overflow-x-hidden m-0 gap-20 font-montserrat mt-10">
      {/* Sosyal medya ve başlık alanı */}
      <div className="flex flex-col items-start gap-10 sm:flex-row sm:justify-between w-full bg-bgFooterGray p-10">
        <span className="text-2xl font-bold">Bandage</span>
        <ul className="flex gap-5">
          <li>
            <a href="https://github.com/alicansadeler?tab=projects">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-xl text-bgDarkBlue"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/alicansadeler?tab=projects">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-xl text-bgDarkBlue"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/alicansadeler?tab=projects">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-xl text-bgDarkBlue"
              />
            </a>
          </li>
        </ul>
      </div>

      <div className=" w-full">
        <FooterMenu />
      </div>

      <div className="p-10 bg-bgFooterGray w-full text-bgGray font-semibold">
        <span>Made With Love By Finland All Right Reserved</span>
      </div>
    </footer>
  );
};
