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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="section-title">Отзывы клиентов</h2>
            <p className="section-subtitle">
              Что говорят о нас владельцы бизнеса
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <div className="card card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.business}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

