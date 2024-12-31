const FoodCard = ({ salad }) => {
    const { name, image, price, recipe } = salad;
    return (
      <div className="max-w-sm mx-auto">
        <div className="card bg-white shadow-lg rounded-lg overflow-hidden grid grid-rows-[auto,1fr,auto] h-full">
          {/* Image Section */}
          <figure className="relative">
            <img
              src={image}
              alt={name}
              className="w-full h-64 object-cover"
            />
            <p className="bg-black text-white text-sm font-semibold px-3 py-1 absolute top-4 right-4 rounded">
              ${price}
            </p>
          </figure>
  
          {/* Content Section */}
          <div className="p-5">
            <h2 className="text-lg font-bold text-gray-800 mb-2">{name}</h2>
            <p className="text-gray-600 text-sm">{recipe}</p>
          </div>
  
          {/* Button Section */}
          <div className="p-5">
            <button className="w-full bg-gray-200 hover:bg-yellow-500 text-black font-medium py-2 rounded transition-all">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default FoodCard;
  