import { useState } from "react";
import Cover from "../Shared.jsx/Cover";
import imgOrder from "../assets/images/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Helmet } from "react-helmet-async";
import Usemenu from "../hooks/Usemenu";
import FoodCard from "../Shared.jsx/FoodCard";
import OraderTabs from "../Shared.jsx/OraderTabs";
import { useParams } from "react-router-dom";

const Order = () => {
    const categorise=['salad', 'pizza', 'soup','dessert','drinks']
    const {category}=useParams()
    const initialIndex=categorise.indexOf(category)
  const [tabindex, setTabIndex] = useState(initialIndex);
  const [menu]=Usemenu()
  const salads=menu.filter(items=> items.category==='salad')
  const pizzas=menu.filter(items=>items.category==='pizza')
  const soups=menu.filter(items=> items.category==='soup')
  const desserts=menu.filter(items=>items.category==='dessert')
  const drinks=menu.filter(items=>items.category==='drinks')
  console.log(category);
  return (
    <div>
        <Helmet>
            <title>
            Bistro Restaurant || Our Order
            </title>
        </Helmet>
      <Cover
        img={imgOrder}
        title={"our order"}
        subHeading={"this is our order pla"}
      ></Cover>
      <Tabs defaultIndex={tabindex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {
                salads.map(salad=> <FoodCard salad={salad} key={salad._id}></FoodCard>)
            }
            </div>
        </TabPanel>
        <TabPanel>
            <OraderTabs itms={pizzas}></OraderTabs>
        </TabPanel>
        <TabPanel>
            <OraderTabs itms={soups}></OraderTabs>
        </TabPanel>
        <TabPanel>
            <OraderTabs itms={desserts}></OraderTabs>
        </TabPanel>
        <TabPanel>
            <OraderTabs itms={drinks}></OraderTabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
