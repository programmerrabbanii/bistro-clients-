import BistroIntro from "../Components/BistroIntro";
import Feature from "../Components/Feature";
import Hcategory from "../Components/Hcategory";
import PopularMenu from "../Components/PopularMenu";
import Recommen from "../Components/Recommen";
import Testimonial from "../Components/Testimonial";
import { Helmet} from 'react-helmet-async';
import Bannar from "../Components/Bannar"



const Home = () => {
    return (
        
        <div>
            <Helmet>
                <title>
                Bistro Restaurant || Home
                </title>
            </Helmet>
           <Bannar></Bannar>
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