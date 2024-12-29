import BistroIntro from "../Components/BistroIntro";
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
          
        </div>
    );
};

export default Home;