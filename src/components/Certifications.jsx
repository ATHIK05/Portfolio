import React from 'react';
import { Award, ExternalLink, Star, Trophy } from 'lucide-react';

const Certifications = () => {
  const globalCertifications = [
    {
      title: 'Oracle Java Developer Certified Professional SE 17',
      issuer: 'Oracle',
      date: 'May 14, 2025',
      category: 'Global Certification',
      color: 'bg-red-100 text-red-800',
      isGlobal: true,
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Oracle APEX Cloud Developer Certified Professional',
      issuer: 'Oracle',
      date: 'May 13, 2025',
      category: 'Global Certification',
      color: 'bg-red-100 text-red-800',
      isGlobal: true,
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Oracle AI Vector Search Certified Professional',
      issuer: 'Oracle',
      date: 'May 15, 2025',
      category: 'Global Certification',
      color: 'bg-red-100 text-red-800',
      isGlobal: true,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const otherCertifications = [
    {
      title: 'Data Structures and Algorithms',
      issuer: 'Infosys Springboard',
      category: 'Programming',
      color: 'bg-blue-100 text-blue-800',
      isGlobal: false,
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Database Management System',
      issuer: 'Infosys Springboard',
      category: 'Database',
      color: 'bg-green-100 text-green-800',
      isGlobal: false,
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Agile Scrum Management',
      issuer: 'Infosys Springboard',
      category: 'Project Management',
      color: 'bg-purple-100 text-purple-800',
      isGlobal: false,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Bootstrap 4',
      issuer: 'Infosys Spring',
      category: 'Web Development',
      color: 'bg-indigo-100 text-indigo-800',
      isGlobal: false,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Cybersecurity and Monitoring',
      issuer: 'NPTEL',
      category: 'Security',
      color: 'bg-red-100 text-red-800',
      isGlobal: false,
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Java Programming',
      issuer: 'Oracle',
      category: 'Programming',
      color: 'bg-orange-100 text-orange-800',
      isGlobal: false,
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Flutter Development',
      issuer: 'Coursera',
      category: 'Mobile Development',
      color: 'bg-cyan-100 text-cyan-800',
      isGlobal: false,
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional certifications including global Oracle certifications and specialized technical courses
          </p>
        </div>

        {/* Global Certifications Highlight */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full shadow-lg">
              <Trophy className="w-6 h-6" />
              <h3 className="text-xl font-bold">Oracle Global Certifications</h3>
              <Trophy className="w-6 h-6" />
            </div>
            <p className="text-gray-600 mt-4">Professional-level Oracle certifications recognized worldwide</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {globalCertifications.map((cert, index) => (
              <div key={index} className="group relative overflow-hidden bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Background Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/80 to-orange-500/80"></div>
                  <div className="absolute top-4 right-4">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 leading-tight">{cert.title}</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <Trophy className="w-4 h-4 text-red-600" />
                    </div>
                    <p className="text-red-600 font-semibold">{cert.issuer}</p>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{cert.date}</p>
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 text-red-800 rounded-full text-sm font-medium border border-red-200">
                    {cert.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Certifications */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Technical Certifications</h3>
            <p className="text-gray-600">Specialized courses and professional development</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {otherCertifications.map((cert, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Mini Image */}
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/60 to-purple-500/60"></div>
                  <div className="absolute bottom-2 left-2">
                    <div className="p-1.5 bg-white/20 backdrop-blur-sm rounded-lg">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="text-sm font-bold text-gray-800 mb-2 leading-tight">{cert.title}</h4>
                  <p className="text-gray-600 mb-2 text-xs font-medium">{cert.issuer}</p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${cert.color}`}>
                    {cert.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-8 px-8 py-6 bg-white rounded-2xl shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">3</div>
              <div className="text-sm text-gray-600">Global Oracle</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">7</div>
              <div className="text-sm text-gray-600">Technical Certs</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">10</div>
              <div className="text-sm text-gray-600">Total Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;