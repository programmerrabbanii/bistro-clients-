import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { motion } from "framer-motion";
import loginimg from "../assets/images/others/authentication1-removebg-preview.png";
import loginBgImg from "../assets/images/others/authentication.png";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../auth/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser, googleLogin } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location=useLocation()
  const from=location.state?.from?.pathname||"/"

  // Load captcha engine on component mount
  useEffect(() => {
    try {
      loadCaptchaEnginge(6); // Initialize captcha
    } catch (error) {
      console.error("Captcha engine failed to load:", error);
    }
  }, []);

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from,{replace:true}); // Redirect to homepage
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: error.message || "Login failed!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  // google login

  const loginWidthGoogle = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: " Google Login successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: error.message || "Google login failed!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  // Handle captcha validation
  const handlerCaptcha = (e) => {
    const captchaValue = e.target.value;
    if (validateCaptcha(captchaValue)) {
      setDisabled(false);
    } else {
      setDisabled(true);
      Swal.fire({
        icon: "error",
        title: "Captcha validation failed!",
        text: "Please try again.",
      });
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${loginBgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Helmet>
        <title>Bistro Restaurant || Login</title>
      </Helmet>
      <div className="hero min-h-screen flex items-center justify-center">
        <motion.div
          className="hero-content flex-col lg:flex-row-reverse w-full max-w-5xl rounded-lg p-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Right Section: Login Form */}
          <motion.div
            className="card w-full lg:w-1/2 p-5 rounded-lg"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <form onSubmit={handleLogin} className="card-body">
              <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">
                Welcome Back!
              </h2>
              <motion.div
                className="form-control"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label className="label">
                  <span className="label-text font-semibold text-gray-600">
                    Email
                  </span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
              </motion.div>
              <motion.div
                className="form-control"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label className="label">
                  <span className="label-text font-semibold text-gray-600">
                    Password
                  </span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a
                    href="/forgot-password"
                    className="label-text-alt link link-hover text-primary"
                  >
                    Forgot password?
                  </a>
                </label>
              </motion.div>

              <motion.div
                className="form-control"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handlerCaptcha}
                  name="captcha"
                  type="text"
                  placeholder="Enter your captcha"
                  className="input input-bordered"
                  required
                />
              </motion.div>
              <motion.div
                className="form-control mt-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <input
                  disabled={disabled}
                  className="bg-[#D1A054] w-full rounded-md py-2 text-white cursor-pointer"
                  type="submit"
                  value="Login"
                />
              </motion.div>
              <p className="text-center text-[#D1A054]">
                New here? Create a New{" "}
                <Link className="font-semibold" to="/signup">
                  SignUp Account
                </Link>
              </p>
              <p className="text-center">Or sign in with</p>
              <p onClick={loginWidthGoogle}>
                <FcGoogle
                  className="text-center text-3xl mx-auto cursor-pointer"
                  aria-label="Sign in with Google"
                />
              </p>
            </form>
          </motion.div>

          {/* Left Section: Illustration */}
          <motion.div
            className="text-center lg:text-left w-full lg:w-1/2 flex items-center justify-center"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={loginimg}
              alt="Login Illustration"
              className="rounded-lg max-w-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
