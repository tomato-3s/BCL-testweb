import QuoteFlow from '../components/QuoteFlow';
import QuoteForm from '../components/QuoteForm';
import InfoPanel from '../components/InfoPanel';
import { useState, FormEvent } from 'react';
import { QuoteFormData } from '../types';

export default function QuotePage() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<QuoteFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    deliveryDate: '',
    projectDetails: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <QuoteFlow onShowForm={() => setShowForm(true)} />
        
        {showForm && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <QuoteForm 
                formData={formData}
                setFormData={setFormData}
                onSubmit={handleSubmit}
              />
            </div>
            <div>
              <InfoPanel />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}