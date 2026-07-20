import { useState } from "react";
import { skills, skillIcons } from "../data/portfolio";
import RevealOnScroll from "./RevealOnScroll";

const iconColorOverride: Record<string, string> = {
  RabbitMQ: "#FF6600",
  Jira: "#0052CC",
};

type Category = "All" | keyof typeof skills;

export default function Skills() {
  const categories = Object.keys(skills) as (keyof typeof skills)[];
  const [active, setActive] = useState<Category>("All");

  const visibleSkills =
    active === "All"
      ? Object.entries(skills).flatMap(([cat, list]) => list.map((s) => ({ skill: s, cat })))
      : skills[active].map((s) => ({ skill: s, cat: active }));

  return (
    <section id="skills" className="max-w-[1400px] mx-auto px-6 py-24 border-b border-border">
      <div className="font-mono text-xs uppercase tracking-widest text-accent mb-2">Expertise</div>
      <h2 className="text-3xl font-extrabold mb-8">Technical Skills</h2>

      <div className="flex gap-2 mb-7 flex-wrap">
        <button
          onClick={() => setActive("All")}
          className={`font-mono text-xs px-4 py-2 rounded-full border transition-colors ${
            active === "All"
              ? "bg-accent text-[#1a1200] border-accent font-bold"
              : "border-border text-textSoft hover:border-accent hover:text-accent"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-mono text-xs px-4 py-2 rounded-full border transition-colors ${
              active === cat
                ? "bg-accent text-[#1a1200] border-accent font-bold"
                : "border-border text-textSoft hover:border-accent hover:text-accent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <RevealOnScroll>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-10">
          {visibleSkills.map(({ skill }) => (
            <div
              key={skill}
              className="bg-panel border border-border rounded-xl p-3 text-center hover:-translate-y-1 hover:border-accent hover:bg-panelSoft transition-all cursor-default"
            >
              <div className="w-9 h-9 mx-auto mb-2 rounded-full bg-accentDim flex items-center justify-center overflow-hidden p-1.5">
                {skillIcons[skill] ? (
                  iconColorOverride[skill] ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img
                        src={skillIcons[skill]}
                        alt={skill}
                        className="w-full h-full object-contain brightness-0 invert"
                      />
                      <div
                        className="absolute inset-0 mix-blend-multiply pointer-events-none"
                        style={{ backgroundColor: iconColorOverride[skill] }}
                      />
                    </div>
                  ) : (
                    <img src={skillIcons[skill]} alt={skill} className="w-full h-full object-contain" />
                  )
                ) : (
                  <span className="text-accent font-mono text-[10px] font-bold">
                    {skill.slice(0, 2).toUpperCase()}
                  </span>
                )}
              </div>
              <div className="text-[10.5px] text-textSoft">{skill}</div>
            </div>
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <div className="bg-panel border border-border rounded-2xl p-6">
          <div className="font-mono text-xs uppercase tracking-widest text-accent mb-5">Category Breakdown</div>
          <div className="space-y-5">
            {Object.entries(skills).map(([cat, list]) => {
              const max = Math.max(...Object.values(skills).map((l) => l.length));
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat as keyof typeof skills)}
                  className="w-full grid grid-cols-[140px_1fr_70px] items-center gap-4 group"
                >
                  <span
                    className={`text-sm text-left truncate transition-colors ${
                      isActive ? "text-accent font-semibold" : "text-textSoft group-hover:text-text"
                    }`}
                  >
                    {cat}
                  </span>
                  <div className="h-1.5 bg-panelSoft rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        isActive ? "bg-accent" : "bg-accent/60 group-hover:bg-accent"
                      }`}
                      style={{ width: `${(list.length / max) * 100}%` }}
                    />
                  </div>
                  <span className="font-mono text-xs text-textFaint text-right whitespace-nowrap">
                    {list.length} skills
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}