import { Upload, Send } from 'lucide-react';
import { FormEvent } from 'react';
import { QuoteFormData } from '../types';

interface Props {
  formData: QuoteFormData;
  setFormData: (data: QuoteFormData) => void;
  onSubmit: (e: FormEvent) => void;
}

export default function QuoteForm({ formData, setFormData, onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit} className="bg-white rounded-lg shadow-xl p-8 border border-zinc-200">
      {/* Contact Information */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-zinc-800 mb-6 flex items-center">
          <span className="bg-zinc-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">1</span>
          Contact Information
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">First Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Last Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Phone Number</label>
            <input
              type="tel"
              className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* File Upload */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-zinc-800 mb-6 flex items-center">
          <span className="bg-zinc-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">2</span>
          Project Files
        </h2>
        <div className="border-2 border-dashed border-zinc-300 rounded-lg p-6 text-center">
          <Upload className="mx-auto h-12 w-12 text-zinc-400" />
          <p className="mt-2 text-sm text-zinc-600">
            Drag and drop your files here, or <span className="text-blue-500 cursor-pointer">browse</span>
          </p>
        </div>
      </div>

      {/* Project Details */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-zinc-800 mb-6 flex items-center">
          <span className="bg-zinc-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">3</span>
          Project Details
        </h2>
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">Requested Delivery Date</label>
          <input
            type="date"
            className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
            onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
          />
          <label className="block text-sm font-medium text-zinc-700 mb-1">Project Notes</label>
          <textarea
            className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
            placeholder="Notes, special requests, additional details..."
            onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-200 flex items-center justify-center"
      >
        <Send className="mr-2 h-5 w-5" />
        Submit Quote Request
      </button>
    </form>
  );
}