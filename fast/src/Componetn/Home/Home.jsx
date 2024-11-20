import Benar from "../../Leout/benar";
import Contact from "../../Leout/contact info/Contact";
import FAQs from "../../Leout/FAQs/FAQs";
import Featuredproducts from "../../Leout/featured products/Featuredproducts";
import Testimonials from "../../Leout/testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <div className="mx-auto">
        <Benar></Benar>
        <div className="w-5/6 mx-auto">
          <Featuredproducts></Featuredproducts>
        </div>
        <div className="w-5/6 mx-auto">
          <Testimonials></Testimonials>
        </div>
        <div className=" w-5/6 mx-auto">
          <FAQs></FAQs>
        </div>
        <div  className=" w-5/6 mx-auto">
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
};

export default Home;
