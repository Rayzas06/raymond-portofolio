import { useState } from "react";
import { projects } from "../data/portfolio";
import RevealOnScroll from "./RevealOnScroll";

export default function ProjectsFull() {
  const [filter, setFilter] = useState<"all" | "live" | "wip">("all");
  const filtered = projects.filter((p) => filter === "all" || p.status === filter);

  return (
    <section id="projects-full" className="max-w-wrap mx-auto px-6 py-24 border-b border-border">
      <div className="font-mono text-xs uppercase tracking-widest text-accent mb-2">Portfolio</div>
      <h2 className="text-3xl font-extrabold mb-8">All Projects</h2>

      <div className="flex gap-2 mb-7 flex-wrap">
        {(["all", "live", "wip"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`font-mono text-xs px-4 py-2 rounded-full border ${
              filter === f ? "bg-accent text-[#1a1200] border-accent font-bold" : "border-border text-textSoft"
            }`}
          >
            {f === "all" ? "All" : f === "live" ? "● Live" : "● WIP"}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {filtered.map((p) => (
          <RevealOnScroll key={p.id}>
            <div className="bg-panel border border-border rounded-xl2 overflow-hidden hover:border-accent hover:-translate-y-1 transition-all">
              <div className="relative h-[220px] bg-panelSoft overflow-hidden">
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
                      className="relative w-full h-full object-contain py-4"
                    />
                  </>
                ) : (
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <span className="font-mono text-[10px] border border-border rounded-full px-2 py-1 text-textSoft">{p.period}</span>
                </div>
                <ul className="text-sm text-textSoft space-y-1.5 my-3 list-disc list-inside">
                  {p.points.map((pt, i) => <li key={i}>{pt}</li>)}
                </ul>
                <a href={p.link} target="_blank" className="font-mono text-xs text-accent">↗ View Project</a>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}