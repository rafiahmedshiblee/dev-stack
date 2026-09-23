//added button states
import type { Technology } from '../types';
import { FiStar } from 'react-icons/fi';

interface TechCardProps {
    tech: Technology;
    stack: Technology[];
    handleAddToStack: (tech: Technology) => void;
}

export const TechCard = ({ tech, stack, handleAddToStack }: TechCardProps) => {
    const isAdded = stack.some((item) => item.id === tech.id);

    return (
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
                <div className="flex items-center justify-between mb-4">
                    <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
                        {tech.badge}
                    </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-1">{tech.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-2">
                    {tech.description}
                </p>
            </div>

            <div>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pt-4 border-t border-gray-50">
                    <span className="bg-gray-50 px-2 py-0.5 rounded text-gray-600 font-medium">{tech.category}</span>
                    <span className="bg-gray-50 px-2 py-0.5 rounded text-gray-600">{tech.difficulty}</span>
                    <span className="flex items-center gap-1 font-semibold text-gray-700">
                        <FiStar className="text-amber-400 fill-amber-400 w-3.5 h-3.5" />
                        {tech.rating}
                    </span>
                </div>

                <button
                    onClick={() => handleAddToStack(tech)}
                    disabled={isAdded}
                    className={`w-full py-2.5 rounded-xl text-xs font-semibold transition-all ${
                        isAdded
                            ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 cursor-not-allowed'
                            : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                >
                    {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
                </button>
            </div>
        </div>
    );
};