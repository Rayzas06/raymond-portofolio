import RevealOnScroll from "./RevealOnScroll";

const stats = [
  { num: "3", label: "Projects Shipped" },
  { num: "3.86", label: "GPA / 4.00" },
  { num: "12+", label: "REST API Endpoints" },
  { num: "6", label: "Max Team Size" },
];

export default function Stats() {
  return (
    <div className="max-w-wrap mx-auto px-6 mt-12 mb-10">
      <RevealOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-panel border border-border rounded-2xl p-5 text-center hover:-translate-y-1 hover:border-accent transition-all"
            >
              <div className="font-mono text-3xl font-bold text-accent">{s.num}</div>
              <div className="text-xs text-textSoft mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </div>
  );
}