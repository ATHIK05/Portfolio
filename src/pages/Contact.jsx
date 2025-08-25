import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, Calendar, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS or similar service
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'mohamedathikr.22msc@kongu.edu',
          subject: `Portfolio Contact: ${formData.subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
              <h2 style="color: #333; text-align: center; margin-bottom: 30px;">New Contact Form Submission</h2>
              
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h3 style="color: #495057; margin-bottom: 15px;">Contact Details:</h3>
                <p style="margin: 8px 0;"><strong>Name:</strong> ${formData.name}</p>
                <p style="margin: 8px 0;"><strong>Email:</strong> ${formData.email}</p>
                <p style="margin: 8px 0;"><strong>Subject:</strong> ${formData.subject}</p>
              </div>
              
              <div style="background-color: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
                <h3 style="color: #495057; margin-bottom: 15px;">Message:</h3>
                <p style="line-height: 1.6; color: #333;">${formData.message}</p>
              </div>
              
              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
                <p style="color: #6c757d; font-size: 14px;">This message was sent from your portfolio contact form.</p>
              </div>
            </div>
          `,
          replyTo: formData.email,
          autoReply: {
            to: formData.email,
            subject: 'Thank you for contacting Mohamed Athik R',
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
                <div style="text-align: center; margin-bottom: 30px;">
                  <h2 style="color: #2563eb; margin-bottom: 10px;">Thank You for Contacting Me!</h2>
                  <p style="color: #6b7280; font-size: 16px;">This is an automated response to confirm we received your message.</p>
                </div>
                
                <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb; margin-bottom: 25px;">
                  <h3 style="color: #1e40af; margin-bottom: 15px;">Dear ${formData.name},</h3>
                  <p style="color: #374151; line-height: 1.6; margin-bottom: 15px;">
                    Thank you for reaching out! I have received your message regarding "<strong>${formData.subject}</strong>" and truly appreciate your interest in connecting with me.
                  </p>
                  <p style="color: #374151; line-height: 1.6;">
                    I will personally review your message and respond within <strong>1-2 business days</strong>. 
                    If your inquiry is urgent, please feel free to reach out to me directly on LinkedIn.
                  </p>
                </div>
                
                <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                  <h4 style="color: #374151; margin-bottom: 15px;">Your Message Summary:</h4>
                  <p style="color: #6b7280; margin: 5px 0;"><strong>Subject:</strong> ${formData.subject}</p>
                  <p style="color: #6b7280; margin: 5px 0;"><strong>Submitted:</strong> ${new Date().toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}</p>
                </div>
                
                <div style="text-align: center; margin-bottom: 25px;">
                  <p style="color: #374151; margin-bottom: 15px;">Connect with me on social media:</p>
                  <div style="display: inline-block;">
                    <a href="https://linkedin.com/in/mohamed-athik-r" style="display: inline-block; margin: 0 10px; padding: 10px 20px; background-color: #0077b5; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">LinkedIn</a>
                    <a href="https://github.com/ATHIK05" style="display: inline-block; margin: 0 10px; padding: 10px 20px; background-color: #333; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">GitHub</a>
                  </div>
                </div>
                
                <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                  <p style="color: #9ca3af; font-size: 14px; margin-bottom: 5px;">Best regards,</p>
                  <p style="color: #2563eb; font-weight: bold; font-size: 16px;">Mohamed Athik R</p>
                  <p style="color: #6b7280; font-size: 14px;">Full Stack Developer & Mobile App Developer</p>
                  <p style="color: #9ca3af; font-size: 12px; margin-top: 15px;">
                    This is an automated response. Please do not reply to this email.
                  </p>
                </div>
              </div>
            `
          }
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      // Fallback to mailto
      const mailtoLink = `mailto:mohamedathikr.22msc@kongu.edu?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      value: "mohamedathikr.22msc@kongu.edu",
      link: "mailto:mohamedathikr.22msc@kongu.edu",
      color: "from-blue-500 to-cyan-500",
      description: "Best for detailed discussions"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone",
      value: "+91 9080262334",
      link: "tel:+919080262334",
      color: "from-green-500 to-emerald-500",
      description: "Available 9 AM - 8 PM IST"
    },
    {
      icon: <Github className="w-8 h-8" />,
      title: "GitHub",
      value: "github.com/ATHIK05",
      link: "https://github.com/ATHIK05",
      color: "from-gray-700 to-gray-900",
      description: "Check out my code"
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      title: "LinkedIn",
      value: "linkedin.com/in/mohamed-athik-r",
      link: "https://linkedin.com/in/mohamed-athik-r",
      color: "from-blue-600 to-blue-800",
      description: "Professional networking"
    }
  ];

  const quickStats = [
    { label: "Response Time", value: "< 24 hrs", icon: <MessageCircle className="w-6 h-6" /> },
    { label: "Availability", value: "Open to Work", icon: <Calendar className="w-6 h-6" /> },
    { label: "Location", value: "Tamil Nadu, IN", icon: <MapPin className="w-6 h-6" /> },
    { label: "Time Zone", value: "IST (UTC+5:30)", icon: <Calendar className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-32 pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Get In Touch</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together to bring your ideas to life
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {quickStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 text-blue-600">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Let's Connect</h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Whether you're looking for a developer, have a project in mind, or just want to connect, 
                I'd love to hear from you. I'm currently available for freelance work and full-time opportunities.
              </p>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : '_self'}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="group flex items-center gap-6 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {method.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-gray-800 text-xl mb-1">{method.title}</h3>
                      <p className="text-gray-600 mb-1">{method.value}</p>
                      <p className="text-sm text-gray-500">{method.description}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">🟢 Currently Available</h3>
              <p className="text-green-100 mb-6 leading-relaxed">
                I'm actively seeking new opportunities and exciting projects. Whether it's a full-time position, 
                freelance work, or collaboration, I'm ready to contribute my skills to your team.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="font-semibold mb-1">Full-time</div>
                  <div className="text-sm text-green-100">Open to offers</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="font-semibold mb-1">Freelance</div>
                  <div className="text-sm text-green-100">Available now</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Send a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                <p className="text-green-800 font-medium">✅ Message sent successfully! I'll respond within 1-2 business days.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-800 font-medium">❌ Failed to send message. Please try again or contact me directly.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-3">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical text-lg"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Send size={24} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
              <h3 className="font-bold text-gray-800 mb-3">💡 What to expect:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Response within 24 hours
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Detailed project discussion
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Timeline and cost estimation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Portfolio and references sharing
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's turn your ideas into reality. With expertise in full-stack development, mobile apps, 
              and modern technologies, I'm here to help you build something amazing.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="mailto:mohamedathikr.22msc@kongu.edu"
                className="flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Mail size={24} />
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/mohamedathik786"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Linkedin size={24} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
