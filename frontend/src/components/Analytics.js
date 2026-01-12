import React, { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

const Analytics = ({ businessType }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const stats = {
    revenue: { today: 15000, week: 95000, month: 420000, year: 4800000 },
    orders: { today: 5, week: 32, month: 145, year: 1680 },
    clients: { today: 2, week: 12, month: 58, year: 680 },
    average: { today: 3000, week: 2968, month: 2896, year: 2857 },
  };

  const topProducts = [
    { name: 'Стрижка женская', sales: 45, revenue: 112500 },
    { name: 'Окрашивание', sales: 32, revenue: 144000 },
    { name: 'Маникюр', sales: 58, revenue: 87000 },
    { name: 'Букет роз', sales: 28, revenue: 98000 },
    { name: 'Бритье', sales: 24, revenue: 48000 },
  ];

  const getCurrentValue = (key) => stats[key][selectedPeriod];

  return (
    <div className="max-w-7xl mx-auto">
      <ScrollAnimation>
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Аналитика и отчеты
          </h2>
          <p className="text-lg text-gray-600">
            Подробная статистика и анализ вашего бизнеса
          </p>
        </div>
      </ScrollAnimation>

      {/* Period Selector */}
      <div className="flex justify-center mb-8">
        <div className="flex space-x-2 bg-gray-100 p-2 rounded-xl">
          {['today', 'week', 'month', 'year'].map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                selectedPeriod === period
                  ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              {period === 'today' ? 'Сегодня' : period === 'week' ? 'Неделя' : period === 'month' ? 'Месяц' : 'Год'}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <ScrollAnimation delay={0.1}>
          <div className="card text-center glow-effect">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-3xl font-bold text-primary-600 mb-2">
              {getCurrentValue('revenue').toLocaleString()} ₸
            </h3>
            <p className="text-gray-600">Выручка</p>
            <div className="mt-4 flex items-center justify-center text-green-600 text-sm">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              +12.5%
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <div className="card text-center glow-effect">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-3xl font-bold text-accent-600 mb-2">
              {getCurrentValue('orders')}
            </h3>
            <p className="text-gray-600">Заказов</p>
            <div className="mt-4 flex items-center justify-center text-green-600 text-sm">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              +8.3%
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.3}>
          <div className="card text-center glow-effect">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-3xl font-bold text-secondary-600 mb-2">
              {getCurrentValue('clients')}
            </h3>
            <p className="text-gray-600">Новых клиентов</p>
            <div className="mt-4 flex items-center justify-center text-green-600 text-sm">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              +15.2%
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.4}>
          <div className="card text-center glow-effect">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-3xl font-bold text-primary-600 mb-2">
              {getCurrentValue('average')} ₸
            </h3>
            <p className="text-gray-600">Средний чек</p>
            <div className="mt-4 flex items-center justify-center text-green-600 text-sm">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              +4.1%
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ScrollAnimation delay={0.5}>
          <div className="card">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Динамика выручки</h3>
            <div className="h-64 flex items-end justify-between gap-2">
              {[65, 80, 72, 90, 85, 95, 100].map((height, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-gradient-to-t from-primary-600 to-accent-500 rounded-t-lg mb-2 transition-all hover:opacity-80"
                    style={{ height: `${height}%` }}
                  ></div>
                  <span className="text-xs text-gray-600">{['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'][index]}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.6}>
          <div className="card">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Топ товаров/услуг</h3>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-900">{product.name}</span>
                    <span className="text-sm font-bold text-primary-600">{product.revenue.toLocaleString()} ₸</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary-600 to-accent-500 h-2 rounded-full"
                      style={{ width: `${(product.sales / topProducts[0].sales) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{product.sales} продаж</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Additional Stats */}
      <ScrollAnimation delay={0.7}>
        <div className="card">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Дополнительная статистика</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg">
              <p className="text-2xl font-bold text-gray-900 mb-1">87%</p>
              <p className="text-sm text-gray-600">Конверсия</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-accent-50 to-secondary-50 rounded-lg">
              <p className="text-2xl font-bold text-gray-900 mb-1">4.8</p>
              <p className="text-sm text-gray-600">Средняя оценка</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-secondary-50 to-primary-50 rounded-lg">
              <p className="text-2xl font-bold text-gray-900 mb-1">24ч</p>
              <p className="text-sm text-gray-600">Время ответа</p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Analytics;

