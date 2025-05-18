
import { Info } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">
            Learn about our mission, vision, and the team driving innovation at Rootware Data.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1500"
              alt="Rootware Data Team" 
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div className="animate-fade-in">
            <div className="flex items-center mb-6">
              <div className="bg-rootware-100 p-3 rounded-full mr-4">
                <Info className="h-6 w-6 text-rootware-600" />
              </div>
              <h3 className="text-2xl font-bold text-rootware-800">Who We Are</h3>
            </div>
            
            <p className="text-gray-700 mb-6">
              Rootware Data IT Solutions is a premier provider of enterprise IT services, specializing in ServiceNow implementations, DevOps transformations, and comprehensive IT solutions tailored to your business needs.
            </p>
            
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-rootware-700 mb-2">Our Mission</h4>
              <p className="text-gray-700">
                To empower organizations through innovative technology solutions that drive efficiency, productivity, and sustainable growth in an increasingly digital world.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-rootware-700 mb-2">Our Vision</h4>
              <p className="text-gray-700">
                To be recognized as the trusted technology partner that enables businesses to thrive through digital transformation and technological excellence.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-rootware-50 p-4 rounded-lg text-center">
                <h5 className="font-bold text-rootware-700">10+</h5>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="bg-rootware-50 p-4 rounded-lg text-center">
                <h5 className="font-bold text-rootware-700">200+</h5>
                <p className="text-sm text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-rootware-50 p-4 rounded-lg text-center">
                <h5 className="font-bold text-rootware-700">50+</h5>
                <p className="text-sm text-gray-600">Expert Developers</p>
              </div>
              <div className="bg-rootware-50 p-4 rounded-lg text-center">
                <h5 className="font-bold text-rootware-700">98%</h5>
                <p className="text-sm text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
