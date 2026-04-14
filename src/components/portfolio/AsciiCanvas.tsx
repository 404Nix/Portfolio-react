import { useEffect, useRef, useCallback } from 'react';

const CODE_CHARS = '{}();<>=/*+-_|\\[]#@&%$!?~^:.';

interface Particle {
    x: number;
    y: number;
    originX: number;
    originY: number;
    char: string;
    originalChar: string;
    brightness: number;
    vx: number;
    vy: number;
}

interface AsciiCanvasProps {
    text?: string;
    imageSrc?: string;
    width?: number;
    height?: number;
    fontSize?: number;
    disturbRadius?: number;
    disturbStrength?: number;
}

const AsciiCanvas = ({
    text,
    imageSrc,
    width = 500,
    height = 600,
    fontSize = 10,
    disturbRadius = 100,
    disturbStrength = 40,
}: AsciiCanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: -9999, y: -9999 });
    const animFrameRef = useRef<number>(0);

    const resetMouse = useCallback(() => {
        mouseRef.current = { x: -9999, y: -9999 };
    }, []);

    const updatePointerPosition = useCallback(
        (clientX: number, clientY: number) => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            const isInside =
                clientX >= rect.left && clientX <= rect.right &&
                clientY >= rect.top && clientY <= rect.bottom;
            if (!isInside) { resetMouse(); return; }
            const scaleX = width / rect.width;
            const scaleY = height / rect.height;
            mouseRef.current = {
                x: (clientX - rect.left) * scaleX,
                y: (clientY - rect.top) * scaleY,
            };
        },
        [height, resetMouse, width]
    );

    const initFromSource = useCallback((source: HTMLCanvasElement) => {
        const offCtx = source.getContext('2d')!;
        const imageData = offCtx.getImageData(0, 0, width, height);
        const pixels = imageData.data;
        const particles: Particle[] = [];
        const gap = fontSize;

        for (let y = 0; y < height; y += gap) {
            for (let x = 0; x < width; x += gap) {
                const i = (y * width + x) * 4;
                const r = pixels[i], g = pixels[i + 1], b = pixels[i + 2];
                const brightness = (r + g + b) / 3 / 255;
                if (brightness > 0.08) {
                    const charIndex = Math.floor(brightness * (CODE_CHARS.length - 1));
                    const originalChar = CODE_CHARS[charIndex];
                    particles.push({
                        x, y, originX: x, originY: y,
                        char: originalChar, originalChar, brightness,
                        vx: 0, vy: 0,
                    });
                }
            }
        }
        particlesRef.current = particles;
    }, [width, height, fontSize]);

    const renderText = useCallback((txt: string) => {
        const offscreen = document.createElement('canvas');
        offscreen.width = width;
        offscreen.height = height;
        const ctx = offscreen.getContext('2d')!;

        ctx.fillStyle = '#000000ff';
        ctx.fillRect(0, 0, width, height);

        // Render text large and centered
        const txtFontSize = Math.min(width / (txt.length * 0.6), height * 0.7);
        ctx.font = `900 ${txtFontSize}px "JetBrains Mono", monospace`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#fff';
        ctx.fillText(txt, width / 2, height / 2);

        initFromSource(offscreen);
    }, [width, height, initFromSource]);

    const renderImage = useCallback((img: HTMLImageElement) => {
        const offscreen = document.createElement('canvas');
        offscreen.width = width;
        offscreen.height = height;
        const ctx = offscreen.getContext('2d')!;
        const scale = Math.max(width / img.width, height / img.height);
        const sw = img.width * scale;
        const sh = img.height * scale;
        ctx.drawImage(img, (width - sw) / 2, (height - sh) / 2, sw, sh);
        initFromSource(offscreen);
    }, [width, height, initFromSource]);

    const animate = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d')!;
        ctx.clearRect(0, 0, width, height);
        ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';

        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        const particles = particlesRef.current;
        const r2 = disturbRadius * disturbRadius;

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            const dx = p.originX - mx;
            const dy = p.originY - my;
            const dist2 = dx * dx + dy * dy;

            if (dist2 < r2) {
                const dist = Math.sqrt(dist2);
                const force = (1 - dist / disturbRadius) * disturbStrength;
                const angle = Math.atan2(dy, dx);
                const targetX = p.originX + Math.cos(angle) * force;
                const targetY = p.originY + Math.sin(angle) * force;
                p.vx += (targetX - p.x) * 0.15;
                p.vy += (targetY - p.y) * 0.15;
                if (force > 5) {
                    p.char = CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
                }
            } else {
                p.vx += (p.originX - p.x) * 0.08;
                p.vy += (p.originY - p.y) * 0.08;
                if (p.char !== p.originalChar && Math.abs(p.x - p.originX) + Math.abs(p.y - p.originY) < 1.5) {
                    p.char = p.originalChar;
                }
            }

            p.vx *= 0.85;
            p.vy *= 0.85;
            p.x += p.vx;
            p.y += p.vy;

            const b = p.brightness;
            const hue = 220 + b * 40;
            const sat = 70 + b * 30;
            const light = 30 + b * 50;
            ctx.fillStyle = `hsla(${hue}, ${sat}%, ${light}%, ${0.3 + b * 0.7})`;
            ctx.fillText(p.char, p.x, p.y);
        }

        animFrameRef.current = requestAnimationFrame(animate);
    }, [width, height, fontSize, disturbRadius, disturbStrength]);

    useEffect(() => {
        if (text) {
            renderText(text);
            animate();
        } else if (imageSrc) {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = () => { renderImage(img); animate(); };
            img.src = imageSrc;
        }
        return () => { cancelAnimationFrame(animFrameRef.current); };
    }, [text, imageSrc, renderText, renderImage, animate]);

    useEffect(() => {
        const handlePointerMove = (event: PointerEvent) => {
            updatePointerPosition(event.clientX, event.clientY);
        };
        window.addEventListener('pointermove', handlePointerMove, { passive: true });
        window.addEventListener('blur', resetMouse);
        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('blur', resetMouse);
        };
    }, [resetMouse, updatePointerPosition]);

    return (
        <canvas
            ref={canvasRef}
            width={width}
            height={height}
            onPointerMove={(e) => updatePointerPosition(e.clientX, e.clientY)}
            onPointerLeave={resetMouse}
            className="cursor-crosshair select-none"
            style={{ width, height, display: 'block' }}
        />
    );
};

export default AsciiCanvas;