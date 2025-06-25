import React from 'react';
import { Trophy, Medal, Star } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: 'Department Coding Club Treasurer',
      year: '2024',
      description: 'Elected as treasurer for the department coding club, managing events and technical activities',
      type: 'Leadership',
      icon: <Star className="w-6 h-6" />,
      color: 'bg-yellow-100 text-yellow-800'
    },
    {
      title: '1st Prize - Winty Mindz Hackathon',
      year: '2024',
      description: 'Won first place in the Winty Mindz Hackathon at Vellalar College of Engineering',
      type: 'Hackathon',
      icon: <Trophy className="w-6 h-6" />,
      color: 'bg-gold-100 text-gold-800'
    },
    {
      title: '1st Prize - Proof of Concept',
      year: '2024',
      description: 'First place in Proof of Concept competition in Intra-College Event',
      type: 'Competition',
      icon: <Trophy className="w-6 h-6" />,
      color: 'bg-gold-100 text-gold-800'
    },
    {
      title: '1st Prize - Ruby Day Science Prototype Expo',
      year: '2025',
      description: 'Won first place in Ruby Day Science Day Prototype Expo for innovative project',
      type: 'Innovation',
      icon: <Trophy className="w-6 h-6" />,
      color: 'bg-gold-100 text-gold-800'
    },
    {
      title: '2nd Prize - Paper Presentation',
      year: '2024',
      description: 'Second place in paper presentation at Vellalar College of Engineering',
      type: 'Academic',
      icon: <Medal className="w-6 h-6" />,
      color: 'bg-silver-100 text-silver-800'
    },
    {
      title: '2nd Prize - PSG Login Coding Contest',
      year: '2024',
      description: 'Second place in coding contest conducted in PSG Login 2k24',
      type: 'Coding',
      icon: <Medal className="w-6 h-6" />,
      color: 'bg-silver-100 text-silver-800'
    },
    {
      title: '2nd Prize - KEC Hackathon',
      year: '2025',
      description: 'Second place in KEC Hackathon 2k25 for innovative solution development',
      type: 'Hackathon',
      icon: <Medal className="w-6 h-6" />,
      color: 'bg-silver-100 text-silver-800'
    }
  ];

  const getIconColor = (type) => {
    switch (type) {
      case 'Hackathon':
        return 'text-purple-600 bg-purple-100';
      case 'Competition':
        return 'text-blue-600 bg-blue-100';
      case 'Academic':
        return 'text-green-600 bg-green-100';
      case 'Coding':
        return 'text-red-600 bg-red-100';
      case 'Innovation':
        return 'text-orange-600 bg-orange-100';
      case 'Leadership':
        return 'text-indigo-600 bg-indigo-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section id="awards" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Honors & Awards</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Recognition and achievements in hackathons, competitions, and academic excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-primary-500">
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-full ${getIconColor(award.type)}`}>
                  {award.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      award.type === 'Hackathon' ? 'bg-purple-100 text-purple-800' :
                      award.type === 'Competition' ? 'bg-blue-100 text-blue-800' :
                      award.type === 'Academic' ? 'bg-green-100 text-green-800' :
                      award.type === 'Coding' ? 'bg-red-100 text-red-800' :
                      award.type === 'Innovation' ? 'bg-orange-100 text-orange-800' :
                      'bg-indigo-100 text-indigo-800'
                    }`}>
                      {award.type}
                    </span>
                    <span className="text-sm text-gray-500 font-medium">{award.year}</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-3">{award.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{award.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl">
            <Trophy className="w-8 h-8 text-primary-600" />
            <div className="text-left">
              <div className="text-2xl font-bold text-gray-800">7 Awards</div>
              <div className="text-sm text-gray-600">Across multiple competitions and events</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;