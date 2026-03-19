import { useEffect, useRef } from 'react';
import profileImg from '../assets/profile_cutout.png';

const AnimatedPortrait = ({ width = 288, height = 320 }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = profileImg;

    img.onload = () => {
      const offscreen = document.createElement('canvas');
      offscreen.width = width;
      offscreen.height = height;
      const offCtx = offscreen.getContext('2d');

      // Cover-fit
      const imgAspect = img.width / img.height;
      const canvasAspect = width / height;
      let sx, sy, sw, sh;
      if (imgAspect > canvasAspect) {
        sh = img.height;
        sw = img.height * canvasAspect;
        sx = (img.width - sw) / 2;
        sy = 0;
      } else {
        sw = img.width;
        sh = img.width / canvasAspect;
        sx = 0;
        sy = (img.height - sh) / 2;
      }

      offCtx.drawImage(img, sx, sy, sw, sh, 0, 0, width, height);
      const imageData = offCtx.getImageData(0, 0, width, height);
      const pixels = imageData.data;

      // Convert to grayscale
      const gray = new Float32Array(width * height);
      for (let i = 0; i < width * height; i++) {
        const r = pixels[i * 4];
        const g = pixels[i * 4 + 1];
        const b = pixels[i * 4 + 2];
        gray[i] = r * 0.299 + g * 0.587 + b * 0.114;
      }

      // Sobel edge detection
      const edges = new Float32Array(width * height);
      for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
          const tl = gray[(y - 1) * width + (x - 1)];
          const t  = gray[(y - 1) * width + x];
          const tr = gray[(y - 1) * width + (x + 1)];
          const l  = gray[y * width + (x - 1)];
          const r  = gray[y * width + (x + 1)];
          const bl = gray[(y + 1) * width + (x - 1)];
          const bm = gray[(y + 1) * width + x];
          const br = gray[(y + 1) * width + (x + 1)];

          const gx = -tl + tr - 2 * l + 2 * r - bl + br;
          const gy = -tl - 2 * t - tr + bl + 2 * bm + br;
          edges[y * width + x] = Math.sqrt(gx * gx + gy * gy);
        }
      }

      // Normalize edges
      let maxEdge = 0;
      for (let i = 0; i < edges.length; i++) {
        if (edges[i] > maxEdge) maxEdge = edges[i];
      }
      if (maxEdge > 0) {
        for (let i = 0; i < edges.length; i++) {
          edges[i] /= maxEdge;
        }
      }

      // Build scanline dashes only where edges are strong
      const lineGap = 4;
      const edgeThreshold = 0.12;
      const dashes = [];

      for (let y = 2; y < height - 2; y += lineGap) {
        let x = 2;
        while (x < width - 2) {
          const edgeVal = edges[y * width + x];

          if (edgeVal > edgeThreshold) {
            // Find the run length
            let endX = x + 1;
            while (endX < width - 2 && endX - x < 20) {
              const eVal = edges[y * width + endX];
              // Continue if there's edge nearby (within tolerance)
              if (eVal > edgeThreshold * 0.5) {
                endX++;
              } else {
                break;
              }
            }

            const len = endX - x;
            if (len >= 2) {
              // Stronger edges = more opaque
              const strength = Math.min(edgeVal * 2, 1);
              dashes.push({
                x,
                y,
                len: Math.max(len, 4),
                opacity: 0.25 + strength * 0.65,
                // Stagger delay based on row position (top rows appear first)
                delay: (y / height) * 1.5,
              });
            }
            x = endX + 1;
          } else {
            x++;
          }
        }
      }

      let time = 0;
      const introDuration = 2.0; // seconds for the slide-in

      const draw = () => {
        time += 0.016; // ~60fps
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < dashes.length; i++) {
          const d = dashes[i];

          // Intro slide-in progress (0 to 1) per dash
          const introProgress = Math.min(Math.max((time - d.delay) / 0.8, 0), 1);
          // Ease out cubic for smooth deceleration
          const eased = 1 - Math.pow(1 - introProgress, 3);

          if (eased <= 0) continue; // Not visible yet

          // During intro: slide from left (-width) to final position
          const slideOffset = (1 - eased) * (-width * 0.6);
          // Fade in during slide
          const introAlpha = eased;

          // Post-intro breathing animation (only starts after intro)
          const postIntroTime = Math.max(time - introDuration, 0);
          const wave = postIntroTime > 0
            ? Math.sin(postIntroTime * 1.3 + d.y * 0.04 + d.x * 0.01) * 1.8
            : 0;
          const breath = postIntroTime > 0
            ? 0.85 + Math.sin(postIntroTime * 1.6 + d.y * 0.05 + i * 0.15) * 0.15
            : 1;

          const dx = d.x + slideOffset + wave;
          const alpha = d.opacity * breath * introAlpha;

          ctx.beginPath();
          ctx.moveTo(dx, d.y);
          ctx.lineTo(dx + d.len, d.y);
          ctx.strokeStyle = `rgba(212, 165, 116, ${alpha})`;
          ctx.lineWidth = 2;
          ctx.lineCap = 'round';
          ctx.stroke();
        }

        animationRef.current = requestAnimationFrame(draw);
      };

      draw();
    };

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width, height }}
      className="rounded-lg"
    />
  );
};

export default AnimatedPortrait;
