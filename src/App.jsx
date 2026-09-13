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
    <TechnologiesSection
        technologies={technologies}
        loading={loading}
        stack={stack}
        onAdd={handleAdd}
        onRemove={handleRemove}
        onRemoveAll={handleRemoveAll}
    />
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <TechnologiesSection />
            <ToastContainer position="bottom-right" autoClose={2500} />
        </div>
    );
}