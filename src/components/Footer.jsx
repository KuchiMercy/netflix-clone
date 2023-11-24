import { Link } from "react-router-dom";

const Footer = () => {
  const lists = ["FAQ", "Investor Relations", "Privacy", "Speed Test"];
  const lists2 = ["Help Center", "Jobs", "Cookie Preferences", "Legal Notices"];
  const lists3 = [
    "Account",
    "Ways to Watch",
    "Cooperate Information",
    "Only on Netflix",
  ];
  const lists4 = ["Media Center", "Terms of Use", "Contact Us"];

  return (
    <div>
      <main className="bg-black text-white text-sm leading-8 pb-14 cursor-pointer">
        
        <div className="grid mx-10 my-auto underline grid-cols-2 lg:grid-cols-4">
       
          <div className="p-5">
          <p className="">Questions? Contact us</p>
            {lists.map((list) => (
              <div key={list}>{list}</div>
            ))}
           
          </div>
          <div className="p-5">
            {lists2.map((list2)=>(
                <div key={list2}>{list2}</div>
            ))}
          </div>
          <div className="p-5">
          {lists3.map((list3)=>(
                <div key={list3}>{list3}</div>
            ))}
          </div>
          <div className="p-5">
          {lists4.map((list4)=>(
                <div key={list4}>{list4}</div>
            ))}
          </div>

          
        </div>
        <div className="mx-10 px-5">
        <button className="border-white border-2 bg-[#0F0F0F] rounded-lg px-8  cursor-pointer ">English</button>
          <p className="my-2">Netflix Nigeria</p>
        </div>
        
      </main>
    </div>
  );
};

export default Footer;
