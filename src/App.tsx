import { useState, useEffect } from 'react';
import type { Technology } from './types';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import { MainLayout } from './components/MainLayout';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data: Technology[] = await response.json();
        setTechnologies(data);
      } catch (error) {
        console.error(error);
        toast.error('Failed to load technologies data!');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warning('Already added!');
      return;
    }

    setStack((previousStack) => [...previousStack, tech]);
    toast.success('Technology added!');
  };

  const handleRemoveFromStack = (id: string) => {
    setStack((previousStack) => previousStack.filter((item) => item.id !== id));
    toast.info('Technology removed!');
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error('All technologies removed!');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      
      <MainLayout
        technologies={technologies}
        stack={stack}
        handleAddToStack={handleAddToStack}
        handleRemoveFromStack={handleRemoveFromStack}
        handleRemoveAll={handleRemoveAll}
        loading={loading}
      />

      <Footer />

      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}

export default App;