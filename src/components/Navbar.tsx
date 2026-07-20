import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "../hooks/useScrollSpy";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects-full", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(NAV.map((n) => n.id));

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-[200] hidden md:flex justify-center">
        <nav className="flex items-center gap-1 bg-panel/85 backdrop-blur-md border border-border rounded-full p-1.5">
          {NAV.map((n) => (
            <Link
              key={n.id}
              to={n.id}
              smooth
              duration={500}
              offset={-80}
              className={`relative text-sm px-4 py-2 rounded-full cursor-pointer transition-all duration-200 ease-out ${
                active === n.id
                  ? "bg-accent text-[#1a1200] font-semibold"
                  : "text-textSoft hover:text-text hover:bg-panelSoft"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </header>

      <header className="fixed top-0 right-0 z-[200] md:hidden p-4">
        <button
          onClick={() => setOpen(true)}
          className="w-9 h-9 rounded-full bg-accent text-[#1a1200] flex items-center justify-center"
        >
          <Menu size={18} />
        </button>
      </header>

      {open && (
        <div className="fixed inset-0 z-[199] bg-black/75 backdrop-blur-sm md:hidden" onClick={() => setOpen(false)}>
          <div className="w-[72vw] max-w-[300px] h-full bg-[#101010] border-l border-border p-6 pt-20 ml-auto flex flex-col gap-1">
            <button onClick={() => setOpen(false)} className="self-end mb-4"><X /></button>
            {NAV.map((n) => (
              <Link
                key={n.id}
                to={n.id}
                smooth
                duration={500}
                offset={-40}
                onClick={() => setOpen(false)}
                className="text-base py-3 border-b border-border text-textSoft cursor-pointer transition-colors duration-200 ease-out hover:text-accent"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}