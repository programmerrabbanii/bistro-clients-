import SectionTitle from "./SectionTitle";
import featureimg from "../assets/images/home/featured.jpg";
import featurBg from "../assets/images/home/featured.jpg";

const Feature = () => {
  return (
    <div
      className="mt-12 relative overflow-hidden"
      style={{
        backgroundImage: `url(${featurBg})`,
        backgroundAttachment: "fixed", // Parallax effect
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0"></div>

      <div className="relative z-10 py-16 px-6 lg:px-20 text-white text-center">
        <SectionTitle
          subHeading={"Check it out"}
          heading={"FROM OUR MENU"}
        ></SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 items-center w-10/12 mx-auto">
          {/* Image Section */}
          <div className="relative">
            <img
              src={featureimg}
              alt="Featured Dish"
              className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>

          {/* Text Section */}
          <div className="text-left">
            <h3 className="text-2xl font-semibold mb-4">March 20, 2023</h3>
            <p className="text-lg leading-relaxed">
              WHERE CAN I GET SOME? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Error voluptate facere, deserunt dolores
              maiores quod nobis quas quasi. Eaque repellat recusandae ad
              laudantium tempore consequatur consequuntur omnis ullam maxime
              tenetur.
            </p>
            <button className="mt-6 px-6 py-2 border-b-2 border-transparent text-lg font-medium text-white hover:border-white hover:bg-white hover:text-black transition duration-300 ease-in-out">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
