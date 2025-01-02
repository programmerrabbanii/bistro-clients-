import contactimg from "../assets/images/contact/banner.jpg";
import SectionTitle from "../Components/SectionTitle";

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
        subHeading={'Visit Us'}
        heading={'OUR LOCATION'}
        ></SectionTitle>
      </div>
    </div>
  );
};

export default Contact;
