import { useState } from 'react';
import { Upload, Send } from 'lucide-react';
import type { SketchFormData } from '../types';

export default function SketchForm() {
  const [formData, setFormData] = useState<SketchFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    deliveryDate: '',
    projectDetails: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sketch form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-8 border border-zinc-200">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-zinc-800 mb-2">Submit Your Concept</h2>
        <p className="text-zinc-600 mb-6">
          We'll review your sketch and help determine the best path to manufacturing.
        </p>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">First Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              required
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Last Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              required
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              required
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Phone Number</label>
            <input
              type="tel"
              className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              required
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-zinc-800 mb-4">Upload Your Sketch</h3>
          <div className="border-2 border-dashed border-zinc-300 rounded-lg p-6 text-center">
            <Upload className="mx-auto h-12 w-12 text-zinc-400" />
            <p className="mt-2 text-sm text-zinc-600">
              Upload any type of sketch or preliminary design files
            </p>
            <p className="text-xs text-zinc-500 mt-1">
              Accepts images, PDFs, or CAD files
            </p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">Project Description</label>
          <textarea
            className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent h-32"
            placeholder="Tell us about your project and what you're looking to achieve..."
            onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-md transition duration-200 flex items-center justify-center"
      >
        <Send className="mr-2 h-5 w-5" />
        Submit for Review
      </button>
    </form>
  );
}