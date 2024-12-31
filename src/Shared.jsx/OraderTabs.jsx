import FoodCard from "./FoodCard";

const OraderTabs = ({ itms }) => {
  return (
    <div>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {itms.map((salad) => (
          <FoodCard salad={salad} key={salad._id}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default OraderTabs;
