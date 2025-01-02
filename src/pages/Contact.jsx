import { MdOutlineWifiCalling3 } from "react-icons/md";
import contactimg from "../assets/images/contact/banner.jpg";
import SectionTitle from "../Components/SectionTitle";
import { FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${contactimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-50"></div>
        <div className="flex items-center justify-center h-full">
          <div className="max-w-md bg-opacity-20 text-white p-8 rounded-lg shadow-lg text-center">
            <h1 className="mb-5 text-5xl font-bold text-white">CONTACT US</h1>
            <p className="mb-5 text-white">Would you like to try a dish?</p>
          </div>
        </div>
      </div>
      {/* headline section start here */}
      <div>
        <SectionTitle
          subHeading={"Visit Us"}
          heading={"OUR LOCATION"}
        ></SectionTitle>
      </div>
      {/* contact info section start here */}
      <div className="py-10 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Contact Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto">
          {/* Phone Section */}
          <div className="border rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center justify-center py-4 text-5xl bg-[#D1A054] text-white rounded-t-lg">
              <MdOutlineWifiCalling3 />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 uppercase mb-4">
                Phone
              </h3>
              <p className="text-gray-600">+38 (012) 34 56 789</p>
            </div>
          </div>

          {/* Address Section */}
          <div className="border rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center justify-center py-4 text-5xl bg-[#D1A054] text-white rounded-t-lg">
              <FiMapPin />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 uppercase mb-4">
                Address
              </h3>
              <p className="text-gray-600">Natore</p>
            </div>
          </div>

          {/* Working Hours Section */}
          <div className="border rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center justify-center py-4 text-5xl bg-[#D1A054] text-white rounded-t-lg">
              <MdOutlineWifiCalling3 />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 uppercase mb-4">
                Working Hours
              </h3>
              <p className="text-gray-600">Mon - Fri: 08:00 - 22:00</p>
              <p className="text-gray-600">Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
      </div>
      {/* contact fild here */}
      <div>
        <SectionTitle
          subHeading={"Send Us a Message"}
          heading={"CONTACT FORM"}
        ></SectionTitle>

        <div>
          <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-md rounded-lg p-8 w-11/12 md:w-2/3 lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
                Contact Us
              </h2> 
              <form>
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#D1A054] focus:border-[#D1A054]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#D1A054] focus:border-[#D1A054]"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone*
                  </label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#D1A054] focus:border-[#D1A054]"
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message*
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Write your message here"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#D1A054] focus:border-[#D1A054]"
                  ></textarea>
                </div>

                {/* reCAPTCHA */}
                <div className="mb-6">
                  <div className="bg-gray-100 border border-gray-300 rounded-md p-4 text-center">
                    <p className="text-gray-500">I'm not a robot</p>
                    <p className="text-xs text-gray-400">
                      reCAPTCHA Privacy - Terms
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-[#D1A054] text-white font-bold py-2 px-4 rounded-md hover:bg-[#b98444] transition duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
