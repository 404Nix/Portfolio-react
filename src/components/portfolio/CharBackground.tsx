import React, { useEffect, useRef, useMemo } from 'react';
import { prepareWithSegments, layoutWithLines, type PreparedTextWithSegments } from '@chenglou/pretext';
import { useScroll, useTransform, motion } from 'framer-motion';

interface CharObject {
  x: number;
  y: number;
  vx: number;
  vy: number;
  text: string;
  prepared: PreparedTextWithSegments;
  width: number;
  height: number;
  opacity: number;
  size: number;
}

const KEYWORDS = ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST API", "CRUD Operations", "Authentication", "Socket.IO", "Java", "JavaScript", "SQL", "Python", "React.js", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", "Redux Toolkit", "Responsive UI", "Form Handling", "MongoDB", "MySQL", "Git & GitHub", "Jira", "Postman", "VS Code"];
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[];:!@#$%^&*()_+=-".split("");
const FONT_FAMILY = "'Space Grotesk', 'Fira Code', monospace";

export const CharBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const { scrollY } = useScroll();
  
  // Fade out as we reach the about section (roughly 100vh)
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;


    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: CharObject[] = [];
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 60 : 150;



    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    // Track mouse/pointer position relative to viewport
    const handlePointerMove = (e: PointerEvent | MouseEvent | TouchEvent) => {
      if (e instanceof MouseEvent || e instanceof PointerEvent) {
        mouseRef.current = { x: e.clientX, y: e.clientY };
      } else if (e instanceof TouchEvent && e.touches.length > 0) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    
    const handlePointerReset = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerReset);
    window.addEventListener('pointercancel', handlePointerReset);
    window.addEventListener('pointerleave', handlePointerReset);



    const createParticle = (): CharObject => {

      const isKeyword = Math.random() > 0.8;
      const text = isKeyword 
        ? KEYWORDS[Math.floor(Math.random() * KEYWORDS.length)]
        : CHARS[Math.floor(Math.random() * CHARS.length)];
      
      const fontSize = isKeyword ? 14 + Math.random() * 6 : 10 + Math.random() * 4;
      const font = `${fontSize}px ${FONT_FAMILY}`;
      
      // Use Pretext for high-performance measurement
      const prepared = prepareWithSegments(text, font);
      const layoutData = layoutWithLines(prepared, Infinity, fontSize * 1.2);
      
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: 0.5 + Math.random() * 1.0,

        text,
        prepared,
        width: layoutData.lines[0]?.width || 0,
        height: layoutData.height,
        opacity: 0.05 + Math.random() * 0.2,

        size: fontSize
      };
    };

    // Initial particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const mouse = mouseRef.current;
      const scroll = window.scrollY;
      const repulsionRadius = 150;

      particles.forEach(p => {
        // Apply gravity/velocity
        p.y += p.vy;
        p.x += p.vx;

        // Interaction coordinates (convert canvas space to viewport space)
        const particleViewportY = p.y - scroll;
        const dx = p.x - mouse.x;
        const dy = particleViewportY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < repulsionRadius) {
          const force = (repulsionRadius - dist) / repulsionRadius;
          // Apply repulsion in canvas space
          p.x += (dx / dist) * force * 8;
          p.y += (dy / dist) * force * 8;
        }


        // Wrap around
        if (p.y > canvas.height) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }
        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;

        // Draw character
        ctx.font = `${p.size}px ${FONT_FAMILY}`;
        ctx.fillStyle = `rgba(0, 255, 255, ${p.opacity})`;
        ctx.fillText(p.text, p.x, p.y);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerReset);
      window.removeEventListener('pointercancel', handlePointerReset);
      window.removeEventListener('pointerleave', handlePointerReset);
      cancelAnimationFrame(animationFrameId);
    };


  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      style={{ opacity }}
      className="absolute inset-0 pointer-events-none z-10"
    />
  );
};

