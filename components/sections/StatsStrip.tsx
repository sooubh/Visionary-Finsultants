"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  label: string;
  target: number;
  hasPlus: boolean;
};

const stats: Stat[] = [
  { label: "Families Served", target: 315, hasPlus: true },
  { label: "Cities", target: 45, hasPlus: true },
  { label: "States", target: 12, hasPlus: false },
  { label: "Countries", target: 7, hasPlus: true },
];

export default function StatsStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [values, setValues] = useState<number[]>(() => stats.map(() => 0));

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || hasStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 1500;
    const start = performance.now();
    const targets = stats.map((stat) => stat.target);
    let rafId: number | undefined;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);

      if (progress >= 1) {
        setValues((previousValues) => {
          const changed = targets.some(
            (target, index) => target !== previousValues[index]
          );
          return changed ? targets : previousValues;
        });
        return;
      }

      setValues((previousValues) => {
        const nextValues = targets.map((target) =>
          Math.floor(target * progress)
        );

        const changed = nextValues.some(
          (nextValue, index) => nextValue !== previousValues[index]
        );

        return changed ? nextValues : previousValues;
      });

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      if (rafId !== undefined) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [hasStarted]);

  return (
    <section
      ref={sectionRef}
      className="bg-charcoal px-6 py-12 md:px-16 lg:px-24"
      aria-label="Visionary Finsultants statistics"
    >
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, index) => {
          const isComplete = values[index] === stat.target;
          const displayValue =
            isComplete && stat.hasPlus
              ? `${values[index]}+`
              : String(values[index]);

          return (
            <div
              key={stat.label}
              className={`py-4 text-center ${
                index < stats.length - 1 ? "md:border-r md:border-gray-700" : ""
              }`}
            >
              <p className="font-mono text-4xl font-bold text-gold md:text-5xl">
                {displayValue}
              </p>
              <p className="mt-2 font-body text-sm uppercase tracking-wider text-gray-400">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
