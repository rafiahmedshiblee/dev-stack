import type { Technology } from '../types';
import { TechList } from './TechList';
import { Sidebar } from './Sidebar';

interface MainLayoutProps {
    technologies: Technology[];
    stack: Technology[];
    handleAddToStack: (tech: Technology) => void;
    handleRemoveFromStack: (id: string) => void;
    handleRemoveAll: () => void;
    loading: boolean;
}

export const MainLayout = ({
    technologies,
    stack,
    handleAddToStack,
    handleRemoveFromStack,
    handleRemoveAll,
    loading
}: MainLayoutProps) => {
    return (
        <section id="technologies" className="py-16 bg-gray-50/50">
            <div className="container mx-auto px-6 md:px-12">
                
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                        Explore the <span className="text-brand-gradient">Technologies</span>
                    </h2>
                    <p className="mt-2 text-gray-600 text-sm md:text-base">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center py-24">
                        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-purple-600"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                        <div className="lg:col-span-3">
                            <TechList
                                technologies={technologies}
                                stack={stack}
                                handleAddToStack={handleAddToStack}
                            />
                        </div>

                        <div className="lg:col-span-1">
                            <Sidebar
                                stack={stack}
                                handleRemoveFromStack={handleRemoveFromStack}
                                handleRemoveAll={handleRemoveAll}
                            />
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
};