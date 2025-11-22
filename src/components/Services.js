import { Camera, Scissors, Palette, Music } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Scissors,
      title: "Video Editing",
      description: "Premium wedding video editing crafted with emotion, precision, and storytelling.",
      features: ["Raw Footage Editing", "Highlight & Teaser Edit", "Documentary Edit", "Audio Sync"]
    },
    {
      icon: Palette,
      title: "Color Grading",
      description: "Professional cinematic color grading to enhance mood, warmth, and emotion in every frame.",
      features: ["Wedding Film Color Tone", "Skin Tone Enhancement", "Cinematic Looks"]
    },
    {
      icon: Camera,
      title: "Motion Graphics",
      description: "Beautiful visuals and animated elements to elevate your wedding film.",
      features: ["Title Animations", "Stylish Lower Thirds", "Visual Effects (Subtle & Clean)"]
    },
    {
      icon: Music,
      title: "Audio Production",
      description: "Professional sound work to ensure your film feels as magical as it looks.",
      features: ["Audio Cleanup & Mixing", "Music Alignment", "Voice Enhancement"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We offer professional wedding-focused editing services to preserve your most beautiful moments with cinematic elegance.
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
