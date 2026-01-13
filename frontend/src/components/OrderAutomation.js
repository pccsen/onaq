import React, { useState, useEffect } from 'react';
import ScrollAnimation from './ScrollAnimation';
import { createOrder, getOrders } from '../utils/api';
import { useToast } from '../context/ToastContext';

const OrderAutomation = ({ businessType }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const { success, error } = useToast();

  const availableTimes = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

  useEffect(() => {
    loadOrders();
  }, [businessType]);

  const loadOrders = async () => {
    try {
      setLoading(true);
      const response = await getOrders({ businessType });
      if (response.success) {
        setOrders(response.data);
      }
    } catch (err) {
      console.error('Error loading orders:', err);
      // Fallback to demo data if API fails
      setOrders([
        { _id: 1, customerName: 'Айгуль К.', serviceName: 'Стрижка женская', date: '2024-01-15', time: '14:00', status: 'подтвержден', price: 2500 },
        { _id: 2, customerName: 'Данияр Б.', serviceName: 'Бритье', date: '2024-01-15', time: '16:00', status: 'новый', price: 2000 },
        { _id: 3, customerName: 'Елена С.', serviceName: 'Маникюр', date: '2024-01-16', time: '10:00', status: 'подтвержден', price: 1500 },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleBooking = async () => {
    if (!selectedService || !customerName || !customerPhone || !selectedTime) {
      error('Пожалуйста, заполните все поля');
      return;
    }

    try {
      setLoading(true);
      const orderData = {
        customerName,
        customerPhone,
        businessType,
        serviceName: selectedService.name,
        serviceId: selectedService.id,
        price: selectedService.price,
        date: selectedDate.toISOString(),
        time: selectedTime,
        status: 'новый',
      };

      const response = await createOrder(orderData);
      if (response.success) {
        success('Запись успешно создана!');
        setCustomerName('');
        setCustomerPhone('');
        setSelectedTime('');
        setSelectedService(null);
        loadOrders();
      }
    } catch (err) {
      console.error('Error creating order:', err);
      error('Ошибка при создании записи. Попробуйте еще раз.');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'подтвержден':
        return 'bg-green-100 text-green-800';
      case 'новый':
        return 'bg-blue-100 text-blue-800';
      case 'отменен':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <ScrollAnimation>
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Автоматизация заказов
          </h2>
          <p className="text-lg text-gray-600">
            Управление записями и заказами в реальном времени
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar and Booking */}
        <ScrollAnimation delay={0.1}>
          <div className="card">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Онлайн-бронирование</h3>
            
            {/* Calendar */}
            <div className="mb-6">
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day) => (
                  <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 28 }, (_, i) => {
                  const day = i + 1;
                  const isSelected = selectedDate.getDate() === day;
                  return (
                    <button
                      key={day}
                      onClick={() => {
                        const newDate = new Date(selectedDate);
                        newDate.setDate(day);
                        setSelectedDate(newDate);
                      }}
                      className={`p-2 rounded-lg text-sm font-medium transition-all ${
                        isSelected
                          ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Выберите время:
              </label>
              <div className="grid grid-cols-5 gap-2">
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-2 rounded-lg text-sm font-medium transition-all ${
                      selectedTime === time
                        ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Customer Info */}
            <div className="mb-4 space-y-3">
              <input
                type="text"
                placeholder="Имя клиента"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <input
                type="tel"
                placeholder="Телефон"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* Booking Button */}
            <button
              onClick={handleBooking}
              disabled={!selectedTime || !customerName || !customerPhone || loading}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Создание...' : 'Забронировать'}
            </button>

            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Демо:</strong> В полной версии доступен выбор мастера, уведомления клиентам и интеграция с календарем.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        {/* Orders List */}
        <ScrollAnimation delay={0.2}>
          <div className="card">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Список заказов</h3>
            
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order._id || order.id}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary-300 transition-all"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-gray-900">{order.customerName || order.customer}</h4>
                      <p className="text-sm text-gray-600">{order.serviceName || order.service}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold">{new Date(order.date).toLocaleDateString('ru-RU')}</span>
                      {order.time && <span> в <span className="font-semibold">{order.time}</span></span>}
                    </div>
                    <span className="text-lg font-bold text-primary-600">{order.price} ₸</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-green-800">Всего заказов:</p>
                  <p className="text-2xl font-bold text-green-900">{orders.length}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-green-800">Подтверждено:</p>
                  <p className="text-2xl font-bold text-green-900">
                    {orders.filter(o => o.status === 'подтвержден').length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Notifications */}
      <ScrollAnimation delay={0.3}>
        <div className="mt-8 card">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Уведомления</h3>
          <div className="space-y-3">
            {[
              { type: 'success', text: 'Новый заказ от Айгуль К. на 15.01 в 14:00', time: '2 мин назад' },
              { type: 'info', text: 'Напоминание: завтра 3 записи', time: '1 час назад' },
              { type: 'success', text: 'Заказ от Данияр Б. подтвержден', time: '3 часа назад' },
            ].map((notification, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-3 ${
                    notification.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                  }`}></div>
                  <div>
                    <p className="text-gray-900 font-medium">{notification.text}</p>
                    <p className="text-xs text-gray-500">{notification.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default OrderAutomation;

