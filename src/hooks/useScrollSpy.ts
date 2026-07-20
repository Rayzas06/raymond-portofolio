import { useEffect, useRef, useState } from "react";

export function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  const ratios = useRef<Record<string, number>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.current[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0;
        });

        // Pilih section dengan rasio kelihatan paling besar, sesuai urutan dokumen sebagai tie-breaker
        let bestId = active;
        let bestRatio = 0;
        for (const id of ids) {
          const r = ratios.current[id] || 0;
          if (r > bestRatio) {
            bestRatio = r;
            bestId = id;
          }
        }
        if (bestRatio > 0) setActive(bestId);
      },
      { threshold: [0, 0.15, 0.3, 0.5, 0.7, 1], rootMargin: "-80px 0px -40% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids]);

  return active;
}