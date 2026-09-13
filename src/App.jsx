import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologiesSection from "./components/TechnologySection";


export default function App() { 
    const [technologies, setTechnologies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [stack, setStack] = useState([]);
    
    const handleAdd = (tech) => {
        setStack((prev) => [...prev, tech]);
        toast.success(`Added ${tech.name} to your stack!`);
    };
    const handleRemove = (id) => {
        setStack((prev) => prev.filter((item) => item.id !== id));
        toast.info(`Removed technology from your stack.`);
    };
    const handleRemoveAll = () => {
        setStack([]);
        toast.info("Cleared all technologies.");
    };

    return (
        <div className="min-h-screen bg-white">
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
            <ToastContainer position="bottom-right" autoClose={2500} />
        </div>
    );
}