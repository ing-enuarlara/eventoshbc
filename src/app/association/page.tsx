"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

interface Brand {
  scbl_id: number;
  scbl_nombre: string;
  scbl_web: string;
  scbl_direccion: string;
  scbl_imagen: string;
}

export default function MarcasPage() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await fetch('./api/getAssociations');
        if (!res.ok) throw new Error("Error al obtener las asociaciones");
        const data = await res.json();
        setBrands(data.rows);
      } catch (error: unknown) {
        setError(error instanceof Error ? error.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <div
          className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url('./assets/images/escenario.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="container mx-auto px-4 z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-anton text-white mb-6">
              ASOCIACIONES
            </h1>
          </div>
        </div>

        {/* Brand Grid */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center">
              {
                loading ? (
                  <p className="text-center text-gray-500">Cargando asociaciones...</p>
                ) : error ? (
                  <p className="text-center text-red-500">{error}</p>
                ) : ( brands.map((brand) => (
                  <a
                    href={brand.scbl_web}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={brand.scbl_id}
                  >
                    <div
                      key={brand.scbl_id}
                      className="flex items-center justify-center p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition duration-300"
                    >
                      <Image
                        src={brand.scbl_imagen}
                        alt={brand.scbl_nombre}
                        width={200}
                        height={100}
                        className="object-contain"
                      />
                    </div>
                  </a>
                )))
              }
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
