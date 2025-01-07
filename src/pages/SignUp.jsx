import { motion } from "framer-motion";
import singupImg from "../assets/images/others/authentication1-removebg-preview.png";
import singupBG from "../assets/images/others/authentication.png";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";


const SignUp = () => {
  const {user,createUser}=useContext(AuthContext)
  const {register,handleSubmit,watch,formState: { errors },} = useForm();
  const onSubmit = (data) => {
    createUser(data.email,data.password)
    .then(result=>{
      const loginUser=result.user
      console.log(loginUser);
    })
    
  }
  console.log(watch("example")) 

  return (
    <div
      style={{
        backgroundImage: `url(${singupBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Helmet>
        <title>
        Bistro Restaurant || SignUp
        
        </title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* Right Side Image Section */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img src={singupImg} alt="SignUp" />
          </motion.div>

          {/* Left Side Form Section */}
          <motion.div
            className="card w-full max-w-sm shrink-0"
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <p className="text-center text-3xl ">Sign Up</p>
              <motion.div
                className="form-control"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  name="name"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered"
                  required
                />
                {errors.name && <span>Name field is required</span>}
              </motion.div>

              <motion.div
                className="form-control"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email",{required:true})}
                  name="email"
                  type="email"
                  placeholder="Type here"
                  className="input input-bordered"
                  required
                />
                {errors.email && <span>Email field is required</span>}


              </motion.div>

              <motion.div
                className="form-control"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password",{ required: true, minLength:6, maxLength: 6 })}
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required 
                />
              {errors.password && <span> pleass password must be 6 characters</span>}

              </motion.div>

              <motion.div
                className="form-control mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <button className="btn bg-[#D1A054] text-white">Sign Up</button>
              </motion.div>

              <motion.p
                className="text-center text-[#D1A054]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                Already registered? Go to{" "}
                <Link className="font-semibold" to="/login">
                  LogIn
                </Link>
              </motion.p>

              <motion.p
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                Or sign up with
              </motion.p>

              <motion.p
                className="text-center text-3xl mx-auto"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                <FcGoogle />
              </motion.p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
