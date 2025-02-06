export interface QuoteFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  deliveryDate: string;
  projectDetails: string;
}

export type ProjectType = 'Engineering' | 'Architectural' | 'Signage/Marketing' | 'Art & Design';

export interface SketchFormData extends QuoteFormData {
  projectType?: ProjectType;
}