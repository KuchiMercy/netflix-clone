import { Collapse } from "react-collapse";
import { FaTimes } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const FAQs = ({ open, toggle, title, desc }) => {
  return (
    <div className="bg-black px-5 py-1 md:text-2xl text-white">
      <div
        className="bg-[#2D2D2D] py-6 px-6 flex justify-between items-center cursor-pointer"
        onClick={toggle}
      >
        <p className="">{title}</p>
        <div className="">{open ? <FaTimes /> : <FaPlus />}</div>
      </div>
      <Collapse isOpened={open}>
        <div className="px-6 text-justify md:text-xl bg-[#2D2D2D] my-1 py-4">{desc}</div>
      </Collapse>
    </div>
  );
};

export default FAQs;
