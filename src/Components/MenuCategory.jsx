import Cover from "../Shared.jsx/Cover";
import Items from "../Shared.jsx/Items";
const MenuCategory = ({ item,title,img,subHeading }) => {
    
    console.log(item);
  return (
    <div>
       { title && <Cover  img={img} title={title} subHeading={subHeading}></Cover>}
      <div className="grid md:grid-cols-2 gap-4 w-11/12 mx-auto">
        {item.map((item) => (
          <Items item={item} key={item._id}></Items>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
