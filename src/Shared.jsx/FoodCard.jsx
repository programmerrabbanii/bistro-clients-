import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import UseCart from "../hooks/UseCart";


const FoodCard = ({ salad }) => {
  const navigate=useNavigate()
  const location=useLocation()
  const {user}=useContext(AuthContext)
  const useAxios=UseAxiosSecure()
  const [,refetch]=UseCart()
    const { name, image, price, recipe,_id } = salad;
    const handlerAddToCard=(food)=>{
      if(user && user.email){
        // To Do: woring loading now
        const cartItems={
          menuId: _id,
          email: user.email,
          name:  name,
          image: image,
          price: price,

        }
        useAxios.post('/carts',cartItems)
        .then(res=>{
          console.log(res.data);
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} Added To Your Cart`,
              showConfirmButton: false,
              timer: 1500
            });
            refetch()
          }
         
        })
      }
      else{
        Swal.fire({
          title: "You are not logged in",
          text: "Please login to Add to the card", 
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login", {state:{from:location}})
          }
        });
      }
    }
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
            <button onClick={()=>handlerAddToCard(salad)} className="w-full bg-gray-200 hover:bg-yellow-500 text-black font-medium py-2 rounded transition-all">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default FoodCard;
  