export default function TechCard({ tech, isAdded, onAdd }) {
    const { name, category, description, icon, rating, difficulty, badge } = tech;  
  return (    
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <div className="mb-3 flex items-center justify-between">
        <img src={icon} alt={`${name} icon`} className="h-8 w-8" loading="lazy" />
        {badge && (
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                {badge }
            </span>
        )}  
    </div>
    <h3 className="text-lg font-bold text-slate-900">{name}</h3>
    <p className="mt-1 mb-4 text-sm text-slate-600">{description}</p>
    <div className="mb-4 mt-auto flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-md bg-slate-100 px-2 py-1 font-medium text-slate-600">
            {category}
        </span>
        <span className="text-slate-500">{difficulty}</span>
        <span>
            <svg width="14" height="14" viewBox="0 0 20 20" fill="#f59e0b">
                <path d="M10 1.5l2.6 5.6 6 .7-4.4 4.2 1.1 6-5.3-3-5.3 3 1.1-6L1.4 7.8l6-.7L10 1.5z" />  

            </svg>
            {rating}
        </span>

        <button
        type="button"
        disabled={isAdded}
        onClick={() => onAdd(tech)}
        className={`w-full rounded-lg py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500 ${
            isAdded
                ? "cursor-not-allowed bg-slate-100 text-slate-400"
                : "bg-slate-900 text-white hover:bg-slate-800"
        }   
        `}
        >
            {isAdded ? "✓ Added to Stack" : "Add to Stack"}
            

        </button>

    </div>
   </div> 
  );
}       