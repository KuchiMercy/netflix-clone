import { NavLink } from "react-router-dom";
import logo from "../assets/netflix.png";

const SignIn = () => {
  return (
    <div>
      <div className=" bg-black md:bg-[url(/home/mercy/Documents/Code/Netflix-clone/src/assets/netflix-bg3.jpg)] bg-no-repeat bg-cover md:h-screen">
        <div className="md:bg-gradient-to-b from-black via-transparent to-black h-screen">
          <div>
            <img src={logo} width={170} alt="" />
          </div>

          <div>
            <div className="bg-black opacity-90 w-3/5 mx-auto max-w-lg rounded-lg">
              <div className=" flex flex-col justify-center items-center mx-auto">
                <h1 className="text-white text-3xl md:text-4xl font-bold py-6 px-4 ">
                  Sign In
                </h1>
                <input
                  className="px-8 md:px-11 py-3 my-2 rounded-lg bg-[#333333] outline-none "
                  type="text"
                  placeholder="Email or phone number"
                />{" "}
                <br />
                <input
                  className="px-8 md:px-11 py-3 rounded-lg bg-[#333333] outline-none"
                  type="password"
                  placeholder="Password"
                />
                <button className="text-sm px-28 md:text-md md:px-32 py-3 my-8 rounded-lg bg-primary text-white font-bold">
                  Sign In
                </button>
              </div>
              <div className="flex justify-between items-center text-gray-500 md:px-5">
                <div className="flex justify-left items-center ">
                  <input type="checkbox" className="outline-none"/>
                  <label className=" pl-1 text-sm">Remember me</label>
                </div>
                <div className=" text-sm">Need help?</div>
              </div>
              <p className="text-gray-500 pt-16 md:px-5">
              New to Netflix? <NavLink className="text-white" to="/">Sign up now.</NavLink>{" "}
            </p>
            <p className="text-gray-500 text-xs pt-3 text-justify md:px-5">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <span className="cursor-pointer text-blue-700">Learn more.</span>{" "}
            </p>
            </div>

            
          </div>
        </div>
        <div className="bg-black text-[#9e9c9c] pt-10 pb-10 px-10">
          <p>Questions? Contact us.</p>
          <div className="grid grid-cols-3 md:grid-cols-4 text-sm md:text-md">
            <p>FAQ</p>
            <p>Help Center</p>
            <p>Terms of Use</p>
            <p>Privacy</p>
            <p>Cookie Preferences</p>
            <p>Corporate Information</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
