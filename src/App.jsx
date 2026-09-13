import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() { 
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <ToastContainer position="bottom-right" autoClose={2500} />
        </div>
    );
}