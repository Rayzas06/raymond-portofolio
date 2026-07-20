import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(min-width:960px)").matches) return;
    const handler = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.left = e.clientX + "px";
        ref.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed hidden lg:block w-[480px] h-[480px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"
      style={{ background: "radial-gradient(circle, rgba(245,166,35,0.10), transparent 70%)" }}
    />
  );
}