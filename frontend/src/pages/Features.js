import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';

const Features = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Автоматизация заказов',
      description: 'Полностью автоматизированная система принятия и обработки заказов. Клиенты могут оставлять заказы 24/7, а вы получаете уведомления в реальном времени.',
      details: [
        'Онлайн-бронирование и запись',
        'Автоматические уведомления',
        'Управление расписанием',
        'Интеграция с календарем',
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: '📊',
      title: 'CRM система',
      description: 'Мощная система управления клиентской базой. Храните всю историю взаимодействий, предпочтения клиентов и анализируйте поведение.',
      details: [
        'База клиентов с историей',
        'Отслеживание взаимодействий',
        'Сегментация клиентов',
        'Напоминания и уведомления',
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      color: 'from-accent-500 to-accent-600',
    },
    {
      icon: '🛍️',
      title: 'Витрина товаров/услуг',
      description: 'Создайте красивую онлайн-витрину для ваших товаров и услуг. Загружайте фото, добавляйте описания, устанавливайте цены.',
      details: [
        'Каталог товаров и услуг',
        'Фото и описания',
        'Гибкое ценообразование',
        'Категории и фильтры',
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      color: 'from-secondary-500 to-secondary-600',
    },
    {
      icon: '🤖',
      title: 'AI-консультант',
      description: 'Умный помощник для ваших клиентов. Отвечает на вопросы, помогает с выбором товаров и услуг, работает круглосуточно.',
      details: [
        'Чат-бот с AI',
        'Автоматические ответы',
        'Подбор товаров/услуг',
        'Интеграция с базой знаний',
      ],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      color: 'from-primary-500 to-accent-500',
    },
    {
      icon: '📈',
      title: 'Аналитика и отчеты',
      description: 'Подробная статистика и аналитика вашего бизнеса. Отслеживайте продажи, популярные товары, активность клиентов.',
      details: [
        'Статистика продаж',
        'Анализ клиентской базы',
        'Отчеты по периодам',
        'Экспорт данных',
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      color: 'from-accent-500 to-secondary-500',
    },
    {
      icon: '📱',
      title: 'Мобильная адаптация',
      description: 'Полностью адаптивный дизайн для всех устройств. Ваши клиенты могут заказывать с компьютера, планшета или смартфона.',
      details: [
        'Адаптивный дизайн',
        'Мобильное приложение (скоро)',
        'Быстрая загрузка',
        'Удобный интерфейс',
      ],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      color: 'from-primary-500 to-secondary-500',
    },
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-primary-100 via-white to-accent-100 py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop')"
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 bg-clip-text text-transparent">
                  Функции платформы
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Все необходимые инструменты для успешного ведения бизнеса в одной платформе
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-semibold">🚀 Автоматизация</div>
                <div className="px-4 py-2 bg-accent-100 rounded-full text-accent-700 font-semibold">📊 CRM</div>
                <div className="px-4 py-2 bg-secondary-100 rounded-full text-secondary-700 font-semibold">🤖 AI</div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 md:space-y-24">
            {features.map((feature, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}>
                  <div className="flex-1 w-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-3xl md:text-4xl shadow-xl float-animation`} style={{ animationDelay: `${index * 0.2}s` }}>
                        {feature.icon}
                      </div>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                        {feature.title}
                      </h2>
                    </div>
                    <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-3 md:space-y-4">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start group">
                          <div className={`flex-shrink-0 w-6 h-6 md:w-7 md:h-7 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mr-3 mt-0.5 shadow-md group-hover:scale-110 transition-transform`}>
                            <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-sm md:text-base font-medium">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity transform group-hover:scale-110`}></div>
                      <div className="relative bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transform group-hover:-translate-y-2 transition-all duration-300">
                        <div className="aspect-video relative overflow-hidden">
                          <img 
                            src={feature.image} 
                            alt={feature.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            onError={(e) => {
                              e.target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop';
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                          <div className="absolute top-4 right-4">
                            <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-2xl shadow-xl`}>
                              {feature.icon}
                            </div>
                          </div>
                        </div>
                        <div className="p-4 md:p-6 bg-gradient-to-br from-gray-50 to-white">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-bold text-gray-900 text-lg">{feature.title}</h3>
                              <p className="text-sm text-gray-500">Демонстрация функции</p>
                            </div>
                            <Link 
                              to="/demo" 
                              className={`px-4 py-2 bg-gradient-to-r ${feature.color} text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all text-sm`}
                            >
                              Попробовать
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation>
            <div className="text-center text-white max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
                Хотите узнать больше?
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

export default Features;

