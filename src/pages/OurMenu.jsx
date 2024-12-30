import { Helmet } from "react-helmet-async";
import Cover from "../Shared.jsx/Cover";
import coverImg from '../assets/images/menu/banner3.jpg'
import PopularMenu from "../Components/PopularMenu";

const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>
                Bistro Restaurant || Our Menu
                </title>
            </Helmet>
             <Cover  img={coverImg} title={'Our Menu'} subtile={'Would you like to try a dish?'}></Cover>
             <PopularMenu></PopularMenu>

             <Cover  img={coverImg} title={'Our Menu'} subtile={'Would you like to try a dish?'}></Cover>
             <PopularMenu></PopularMenu>

             <Cover  img={coverImg} title={'Our Menu'} subtile={'Would you like to try a dish?'}></Cover>
             <PopularMenu></PopularMenu>
            
        </div>
    );
};

export default OurMenu;