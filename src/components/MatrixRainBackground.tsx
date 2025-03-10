import { useEffect, useRef } from "react";

const MatrixRainBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      let width = (canvas.width = window.innerWidth);
      let height = (canvas.height = window.innerHeight);
      let columns = Math.floor(width / 20);
      const characters = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890";
      const charArray = characters.split("");
      let drops: Array<number> = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = 1;
      }
      const frameRate = 25;
      let lastFrameTime = Date.now();

      const draw = () => {
        if (ctx) {
          ctx.fillStyle = "rgba(100,67,206, 0.04)";
          ctx.fillRect(0, 0, width + 100, height + 100);
          ctx.fillStyle = "#191970";
          ctx.font = "15px monospace";
        }

        for (let i = 0; i < drops.length; i++) {
          const text = charArray[Math.floor(Math.random() * charArray.length)];
          ctx?.fillText(text, i * 20, drops[i] * 20);

          if (drops[i] * 20 > height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      };

      const animate = () => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - lastFrameTime;
        if (elapsedTime > 1000 / frameRate) {
          draw();
          lastFrameTime = currentTime;
        }

        requestAnimationFrame(animate);
      };

      animate();

      const handleResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        columns = Math.floor(width / 20);
        drops = [];
        for (let i = 0; i < columns; i++) {
          drops[i] = 1;
        }
      };

      const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);

      if (!isMobileDevice) {
        window.addEventListener("resize", handleResize);
      }

      return () => {
        if (!isMobileDevice) {
          window.addEventListener("resize", handleResize);
        }
      };
    }
  });
  return (
    <div className="absolute inset-0">
      <canvas className="fixed top-0 left-0 z-[-1]" ref={canvasRef}></canvas>
    </div>
  );
};

export default MatrixRainBackground;
