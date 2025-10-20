import { Play, Facebook, Twitter, Instagram, Youtube, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "text-blue-500 hover:text-blue-700" },
    { icon: Github, label: "GitHub", href: "#", color: "text-gray-700 hover:text-gray-900" },
    { icon: Twitter, label: "Twitter", href: "#", color: "text-blue-400 hover:text-blue-600" },
    { icon: Youtube, label: "YouTube", href: "#", color: "text-red-500 hover:text-red-700" },
    { icon: Instagram, label: "Instagram", href: "#", color: "text-pink-500 hover:text-pink-700" },
    { icon: Facebook, label: "Facebook", href: "#", color: "text-blue-600 hover:text-blue-800" }
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Play className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold">VideoCraft</span>
            </div>
            <p className="text-gray-600 max-w-md">
              Professional video editing services that transform your vision into stunning visual stories. 
              We specialize in creating compelling content that engages and inspires your audience.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-end space-y-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className={`h-5 w-5 ${social.color}`} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2025 VideoCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
