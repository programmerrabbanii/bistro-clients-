import Items from "../Shared.jsx/Items";
const MenuCategory = ({ item }) => {
    console.log(item);
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4 w-11/12 mx-auto">
        {item.map((item) => (
          <Items item={item} key={item._id}></Items>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
