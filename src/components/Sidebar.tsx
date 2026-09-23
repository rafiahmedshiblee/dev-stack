import type { Technology } from '../types';
import { FiTrash2, FiX } from 'react-icons/fi';

interface SidebarProps {
    stack: Technology[];
    handleRemoveFromStack: (id: string) => void;
    handleRemoveAll: () => void;
}

export const Sidebar = ({ stack, handleRemoveFromStack, handleRemoveAll }: SidebarProps) => {
    return (
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm sticky top-6">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h3 className="font-bold text-gray-900 text-base">Your Stack</h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                        {stack.length} {stack.length === 1 ? 'Technology Selected' : 'Technologies Selected'}
                    </p>
                </div>
                {stack.length > 0 && (
                    <button
                        onClick={handleRemoveAll}
                        className="text-xs font-semibold text-red-500 hover:text-red-700 flex items-center gap-1"
                    >
                        <FiTrash2 className="w-3.5 h-3.5" /> Remove All
                    </button>
                )}
            </div>

            {stack.length === 0 ? (
                <div className="border border-dashed border-gray-200 rounded-xl p-8 text-center text-gray-400 text-xs">
                    Your stack is empty.
                </div>
            ) : (
                <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
                    {stack.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs">
                            <div className="flex items-center gap-3">
                                <img src={item.icon} alt={item.name} className="w-7 h-7 object-contain" />
                                <div>
                                    <span className="font-bold text-gray-900 block">{item.name}</span>
                                    <span className="text-gray-500">{item.category}</span>
                                </div>
                            </div>
                            <button
                                onClick={() => handleRemoveFromStack(item.id)}
                                className="text-gray-400 hover:text-red-500 p-1 transition-colors"
                                aria-label="Remove item"
                            >
                                <FiX className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};