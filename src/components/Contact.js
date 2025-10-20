import { Mail, Phone, MapPin, Calendar, Send, Linkedin, Github, Twitter, Youtube, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Calendar className="h-12 w-12 text-gray-400 mr-4" />
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Get In Touch</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Interested in collaborations or new opportunities? Let's build something great together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-500 resize-y"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info, Social, Availability */}
          <div className="space-y-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-900">hello@videocraft.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-900">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-900">Los Angeles, CA</span>
                </div>
              </div>
            </div>

            {/* Connect With Me */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10  flex items-center hover:bg-gray-100 rounded-lg justify-center "
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-blue-500 hover:text-blue-700" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-gray-700 hover:text-gray-900" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5 text-blue-400 hover:text-blue-600" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5 text-red-500 hover:text-red-700" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-pink-500 hover:text-pink-700" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 text-blue-600 hover:text-blue-800" />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Availability</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-medium text-gray-600">Current Status</span>
                  <p className="text-green-600 font-semibold">Available for Work </p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-600">Response Time</span>
                  <p className="text-gray-900">Within 24 hours</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-600">Preferred Contact</span>
                  <p className="text-gray-900">Email</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
