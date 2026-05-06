"use client";

import { useRef } from "react";

export default function TiltCard({ children }) {
    const ref = useRef(null);

    const handleMouseMove = (e) => {
        const card = ref.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const midX = rect.width / 2;
        const midY = rect.height / 2;

        const rotateX = ((y - midY) / midY) * -10;
        const rotateY = ((x - midX) / midX) * 10;

        card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
    };

    const handleMouseLeave = () => {
        if (!ref.current) return;

        ref.current.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="transition-transform duration-200 ease-out will-change-transform"
        >
            {children}
        </div>
    );
}