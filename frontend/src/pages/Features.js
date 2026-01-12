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
                Функции платформы
              </h1>
              <p className="text-xl text-gray-600">
                Все необходимые инструменты для успешного ведения бизнеса в одной платформе
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {features.map((feature, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
                  <div className="flex-1">
                    <div className="text-6xl mb-6">{feature.icon}</div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8 h-64 flex items-center justify-center">
                      <div className="text-8xl opacity-50">{feature.icon}</div>
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

