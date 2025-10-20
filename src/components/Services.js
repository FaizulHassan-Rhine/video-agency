import { Camera, Scissors, Palette, Music } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Camera,
      title: "Video Production",
      description: "Complete video production from concept to final delivery, including filming and post-production.",
      features: ["Concept Development", "Professional Filming", "Post-Production", "Final Delivery"]
    },
    {
      icon: Scissors,
      title: "Video Editing",
      description: "Professional video editing services with cutting-edge technology and creative expertise.",
      features: ["Raw Footage Editing", "Color Grading", "Motion Graphics", "Audio Sync"]
    },
    {
      icon: Palette,
      title: "Motion Graphics",
      description: "Dynamic motion graphics and visual effects to enhance your video content.",
      features: ["Logo Animations", "Title Sequences", "Visual Effects", "3D Graphics"]
    },
    {
      icon: Music,
      title: "Audio Production",
      description: "Professional audio editing, mixing, and sound design for your video projects.",
      features: ["Audio Editing", "Sound Mixing", "Voice Over", "Music Scoring"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive video editing services to bring your creative vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-lg hover:bg-gray-50 transition-colors group shadow-lg">
                <div className="bg-red-500/10 p-4 rounded-lg w-fit mb-6 group-hover:bg-red-500/20 transition-colors">
                  <IconComponent className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
