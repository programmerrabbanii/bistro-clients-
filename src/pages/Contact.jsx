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
    </div>
  );
};

export default Contact;
