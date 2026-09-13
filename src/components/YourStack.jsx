export default function YourStack({ stack=[], onRemove, onRemoveAll }) {
   const count = stack.length;
   const countText = count === 1 ? "Technology Selected" : "Technologies Selected";
    return (   
        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">   
    <h3 className="text-lg font-bold text-slate-900">Your Stack
</h3>
    <p className="mb-4 text-sm text-slate-500">{countText}</p>
    {count===0 ? (
        <p className="rounded-lg border border-dashed border-slate-200 px-3 py-6 text-center text-sm text-slate-400">
            Nothing here yet. Add a technology to start building your stack.
        </p>
    ) : (   
        <ul className="flex flex-col gap-2">
            {stack.map((tech) => (
                <li key={tech.id} className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2">
                    <div className="flex items-center gap-3">
                        <img src={tech.icon} alt="" className="h-6 w-6" />
                        <div>
                            <p className="text-sm font-semibold text-slate-900">{tech.name}</p>
                            <p className="text-xs text-slate-500">{tech.category}</p>
                        </div>
                    </div>
                    <button type="button" aria-label={`Remove ${tech.name} from stack`}
                     onClick={() => onRemove(tech.id)} 
                     className="text-slate-400 hover:text-slate-600">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </li>
            ))}
        </ul>
    )}
    {stack.length > 0 && (
        <button type="button" onClick={onRemoveAll} className="mt-4 w-full rounded-lg border border-red-200 py-2.5 text-sm font-semibold text-red-500 transition-colors hover:bg-red-50">
            Remove All
        </button>
    )}
    </aside>

  )
}