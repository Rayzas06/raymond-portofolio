import ProfileCard from "./ProfileCard";
import { Download, Circle, ChevronDown } from "lucide-react";
import { skills, skillIcons } from "../data/portfolio";

export default function Hero() {
  const topStack = ["React", "TypeScript", "PHP", "Kotlin", "Node.js", "Supabase"];

  return (
    <section id="home" className="relative pt-32 lg:pt-36 pb-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute top-10 right-[10%] w-[420px] h-[420px] rounded-full blur-[120px] opacity-20"
          style={{ background: "radial-gradient(circle, #f5a623, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-[15%] w-[320px] h-[320px] rounded-full blur-[100px] opacity-10"
          style={{ background: "radial-gradient(circle, #f5a623, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#f2f2f2 1px, transparent 1px), linear-gradient(90deg, #f2f2f2 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="grid lg:grid-cols-[300px_1fr] xl:grid-cols-[300px_1fr_300px] gap-8 items-start max-w-[1400px] mx-auto px-6">
        <ProfileCard />

        <div>
          <div className="font-mono text-accent text-sm mb-3 tracking-wide">Hi, I'm Raymond 😎</div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.12] tracking-tight mb-4">
            Software Engineer  &<br /> Informatics Student
          </h1>
          <p className="text-textSoft max-w-xl mb-6 text-sm md:text-base leading-relaxed">
            I build systems that connect — event-driven microservices, mobile apps, and real front-end
            interfaces. Currently maintaining a <b className="text-accent">3.86 GPA</b> while shipping
            full-stack projects.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {topStack.map((s) => (
              <span
                key={s}
                className="font-mono text-[11px] text-textSoft bg-panel border border-border px-4 py-2 rounded-full transition-colors duration-200 ease-out hover:border-accent/50 hover:bg-panelSoft hover:text-text"
              >
                {s}
              </span>
            ))}
          </div>

          {/* Perbaikan di sini: Menambahkan tag pembuka <a */}
          <a
            href="/CV_RaymondDivianNathaniel.pdf"
            download
            className="inline-flex items-center gap-2 font-mono text-sm px-6 py-3 rounded-lg bg-accent text-[#1a1200] font-bold shadow-lg hover:-translate-y-0.5 transition-transform duration-200 ease-out mb-16"
          >
            <Download size={16} /> Download CV
          </a>

          <div className="border-l-2 border-accent/40 pl-4 max-w-md mb-8">
            <p className="font-mono text-xs text-textFaint italic leading-relaxed">
              "Building systems isn't just about making things work — it's about making them work
              together."
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            {["React", "TypeScript", "PHP", "Kotlin", "Node.js", "MySQL", "Supabase"].map((s) =>
              skillIcons[s] ? (
                <div
                  key={s}
                  title={s}
                  className="w-8 h-8 rounded-lg bg-panel border border-border flex items-center justify-center p-1.5 opacity-70 hover:opacity-100 hover:border-accent/50 transition-all duration-200 ease-out"
                >
                  <img src={skillIcons[s]} alt={s} className="w-full h-full object-contain" />
                </div>
              ) : null
            )}
          </div>
        </div>

        <div className="hidden xl:block sticky top-28 space-y-4">
          <div className="bg-panel border border-border rounded-xl2 overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-panelSoft">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="font-mono text-[10px] text-textFaint ml-2">status.ts</span>
            </div>
            <div className="p-4 font-mono text-xs leading-relaxed text-textSoft">
              <div>
                <span className="text-accent">const</span> <span className="text-text">status</span> = &#123;
              </div>
              <div className="pl-4">
                available: <span className="text-green">true</span>,
              </div>
              <div className="pl-4">
                role: <span className="text-accent">'Full-Stack Dev'</span>,
              </div>
              <div className="pl-4">
                location: <span className="text-accent">'Jakarta'</span>,
              </div>
              <div className="pl-4">
                focus: <span className="text-accent">'Web, Mobile, API'</span>,
              </div>
              <div>&#125;;</div>
            </div>
          </div>

          <div className="bg-panel border border-border rounded-xl2 p-4">
            <div className="flex items-center gap-2 mb-3">
              <Circle size={8} className="fill-green text-green" />
              <span className="font-mono text-[11px] text-textSoft">Open to internships & collabs</span>
            </div>
            <div className="text-[11px] text-textFaint leading-relaxed">
              {skills.Languages.length + skills["Database & Cloud"].length}+ technologies across web,
              mobile, and backend systems.
            </div>
          </div>

          <div className="bg-panel border border-border rounded-xl2 p-4">
            <div className="font-mono text-[10px] uppercase tracking-widest text-textFaint mb-3">
              Currently building
            </div>
            <div className="text-sm text-text font-semibold mb-1">BlessingKost</div>
            <div className="text-[11px] text-textSoft leading-relaxed">
              Boarding house management system — React + Supabase.
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex justify-center mt-16">
        <div className="flex flex-col items-center gap-2 text-textFaint animate-bounce">
          <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown size={16} />
        </div>
      </div>
    </section>
  );
}