import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Black Cat Labs</h3>
            <p className="text-zinc-400">
              Precision manufacturing solutions for modern innovation.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-zinc-400">
              <li>Laser Cutting</li>
              <li>Sheet Metal Fabrication</li>
              <li>Laser Marking</li>
              <li>UV Printing</li>
              <li>Surface Finishing</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-zinc-400">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                info@blackcatlabs.com
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                (555) 123-4567
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Boston, MA
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Hours</h3>
            <ul className="space-y-2 text-zinc-400">
              <li>Monday - Friday</li>
              <li>9:00 AM - 6:00 PM EST</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-zinc-500">
          © {new Date().getFullYear()} Black Cat Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}