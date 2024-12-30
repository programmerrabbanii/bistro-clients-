import { Helmet } from "react-helmet-async";
import Cover from "../Shared.jsx/Cover";
import coverImg from '../assets/images/menu/banner3.jpg'
import SectionTitle from "../Components/SectionTitle";
import MenuCategory from "../Components/MenuCategory";
import Usemenu from "../hooks/Usemenu";

const OurMenu = () => {
    const [menu]=Usemenu()
    const dessert=menu.filter(item=>item.category==='dessert')
    const soup=menu.filter(item=>item.category==='soup')
    const salad=menu.filter(item=> item.category==='salad')
    const pizza=menu.filter(item=> item.category==='pizza')
    const offered=menu.filter(item=> item.category==='offered')
    return (
        <div>
            <Helmet>
                <title>
                Bistro Restaurant || Our Menu
                </title>
            </Helmet>
             <Cover  img={coverImg} title={'Our Menu'} subtile={'Would you like to try a dish?'}></Cover>
              <SectionTitle subHeading={'Do not miss'} heading={'TODAYS OFFER'}>
              </SectionTitle>
              <MenuCategory item={offered}></MenuCategory>
             
        </div>
    ); 
};

export default OurMenu;