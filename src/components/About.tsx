import { education, experience, profile } from "../data/portfolio";
import RevealOnScroll from "./RevealOnScroll";

export default function About() {
  return (
    <section id="about" className="max-w-wrap mx-auto px-6 py-24 border-b border-border">
      <div className="font-mono text-xs uppercase tracking-widest text-accent mb-2">Who I Am</div>
      <h2 className="text-3xl font-extrabold mb-8">About Me</h2>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <RevealOnScroll>
          <div className="bg-panel border border-border rounded-2xl p-6 h-full">
            <p className="text-textSoft text-sm mb-3">
              I build systems that connect — from event-driven microservices and mobile apps to real front-end interfaces.
            </p>
            <p className="text-textSoft text-sm">
              I'm currently an <strong className="text-text">Information Systems student</strong> maintaining a{" "}
              <strong className="text-text">{profile.gpa} GPA</strong>, and a{" "}
              <strong className="text-text">Graphic Design member at KSM Multimedia</strong>, which keeps my
              interface instincts sharp alongside my backend work.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="bg-panel border border-border rounded-2xl p-6 h-full">
            <div className="font-mono text-xs uppercase tracking-widest text-accent mb-4">Education</div>

            <div className="flex gap-3 mb-5">
              <div className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
              <div>
                <div className="font-bold text-sm">{education.school}</div>
                <div className="font-mono text-xs text-accent my-1">{education.period}</div>
                <div className="text-sm text-textSoft">{education.degree}. Cumulative GPA {education.gpa}.</div>
              </div>
            </div>
            {experience.map((e) => (
              <div key={e.title} className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                <div>
                  <div className="font-bold text-sm">{e.title}</div>
                  <div className="font-mono text-xs text-accent my-1">{e.period}</div>
                  <div className="text-sm text-textSoft">{e.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>

      <RevealOnScroll>
        <div className="bg-panel border border-border rounded-2xl p-6">
          <div className="font-mono text-xs uppercase tracking-widest text-accent mb-3">GitHub Activity</div>
          <img
            src="https://ghchart.rshah.org/f5a623/Rayzas06"
            alt="GitHub contribution chart"
            loading="lazy"
            className="w-full rounded-lg"
          />
          <div className="font-mono text-[11px] text-textFaint mt-2">Live contribution graph for github.com/Rayzas06</div>
        </div>
      </RevealOnScroll>
    </section>
  );
}