import { useEffect, useRef } from "react";

export default function UnifiedSpaceCanvas() {
  const canvasRef = useRef(null);

  const mx = useRef(0);
  const my = useRef(0);
  const curX = useRef(0);
  const curY = useRef(0);
  const wRef = useRef(0);
  const hRef = useRef(0);
  const rafId = useRef(null);

  const planetAssets = {
    Mars: "/assets/planets/mars.png",
    Earth: "/assets/planets/earth.png",
    Jupiter: "/assets/planets/jupiter.png",
    Saturn: "/assets/planets/saturn.png",
    Uranus: "/assets/planets/uranus.png",
    Neptune: "/assets/planets/neptune.png",
  };

  const basePlanetSizes = {
    Mars: 30,
    Earth: 34,
    Jupiter: 68,
    Saturn: 62,
    Uranus: 45,
    Neptune: 44,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let stars = [];
    let planets = [];
    let shootingStars = [];
    const loadedImages = {};

    const isMobile =
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
      window.innerWidth < 768;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const starColors = ["#ffffff", "#ffe9c4", "#d4fbff", "#ffd5d5", "#fff4bd"];
    const shootingStarColors = ["#00f2ff", "#ff00ea", "#ffffff", "#ffd700"];

    /* ------------ helpers ------------ */

    const resizeCanvas = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      wRef.current = w;
      hRef.current = h;

      canvas.width = w * DPR;
      canvas.height = h * DPR;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    const randomPos = (r) => ({
      x: Math.random() * (wRef.current - r * 4) + r * 2,
      y: Math.random() * (hRef.current - r * 4) + r * 2,
    });

    const loadImages = () =>
      Promise.all(
        Object.entries(planetAssets).map(([name, src]) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
              loadedImages[name] = img;
              resolve();
            };
          });
        }),
      );

    const createShootingStar = () => ({
      x: Math.random() * wRef.current,
      y: Math.random() * (hRef.current * 0.5),
      len: Math.random() * 100 + 80,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 14 + 10,
      color:
        shootingStarColors[
          Math.floor(Math.random() * shootingStarColors.length)
        ],
      opacity: 1,
    });

    /* ------------ init ------------ */

    const init = async () => {
      resizeCanvas();
      await loadImages();

      const starCount = isMobile ? 300 : 900;

      stars = Array.from({ length: starCount }, () => ({
        x: Math.random() * wRef.current,
        y: Math.random() * hRef.current,
        r: Math.random() * 1.3 + 0.3,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        speed: Math.random() * 0.03 + 0.01,
        parallax: Math.random() * 1.5 + 0.4,
        opacity: Math.random(),
        twinkle: Math.random() * 0.01 + 0.003,
      }));

      const planetScale = isMobile ? 0.65 : 1;

      planets = Object.keys(planetAssets).map((name) => {
        const r = basePlanetSizes[name] * planetScale;
        const pos = randomPos(r);

        return {
          name,
          r,
          baseX: pos.x,
          baseY: pos.y,
          pMult: isMobile ? 0.08 : Math.random() * 0.25 + 0.1,
          glow:
            name === "Earth"
              ? "#2b82c9"
              : name === "Mars"
                ? "#ff4d4d"
                : name === "Jupiter"
                  ? "#e3bb76"
                  : name === "Saturn"
                    ? "#f4e4bc"
                    : name === "Uranus"
                      ? "#b2ffff"
                      : "#4b70dd",
          floatSpeed: Math.random() * 0.002 + 0.001,
          floatPhase: Math.random() * Math.PI * 2,
        };
      });
    };

    /* ------------ draw ------------ */

    const draw = () => {
      ctx.clearRect(0, 0, wRef.current, hRef.current);

      curX.current += (mx.current - curX.current) * 0.05;
      curY.current += (my.current - curY.current) * 0.05;

      stars.forEach((s) => {
        s.y -= s.speed;
        if (s.y < 0) s.y = hRef.current;

        s.opacity += s.twinkle;
        if (s.opacity > 1 || s.opacity < 0.2) s.twinkle *= -1;

        ctx.beginPath();
        ctx.arc(
          s.x + curX.current * s.parallax,
          s.y + curY.current * s.parallax,
          s.r,
          0,
          Math.PI * 2,
        );
        ctx.fillStyle =
          s.color +
          Math.floor(s.opacity * 255)
            .toString(16)
            .padStart(2, "0");
        ctx.fill();
      });

      planets.forEach((p) => {
        const img = loadedImages[p.name];
        if (!img) return;

        p.floatPhase += p.floatSpeed;

        const px =
          p.baseX + Math.sin(p.floatPhase) * 10 + curX.current * p.pMult;
        const py =
          p.baseY + Math.cos(p.floatPhase) * 10 + curY.current * p.pMult;

        ctx.save();
        ctx.shadowBlur = 18;
        ctx.shadowColor = p.glow;
        ctx.drawImage(img, px - p.r, py - p.r, p.r * 2, p.r * 2);
        ctx.restore();
      });

      if (!isMobile && Math.random() < 0.02)
        shootingStars.push(createShootingStar());

      shootingStars.forEach((s, i) => {
        s.x += s.speed;
        s.y += s.speed * 0.5;
        s.opacity -= 0.02;
        if (s.opacity <= 0) shootingStars.splice(i, 1);

        const g = ctx.createLinearGradient(
          s.x,
          s.y,
          s.x - s.len,
          s.y - s.len * 0.5,
        );
        g.addColorStop(0, s.color);
        g.addColorStop(1, "transparent");

        ctx.strokeStyle = g;
        ctx.lineWidth = s.size;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.len, s.y - s.len * 0.5);
        ctx.stroke();
      });

      rafId.current = requestAnimationFrame(draw);
    };

    init().then(draw);

    /* ------------ input ------------ */

    const handlePointerMove = (x, y) => {
      mx.current = (x / wRef.current - 0.5) * 80;
      my.current = (y / hRef.current - 0.5) * 80;
    };

    const onMouseMove = (e) => handlePointerMove(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      if (!e.touches[0]) return;
      handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("resize", init);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
  );
}
