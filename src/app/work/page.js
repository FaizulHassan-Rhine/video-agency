'use client';

import { Play, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import VideoModal from '../../components/VideoModal';
import { useState } from 'react';

export default function WorkPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // All projects organized by category
  const allProjects = [
    // Teaser Category
    {
      title: "Teaser 1",
      description: "A short, cinematic glimpse to build anticipation for the full film.",
      category: "Teaser",
      gradient: "from-red-500/20 to-pink-500/20",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      tags: [
        { text: "Teaser", color: "bg-red-500/20 text-red-400" },
        { text: "Cinematic", color: "bg-pink-500/20 text-pink-400" }
      ],
      year: "2024"
    },
    {
      title: "Teaser 2",
      description: "A short, cinematic glimpse to build anticipation for the full film.",
      category: "Teaser",
      gradient: "from-red-500/20 to-rose-500/20",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      tags: [
        { text: "Teaser", color: "bg-red-500/20 text-red-400" },
        { text: "Cinematic", color: "bg-rose-500/20 text-rose-400" }
      ],
      year: "2024"
    },
    // Highlights Category
    {
      title: "Highlights 1",
      description: "The essence of the day, capturing all the key moments in a vibrant, emotional short film.",
      category: "Highlights",
      gradient: "from-rose-500/20 to-purple-500/20",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      tags: [
        { text: "Highlights", color: "bg-rose-500/20 text-rose-400" },
        { text: "Emotional", color: "bg-purple-500/20 text-purple-400" }
      ],
      year: "2024"
    },
    {
      title: "Highlights 2",
      description: "The essence of the day, capturing all the key moments in a vibrant, emotional short film.",
      category: "Highlights",
      gradient: "from-pink-500/20 to-rose-500/20",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      tags: [
        { text: "Highlights", color: "bg-pink-500/20 text-pink-400" },
        { text: "Emotional", color: "bg-rose-500/20 text-rose-400" }
      ],
      year: "2024"
    },
    // Full Documentary Category
    {
      title: "Full Documentary 1",
      description: "The complete, detailed story of your wedding day, from getting ready to the final dance.",
      category: "Full Documentary",
      gradient: "from-orange-500/20 to-red-500/20",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      tags: [
        { text: "Documentary", color: "bg-orange-500/20 text-orange-400" },
        { text: "Complete Story", color: "bg-red-500/20 text-red-400" }
      ],
      year: "2024"
    },
    {
      title: "Full Documentary 2",
      description: "The complete, detailed story of your wedding day, from getting ready to the final dance.",
      category: "Full Documentary",
      gradient: "from-yellow-500/20 to-orange-500/20",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
      tags: [
        { text: "Documentary", color: "bg-yellow-500/20 text-yellow-400" },
        { text: "Complete Story", color: "bg-orange-500/20 text-orange-400" }
      ],
      year: "2024"
    },
    // Bridal Party Special Category
    {
      title: "Bridal Party Special 1",
      description: "A fun and stylish feature dedicated to the bride and her closest friends and family.",
      category: "Bridal Party Special",
      gradient: "from-purple-500/20 to-pink-500/20",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
      tags: [
        { text: "Bridal Party", color: "bg-purple-500/20 text-purple-400" },
        { text: "Stylish", color: "bg-pink-500/20 text-pink-400" }
      ],
      year: "2024"
    },
    {
      title: "Bridal Party Special 2",
      description: "A fun and stylish feature dedicated to the bride and her closest friends and family.",
      category: "Bridal Party Special",
      gradient: "from-violet-500/20 to-purple-500/20",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      tags: [
        { text: "Bridal Party", color: "bg-violet-500/20 text-violet-400" },
        { text: "Stylish", color: "bg-purple-500/20 text-purple-400" }
      ],
      year: "2024"
    },
    // Groom's Guys Special Category
    {
      title: "Groom's Guys Special 1",
      description: "A cool and dynamic segment highlighting the groom and his guys.",
      category: "Groom's Guys Special",
      gradient: "from-blue-500/20 to-indigo-500/20",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      tags: [
        { text: "Groom's Guys", color: "bg-blue-500/20 text-blue-400" },
        { text: "Dynamic", color: "bg-indigo-500/20 text-indigo-400" }
      ],
      year: "2024"
    },
    {
      title: "Groom's Guys Special 2",
      description: "A cool and dynamic segment highlighting the groom and his guys.",
      category: "Groom's Guys Special",
      gradient: "from-cyan-500/20 to-blue-500/20",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      tags: [
        { text: "Groom's Guys", color: "bg-cyan-500/20 text-cyan-400" },
        { text: "Dynamic", color: "bg-blue-500/20 text-blue-400" }
      ],
      year: "2024"
    }
  ];

  // Category filter options
  const categories = ['All', 'Teaser', 'Highlights', 'Full Documentary', 'Bridal Party Special', "Groom's Guys Special"];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  const handleVideoClick = (project) => {
    setSelectedVideo(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <Link 
                href="/"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4 cursor-pointer"
              >
                <ArrowLeft className="h-5 w-5" />
                Back to Home
              </Link>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Work</h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Explore our complete portfolio of wedding films crafted with emotion, precision, and cinematic storytelling
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No videos found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden hover:scale-105 transition-transform group shadow-lg border border-gray-200 cursor-pointer"
                onClick={() => handleVideoClick(project)}
              >
                <div className={`relative h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <Play className="h-16 w-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-red-500 uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className={`${tag.color} px-3 py-1 rounded-full text-sm`}>
                        {tag.text}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can bring your video vision to life
          </p>
          <Link 
            href="/#contact"
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoUrl={selectedVideo?.videoUrl}
        title={selectedVideo?.title}
      />
    </div>
  );
}
