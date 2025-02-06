import { useState } from 'react';
import { FileCheck, HelpCircle, ArrowRight, Pencil, Lightbulb } from 'lucide-react';
import SketchForm from './SketchForm';
import ProjectTypeSelector from './ProjectTypeSelector';

interface Props {
  onShowForm: () => void;
}

export default function QuoteFlow({ onShowForm }: Props) {
  const [flowState, setFlowState] = useState<'initial' | 'hasSketch' | 'noSketch' | 'projectType'>('initial');
  
  if (flowState === 'hasSketch') {
    return <SketchForm />;
  }

  if (flowState === 'noSketch') {
    return <ProjectTypeSelector />;
  }

  if (flowState !== 'initial') return null;

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 border border-zinc-200 mb-8">
      <h2 className="text-2xl font-bold text-zinc-800 mb-6">Let's get your project started</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          onClick={onShowForm}
          className="flex flex-col items-center p-8 border-2 border-zinc-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 group"
        >
          <FileCheck className="h-16 w-16 text-zinc-400 group-hover:text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold text-zinc-800 mb-2">Ready for Manufacturing</h3>
          <p className="text-zinc-600 text-center mb-4">
            I have CAD files and know my specifications
          </p>
          <span className="flex items-center text-blue-600 font-medium">
            Get an instant quote <ArrowRight className="ml-2 h-4 w-4" />
          </span>
        </button>

        <div className="space-y-4">
          <button
            onClick={() => setFlowState('hasSketch')}
            className="w-full flex flex-col items-center p-6 border-2 border-zinc-200 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-200 group"
          >
            <Pencil className="h-12 w-12 text-zinc-400 group-hover:text-emerald-500 mb-2" />
            <h3 className="text-lg font-semibold text-zinc-800 mb-1">I Have a Sketch</h3>
            <p className="text-zinc-600 text-center text-sm">
              Let us review your concept and guide you forward
            </p>
          </button>

          <button
            onClick={() => setFlowState('noSketch')}
            className="w-full flex flex-col items-center p-6 border-2 border-zinc-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all duration-200 group"
          >
            <Lightbulb className="h-12 w-12 text-zinc-400 group-hover:text-purple-500 mb-2" />
            <h3 className="text-lg font-semibold text-zinc-800 mb-1">Need Design Help</h3>
            <p className="text-zinc-600 text-center text-sm">
              Start with our design services to bring your idea to life
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}