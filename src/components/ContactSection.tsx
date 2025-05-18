
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you shortly.",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="bg-white">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Reach out to discuss how Rootware Data can help with your IT needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 animate-fade-in">
            <h3 className="text-2xl font-bold text-rootware-800 mb-6">Get In Touch</h3>
            <p className="text-gray-600 mb-8">
              Have questions about our services or want to start a project? Fill out the form or 
              contact us directly using the information below.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-rootware-100 p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-rootware-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-rootware-800">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-rootware-100 p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-rootware-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-rootware-800">Email</h4>
                  <p className="text-gray-600">contact@rootwaredata.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-rootware-100 p-3 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-rootware-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-rootware-800">Office</h4>
                  <p className="text-gray-600">
                    123 Tech Plaza, Suite 500<br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 animate-fade-in">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john.doe@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Ltd."
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project or inquiry..."
                  className="resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="bg-rootware-600 hover:bg-rootware-700 text-white w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
