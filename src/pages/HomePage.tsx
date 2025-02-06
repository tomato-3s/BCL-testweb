import { ArrowRight, Zap, Clock, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description: "From concept to reality in days, not weeks. Our agile setup ensures quick turnaround times."
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Streamlined processes and modern equipment to deliver your projects on schedule."
  },
  {
    icon: Wrench,
    title: "Expert Craftsmanship",
    description: "Combining cutting-edge technology with decades of manufacturing expertise."
  }
];

const clients = [
  { name: "MIT", logo: "https://images.unsplash.com/photo-1580942231868-de1cf7f14c25?auto=format&fit=crop&w=150&h=150" },
  { name: "ETH Zürich", logo: "https://images.unsplash.com/photo-1580942231868-de1cf7f14c25?auto=format&fit=crop&w=150&h=150" },
  { name: "Puma", logo: "https://images.unsplash.com/photo-1580942231868-de1cf7f14c25?auto=format&fit=crop&w=150&h=150" },
  { name: "Reebok", logo: "https://images.unsplash.com/photo-1580942231868-de1cf7f14c25?auto=format&fit=crop&w=150&h=150" }
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=2000&q=80")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.7)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Precision Manufacturing for Modern Innovation
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-8">
              Let us make your vision a reality with our industrial tools and multi-disciplinary expertise.
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-zinc-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Expertly Made Parts of All Shapes and Sizes</h2>
              <p className="text-zinc-400 text-lg mb-8">
                We've manufactured parts for robots, medical devices, art pieces and everything in between. 
                From initial prototyping to large scale production runs, we've got your back.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-zinc-900 transition-colors"
              >
                Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&h=600"
                alt="Manufacturing precision"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted By Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}