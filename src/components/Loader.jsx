export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24 text-slate-500">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-300 border-t-pink-500 " />
      <p className="text-sm">Loading technologies…</p>
    </div>
  );
}   