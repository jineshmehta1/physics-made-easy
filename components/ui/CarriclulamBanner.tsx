import React from "react";
import {
  PlanetIcon,
  PaperPlaneIcon,
  StarIcon,
  NotebookIcon,
  RocketIcon,
} from "./BannerIcon";

const Curriculum: React.FC = () => {
  return (
    <div className="relative w-full bg-[#F3F0FF] overflow-hidden pt-20 pb-0">
      {/* --- Background Decorative Elements --- */}

      {/* Small blue dot on the far left */}
      <div className="absolute top-20 left-4 w-3 h-3 bg-blue-600 rounded-full opacity-80"></div>

      {/* Planet Icon (Top Left) */}
      <div className="absolute top-12 left-10 md:left-24 opacity-40 transform -rotate-12 pointer-events-none">
        <PlanetIcon className="w-16 h-16 md:w-24 md:h-24 text-purple-400" />
      </div>

      {/* Paper Plane (Top Middle/Right) */}
      <div className="absolute top-16 right-1/3 opacity-40 pointer-events-none hidden md:block">
        <PaperPlaneIcon className="w-16 h-16 md:w-20 md:h-20 text-purple-400" />
      </div>

      {/* Star (Top Right) */}
      <div className="absolute top-10 right-10 md:right-32 opacity-50 transform rotate-12 pointer-events-none">
        <StarIcon className="w-12 h-12 md:w-16 md:h-16 text-purple-400" />
      </div>

      {/* Notebook (Bottom Right - floating above wave) */}
      <div className="absolute bottom-16 right-20 md:right-48 opacity-40 transform -rotate-12 pointer-events-none hidden sm:block">
        <NotebookIcon className="w-14 h-14 md:w-16 md:h-16 text-purple-400" />
      </div>

      {/* --- Main Content --- */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 pb-32 pt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1a4b] mb-4">
          Curriculum
        </h1>

        <nav className="flex items-center text-base md:text-lg font-medium">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            Home
          </a>
          <span className="mx-3 text-gray-400 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </span>
          <span className="text-blue-600">Curriculum</span>
        </nav>
      </div>

      {/* --- Wave Separator --- */}
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg
          className="relative block w-full h-[60px] md:h-[80px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-[#F3F0FF] hidden"
          ></path>
          {/* 
             The image shows a specific repeating sine wave pattern. 
             Let's use a path that closely mimics the "scalloped" look.
           */}
          <path
            d="M0,60 C150,120 300,0 450,60 C600,120 750,0 900,60 C1050,120 1200,0 1350,60 V120 H0 V60Z"
            fill="#ffffff"
            transform="scale(1, 0.8) translate(0, 30)"
          ></path>
          {/* Let's try a cleaner more symmetrical wave path */}
          <path
            d="M0,120 C200,100 300,40 400,60 C550,90 650,110 800,80 C950,50 1050,20 1200,60 V120 H0 Z"
            fill="#ffffff"
            className="hidden"
          ></path>
          <path
            d="M0,40 Q100,90 200,40 T400,40 T600,40 T800,40 T1000,40 T1200,40 V120 H0 Z"
            fill="#ffffff"
            transform="scale(1.5, 1)"
          ></path>
        </svg>
      </div>

      {/* --- Rocket (Bottom Left - Overlapping the wave/white area) --- */}
      <div className="absolute bottom-4 left-10 md:left-24 z-20">
        <RocketIcon className="w-8 h-8 md:w-10 md:h-10 text-green-500 transform -rotate-45" />
      </div>
    </div>
  );
};

export default Curriculum;
