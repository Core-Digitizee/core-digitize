import { CheckCircleIcon } from "@heroicons/react/24/solid";

const services = [
  "Web Development", "App Development", "UI/UX Design", "Digital Marketing",
  "SEO Optimization", "Cloud Solutions", "Cybersecurity", "Branding & Identity",
  "E-commerce Solutions", "AI & Machine Learning", "Game Development", "AR/VR Development",
  "Video Editing", "Content Writing", "Social Media Management", "Data Analytics",
  "Blockchain Solutions", "IT Consultancy", "3D Modeling", "Motion Graphics"
];

const Services = () => {
  return (
    <section className="bg-black text-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-500">Our Premium Services</h2>
        <p className="text-lg text-gray-400 mt-4">
          We offer world-class digital solutions tailored to your business needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {services.map((service, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 bg-gray-900 rounded-xl shadow-lg hover:bg-gray-800 transition">
              <CheckCircleIcon className="h-8 w-8 text-orange-500" />
              <span className="text-lg font-medium">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
