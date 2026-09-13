import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologiesSection from "./components/TechnologySection";
import Footer from "./components/Footer";
import { initialTechnologies } from "./data/technologies";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTechnologies(initialTechnologies);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleAdd = (tech) => {
    setStack((prev) => [...prev, tech]);
    toast.success(`Added ${tech.name} to your stack!`);
  };
  const handleRemove = (id) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    toast.info(`Removed ${itemToRemove?.name || "item"} from stack.`);
  };
  const handleRemoveAll = () => {
    setStack([]);
    toast.warn("Cleared all technologies from stack.");
  };

  return (
    <div className ="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <TechnologiesSection
        technologies={technologies}
        loading={loading}
        stack={stack}
        onAdd={handleAdd}
        onRemove={handleRemove}
        onRemoveAll={handleRemoveAll}
      />
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2500} />
    </div>
  );
}