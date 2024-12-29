import BistroIntro from "../Components/BistroIntro";
import Hcategory from "../Components/Hcategory";
import PopularMenu from "../Components/PopularMenu";

const Home = () => {
    return (
        <div>
          <Hcategory></Hcategory>    
          <BistroIntro></BistroIntro>   
          <PopularMenu></PopularMenu>
          
        </div>
    );
};

export default Home;