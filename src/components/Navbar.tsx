
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Developers", href: "#developers" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "NowBuilders", href: "#nowbuilders" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`${isScrolled ? 'bg-white' : 'bg-transparent'} flex items-center justify-center transition-all duration-300`}>
            <img 
              src="/lovable-uploads/9db3c213-487a-4a0f-b457-ea500c78dde3.png" 
              alt="Rootware Logo" 
              className="h-16 w-auto"
            />
          </div>
          <a href="#" className="text-2xl font-bold text-rootware-800">
            Rootware<span className="text-rootware-500">Data</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-rootware-800 hover:text-rootware-500 font-medium transition-colors"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
          <Button variant="default" className="bg-rootware-600 hover:bg-rootware-700">
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-rootware-800"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 animate-fade-in">
          <div className="container py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-rootware-800 hover:text-rootware-500 py-2 px-4 block transition-colors"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}
            <Button variant="default" className="bg-rootware-600 hover:bg-rootware-700 w-full">
              Get Started
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
