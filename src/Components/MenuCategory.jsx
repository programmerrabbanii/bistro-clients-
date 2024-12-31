import { Link } from "react-router-dom";
import Cover from "../Shared.jsx/Cover";
import Items from "../Shared.jsx/Items";
const MenuCategory = ({ item, title, img, subHeading }) => {
  console.log(item);
  return (
    <div>
      {title && <Cover img={img} title={title} subHeading={subHeading}></Cover>}
      <div className="grid md:grid-cols-2 gap-4 w-11/12 mx-auto">
        {item.map((item) => (
          <Items item={item} key={item._id}></Items>
        ))}
      </div>
      <div className="text-center py-5">
        <Link
          to={`/order/${title}`}
          className="text-lg font-bold text-gray-800 px-4 py-2 rounded-full border-2 border-yellow-500 bg-yellow-100 hover:bg-yellow-500 hover:text-white transition-all duration-300 shadow-md"
        >
          ORDER YOUR FAVOURITE FOOD
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
