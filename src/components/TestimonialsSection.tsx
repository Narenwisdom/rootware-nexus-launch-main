
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "David Mitchell",
      role: "CTO, GreenTech Solutions",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      content: "Rootware Data transformed our IT infrastructure completely. Their ServiceNow implementation has streamlined our processes and saved us countless hours. The team was professional, knowledgeable, and responsive throughout the project.",
      rating: 5,
    },
    {
      name: "Emily Roberts",
      role: "IT Director, Global Finance Corp",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      content: "We partnered with Rootware Data for our DevOps transformation, and the results have exceeded our expectations. Our deployment time has been reduced by 70%, and the quality of our releases has improved significantly.",
      rating: 5,
    },
    {
      name: "Robert Jackson",
      role: "VP of Technology, MedTech Inc",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      content: "The consulting services provided by Rootware Data helped us navigate a complex digital transformation. Their expertise in ServiceNow and IT infrastructure modernization was invaluable to our success.",
      rating: 4,
    },
    {
      name: "Sophia Chen",
      role: "CEO, Innovative Solutions",
      image: "https://randomuser.me/api/portraits/women/72.jpg",
      content: "Working with the Rootware Data team has been a pleasure. They understood our business needs perfectly and delivered a custom IT solution that has helped us scale efficiently. Highly recommended!",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextTestimonials = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage) % testimonials.length);
  };

  const prevTestimonials = () => {
    setCurrentIndex((prev) => (prev - itemsPerPage + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="bg-rootware-50">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Star className="h-7 w-7 text-rootware-500 mr-3 fill-rootware-500" />
            <h2 className="section-title mb-0">Client Testimonials</h2>
          </div>
          <p className="section-subtitle">
            Hear what our clients have to say about their experience working with Rootware Data
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg animate-fade-in">
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover border-2 border-rootware-300"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-rootware-800">{testimonial.name}</h3>
                      <p className="text-rootware-600">{testimonial.role}</p>
                      <div className="flex mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-8 space-x-4">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevTestimonials}
                className="rounded-full border border-rootware-200 hover:bg-rootware-100"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextTestimonials}
                className="rounded-full border border-rootware-200 hover:bg-rootware-100"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
