'use client';

import { Play, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import VideoModal from './VideoModal';
import { useState } from 'react';

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Recent Work - First 3 categories
  const recentProjects = [
    {
      title: "Teaser",
      description: "A short, cinematic glimpse to build anticipation for the full film.",
      category: "Teaser",
      gradient: "from-red-500/20 to-pink-500/20",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      tags: [
        { text: "Teaser", color: "bg-red-500/20 text-red-400" },
        { text: "Cinematic", color: "bg-pink-500/20 text-pink-400" }
      ]
    },
    {
      title: "Highlights",
      description: "The essence of the day, capturing all the key moments in a vibrant, emotional short film.",
      category: "Highlights",
      gradient: "from-rose-500/20 to-purple-500/20",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      tags: [
        { text: "Highlights", color: "bg-rose-500/20 text-rose-400" },
        { text: "Emotional", color: "bg-purple-500/20 text-purple-400" }
      ]
    },
    {
      title: "Full Documentary",
      description: "The complete, detailed story of your wedding day, from getting ready to the final dance.",
      category: "Full Documentary",
      gradient: "from-orange-500/20 to-red-500/20",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      tags: [
        { text: "Documentary", color: "bg-orange-500/20 text-orange-400" },
        { text: "Complete Story", color: "bg-red-500/20 text-red-400" }
      ]
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
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Recent Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our latest wedding films crafted with emotion, precision, and cinematic storytelling
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden hover:scale-105 transition-transform group shadow-lg border border-gray-200 cursor-pointer"
              onClick={() => handleVideoClick(project)}
            >
              <div className={`relative h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <Play className="h-16 w-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
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

        {/* View All Work Button */}
        <div className="text-center">
          <Link 
            href="/work"
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer"
          >
            View All Work
            <ArrowRight className="h-5 w-5" />
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
    </section>
  );
}
