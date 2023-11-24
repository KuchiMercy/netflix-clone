
import FAQData from "../FAQData";
import Footer from "../Footer";
import Header from "../Header";
import Slide1 from "../Slide1";
import Slide2 from "../Slide2";
import Slide3 from "../Slide3";
import Slide4 from "../Slide4";



const Home = () => {
  return (
    <div>
    <Header />
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <FAQData/>
      <Footer />
    </div>
  )
}

export default Home