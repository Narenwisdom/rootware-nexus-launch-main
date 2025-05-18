
import { Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const DevelopersSection = () => {
  const developers = [
    {
      name: "Alex Chen",
      title: "ServiceNow Technical Architect",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      skills: ["ServiceNow", "JavaScript", "Integration"],
    },
    {
      name: "Sarah Johnson",
      title: "Lead DevOps Engineer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      skills: ["AWS", "Kubernetes", "CI/CD"],
    },
    {
      name: "Michael Rodriguez",
      title: "Senior Full-Stack Developer",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      skills: ["React", "Node.js", "MongoDB"],
    },
    {
      name: "Jessica Lee",
      title: "Cloud Solutions Architect",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
      skills: ["Azure", "Cloud Architecture", "Security"],
    },
  ];

  return (
    <section id="developers" className="bg-white">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Users className="h-8 w-8 text-rootware-500 mr-3" />
            <h2 className="section-title mb-0">Our Developers</h2>
          </div>
          <p className="section-subtitle">
            Meet our team of expert developers and IT professionals who make the magic happen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {developers.map((developer, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg animate-fade-in hover:shadow-xl transition-all">
              <div className="h-56 overflow-hidden">
                <img 
                  src={developer.image} 
                  alt={developer.name} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg text-rootware-800">{developer.name}</h3>
                <p className="text-rootware-600 mb-3">{developer.title}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {developer.skills.map((skill, i) => (
                    <span key={i} className="bg-rootware-50 text-rootware-700 text-xs px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-rootware-700 max-w-3xl mx-auto">
            Our talented team brings together decades of combined experience in ServiceNow, DevOps, 
            cloud technologies, and enterprise IT solutions to deliver exceptional results for our clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DevelopersSection;
