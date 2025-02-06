import { Factory } from 'lucide-react';

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center mb-6">
          <Factory size={40} className="mr-3" />
          <h1 className="text-4xl font-bold">Manufacturing Quote Request</h1>
        </div>
        <p className="text-center text-zinc-300 max-w-2xl mx-auto">
          Whether you're ready to start or need guidance, we're here to help you get your project manufactured.
        </p>
      </div>
    </div>
  );
}