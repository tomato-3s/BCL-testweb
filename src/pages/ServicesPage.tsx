import { Layers, Zap, Printer, Wrench, Palette, Shield } from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: "Laser Cutting",
    description: "Precision cutting for metals and non-metals using Fiber and CO2 lasers. Perfect for intricate designs and rapid prototyping.",
    image: "https://images.unsplash.com/photo-1574170623305-6f7f18f89145?auto=format&fit=crop&w=800&h=600"
  },
  {
    icon: Wrench,
    title: "Sheet Metal Fabrication",
    description: "Complete fabrication including bending, hardware insertion, and welding. Expert craftsmanship for your custom projects.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&h=600"
  },
  {
    icon: Zap,
    title: "Laser Marking",
    description: "Fine detail marking on metals and plastics using MOPA fiber laser technology. Permanent, precise, and professional.",
    image: "https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=800&h=600"
  },
  {
    icon: Printer,
    title: "UV Printing & Cutting",
    description: "High-quality graphics printed directly on various materials with precise contour cutting capabilities.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&h=600"
  },
  {
    icon: Palette,
    title: "Surface Finishing",
    description: "Comprehensive finishing services including powder coating, anodizing, and plating for the perfect final touch.",
    image: "https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=800&h=600"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-zinc-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Manufacturing Services</h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            From prototype to production, we offer comprehensive manufacturing solutions 
            with state-of-the-art equipment and expert craftsmanship.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <service.icon className="absolute bottom-6 left-6 h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-zinc-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Shield className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team is ready to help bring your ideas to life. Get in touch for a quote 
            or to discuss your manufacturing needs.
          </p>
          <a
            href="/quote"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  );
}