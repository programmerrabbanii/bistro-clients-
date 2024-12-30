import { Helmet } from "react-helmet-async";
import Cover from "../Shared.jsx/Cover";
import coverImg from '../assets/images/menu/banner3.jpg'

const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>
                Bistro Restaurant || Our Menu
                </title>
            </Helmet>
             <Cover  img={coverImg}></Cover>
            
        </div>
    );
};

export default OurMenu;