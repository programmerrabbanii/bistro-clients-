import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import Items from "../Shared.jsx/Items";
const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  console.log(menu);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <div>
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-4 w-11/12 mx-auto">
        {menu.map((item) => (
          <Items item={item} key={item._id}></Items>
        ))}
      </div>
      <div className="mx-auto text-center mt-8">
        <button className="relative overflow-hidden px-6 py-2 text-yellow-500 font-semibold uppercase tracking-wider transition-all duration-300 border-b-2 border-yellow-500 hover:text-black">
          <span className="absolute inset-0 w-full h-full bg-yellow-500 transform translate-y-full transition-transform duration-300 ease-in-out hover:translate-y-0"></span>
          <span className="relative z-10">View All Menu</span>
        </button>
      </div>
      <div className="text-center py-10 bg-black mt-5">
        <h2 className="text-center text-3xl font-semibold text-white">Call Us: +88 01798950302</h2>
      </div>
    </div>
  );
};

export default PopularMenu;