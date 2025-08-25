import React from 'react';
import { Award, ExternalLink, Star, Trophy, Shield, Code, Database, Cloud } from 'lucide-react';

const Certifications = () => {
  const globalCertifications = [
    {
      title: 'Oracle Java Developer Certified Professional SE 17',
      issuer: 'Oracle',
      date: 'May 14, 2025',
      category: 'Global Certification',
      color: 'bg-red-100 text-red-800',
      isGlobal: true,
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Oracle APEX Cloud Developer Certified Professional',
      issuer: 'Oracle',
      date: 'May 13, 2025',
      category: 'Global Certification',
      color: 'bg-red-100 text-red-800',
      isGlobal: true,
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: 'Oracle AI Vector Search Certified Professional',
      issuer: 'Oracle',
      date: 'May 15, 2025',
      category: 'Global Certification',
      color: 'bg-red-100 text-red-800',
      isGlobal: true,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Database className="w-6 h-6" />
    }
  ];

  const technicalCertifications = [
    {
      title: 'Java Foundations',
      issuer: 'Oracle',
      category: 'Programming',
      color: 'bg-orange-100 text-orange-800',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Code className="w-4 h-4" />
    },
    {
      title: 'Data Structures and Algorithms',
      issuer: 'Infosys Springboard',
      category: 'Programming',
      color: 'bg-blue-100 text-blue-800',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Code className="w-4 h-4" />
    },
    {
      title: 'Database Management System',
      issuer: 'Infosys Springboard',
      category: 'Database',
      color: 'bg-green-100 text-green-800',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Database className="w-4 h-4" />
    },
    {
      title: 'Agile Scrum Management',
      issuer: 'Infosys Springboard',
      category: 'Project Management',
      color: 'bg-purple-100 text-purple-800',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Shield className="w-4 h-4" />
    },
    {
      title: 'Bootstrap 4',
      issuer: 'Infosys Spring',
      category: 'Web Development',
      color: 'bg-indigo-100 text-indigo-800',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Code className="w-4 h-4" />
    },
    {
      title: 'Flutter Development',
      issuer: 'Coursera',
      category: 'Mobile Development',
      color: 'bg-cyan-100 text-cyan-800',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Code className="w-4 h-4" />
    },
    {
      title: 'Learn C# in 7 days',
      issuer: 'Infosys Springboard',
      category: 'Programming',
      color: 'bg-purple-100 text-purple-800',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Code className="w-4 h-4" />
    },
    {
      title: 'Entity Framework Core - The Complete Guide',
      issuer: 'Infosys SpringBoard',
      category: 'Database',
      color: 'bg-green-100 text-green-800',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Database className="w-4 h-4" />
    },
    {
      title: 'Software Testing & Management',
      issuer: 'Infosys SpringBoard',
      category: 'Testing',
      color: 'bg-red-100 text-red-800',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Shield className="w-4 h-4" />
    }
  ];

  const devOpsCertifications = [
    {
      title: 'Agile Fundamentals Tamil KEC 2026 06',
      issuer: 'GUVI',
      category: 'DevOps',
      color: 'bg-blue-100 text-blue-800',
      icon: <Shield className="w-4 h-4" />
    },
    {
      title: 'GIT Tamil KEC 2026 06',
      issuer: 'GUVI',
      category: 'DevOps',
      color: 'bg-gray-100 text-gray-800',
      icon: <Code className="w-4 h-4" />
    },
    {
      title: 'GIT English KEC 2026 06',
      issuer: 'GUVI',
      category: 'DevOps',
      color: 'bg-gray-100 text-gray-800',
      icon: <Code className="w-4 h-4" />
    },
    {
      title: 'Fundamentals of DevOps English KEC 2026 06',
      issuer: 'GUVI',
      category: 'DevOps',
      color: 'bg-blue-100 text-blue-800',
      icon: <Cloud className="w-4 h-4" />
    },
    {
      title: 'Terraform',
      issuer: 'GUVI',
      category: 'DevOps',
      color: 'bg-purple-100 text-purple-800',
      icon: <Cloud className="w-4 h-4" />
    },
    {
      title: 'Jenkins for Automation Tester English KEC 2026 06',
      issuer: 'GUVI',
      category: 'DevOps',
      color: 'bg-orange-100 text-orange-800',
      icon: <Shield className="w-4 h-4" />
    },
    {
      title: 'Docker English KEC 20226 06',
      issuer: 'GUVI',
      category: 'DevOps',
      color: 'bg-blue-100 text-blue-800',
      icon: <Cloud className="w-4 h-4" />
    },
    {
      title: 'Introduction to Containers English KEC 2026 06',
      issuer: 'GUVI',
      category: 'DevOps',
      color: 'bg-cyan-100 text-cyan-800',
      icon: <Cloud className="w-4 h-4" />
    },
    {
      title: 'Introduction to DevOps English KEC 2026 06',
      issuer: 'GUVI',
      category: 'DevOps',
      color: 'bg-green-100 text-green-800',
      icon: <Cloud className="w-4 h-4" />
    },
    {
      title: 'Agile Fundamentals English KEC 2026 06',
      issuer: 'GUVI',
      category: 'DevOps',
      color: 'bg-indigo-100 text-indigo-800',
      icon: <Shield className="w-4 h-4" />
    }
  ];

  const totalCertifications = globalCertifications.length + technicalCertifications.length + devOpsCertifications.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-32 pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Certifications</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications including global Oracle certifications and specialized technical courses across multiple domains
          </p>
        </div>

        {/* Certification Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <Trophy className="w-12 h-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">3</div>
            <div className="text-lg font-medium">Oracle Global</div>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <Code className="w-12 h-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">9</div>
            <div className="text-lg font-medium">Technical</div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <Cloud className="w-12 h-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">10</div>
            <div className="text-lg font-medium">DevOps</div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <Award className="w-12 h-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">{totalCertifications}</div>
            <div className="text-lg font-medium">Total Certs</div>
          </div>
        </div>

        {/* Oracle Global Certifications Highlight */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full shadow-2xl">
              <Trophy className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Oracle Global Certifications</h2>
              <Trophy className="w-8 h-8" />
            </div>
            <p className="text-gray-600 mt-6 text-lg">Professional-level Oracle certifications recognized worldwide</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {globalCertifications.map((cert, index) => (
              <div key={index} className="group relative overflow-hidden bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4">
                {/* Background Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/80 to-orange-500/80"></div>
                  <div className="absolute top-6 right-6">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-6 left-6">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-xl">
                      {cert.icon}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight">{cert.title}</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <Trophy className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-red-600 font-bold text-lg">{cert.issuer}</p>
                      <p className="text-gray-600 text-sm">{cert.date}</p>
                    </div>
                  </div>
                  <span className="inline-block px-6 py-3 bg-gradient-to-r from-red-100 to-orange-100 text-red-800 rounded-full font-bold border-2 border-red-200 shadow-lg">
                    {cert.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Certifications */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Certifications</h2>
            <p className="text-gray-600 text-lg">Specialized courses in programming, databases, and software development</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technicalCertifications.map((cert, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Mini Image */}
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/60 to-purple-500/60"></div>
                  <div className="absolute bottom-3 left-3">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                      {cert.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-bold text-gray-800 mb-3 leading-tight text-lg">{cert.title}</h4>
                  <p className="text-gray-600 mb-3 font-medium">{cert.issuer}</p>
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${cert.color} border`}>
                    {cert.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DevOps Certifications */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">DevOps & Cloud Certifications</h2>
            <p className="text-gray-600 text-lg">Modern DevOps practices, containerization, and cloud technologies</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {devOpsCertifications.map((cert, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${cert.color.replace('text-', 'bg-').replace('-800', '-100')} mb-3`}>
                    {cert.icon}
                  </div>
                </div>
                <h4 className="font-bold text-gray-800 mb-2 text-sm leading-tight">{cert.title}</h4>
                <p className="text-gray-600 mb-3 text-xs">{cert.issuer}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${cert.color} border`}>
                  {cert.category}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced Summary */}
        <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Certification Journey</h2>
            <p className="text-xl text-gray-300">Continuous learning and professional development</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <Trophy className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">3</div>
              <div className="text-gray-300">Oracle Global Certifications</div>
              <div className="text-sm text-red-300 mt-2">Professional Level</div>
            </div>
            
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <Code className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">9</div>
              <div className="text-gray-300">Technical Certifications</div>
              <div className="text-sm text-blue-300 mt-2">Programming & Development</div>
            </div>
            
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <Cloud className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">10</div>
              <div className="text-gray-300">DevOps Certifications</div>
              <div className="text-sm text-green-300 mt-2">Cloud & Infrastructure</div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-6 px-12 py-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <Award className="w-12 h-12 text-yellow-400" />
              <div>
                <div className="text-4xl font-bold">{totalCertifications}</div>
                <div className="text-gray-300">Total Professional Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;