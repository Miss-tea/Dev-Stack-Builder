import TechCard from "./TechCard";
import YourStack from "./YourStack";
import Loader from "./Loader";

export default function TechnologiesSection({
    technologies = [],
    loading = false,
    stack = [],
    onAdd,
    onRemove,
    onRemoveAll,
}) {
    const stackIds = new Set(stack.map((t) => t.id));

    return (
        <section id="technologies" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Explore the <span className="text-brand-gradient">Technologies</span>
            </h2>
            <p className="mt-2 text-slate-600">
                Pick the technologies you want to compare and build your ideal stack.
            </p>

            {loading ? (
                <Loader />
            )   :(
                <div className="mt-10 grid gap-6 lg:grid-cols-[3fr_1fr] lg:items-start">
                    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        {technologies.map((tech) => (
                            <TechCard
                                key={tech.id}
                                tech={tech}
                                isAdded={stackIds.has(tech.id)}
                                onAdd={onAdd}
                            />
                        ))}
                    </div>

                    <div className="lg:sticky lg:top-24">
                        <YourStack stack={stack} onRemove={onRemove} onRemoveAll={onRemoveAll} />
                    </div>
                </div>
            )}
        </section>
    );
}
        