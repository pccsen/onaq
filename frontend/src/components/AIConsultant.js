import React, { useState, useRef, useEffect } from 'react';
import ScrollAnimation from './ScrollAnimation';

const getBusinessName = (type) => {
  const names = {
    beauty: "салона красоты 'Элегант'",
    barber: "барбершопа 'Classic'",
    flowers: "цветочного магазина 'Роза'",
    ecommerce: "магазина 'Уют'",
  };
  return names[type] || 'магазина';
};

const AIConsultant = ({ businessType }) => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: `Здравствуйте! Я AI-консультант ${getBusinessName(businessType)}. Чем могу помочь?`,
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getDemoResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Demo responses based on business type
    const responses = {
      beauty: {
        greeting: 'Здравствуйте! Рады помочь вам выбрать услуги. У нас есть стрижки, окрашивание, маникюр, педикюр и многое другое. Что вас интересует?',
        price: 'Наши цены начинаются от 1500 ₸ за маникюр до 4500 ₸ за окрашивание. Все услуги и цены вы можете увидеть на витрине.',
        appointment: 'Вы можете записаться онлайн прямо здесь! Выберите услугу и нажмите "Записаться". В полной версии вы сможете выбрать мастера и удобное время.',
        services: 'У нас есть стрижка женская (2500 ₸), окрашивание (4500 ₸), маникюр (1500 ₸), педикюр (2000 ₸), массаж лица (3000 ₸) и укладка (1800 ₸).',
      },
      barber: {
        greeting: 'Привет! Мы готовы помочь вам с выбором стрижки или бритьем. У нас работают опытные мастера.',
        price: 'Мужская стрижка - 1500 ₸, бритье опасной бритвой - 2000 ₸, стрижка + борода - 2500 ₸. Полный прайс на витрине.',
        appointment: 'Запись очень простая! Выберите услугу, нажмите "Записаться" и выберите мастера. В полной версии доступен календарь с доступным временем.',
        services: 'Услуги: мужская стрижка (1500 ₸), бритье опасной бритвой (2000 ₸), стрижка + борода (2500 ₸), укладка (800 ₸), борода + усы (1200 ₸).',
      },
      flowers: {
        greeting: 'Добро пожаловать! Поможем выбрать букет или композицию. У нас большой выбор свежих цветов.',
        price: 'Цены от 2000 ₸ за горшечное растение до 4500 ₸ за букет микс. Все товары и цены на витрине.',
        delivery: 'В полной версии доступна доставка. Вы можете указать адрес при оформлении заказа. Сейчас это демо-версия.',
        services: 'У нас есть букеты роз (3500 ₸), тюльпанов (2500 ₸), композиции из хризантем (2800 ₸), букет микс (4500 ₸) и горшечные растения (2000 ₸).',
      },
      ecommerce: {
        greeting: 'Здравствуйте! Добро пожаловать в наш магазин. Помогу выбрать товары для уюта вашего дома.',
        price: 'У нас доступные цены: свечи от 1200 ₸, пледы от 3500 ₸, вазы от 2800 ₸. Полный каталог на витрине.',
        delivery: 'В полной версии доступна доставка и несколько способов оплаты. Сейчас это демо-версия.',
        services: 'Ассортимент: свечи ароматические (1200 ₸), пледы мягкие (3500 ₸), вазы керамические (2800 ₸), подушки декоративные (2200 ₸).',
      },
    };

    const businessResponses = responses[businessType] || responses.ecommerce;

    if (lowerMessage.includes('привет') || lowerMessage.includes('здравствуйте') || lowerMessage.includes('добрый')) {
      return businessResponses.greeting;
    }
    if (lowerMessage.includes('цена') || lowerMessage.includes('сколько стоит') || lowerMessage.includes('стоимость')) {
      return businessResponses.price;
    }
    if (lowerMessage.includes('записаться') || lowerMessage.includes('запись') || lowerMessage.includes('брониров')) {
      return businessResponses.appointment || businessResponses.delivery;
    }
    if (lowerMessage.includes('услуг') || lowerMessage.includes('товар') || lowerMessage.includes('что есть') || lowerMessage.includes('ассортимент')) {
      return businessResponses.services;
    }
    if (lowerMessage.includes('доставк') || lowerMessage.includes('оплат')) {
      return businessResponses.delivery || 'В полной версии доступны различные способы доставки и оплаты. Сейчас это демо-версия.';
    }

    return `Спасибо за вопрос! В полной версии AI-консультанта я смогу ответить более подробно. Сейчас это демо-версия. Вы можете посмотреть наш ассортимент на витрине или связаться с нами через форму обратной связи.`;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { type: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI typing delay
    setTimeout(() => {
      const response = getDemoResponse(userMessage);
      setMessages((prev) => [...prev, { type: 'bot', text: response }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <ScrollAnimation>
        <div className="card">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-xl">🤖</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">AI-консультант</h3>
                <p className="text-sm text-gray-500">Демо-версия</p>
              </div>
            </div>
          </div>

          <div className="border rounded-lg h-96 overflow-y-auto p-4 bg-gray-50 mb-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-4 ${
                    message.type === 'user'
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-900 shadow-sm'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-white text-gray-900 rounded-lg p-4 shadow-sm">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Напишите ваш вопрос..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              disabled={isTyping}
            />
            <button
              onClick={handleSend}
              disabled={isTyping || !input.trim()}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Отправить
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Это демо-версия AI-консультанта. В полной версии доступны расширенные возможности и обучение на ваших данных.
          </p>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default AIConsultant;

