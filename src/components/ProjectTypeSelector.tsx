import { useState } from 'react';
import { Cog, Building2, PenTool, Palette } from 'lucide-react';
import type { ProjectType } from '../types';

const projectTypes: Array<{
  type: ProjectType;
  icon: typeof Cog;
  description: string;
}> = [
  {
    type: 'Engineering',
    icon: Cog,
    description: 'Mechanical parts, prototypes, and functional components'
  },
  {
    type: 'Architectural',
    icon: Building2,
    description: 'Custom architectural elements and installations'
  },
  {
    type: 'Signage/Marketing',
    icon: PenTool,
    description: 'Business signage, displays, and promotional materials'
  },
  {
    type: 'Art & Design',
    icon: Palette,
    description: 'Custom art pieces and creative installations'
  }
];

export default function ProjectTypeSelector() {
  const [selectedType, setSelectedType] = useState<ProjectType | null>(null);

  const handleSubmit = (type: ProjectType) => {
    console.log('Selected project type:', type);
    // Handle submission logic here
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 border border-zinc-200">
      <h2 className="text-2xl font-bold text-zinc-800 mb-2">What are you looking to create?</h2>
      <p className="text-zinc-600 mb-8">
        Select your project type and we'll connect you with the right design expertise.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectTypes.map(({ type, icon: Icon, description }) => (
          <button
            key={type}
            onClick={() => handleSubmit(type)}
            className="flex items-start p-6 border-2 border-zinc-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all duration-200 group text-left"
          >
            <Icon className="h-8 w-8 text-zinc-400 group-hover:text-purple-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-zinc-800 mb-1">{type}</h3>
              <p className="text-zinc-600 text-sm">{description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}