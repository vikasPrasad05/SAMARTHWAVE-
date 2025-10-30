"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

const serviceImages = {
  "Cleaning Services": [
    "/cleaning/cleaning1.jpeg",
    "/cleaning/cleaning2.jpeg",
    "/cleaning/cleaning3.jpeg",
    "/cleaning/cleaning4.jpeg",
    "/cleaning/cleaning5.jpeg",
  ],
//   "Pantry Services": ["/services/pantry1.jpg", "/services/pantry2.jpg"],
//   "Technical Services": ["/services/tech1.jpg", "/services/tech2.jpg"],
//   "Carpet Cleaning": ["/services/carpet1.jpg", "/services/carpet2.jpg"],
//   "Manpower Supply": ["/services/man1.jpg", "/services/man2.jpg"],
};

export default function ServiceDetailPage() {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);
  const images = serviceImages[decodedTitle] || [];
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-24 md:py-28">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="group relative inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold shadow-md hover:shadow-lg hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 ease-in-out cursor-pointer"
        >
          <ArrowLeft
            size={20}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          <span className="text-center"></span>
        </button>

        {/* Heading */}
        <h1 className="text-2xl md:text-5xl font-bold mb-10 text-center text-gray-800 capitalize">
          {decodedTitle}
        </h1>

        {/* Images Grid */}
        {images.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((src, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={src}
                  alt={`${decodedTitle} image ${i + 1}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-10">
            No images available for this service 😅
          </p>
        )}
      </div>
    </div>
  );
}
