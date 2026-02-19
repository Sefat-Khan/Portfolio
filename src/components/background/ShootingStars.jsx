import { useEffect, useRef } from "react";

export default function ShootingStars() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let stars = [];

    ctx.globalCompositeOperation = "lighter";

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const createStar = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * (canvas.height / 2), // Start in upper half
      length: Math.random() * 80 + 20,
      speed: Math.random() * 10 + 5,
      opacity: 1,
      // Angles it slightly downward and to the right
      vx: Math.random() * 4 + 4,
      vy: Math.random() * 2 + 2,
    });

    const animate = () => {
      // Create a slight fade effect by drawing a semi-transparent black rectangle
      // instead of clearRect (optional, but clearRect is cleaner for simple lines)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Randomly spawn stars
      if (Math.random() < 0.02) {
        stars.push(createStar());
      }

      stars.forEach((star, index) => {
        star.x += star.speed;
        star.y += (star.speed * star.vy) / star.vx;
        star.opacity -= 0.01; // Fade out over time

        if (
          star.opacity <= 0 ||
          star.x > canvas.width ||
          star.y > canvas.height
        ) {
          stars.splice(index, 1);
        }

        // Draw the shooting star trail
        const gradient = ctx.createLinearGradient(
          star.x,
          star.y,
          star.x - star.length,
          star.y - (star.length * star.vy) / star.vx,
        );

        // Premium cyan/blue gradient
        gradient.addColorStop(0, `rgba(124, 246, 255, ${star.opacity})`);
        gradient.addColorStop(1, "rgba(124, 246, 255, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(
          star.x - star.length,
          star.y - (star.length * star.vy) / star.vx,
        );
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}
