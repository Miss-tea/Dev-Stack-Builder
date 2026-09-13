import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {s
    fetch(`${import.meta.env.BASE_URL}technologies.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching technologies:', error);
        toast.error('Failed to load technologies data.');
        setLoading(false);
      });
  }, []);

  const handleSelectTech = (tech) => {
    if (selectedTechs.some((t) => t.id === tech.id)) {
      setSelectedTechs(selectedTechs.filter((t) => t.id !== tech.id));
      toast.info(`Removed ${tech.name} from your stack.`);
    } else {
      setSelectedTechs([...selectedTechs, tech]);
      toast.success(`Added ${tech.name} to your stack!`);
    }
  };

  const categories = ['All', ...new Set(technologies.map((t) => t.category))];

  const filteredTechnologies =
    activeCategory === 'All'
      ? technologies
      : technologies.filter((t) => t.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content">
      <ToastContainer position="top-right" autoClose={3000} />

    
      <nav className="navbar bg-base-100 border-b px-8 py-4 justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-pink-500 text-white font-bold p-2 rounded-lg">DS</div>
          <span className="text-xl font-bold">Dev<span className="text-pink-500">Stack</span></span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#home" className="text-pink-500 font-medium">Home</a>
          <a href="#tech" className="hover:text-pink-500">Technologies</a>
          <a href="#projects" className="hover:text-pink-500">Projects</a>
          <a href="#about" className="hover:text-pink-500">About</a>
          <a href="#contact" className="hover:text-pink-500">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn btn-ghost btn-sm">Sign In</button>
          <button className="btn btn-sm bg-pink-500 hover:bg-pink-600 text-white border-none rounded-full px-5">Sign Up</button>
        </div>
      </nav>


      <main className="flex-1 max-w-7xl w-full mx-auto px-8 py-10">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Explore the Technologies</h1>
          <p className="text-slate-500">Pick the technologies you want to compare and build your ideal stack.</p>
        </header>

    
        {categories.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`btn btn-sm rounded-full border-none ${
                  activeCategory === category
                    ? 'bg-pink-500 text-white hover:bg-pink-600'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
     
          <div className="lg:col-span-2">
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <span className="loading loading-spinner loading-lg text-pink-500"></span>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredTechnologies.map((tech) => {
                  const isSelected = selectedTechs.some((t) => t.id === tech.id);
                  return (
                    <div
                      key={tech.id}
                      className={`card bg-base-100 border p-5 shadow-sm hover:shadow-md transition-all ${
                        isSelected ? 'border-pink-500 ring-1 ring-pink-500' : 'border-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-3">
                        {tech.icon && (
                          <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                        )}
                        <div>
                          <h3 className="font-bold text-lg text-slate-800">{tech.name}</h3>
                          <span className="badge badge-sm badge-ghost text-slate-500">{tech.category}</span>
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">{tech.description}</p>
                      <button
                        onClick={() => handleSelectTech(tech)}
                        className={`btn btn-sm w-full ${
                          isSelected
                            ? 'btn-outline btn-secondary'
                            : 'bg-pink-500 text-white hover:bg-pink-600 border-none'
                        }`}
                      >
                        {isSelected ? 'Remove from Stack' : 'Add to Stack'}
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div>
            <div className="card bg-base-100 border border-slate-200 p-6 shadow-sm sticky top-6">
              <h2 className="text-xl font-bold text-slate-900 mb-1">Your Stack</h2>
              <p className="text-slate-500 text-sm mb-4">
                {selectedTechs.length} Technologies Selected
              </p>

              {selectedTechs.length === 0 ? (
                <div className="border border-dashed border-slate-300 rounded-lg p-8 text-center">
                  <p className="text-slate-400 text-sm">
                    Nothing here yet. Add a technology to start building your stack.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {selectedTechs.map((tech) => (
                    <div
                      key={tech.id}
                      className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100"
                    >
                      <div className="flex items-center gap-3">
                        {tech.icon && (
                          <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain" />
                        )}
                        <span className="font-semibold text-slate-700 text-sm">{tech.name}</span>
                      </div>
                      <button
                        onClick={() => handleSelectTech(tech)}
                        className="text-slate-400 hover:text-red-500 font-bold px-2"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="footer p-10 border-t bg-base-100 text-base-content mt-16 max-w-7xl mx-auto">
        <aside>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl font-bold">Dev<span className="text-pink-500">Stack</span></span>
          </div>
          <p className="text-slate-500 text-sm">Curated tools, technologies, and resources for developers.</p>
        </aside>
        <nav>
          <h6 className="footer-title">PRODUCT</h6>
          <a href="#home" className="link link-hover">Home</a>
          <a href="#tech" className="link link-hover">Technologies</a>
        </nav>
        <nav>
          <h6 className="footer-title">COMPANY</h6>
          <a href="#about" className="link link-hover">About</a>
          <a href="#contact" className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">LEGAL</h6>
          <a href="#privacy" className="link link-hover">Privacy Policy</a>
          <a href="#terms" className="link link-hover">Terms of Service</a>
        </nav>
      </footer>
    </div>
  );
}
