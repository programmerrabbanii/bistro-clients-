import BistroIntro from "../Components/BistroIntro";
import Feature from "../Components/Feature";
import Hcategory from "../Components/Hcategory";
import PopularMenu from "../Components/PopularMenu";
import Recommen from "../Components/Recommen";
import Testimonial from "../Components/Testimonial";

const Home = () => {
    return (
        <div>
          <Hcategory></Hcategory>    
          <BistroIntro></BistroIntro>   
          <PopularMenu></PopularMenu>
          <Recommen></Recommen>
          <Feature></Feature>
          <Testimonial></Testimonial>
          
        </div>
    );
};

export default Home;