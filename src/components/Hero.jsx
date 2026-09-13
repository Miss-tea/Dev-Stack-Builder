import heroImg from "../assets/banner-stack.png";
export default function Hero() {
  return (
    <section id="home" className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">
        <div>
            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
                Build Your Ideal
                <br />
                <span className="text-[#D91B7E]">Development Stack</span>
            </h1>
            <p className="mt-4 max-w-md text-base text-slate-600">
                Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
                <a href="#technologies" className="bg-[#D91B7E] rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90">
                    Explore Technologies
                </a>
                <a href="#about" className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400">
                    Learn More
                </a>
            </div>
        </div>
        <div className="flex justify-center md:justify-end">
            <img src={heroImg} alt="Illustration of layered development technology stack" className="w-full max-w-lg" />
        </div>
    </section>
  )
}