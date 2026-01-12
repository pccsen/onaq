import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Home = () => {
  const features = [
    {
      icon: '📊',
      title: 'Автоматизированный учет',
      description: 'Учет актуального ассортимента в личном кабинете OnaQ',
      visual: 'dashboard',
    },
    {
      icon: '🤖',
      title: 'ИИ-менеджер',
      description: 'Консультация ИИ-менеджера по ассортименту в чате WhatsApp с клиентом',
      visual: 'chat',
    },
    {
      icon: '🔔',
      title: 'Напоминание о поставках',
      description: 'Автоматическая рассылка обновленного ассортимента для клиентов',
      visual: 'notification',
    },
    {
      icon: '⚡',
      title: 'Простая интеграция',
      description: 'Подключение всего за 10 минут',
      visual: 'integration',
    },
  ];

  const whatsappNumber = '+77001234567'; // Замените на ваш номер WhatsApp
  const whatsappMessage = encodeURIComponent('Здравствуйте! Хочу узнать больше о OnaQ');

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-primary-50/30 to-accent-50/30 py-16 md:py-24 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 bg-clip-text text-transparent">OnaQ</span> - умный помощник для вашего бизнеса
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-3 sm:mb-4">
                  Просто. Эффективно. Надежно.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
                  Больше продаж, меньше рутины - AI-менеджер принимает заказы, следит за ассортиментом и напоминает о поставках!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#20BA5A] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Подключить WhatsApp-ассистента
                  </a>
                  <Link to="/demo" className="btn-secondary text-base sm:text-lg px-4 sm:px-6 py-2.5 sm:py-3">
                    Демо
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <div className="relative mt-8 lg:mt-0 float-animation">
                <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl glow-effect">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
                    <div className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">9:41</div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Каталог товаров/услуг</h3>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-2 sm:p-3 card-hover border border-gray-200 hover:border-primary-300 transition-all relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/0 to-accent-100/0 group-hover:from-primary-100/30 group-hover:to-accent-100/30 transition-all duration-300"></div>
                        <div className="aspect-square bg-gradient-to-br from-primary-200 to-accent-200 rounded-lg mb-2 overflow-hidden shadow-md group relative">
                          <img src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=300&h=300&fit=crop" alt="Товар 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 relative z-10" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
                        </div>
                        <p className="text-xs font-semibold text-gray-700 relative z-10">Товар 1</p>
                        <p className="text-xs font-bold text-primary-600 relative z-10">21 000 ₸</p>
                      </div>
                      <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-2 sm:p-3 card-hover border border-gray-200 hover:border-accent-300 transition-all relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-100/0 to-secondary-100/0 group-hover:from-accent-100/30 group-hover:to-secondary-100/30 transition-all duration-300"></div>
                        <div className="aspect-square bg-gradient-to-br from-accent-200 to-secondary-200 rounded-lg mb-2 overflow-hidden shadow-md group relative">
                          <img src="https://images.unsplash.com/photo-1520763185298-1b434c919655?w=300&h=300&fit=crop" alt="Товар 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 relative z-10" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
                        </div>
                        <p className="text-xs font-semibold text-gray-700 relative z-10">Товар 2</p>
                        <p className="text-xs font-bold text-accent-600 relative z-10">39 200 ₸</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 shadow-xl border-2 border-primary-200 pulse-animation">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm">AI</div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-700 hidden sm:inline">+ ваш личный ИИ-менеджер</span>
                    <span className="text-xs font-semibold text-gray-700 sm:hidden">+ ИИ</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 bg-clip-text text-transparent">
                  Мощные функции
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                Все необходимое для успешного ведения бизнеса
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {features.map((feature, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="card card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                      {feature.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  {feature.visual === 'dashboard' && (
                    <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg p-3 sm:p-4 mb-4 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-400/10 to-accent-400/10"></div>
                      <div className="bg-white rounded-lg p-2 sm:p-3 mb-2 shadow-md relative z-10">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <div className="text-xl sm:text-2xl font-bold text-primary-600 mb-1">1 060 445</div>
                            <div className="text-xs sm:text-sm text-gray-600">Продажи по дням</div>
                          </div>
                          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop" alt="График" className="w-12 h-12 rounded-lg object-cover" />
                        </div>
                        <div className="h-12 sm:h-16 bg-gradient-to-t from-primary-200 via-primary-100 to-primary-50 rounded mt-2 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-accent-400/20"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  {feature.visual === 'chat' && (
                    <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg p-3 sm:p-4 mb-4 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=200&fit=crop')] opacity-5"></div>
                      <div className="bg-white rounded-lg p-2 sm:p-3 shadow-md relative z-10">
                        <div className="flex items-start gap-2 mb-2">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-primary-600 to-accent-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-lg">AI</div>
                          <div className="flex-1 min-w-0">
                            <div className="bg-gray-100 rounded-lg p-1.5 sm:p-2 text-xs text-gray-700 mb-1 break-words">
                              Такой букет сколько стоит?
                            </div>
                            <div className="bg-gradient-to-r from-primary-100 to-accent-100 rounded-lg p-1.5 sm:p-2 text-xs text-gray-700 break-words">
                              Данный букет составляет 300 г
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {feature.visual === 'notification' && (
                    <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg p-3 sm:p-4 mb-4 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=200&h=200&fit=crop')] opacity-5"></div>
                      <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md relative z-10">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-sm shadow-lg flex-shrink-0">🔔</div>
                          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                            У нас новая поставка весенних букетов. Хотите порадовать своих любимых?
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {feature.visual === 'integration' && (
                    <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg p-3 sm:p-4 mb-4 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=200&fit=crop')] opacity-5"></div>
                      <div className="flex items-center gap-2 sm:gap-4 relative z-10">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-xl sm:text-2xl shadow-lg transform hover:scale-110 transition-transform">📱</div>
                        <div className="text-xl sm:text-2xl text-primary-600 font-bold">→</div>
                        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg shadow-lg transform hover:scale-110 transition-transform"></div>
                      </div>
                    </div>
                  )}
                  <p className="text-xs sm:text-sm text-gray-600">{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* CTA Card */}
          <ScrollAnimation delay={0.4}>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-primary-500/20 rounded-full blur-3xl"></div>
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Хотите больше продаж?</h2>
                  <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">Подключите AI-менеджера для вашего WhatsApp</p>
                  <a
                    href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 sm:gap-3 bg-[#25D366] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-bold hover:bg-[#20BA5A] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-sm sm:text-base"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span className="hidden sm:inline">Подключить WhatsApp-ассистента</span>
                    <span className="sm:hidden">WhatsApp</span>
                  </a>
                </div>
                <div className="hidden md:flex items-center justify-center gap-4">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-primary-500/30 rounded-full flex items-center justify-center text-3xl lg:text-4xl">🌹</div>
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-accent-500/30 rounded-full flex items-center justify-center text-2xl lg:text-3xl">🌸</div>
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-secondary-500/30 rounded-full flex items-center justify-center text-xl lg:text-2xl">🌺</div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

    </div>
  );
};

export default Home;

