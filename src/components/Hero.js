'use client';

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/10"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl text-gray-600 sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Professional Video
          <span className="text-red-500 block">Editing Services</span>
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-gray-600 max-w-2xl mx-auto">
          Transform your vision into stunning visual stories with our expert video editing team
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('work')}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
          >
            View Our Work
            <ArrowRight className="h-5 w-5" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
