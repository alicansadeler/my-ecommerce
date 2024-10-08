import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faChartArea,
  faDownload,
  faGreaterThan,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Blog = () => {
  const img1 = "/home-features/blog1.png";
  const img2 = "/home-features/blog2.png";

  const blogCard = (img) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg lg:flex lg:max-w-[550px] ">
      <img
        src={img}
        alt="blog1"
        className="w-full h-[300px]  object-cover lg:w-1/2 lg:h-[450px]"
      />
      <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-between">
        <div className="flex w-full justify-between items-center px-4 py-6 ">
          <p className="text-bgBlue font-bold text-lg">English Department</p>
          <span className="flex items-center justify-center gap-3 border w-16 h-6 rounded-2xl bg-black">
            <p className="text-white">4.9</p>
            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
          </span>
        </div>

        <div className="text-left px-4 flex flex-col gap-4 font-semibold text-bgGray text-sm lg:gap-6">
          <h2 className="text-bgDark font-bold text-base">Graphic Design</h2>
          <p>
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
          <span className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faDownload} />
            <p className="text-gray-800">15 Sales</p>
          </span>
          <div className="space-y-4">
            <span className="flex flex-row gap-2 items-center">
              <p className="line-through">$16.48</p>
              <p className="text-green-800 text-lg">$6.48</p>
            </span>
            <span className="flex flex-row gap-1">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
            </span>
            <div className="flex justify-between">
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faClock} className="text-bgBlue" />
                <p>22 April 2024</p>
              </span>
              <span className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faChartArea}
                  className="text-green-700 text-lg"
                />
                <p>10 Comments</p>
              </span>
            </div>
          </div>
          <button className="rounded-full text-bgBlue border-bgBlue bg-white font-bold flex items-center text-center gap-2 w-[160px] justify-center mb-4">
            <span>Learn More </span>
            <FontAwesomeIcon icon={faGreaterThan} className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-10 p-4 overflow-x-hidden lg:flex-row lg:items-center">
      {blogCard(img1)}
      {blogCard(img2)}
    </div>
  );
};

export default Blog;
