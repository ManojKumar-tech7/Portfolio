import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

interface FormData {
  name: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({ ...prev, [name]: value }));
  };

  const handleSendEmail = () => {
    // Basic form validation
    if (!formData.name.trim() || !formData.subject.trim() || !formData.message.trim()) {
      alert('Please fill in all fields before sending your message.');
      return;
    }
    const subject = encodeURIComponent(formData.subject || 'Hello from your portfolio website');
    const body = encodeURIComponent(
      `Hi Manoj,\n\n` +
      `Name: ${formData.name || '[Your Name]'}\n\n` +
      `${formData.message || 'I visited your portfolio and would like to get in touch.\n\nBest regards,'}\n\n` +
      `---\n` +
      `This message was sent from your portfolio website.`
    );
    
    const mailtoLink = `mailto:manojkumar788961@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_self');
  };

  const handleQuickEmail = (type: 'collaboration' | 'opportunity' | 'general') => {
    const templates = {
      collaboration: {
        subject: 'Collaboration Opportunity',
        message: 'Hi Manoj,\n\nI\'d like to discuss a potential collaboration opportunity with you.\n\nBest regards,'
      },
      opportunity: {
        subject: 'Job/Internship Opportunity', 
        message: 'Hi Manoj,\n\nI have a job/internship opportunity that might interest you.\n\nBest regards,'
      },
      general: {
        subject: 'General Inquiry',
        message: 'Hi Manoj,\n\nI have a question/inquiry for you.\n\nBest regards,'
      }
    };

    const template = templates[type];
    setFormData((prev: FormData) => ({
      ...prev,
      subject: template.subject,
      message: template.message
    }));
  };

  const handleDirectEmail = () => {
    const subject = encodeURIComponent('Hello from your portfolio website');
    const body = encodeURIComponent('Hi Manoj,\n\nI visited your portfolio and would like to get in touch.\n\nBest regards,');
    const mailtoLink = `mailto:manojkumar788961@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_self');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about AI and machine learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Email</p>
                    <a 
                      href="mailto:manojkumar788961@gmail.com" 
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      manojkumar788961@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Phone</p>
                    <a 
                      href="tel:+919256593263" 
                      className="text-teal-600 hover:text-teal-800 transition-colors duration-200"
                    >
                      +91 9256593263
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Location</p>
                    <p className="text-gray-600">Jaipur, Rajasthan, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Email Button */}
            <div>
              <button
                onClick={handleDirectEmail}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Mail size={20} />
                <span>Send Email Now</span>
                <ExternalLink size={16} />
              </button>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Opens your email client with pre-filled message
              </p>
            </div>

            {/* Quick Email Templates */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Contact Templates</h3>
              <div className="space-y-2">
                <button
                  onClick={() => handleQuickEmail('collaboration')}
                  className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200 border border-blue-200"
                >
                  <span className="font-medium text-blue-800">💼 Collaboration</span>
                  <p className="text-sm text-blue-600">Discuss project partnerships</p>
                </button>
                <button
                  onClick={() => handleQuickEmail('opportunity')}
                  className="w-full text-left p-3 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors duration-200 border border-teal-200"
                >
                  <span className="font-medium text-teal-800">🚀 Opportunities</span>
                  <p className="text-sm text-teal-600">Job or internship offers</p>
                </button>
                <button
                  onClick={() => handleQuickEmail('general')}
                  className="w-full text-left p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors duration-200 border border-orange-200"
                >
                  <span className="font-medium text-orange-800">💬 General Inquiry</span>
                  <p className="text-sm text-orange-600">Ask questions or say hello</p>
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/manojkumar" // Example real URL
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  <Github size={24} className="text-gray-700" />
                </a>
                <a
                  href="https://linkedin.com/in/manojkumar" // Example real URL
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="p-3 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors duration-200"
                >
                  <Linkedin size={24} className="text-blue-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Message Composer */}
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Compose Your Message</h3>
            <p className="text-gray-600 mb-6">
              Fill out the details below and click "Send Email" to open your email client with a pre-filled message.
            </p>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Your full name"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
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
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                onClick={handleSendEmail}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Mail size={20} />
                <span>Send Email</span>
                <ExternalLink size={16} />
              </button>
            </div>

            <div className="mt-6 p-4 bg-white/50 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                <strong>Direct Email:</strong> This will open your default email client with your message pre-filled and addressed to manojkumar788961@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;