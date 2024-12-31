import { Helmet } from "react-helmet-async";
import Cover from "../Shared.jsx/Cover";
import coverImg from '../assets/images/menu/banner3.jpg'
import imgDessert from '../assets/images/menu/dessert-bg.jpeg'
import imgPizza from '../assets/images/menu/pizza-bg.jpg'
import imgSoup from '../assets/images/menu/soup-bg.jpg'
import imgSalad from '../assets/images/menu/salad-bg.jpg'
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
             <Cover  img={coverImg} title={'Our Menu'} subHeading={'Would you like to try a dish?'}></Cover>
              <SectionTitle subHeading={'Do not miss'} heading={'TODAYS OFFER'}>
              </SectionTitle>
              {/* offered section */}
              <MenuCategory item={offered}></MenuCategory>
              {/* dessert section */}
              <MenuCategory item={dessert} title={'dessert'} subHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} img={imgDessert}>
              </MenuCategory>
              {/* pizza section */}
              <MenuCategory 
              item={pizza}
              title={'pizza'}
              subHeading={'text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'}
              img={imgPizza}
              ></MenuCategory>
              {/* soup section */}
              <MenuCategory
              item={soup}
              title={'soup'}
              subHeading={'ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'}
              img={imgSoup}
              ></MenuCategory>
              {/* salad section */}
              <MenuCategory
              item={salad}
              title={'Salad'}
              subHeading={' the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'}
              img={imgSalad}
              
              ></MenuCategory>
             
        </div>
    ); 
};

export default OurMenu;