import BistroIntro from "../Components/BistroIntro";
import Feature from "../Components/Feature";
import Hcategory from "../Components/Hcategory";
import PopularMenu from "../Components/PopularMenu";
import Recommen from "../Components/Recommen";

const Home = () => {
    return (
        <div>
          <Hcategory></Hcategory>    
          <BistroIntro></BistroIntro>   
          <PopularMenu></PopularMenu>
          <Recommen></Recommen>
          <Feature></Feature>
          
        </div>
    );
};

export default Home;