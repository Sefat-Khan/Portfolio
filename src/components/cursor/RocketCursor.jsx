import { useEffect, useRef } from "react";

export default function RocketCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const loop = () => {
      dotPos.current.x += (mouse.current.x - dotPos.current.x) * 0.2;
      dotPos.current.y += (mouse.current.y - dotPos.current.y) * 0.2;

      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.1;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.1;

      if (dotRef.current && ringRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px)`;
        ringRef.current.style.transform = `translate(${ringPos.current.x - 12}px, ${ringPos.current.y - 12}px)`;
      }

      requestAnimationFrame(loop);
    };

    const rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-9999 bg-cyan-400 shadow-[0_0_15px_#22d3ee,0_0_30px_#22d3ee]"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-9998 border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-[2px]"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
