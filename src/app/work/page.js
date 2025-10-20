'use client';

import { Play, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import VideoModal from '../../components/VideoModal';
import { useState } from 'react';

export default function WorkPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "Corporate Brand Video",
      description: "A comprehensive brand story video for a tech startup",
      gradient: "from-red-500/20 to-purple-500/20",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      tags: [
        { text: "Corporate", color: "bg-red-500/20 text-red-400" },
        { text: "Branding", color: "bg-blue-500/20 text-blue-400" }
      ],
      year: "2024"
    },
    {
      title: "Music Video",
      description: "High-energy music video with dynamic editing and effects",
      gradient: "from-green-500/20 to-blue-500/20",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      tags: [
        { text: "Music", color: "bg-purple-500/20 text-purple-400" },
        { text: "Creative", color: "bg-pink-500/20 text-pink-400" }
      ],
      year: "2024"
    },
    {
      title: "Documentary Series",
      description: "Multi-part documentary with cinematic storytelling",
      gradient: "from-yellow-500/20 to-orange-500/20",
      tags: [
        { text: "Documentary", color: "bg-green-500/20 text-green-400" },
        { text: "Cinematic", color: "bg-indigo-500/20 text-indigo-400" }
      ],
      year: "2024"
    },
    {
      title: "Social Media Content",
      description: "Engaging social media videos with viral potential",
      gradient: "from-cyan-500/20 to-teal-500/20",
      tags: [
        { text: "Social Media", color: "bg-cyan-500/20 text-cyan-400" },
        { text: "Viral", color: "bg-teal-500/20 text-teal-400" }
      ],
      year: "2024"
    },
    {
      title: "Wedding Highlights",
      description: "Beautiful wedding video with emotional storytelling",
      gradient: "from-rose-500/20 to-pink-500/20",
      tags: [
        { text: "Wedding", color: "bg-rose-500/20 text-rose-400" },
        { text: "Romance", color: "bg-pink-500/20 text-pink-400" }
      ],
      year: "2023"
    },
    {
      title: "Product Launch",
      description: "Exciting product launch video with motion graphics",
      gradient: "from-violet-500/20 to-purple-500/20",
      tags: [
        { text: "Product", color: "bg-violet-500/20 text-violet-400" },
        { text: "Launch", color: "bg-purple-500/20 text-purple-400" }
      ],
      year: "2023"
    },
    {
      title: "Fashion Showcase",
      description: "Elegant fashion video showcasing latest collection",
      gradient: "from-emerald-500/20 to-teal-500/20",
      tags: [
        { text: "Fashion", color: "bg-emerald-500/20 text-emerald-400" },
        { text: "Luxury", color: "bg-teal-500/20 text-teal-400" }
      ],
      year: "2023"
    },
    {
      title: "Restaurant Promo",
      description: "Mouth-watering food video for restaurant marketing",
      gradient: "from-orange-500/20 to-red-500/20",
      tags: [
        { text: "Food", color: "bg-orange-500/20 text-orange-400" },
        { text: "Marketing", color: "bg-red-500/20 text-red-400" }
      ],
      year: "2023"
    },
    {
      title: "Tech Conference",
      description: "Professional conference highlights and speaker interviews",
      gradient: "from-blue-500/20 to-indigo-500/20",
      tags: [
        { text: "Tech", color: "bg-blue-500/20 text-blue-400" },
        { text: "Conference", color: "bg-indigo-500/20 text-indigo-400" }
      ],
      year: "2022"
    }
  ];

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
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
              >
                <ArrowLeft className="h-5 w-5" />
                Back to Home
              </Link>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Work</h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Explore our complete portfolio of video editing projects and creative work
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
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
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
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
