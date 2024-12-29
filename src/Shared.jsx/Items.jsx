const Items = ({item}) => {
    const {image,recipe,name,price}=item
    return (
        <section>
            <div className="flex space-x-4 my-5">
            <img className="w-11 h-11 rounded-full" src={image} alt="" />
            <div>
                <h2 className="uppercase ">{name}------</h2>
                <h3>{recipe}</h3>
            </div>
            <h2 className="text-yellow-500">{price}</h2>
            
        </div>
        
        </section>
    );
};

export default Items;