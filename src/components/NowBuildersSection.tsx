
import { Building, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const NowBuildersSection = () => {
  const capabilities = [
    "ServiceNow platform implementation and customization",
    "ServiceNow application development",
    "Business process automation",
    "ITSM, ITOM, and ITBM implementations",
    "Workflow and integration services",
    "ServiceNow platform upgrades and maintenance",
    "Certified ServiceNow consultants and developers",
    "24/7 ServiceNow support services",
  ];

  return (
    <section id="nowbuilders" className="bg-gradient-to-r from-rootware-800 to-rootware-900 text-white">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Building className="h-8 w-8 text-rootware-300 mr-3" />
            <h2 className="section-title mb-0 text-white">NowBuilders</h2>
          </div>
          <p className="section-subtitle text-rootware-100">
            Specialized ServiceNow expertise to transform your enterprise service management
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-rootware-100">
              Unlock the Full Potential of ServiceNow
            </h3>
            <p className="mb-8 text-rootware-200">
              As certified ServiceNow partners, our NowBuilders team brings deep platform expertise to help you 
              maximize ROI, improve service delivery, and transform your business operations through tailored 
              ServiceNow solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-3 bg-rootware-700 rounded-full p-1">
                    <Check className="h-4 w-4 text-rootware-300" />
                  </div>
                  <p className="text-rootware-100">{capability}</p>
                </div>
              ))}
            </div>

            <Button className="bg-rootware-500 hover:bg-rootware-400 text-white" asChild>
              <a href="#contact">Schedule a ServiceNow Consultation</a>
            </Button>
          </div>

          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1500" 
              alt="ServiceNow Platform" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NowBuildersSection;
