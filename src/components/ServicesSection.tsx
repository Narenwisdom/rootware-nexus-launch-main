
import { 
  Cloud, 
  Code, 
  Database, 
  Lock, 
  BarChart, 
  Briefcase 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "ServiceNow Implementation",
      description: "End-to-end ServiceNow platform implementation, customization, and integration services to streamline your business workflows.",
      icon: Cloud,
    },
    {
      title: "DevOps Transformation",
      description: "Accelerate your software delivery with our comprehensive DevOps practices, CI/CD pipelines, and automation solutions.",
      icon: Code,
    },
    {
      title: "IT Infrastructure Management",
      description: "Design, implementation, and management of scalable, secure, and resilient IT infrastructure tailored to your business needs.",
      icon: Database,
    },
    {
      title: "Cybersecurity Solutions",
      description: "Protect your digital assets with our advanced security assessments, implementations, and managed security services.",
      icon: Lock,
    },
    {
      title: "Business Intelligence",
      description: "Transform your data into actionable insights with our BI solutions, custom dashboards, and analytics implementations.",
      icon: BarChart,
    },
    {
      title: "IT Consulting",
      description: "Strategic IT consulting to align your technology initiatives with business goals and drive digital transformation.",
      icon: Briefcase,
    },
  ];

  return (
    <section id="services" className="bg-rootware-50">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive IT solutions designed to accelerate your digital transformation journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
              <CardContent className="p-6">
                <div className="bg-rootware-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-rootware-600" />
                </div>
                <h3 className="text-xl font-bold text-rootware-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
