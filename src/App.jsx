import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologiesSection from "./components/TechnologySection";
import Footer from "./components/Footer";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}technologies.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load technologies");
        return res.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Error loading technologies data!");
        setLoading(false);
      });
  }, []);

  const handleAdd = (tech) => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

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
    <div className="min-h-screen bg-white text-slate-900">
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
