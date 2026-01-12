import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';

const Pricing = () => {
  const plans = [
    {
      name: 'Базовый',
      price: 'от 15 000 ₸',
      period: 'в месяц',
      description: 'Идеально для старта',
      features: [
        'До 100 товаров/услуг',
        'Базовая CRM',
        'Онлайн-витрина',
        'Мобильная адаптация',
        'Email поддержка',
      ],
      popular: false,
    },
    {
      name: 'PRO',
      price: 'от 30 000 ₸',
      period: 'в месяц',
      description: 'Для растущего бизнеса',
      features: [
        'Неограниченное количество товаров/услуг',
        'Расширенная CRM',
        'AI-консультант',
        'Аналитика и отчеты',
        'Приоритетная поддержка',
        'Интеграции с соц. сетями',
      ],
      popular: true,
    },
    {
      name: 'White-label',
      price: 'По запросу',
      period: '',
      description: 'Индивидуальное решение',
      features: [
        'Все функции PRO',
        'Индивидуальный дизайн',
        'Персональный домен',
        'Интеграции по запросу',
        'Персональный менеджер',
        'Настройка под ваш бренд',
      ],
      popular: false,
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
                Тарифы
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Выберите план, который подходит вашему бизнесу
              </p>
              <p className="text-gray-500">
                Все тарифы подключаются после консультации с нашей командой
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className={`card card-hover relative ${plan.popular ? 'ring-4 ring-primary-500 ring-opacity-50 scale-105 bg-gradient-to-br from-primary-50 to-accent-50' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl">
                      Популярный
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-500 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      {plan.period && (
                        <span className="text-gray-500 ml-2">{plan.period}</span>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Оставить заявку
                  </Link>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Важная информация
                </h3>
                <p className="text-gray-600 mb-4">
                  Все тарифы подключаются после консультации с нашей командой. Мы поможем выбрать оптимальный план для вашего бизнеса и настроим платформу под ваши потребности.
                </p>
                <p className="text-gray-600">
                  Свяжитесь с нами через форму заявки или напишите нам напрямую для получения персонального предложения.
                </p>
              </div>
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
                Готовы начать?
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

export default Pricing;

