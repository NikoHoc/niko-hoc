import { useEffect, useState } from "react";

const Spotlight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Fungsi untuk melacak koordinat X dan Y dari mouse
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Memasang event listener ke seluruh layar (window)
    window.addEventListener("mousemove", updateMousePosition);

    // Membersihkan event listener saat komponen tidak dipakai
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        // Radial gradient ini membentuk lingkaran cahaya biru terang yang berpusat di posisi mouse
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
};

export default Spotlight;