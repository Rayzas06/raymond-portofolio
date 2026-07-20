import { projects } from "../data/portfolio";
import RevealOnScroll from "./RevealOnScroll";

export default function FeaturedProjects() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-16 border-b border-border overflow-visible">
      <div className="font-mono text-xs uppercase tracking-widest text-accent mb-2">Featured Work</div>
      <h2 className="text-3xl font-extrabold mb-8">Selected Projects</h2>

      <div className="overflow-x-auto overflow-y-visible -mx-2 px-2 -my-2 py-2">
        <div className="flex gap-5 pb-3 snap-x snap-mandatory items-stretch">
          {projects.map((p, i) => (
            <RevealOnScroll key={p.id} delay={i * 0.1}>
              <div className="flex-none w-[320px] md:w-[340px] snap-start h-full">
                <div className="flex flex-col h-full bg-panel border border-border rounded-2xl overflow-hidden transition-[transform,box-shadow,border-color] duration-300 ease-out hover:border-accent hover:-translate-y-1 hover:shadow-[0_12px_32px_-8px_rgba(245,166,35,0.25)]">
                  <div className="relative h-[180px] bg-panelSoft flex items-center justify-center overflow-hidden flex-shrink-0">
                    {p.orientation === "portrait" ? (
                      <>
                        <img
                          src={p.image}
                          alt=""
                          aria-hidden="true"
                          className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-40"
                        />
                        <img
                          src={p.image}
                          alt={p.title}
                          className="relative w-full h-full object-contain py-3"
                        />
                      </>
                    ) : (
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                    )}
                    <span
                      className={`absolute top-3 left-3 font-mono text-[10px] px-2.5 py-1 rounded-full flex items-center gap-1.5 ${
                        p.status === "live" ? "bg-green/15 text-green" : "bg-accentDim text-accent"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {p.status === "live" ? "Live" : "WIP"}
                    </span>
                  </div>

                  <div className="flex flex-col flex-grow p-5">
                    <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                    <p className="text-sm text-textSoft mb-3">{p.points[0]}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.stack.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="font-mono text-[10px] text-textSoft bg-panelSoft border border-border px-2 py-1 rounded-full"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Perbaikan di sini: Menambahkan tag pembuka <a */}
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-accent mt-auto pt-1 inline-block"
                    >
                      ↗ View Project
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}