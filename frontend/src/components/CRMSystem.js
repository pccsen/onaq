import React, { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

const CRMSystem = ({ businessType }) => {
  const [activeTab, setActiveTab] = useState('clients');
  const [selectedClient, setSelectedClient] = useState(null);

  const clients = [
    {
      id: 1,
      name: 'Айгуль К.',
      phone: '+7 700 123 4567',
      email: 'aigul@example.com',
      totalOrders: 12,
      totalSpent: 45000,
      lastVisit: '2024-01-10',
      status: 'постоянный',
      notes: 'Предпочитает вечерние часы, любит окрашивание',
      orders: [
        { date: '2024-01-10', service: 'Окрашивание', price: 4500 },
        { date: '2023-12-25', service: 'Стрижка', price: 2500 },
        { date: '2023-12-10', service: 'Маникюр', price: 1500 },
      ],
    },
    {
      id: 2,
      name: 'Данияр Б.',
      phone: '+7 700 234 5678',
      email: 'daniyar@example.com',
      totalOrders: 8,
      totalSpent: 16000,
      lastVisit: '2024-01-08',
      status: 'новый',
      notes: 'Регулярный клиент, предпочитает стрижку + борода',
      orders: [
        { date: '2024-01-08', service: 'Стрижка + борода', price: 2500 },
        { date: '2023-12-20', service: 'Бритье', price: 2000 },
      ],
    },
    {
      id: 3,
      name: 'Елена С.',
      phone: '+7 700 345 6789',
      email: 'elena@example.com',
      totalOrders: 15,
      totalSpent: 30000,
      lastVisit: '2024-01-12',
      status: 'VIP',
      notes: 'VIP клиент, всегда заказывает букеты на праздники',
      orders: [
        { date: '2024-01-12', service: 'Букет роз', price: 3500 },
        { date: '2023-12-31', service: 'Букет микс', price: 4500 },
        { date: '2023-12-15', service: 'Тюльпаны', price: 2500 },
      ],
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'VIP':
        return 'bg-purple-100 text-purple-800';
      case 'постоянный':
        return 'bg-green-100 text-green-800';
      case 'новый':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <ScrollAnimation>
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            CRM система
          </h2>
          <p className="text-lg text-gray-600">
            Управление клиентской базой и история взаимодействий
          </p>
        </div>
      </ScrollAnimation>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="flex space-x-4 bg-gray-100 p-2 rounded-xl">
          <button
            onClick={() => setActiveTab('clients')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'clients'
                ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-lg'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            Клиенты
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'analytics'
                ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-lg'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            Аналитика
          </button>
        </div>
      </div>

      {activeTab === 'clients' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Clients List */}
          <div className="lg:col-span-2 space-y-4">
            {clients.map((client) => (
              <ScrollAnimation key={client.id} delay={client.id * 0.1}>
                <div
                  className={`card card-hover cursor-pointer ${
                    selectedClient?.id === client.id ? 'ring-2 ring-primary-500' : ''
                  }`}
                  onClick={() => setSelectedClient(client)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {client.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{client.name}</h3>
                          <p className="text-sm text-gray-600">{client.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mt-4">
                        <div>
                          <p className="text-xs text-gray-500">Заказов</p>
                          <p className="text-lg font-bold text-gray-900">{client.totalOrders}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Потрачено</p>
                          <p className="text-lg font-bold text-primary-600">{client.totalSpent.toLocaleString()} ₸</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Последний визит</p>
                          <p className="text-sm font-semibold text-gray-700">{client.lastVisit}</p>
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(client.status)}`}>
                      {client.status}
                    </span>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Client Details */}
          <div className="lg:col-span-1">
            {selectedClient ? (
              <ScrollAnimation>
                <div className="card sticky top-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Детали клиента</h3>
                  
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      {selectedClient.name.charAt(0)}
                    </div>
                    <h4 className="text-xl font-bold text-center text-gray-900 mb-2">{selectedClient.name}</h4>
                    <p className="text-center text-gray-600 mb-1">{selectedClient.phone}</p>
                    <p className="text-center text-gray-600 mb-4">{selectedClient.email}</p>
                    <div className="text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(selectedClient.status)}`}>
                        {selectedClient.status}
                      </span>
                    </div>
                  </div>

                  <div className="border-t pt-4 mb-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Заметки:</h5>
                    <p className="text-sm text-gray-600">{selectedClient.notes}</p>
                  </div>

                  <div className="border-t pt-4">
                    <h5 className="font-semibold text-gray-900 mb-3">История заказов:</h5>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {selectedClient.orders.map((order, index) => (
                        <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{order.service}</p>
                            <p className="text-xs text-gray-500">{order.date}</p>
                          </div>
                          <p className="text-sm font-bold text-primary-600">{order.price} ₸</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ) : (
              <div className="card">
                <p className="text-center text-gray-500">Выберите клиента для просмотра деталей</p>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'analytics' && (
        <ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{clients.length}</h3>
              <p className="text-gray-600">Всего клиентов</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {clients.reduce((sum, c) => sum + c.totalOrders, 0)}
              </h3>
              <p className="text-gray-600">Всего заказов</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-primary-600 mb-2">
                {clients.reduce((sum, c) => sum + c.totalSpent, 0).toLocaleString()} ₸
              </h3>
              <p className="text-gray-600">Общая выручка</p>
            </div>
          </div>
        </ScrollAnimation>
      )}
    </div>
  );
};

export default CRMSystem;

