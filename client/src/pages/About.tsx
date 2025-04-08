import { UserGroupIcon, LightBulbIcon, GlobeAltIcon } from "@heroicons/react/24/solid";

const About = () => {
  return (
    <section className="bg-black text-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-orange-500 text-center">About Core Digitize</h2>
        <p className="text-lg text-gray-400 text-center mt-4">
          We are a global leader in digital innovation, delivering cutting-edge solutions to businesses worldwide.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:bg-gray-800 transition">
            <UserGroupIcon className="h-12 w-12 text-orange-500 mx-auto" />
            <h3 className="text-xl font-bold text-center mt-4">Our Team</h3>
            <p className="text-gray-400 text-center mt-2">
              A team of highly skilled professionals passionate about digital transformation.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:bg-gray-800 transition">
            <LightBulbIcon className="h-12 w-12 text-orange-500 mx-auto" />
            <h3 className="text-xl font-bold text-center mt-4">Our Mission</h3>
            <p className="text-gray-400 text-center mt-2">
              To revolutionize businesses with innovative and scalable digital solutions.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:bg-gray-800 transition">
            <GlobeAltIcon className="h-12 w-12 text-orange-500 mx-auto" />
            <h3 className="text-xl font-bold text-center mt-4">Our Reach</h3>
            <p className="text-gray-400 text-center mt-2">
              Serving global clients with expertise across industries and technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
