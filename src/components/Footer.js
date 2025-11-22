import { Play, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/8801346365406", color: "text-green-500 hover:text-green-700" },
    { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/channel/UCluT7plZtYE3_z48KG5SqcA", color: "text-red-500 hover:text-red-700" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/filmscutstudio?igsh=MXhnMGhzNXZjZG1udA%3D%3D&utm_source=qr", color: "text-pink-500 hover:text-pink-700" },
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/people/Films-Cut-Studio/61555193196350/", color: "text-blue-600 hover:text-blue-800" }
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="">
              <img src="/images/logo.png" alt="Logo" className="h-16 w-32" />

            </div>
            <p className="text-gray-600 w-full">
              We turn your wedding moments into timeless, emotional films crafted with care and artistry.
              At Films Cut Studio, our professional team transforms every memory into a beautifully crafted story,
              delivering premium-quality edits where every frame holds a feeling worth remembering.
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
                    target={social.href !== "#" ? "_blank" : undefined}
                    rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
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
          <p>&copy; 2025 <span className="font-bold text-red-500">Films Cut Studio</span> All rights reserved. </p>
        </div>
      </div>
    </footer>
  );
}
