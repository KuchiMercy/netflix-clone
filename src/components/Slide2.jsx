import image from "../assets/netflix1.jpg";
import cover from "../assets/cover.jpeg";
import { MdDownload } from "react-icons/md";

const Slide2 = () => {
  return (
    <div>
      <main className="bg-black p-5 text-white flex flex-col-reverse justify-evenly items-center pb-8 md:flex-row">
        <div className="flex flex-col justify-center items-center">
          <img width={550} src={image} alt="" />

          <div className=" -translate-y-20 bg-black px-2 border-2 border-gray-400 rounded-lg w-72">
            <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div>
                <img width={50} src={cover} alt="" />
              </div>
              <div className="px-2">
                <p className="font-bold">Stranger Things</p>
                <p className="text-blue-700 text-sm">Downloading...</p>
              </div>
              </div>
              <div className="pr-4 text-xl">
              <MdDownload />
              </div>
              </div>
            
          </div>
        </div>
        <div>
          <h1 className="text-4xl text-center font-bold md:8xl md:text-left ">
            Download your shows to <br /> watch offline
          </h1>
          <p className="text-lg text-center pt-4 md:text-left md:text-xl">
            Save your favorites easily and always have <br /> something to watch
          </p>
        </div>
      </main>
    </div>
  );
};

export default Slide2;
