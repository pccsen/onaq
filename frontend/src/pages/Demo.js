import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import DemoStorefront from '../components/DemoStorefront';
import AIConsultant from '../components/AIConsultant';
import OrderAutomation from '../components/OrderAutomation';
import CRMSystem from '../components/CRMSystem';
import Analytics from '../components/Analytics';

const Demo = () => {
  const [activeTab, setActiveTab] = useState('storefront');
  const [businessType, setBusinessType] = useState('beauty');

  const businessTypes = [
    { value: 'beauty', label: 'Салон красоты', icon: '💇‍♀️' },
    { value: 'barber', label: 'Барбершоп', icon: '✂️' },
    { value: 'flowers', label: 'Цветочный магазин', icon: '🌹' },
    { value: 'ecommerce', label: 'Мини e-commerce', icon: '🛍️' },
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-100 via-white to-accent-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Демо-версия платформы
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Попробуйте функционал платформы OnaQ в действии
              </p>
              
              {/* Business Type Selector */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {businessTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setBusinessType(type.value)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                      businessType === type.value
                        ? 'bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 text-white shadow-xl transform scale-105'
                        : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 border-2 border-gray-200 hover:border-primary-300 hover:shadow-lg'
                    }`}
                  >
                    <span className="text-2xl">{type.icon}</span>
                    <span>{type.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center overflow-x-auto">
            <div className="flex space-x-2 md:space-x-4">
              <button
                onClick={() => setActiveTab('storefront')}
                className={`px-4 md:px-6 py-3 rounded-xl font-bold transition-all duration-300 whitespace-nowrap text-sm md:text-base ${
                  activeTab === 'storefront'
                    ? 'bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 text-white shadow-xl'
                    : 'bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 hover:shadow-lg'
                }`}
              >
                📦 Витрина
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`px-4 md:px-6 py-3 rounded-xl font-bold transition-all duration-300 whitespace-nowrap text-sm md:text-base ${
                  activeTab === 'orders'
                    ? 'bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 text-white shadow-xl'
                    : 'bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 hover:shadow-lg'
                }`}
              >
                🚀 Заказы
              </button>
              <button
                onClick={() => setActiveTab('crm')}
                className={`px-4 md:px-6 py-3 rounded-xl font-bold transition-all duration-300 whitespace-nowrap text-sm md:text-base ${
                  activeTab === 'crm'
                    ? 'bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 text-white shadow-xl'
                    : 'bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 hover:shadow-lg'
                }`}
              >
                📊 CRM
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-4 md:px-6 py-3 rounded-xl font-bold transition-all duration-300 whitespace-nowrap text-sm md:text-base ${
                  activeTab === 'analytics'
                    ? 'bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 text-white shadow-xl'
                    : 'bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 hover:shadow-lg'
                }`}
              >
                📈 Аналитика
              </button>
              <button
                onClick={() => setActiveTab('ai')}
                className={`px-4 md:px-6 py-3 rounded-xl font-bold transition-all duration-300 whitespace-nowrap text-sm md:text-base ${
                  activeTab === 'ai'
                    ? 'bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 text-white shadow-xl'
                    : 'bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 hover:shadow-lg'
                }`}
              >
                🤖 AI
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'storefront' && (
            <div>
              <DemoStorefront businessType={businessType} />
            </div>
          )}
          
          {activeTab === 'orders' && (
            <div>
              <OrderAutomation businessType={businessType} />
            </div>
          )}

          {activeTab === 'crm' && (
            <div>
              <CRMSystem businessType={businessType} />
            </div>
          )}

          {activeTab === 'analytics' && (
            <div>
              <Analytics businessType={businessType} />
            </div>
          )}
          
          {activeTab === 'ai' && (
            <div>
              <AIConsultant businessType={businessType} />
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center">
              <div className="card">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Это демо-версия
                </h3>
                <p className="text-gray-600 mb-6">
                  Вы видите демонстрацию функционала платформы OnaQ. Все данные являются демонстрационными. 
                  В полной версии доступны расширенные возможности: CRM система, аналитика, интеграции, 
                  персональный AI-консультант, обученный на ваших данных, и многое другое.
                </p>
                <p className="text-gray-600 mb-8">
                  Для подключения полной версии и получения персонального решения для вашего бизнеса, 
                  свяжитесь с нами через форму заявки.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="btn-primary">
                    Оставить заявку
                  </Link>
                  <Link to="/features" className="btn-secondary">
                    Узнать больше о функциях
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Demo;

