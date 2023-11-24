
import { NavLink } from "react-router-dom";
import logo from "../assets/netflix.png";
import Input from "./Input";


const Header = () => {
 

  return (
    <div>
      <main className="bg-[url(/home/mercy/Documents/Code/Netflix-clone/src/assets/netflix-bg2.jpg)] bg-no-repeat bg-cover h-screen">
        <div className="bg-gradient-to-b from-black via-transparent to-black h-screen">
          <nav className=" flex justify-between items-center m-auto ">
            <div className="ml-6">
              <img width={120} src={logo} alt="" />
            </div>
            <div>
              <NavLink to="/signin" className="bg-primary text-white mr-10 px-4 py-1 rounded">
                Sign In
              </NavLink >
            </div>
          </nav>

          <section className=" mt-28 text-center text-white md:mt-32 ">
            <h1 className=" text-4xl md:text-5xl font-bold">
              Unlimited movies, TV shows, and more
            </h1>
            <p className="text-lg mt-2 md:text-2xl">
              Watch anywhere. Cancel anytime.
            </p>{" "}
            <br />
           <Input/>
          </section>

          
        </div>
      </main>
    </div>
  );
};

export default Header;
