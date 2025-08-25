import React from 'react';
import { Trophy, Medal, Star, Crown, Award, Zap } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: 'Department Coding Club Treasurer',
      year: '2024',
      description: 'Elected as treasurer for the department coding club, managing events and technical activities',
      type: 'Leadership',
      icon: <Star className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-600',
      prize: 'Leadership Role'
    },
    {
      title: '1st Prize - Department Level Techno Fest 2k25',
      year: '2025',
      description: 'Won first place in Department Level competition at Techno Fest 2k25 in Intra-College Event',
      type: 'Competition',
      icon: <Crown className="w-6 h-6" />,
      color: 'from-yellow-400 to-orange-500',
      prize: '1st Prize'
    },
    {
      title: '1st Prize - Proof of Concept 2k25',
      year: '2025',
      description: 'First place in Proof of Concept 2k25 competition in Intra-College Event',
      type: 'Innovation',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-yellow-400 to-orange-500',
      prize: '1st Prize'
    },
    {
      title: '1st Prize - Ideathon 2k25',
      year: '2025',
      description: 'Won first place in Ideathon 2k25 in Intra-College Event for innovative solution',
      type: 'Innovation',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-yellow-400 to-orange-500',
      prize: '1st Prize'
    },
    {
      title: '1st Prize - Ruby Day Prototype Expo',
      year: '2025',
      description: 'Won first place in Ruby Day Science Day Prototype Expo for innovative project',
      type: 'Innovation',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-yellow-400 to-orange-500',
      prize: '1st Prize'
    },
    {
      title: '2nd Prize - KEC Hackathon 2k25',
      year: '2025',
      description: 'Second place in KEC Hackathon 2k25 - A State Level Hackathon for innovative solution development',
      type: 'Hackathon',
      icon: <Medal className="w-6 h-6" />,
      color: 'from-gray-400 to-gray-600',
      prize: '2nd Prize',
      isStateLevel: true
    },
    {
      title: '1st Prize - Winty Mindz Hackathon',
      year: '2024',
      description: 'Won first place in the Winty Mindz Hackathon at Vellalar College of Engineering',
      type: 'Hackathon',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-yellow-400 to-orange-500',
      prize: '1st Prize'
    },
    {
      title: '1st Prize - Ideathon 2k24',
      year: '2024',
      description: 'First place in Ideathon 2k24 at Vellalar College of Engineering for creative solution',
      type: 'Innovation',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-yellow-400 to-orange-500',
      prize: '1st Prize'
    },
    {
      title: '1st Prize - Proof of Concept 2k24',
      year: '2024',
      description: 'First place in Proof of Concept 2k24 competition in Intra-College Event',
      type: 'Competition',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-yellow-400 to-orange-500',
      prize: '1st Prize'
    },
    {
      title: '2nd Prize - Science Day 2k24',
      year: '2024',
      description: 'Second place in Science Day 2k24 in Intra-College Event for scientific innovation',
      type: 'Academic',
      icon: <Medal className="w-6 h-6" />,
      color: 'from-gray-400 to-gray-600',
      prize: '2nd Prize'
    },
    {
      title: '2nd Prize - Paper Presentation',
      year: '2024',
      description: 'Second place in paper presentation at Vellalar College of Engineering',
      type: 'Academic',
      icon: <Medal className="w-6 h-6" />,
      color: 'from-gray-400 to-gray-600',
      prize: '2nd Prize'
    },
    {
      title: '2nd Prize - PSG Login Coding Contest',
      year: '2024',
      description: 'Second place in coding contest conducted in PSG Login 2k24',
      type: 'Coding',
      icon: <Medal className="w-6 h-6" />,
      color: 'from-gray-400 to-gray-600',
      prize: '2nd Prize'
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Hackathon':
        return { icon: <Zap className="w-6 h-6" />, color: 'text-purple-600 bg-purple-100' };
      case 'Competition':
        return { icon: <Trophy className="w-6 h-6" />, color: 'text-blue-600 bg-blue-100' };
      case 'Academic':
        return { icon: <Award className="w-6 h-6" />, color: 'text-green-600 bg-green-100' };
      case 'Coding':
        return { icon: <Medal className="w-6 h-6" />, color: 'text-red-600 bg-red-100' };
      case 'Innovation':
        return { icon: <Star className="w-6 h-6" />, color: 'text-orange-600 bg-orange-100' };
      case 'Leadership':
        return { icon: <Crown className="w-6 h-6" />, color: 'text-indigo-600 bg-indigo-100' };
      default:
        return { icon: <Trophy className="w-6 h-6" />, color: 'text-gray-600 bg-gray-100' };
    }
  };

  const firstPrizes = awards.filter(award => award.prize === '1st Prize').length;
  const secondPrizes = awards.filter(award => award.prize === '2nd Prize').length;
  const stateLevelAwards = awards.filter(award => award.isStateLevel).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-32 pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Honors & Awards</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition and achievements spanning hackathons, competitions, academic excellence, and leadership roles
          </p>
        </div>

        {/* Awards Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <Trophy className="w-12 h-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">{firstPrizes}</div>
            <div className="text-lg font-medium">First Prizes</div>
          </div>
          <div className="bg-gradient-to-r from-gray-400 to-gray-600 rounded-2xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <Medal className="w-12 h-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">{secondPrizes}</div>
            <div className="text-lg font-medium">Second Prizes</div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <Star className="w-12 h-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">{stateLevelAwards}</div>
            <div className="text-lg font-medium">State Level</div>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <Crown className="w-12 h-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">{awards.length}</div>
            <div className="text-lg font-medium">Total Awards</div>
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {awards.map((award, index) => {
            const typeInfo = getTypeIcon(award.type);
            return (
              <div key={index} className="group bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-l-4 border-transparent hover:border-blue-500 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* State Level Badge */}
                {award.isStateLevel && (
                  <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    STATE LEVEL
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-4 rounded-2xl ${typeInfo.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {typeInfo.icon}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-4 py-2 bg-gradient-to-r ${award.color} text-white rounded-full text-sm font-bold shadow-lg`}>
                          {award.prize}
                        </span>
                        <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">{award.year}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        award.type === 'Hackathon' ? 'bg-purple-100 text-purple-800' :
                        award.type === 'Competition' ? 'bg-blue-100 text-blue-800' :
                        award.type === 'Academic' ? 'bg-green-100 text-green-800' :
                        award.type === 'Coding' ? 'bg-red-100 text-red-800' :
                        award.type === 'Innovation' ? 'bg-orange-100 text-orange-800' :
                        'bg-indigo-100 text-indigo-800'
                      }`}>
                        {award.type}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                    {award.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{award.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Achievement Timeline */}
        <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Achievement Timeline</h2>
            <p className="text-xl text-gray-300">A journey of consistent excellence and recognition</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">🏆 2025 Achievements</h3>
              <div className="space-y-4">
                {awards.filter(award => award.year === '2025').map((award, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                    <div className={`p-2 bg-gradient-to-r ${award.color} rounded-lg`}>
                      {award.icon}
                    </div>
                    <div>
                      <div className="font-semibold">{award.title}</div>
                      <div className="text-sm text-gray-300">{award.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-400">🚀 2024 Achievements</h3>
              <div className="space-y-4">
                {awards.filter(award => award.year === '2024').map((award, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                    <div className={`p-2 bg-gradient-to-r ${award.color} rounded-lg`}>
                      {award.icon}
                    </div>
                    <div>
                      <div className="font-semibold">{award.title}</div>
                      <div className="text-sm text-gray-300">{award.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;