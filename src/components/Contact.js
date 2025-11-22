'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { Mail, Phone, MapPin, Calendar, Send, MessageCircle, Youtube, Instagram, Facebook, Loader2 } from 'lucide-react';

export default function Contact() {
  // EmailJS Configuration - Add your credentials here
  const EMAILJS_SERVICE_ID = 'service_tfyedip';
  const EMAILJS_TEMPLATE_ID = 'template_90xyk9a';
  const EMAILJS_PUBLIC_KEY = 'HbW2wXEnRe6EKW13A';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill in all fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);

    try {
      // Initialize EmailJS (only needed once, but safe to call multiple times)
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      if (result.text === 'OK') {
        toast.success('Thank you! Your message has been sent successfully.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Sorry, there was an error sending your message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#fff',
            color: '#1f2937',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Calendar className="h-12 w-12 text-gray-400 mr-4" />
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Get In Touch</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Looking to collaborate or start something new?
          Let’s connect and create something beautiful together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
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
                  value={formData.email}
                  onChange={handleChange}
                  required
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
                  value={formData.subject}
                  onChange={handleChange}
                  required
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
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-500 resize-y"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gray-200 hover:bg-gray-300 disabled:bg-gray-300 disabled:cursor-not-allowed text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
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
                  <span className="text-gray-900">filmscutstudio.bd@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-900">+880 1346365406</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-900">Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Connect With Me */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://wa.me/8801346365406"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5 text-green-500 hover:text-green-700" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCluT7plZtYE3_z48KG5SqcA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5 text-red-500 hover:text-red-700" />
                </a>
                <a
                  href="https://www.instagram.com/filmscutstudio?igsh=MXhnMGhzNXZjZG1udA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-pink-500 hover:text-pink-700" />
                </a>
                <a
                  href="https://www.facebook.com/people/Films-Cut-Studio/61555193196350/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
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
