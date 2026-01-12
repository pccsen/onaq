import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';

const About = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Фокус на клиенте',
      description: 'Мы создаем решения, которые действительно помогают малому бизнесу расти и развиваться.',
    },
    {
      icon: '💡',
      title: 'Инновации',
      description: 'Используем современные технологии, включая AI, для автоматизации процессов и повышения эффективности.',
    },
    {
      icon: '🤝',
      title: 'Поддержка',
      description: 'Наша команда всегда готова помочь вам на каждом этапе работы с платформой.',
    },
    {
      icon: '🚀',
      title: 'Развитие',
      description: 'Постоянно улучшаем платформу, добавляем новые функции и учитываем обратную связь от клиентов.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-100 via-white to-accent-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                О нас
              </h1>
              <p className="text-xl text-gray-600">
                Команда shnq создает решения для малого бизнеса
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-16">
                <h2 className="section-title">Наша миссия</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Мы верим, что каждый малый бизнес заслуживает современных инструментов для управления и роста. 
                  OnaQ был создан для того, чтобы предоставить владельцам малого бизнеса доступ к мощным инструментам, 
                  которые раньше были доступны только крупным компаниям.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.1}>
              <div className="card mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Что такое OnaQ?</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  OnaQ - это универсальная платформа для малого бизнеса, которая объединяет все необходимые инструменты 
                  в одном месте. Мы создали решение, которое подходит для различных типов бизнеса: салонов красоты, 
                  барбершопов, цветочных магазинов и мини e-commerce.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Наша платформа включает в себя автоматизацию заказов, CRM систему, онлайн-витрину товаров и услуг, 
                  AI-консультанта для клиентов и подробную аналитику. Все это в удобном и интуитивном интерфейсе.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="section-title">Наши ценности</h2>
              <p className="section-subtitle">
                Принципы, которыми мы руководствуемся в работе
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="card card-hover text-center">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="section-title">Команда shnq</h2>
              <p className="text-lg text-gray-600 mb-8">
                Мы - команда разработчиков и бизнес-аналитиков, которые специализируются на создании решений для малого бизнеса. 
                Наш опыт и знания позволяют нам создавать продукты, которые действительно помогают бизнесу расти.
              </p>
              <p className="text-gray-600">
                Мы всегда открыты для диалога и готовы помочь вам найти оптимальное решение для вашего бизнеса. 
                Свяжитесь с нами для консультации - мы будем рады обсудить, как OnaQ может помочь вашему бизнесу.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation>
            <div className="text-center text-white max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
                Готовы работать с нами?
              </h2>
              <p className="text-xl mb-10 opacity-95 drop-shadow-md">
                Попробуйте демо-версию или свяжитесь с нами для консультации
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/demo" className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105">
                  Попробовать демо
                </Link>
                <Link to="/contact" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-lg">
                  Связаться с нами
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default About;

