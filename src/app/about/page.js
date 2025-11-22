'use client';

import { ArrowLeft, Heart, Film, Sparkles, Camera } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-to-br from-red-50 to-pink-50 border-b border-gray-200 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8 cursor-pointer"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Film className="h-12 w-12 text-red-500 mr-4" />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                About Films Cut Studio
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Where Your Wedding Moments Become Forever
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Welcome Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="h-8 w-8 text-red-500" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Welcome to Films Cut Studio
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Films Cut Studio, we don't just edit videos — we shape memories into timeless stories.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From the shy smile before the first look, to the warmth of family rituals, to the spark in the couple's eyes — 
              every moment holds a heartbeat, and we bring that heartbeat to life.
            </p>
          </div>

          {/* Image Section */}
          <div className="mb-16 rounded-lg overflow-hidden shadow-xl">
            <div className="relative h-96 bg-gradient-to-br from-red-100 via-pink-100 to-rose-100 flex items-center justify-center">
              <div className="text-center p-8">
                <Camera className="h-24 w-24 text-red-500 mx-auto mb-4 opacity-80" />
                <p className="text-gray-600 italic text-lg">
                  "Every frame tells a story, every moment deserves to be remembered"
                </p>
              </div>
              {/* Placeholder for actual image - replace with: <img src="/images/about-hero.jpg" alt="Wedding video editing" className="w-full h-full object-cover" /> */}
            </div>
          </div>

          {/* Services Overview */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              What We Create
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
              Whether it's your wedding teaser, highlight film, full documentary, bridal prep, or the fun and energy of the groom's squad,
              we craft each frame with emotion, elegance, and a touch of cinematic magic.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <Film className="h-8 w-8 text-red-500 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Wedding Teasers</h4>
                <p className="text-gray-600">Short, cinematic glimpses that build anticipation</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <Heart className="h-8 w-8 text-red-500 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Highlight Films</h4>
                <p className="text-gray-600">The essence of your day in vibrant, emotional stories</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <Camera className="h-8 w-8 text-red-500 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Full Documentaries</h4>
                <p className="text-gray-600">Complete stories from getting ready to the final dance</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <Sparkles className="h-8 w-8 text-red-500 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Special Moments</h4>
                <p className="text-gray-600">Bridal prep and groom's squad features</p>
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-8 sm:p-12 mb-16 border border-red-100">
            <div className="flex items-center justify-center mb-6">
              <Heart className="h-10 w-10 text-red-500" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Philosophy
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
              We believe your love deserves more than an edit — 
              it deserves art that you'll replay for a lifetime.
            </p>
          </div>

          {/* Closing Statement */}
          <div className="text-center">
            <div className="inline-block bg-white border-2 border-red-500 rounded-lg p-8 sm:p-12 shadow-lg">
              <p className="text-xl sm:text-2xl text-gray-900 font-semibold leading-relaxed mb-4">
                Welcome to the place where your story is cut, crafted, and cherished.
              </p>
              <p className="text-2xl sm:text-3xl text-red-500 font-bold">
                Welcome to Films Cut Studio.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Tell Your Story?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's create something beautiful together
          </p>
          <Link 
            href="/#contact"
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

