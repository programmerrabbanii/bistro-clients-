import SectionTitle from "./SectionTitle";
import Items from "../Shared.jsx/Items";
import Usemenu from "../hooks/Usemenu";

const PopularMenu = () => {
  const [menu]=Usemenu()

  const popular=menu.filter(item=> item.category==='popular')

  return (
    <div>
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-4 w-11/12 mx-auto">
        {popular.map((item) => (
          <Items item={item} key={item._id}></Items>
        ))}
      </div>
      <div className="mx-auto text-center mt-8">
        <button className="relative overflow-hidden px-6 py-2 text-yellow-500 font-semibold uppercase tracking-wider transition-all duration-300 border-b-2 border-yellow-500 hover:text-black">
          <span className="absolute inset-0 w-full h-full bg-yellow-500 transform translate-y-full transition-transform duration-300 ease-in-out hover:translate-y-0"></span>
          <span className="relative z-10">View All Menu</span>
        </button>
      </div>
      
    </div>
  );
};

export default PopularMenu;
