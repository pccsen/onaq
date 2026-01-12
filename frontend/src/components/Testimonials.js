import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Анна Иванова',
      business: 'Салон красоты "Элегант"',
      text: 'OnaQ полностью изменил наш бизнес! Заказы обрабатываются автоматически, клиенты довольны, а мы экономим кучу времени.',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'Иван Смирнов',
      business: 'Barbershop "Classic"',
      text: 'Отличная платформа! AI-консультант работает круглосуточно, клиенты могут записаться в любое время. Продажи выросли на 40%!',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      name: 'Мария Петрова',
      business: 'Цветочный магазин "Роза"',
      text: 'Простота использования и мощный функционал. Наша клиентская база выросла, а управление заказами стало намного проще.',
      rating: 5,
      avatar: '👩‍💼',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1557683311-ea7384d0e527?w=1920&h=1080&fit=crop')"
        }}
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="section-title">Отзывы клиентов</h2>
            <p className="section-subtitle">
              Что говорят о нас владельцы бизнеса
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <div className="card card-hover relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-200/30 to-accent-200/30 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-2xl shadow-lg ring-4 ring-primary-100">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.business}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg drop-shadow-sm">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-600 italic leading-relaxed">"{testimonial.text}"</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

