import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Stats = () => {
  const stats = [
    {
      number: '1000+',
      label: 'Довольных клиентов',
      icon: '👥',
      color: 'from-primary-500 to-primary-600',
    },
    {
      number: '50K+',
      label: 'Обработанных заказов',
      icon: '📦',
      color: 'from-accent-500 to-accent-600',
    },
    {
      number: '24/7',
      label: 'AI-консультант',
      icon: '🤖',
      color: 'from-secondary-500 to-secondary-600',
    },
    {
      number: '99%',
      label: 'Удовлетворенность',
      icon: '⭐',
      color: 'from-primary-500 to-accent-500',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&h=1080&fit=crop')"
        }}
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 bg-clip-text text-transparent">
                OnaQ в цифрах
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Результаты, которые говорят сами за себя
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <div className="card card-hover text-center glow-effect relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100/50 to-accent-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-3xl float-animation shadow-xl relative z-10`} style={{ animationDelay: `${index * 0.2}s` }}>
                  {stat.icon}
                </div>
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 relative z-10`}>
                  {stat.number}
                </div>
                <p className="text-sm md:text-base text-gray-600 font-medium relative z-10">
                  {stat.label}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

