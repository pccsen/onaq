import React, { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Как быстро можно подключить OnaQ?',
      answer: 'Подключение занимает всего 10 минут! Наша команда поможет вам настроить платформу под ваш бизнес и обучить персонал.',
    },
    {
      question: 'Нужны ли технические знания для работы с платформой?',
      answer: 'Нет, OnaQ разработан специально для малого бизнеса. Интерфейс интуитивно понятен, и мы предоставляем полную поддержку.',
    },
    {
      question: 'Можно ли использовать OnaQ на мобильном телефоне?',
      answer: 'Да! Платформа полностью адаптирована для всех устройств. Вы можете управлять бизнесом с компьютера, планшета или смартфона.',
    },
    {
      question: 'Как работает AI-консультант?',
      answer: 'AI-консультант работает 24/7, отвечает на вопросы клиентов, помогает с выбором товаров и услуг, и может быть обучен на ваших данных.',
    },
    {
      question: 'Какие способы оплаты доступны?',
      answer: 'Мы предлагаем гибкие тарифы. Оплата производится ежемесячно. Для подключения свяжитесь с нами через WhatsApp или форму обратной связи.',
    },
    {
      question: 'Можно ли попробовать перед покупкой?',
      answer: 'Конечно! У нас есть демо-версия, где вы можете протестировать все функции платформы. Перейдите на страницу "Демо" для ознакомления.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="section-title">Часто задаваемые вопросы</h2>
            <p className="section-subtitle">
              Ответы на популярные вопросы о платформе OnaQ
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <ScrollAnimation key={index} delay={index * 0.05}>
              <div className="card">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h3 className="text-lg font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

