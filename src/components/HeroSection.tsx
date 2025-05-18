
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-rootware-50 to-blue-50">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-rootware-900 leading-tight">
              Transforming Businesses Through <span className="text-rootware-500">IT Excellence</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-rootware-700 max-w-2xl">
              Rootware Data delivers cutting-edge IT solutions with expertise in ServiceNow, DevOps, and enterprise systems to drive your digital transformation journey.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary text-lg px-7 py-6" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" className="text-lg px-7 py-6" asChild>
                <a href="#services" className="flex items-center">
                  Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1500" 
              alt="IT Solutions" 
              className="rounded-lg shadow-xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
