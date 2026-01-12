import React, { useState, useEffect } from 'react';
import { getDemoData } from '../utils/api';
import ScrollAnimation from './ScrollAnimation';

const DemoStorefront = ({ businessType }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [selectedMaster, setSelectedMaster] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getDemoData(businessType);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching demo data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [businessType]);

  const addToCart = (item) => {
    if (businessType === 'beauty' || businessType === 'barber') {
      // For services, need to select master first
      setSelectedMaster(item);
      return;
    }
    setCart([...cart, { ...item, id: Date.now() }]);
    setShowCart(true);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleServiceBooking = (service, master) => {
    setOrderComplete(true);
    setTimeout(() => {
      setOrderComplete(false);
      setSelectedMaster(null);
    }, 3000);
  };

  const handleCheckout = () => {
    setOrderComplete(true);
    setTimeout(() => {
      setOrderComplete(false);
      setCart([]);
      setShowCart(false);
    }, 3000);
  };

  const totalPrice = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!data) {
    return <div className="text-center text-gray-500">Данные не найдены</div>;
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <ScrollAnimation>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{data.businessName}</h2>
          <p className="text-xl text-gray-600">Демо-версия витрины</p>
        </div>
      </ScrollAnimation>

      {/* Services/Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {(data.services || data.products || []).map((item, index) => (
          <ScrollAnimation key={item.id || index} delay={index * 0.05}>
            <div className="card card-hover">
              <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={item.image || 'https://via.placeholder.com/400x300'}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300?text=Image';
                  }}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
              {item.category && (
                <p className="text-sm text-gray-500 mb-2">{item.category}</p>
              )}
              {item.duration && (
                <p className="text-sm text-gray-500 mb-2">Длительность: {item.duration} мин</p>
              )}
              <div className="flex items-center justify-between mt-4">
                <span className="text-2xl font-bold text-primary-600">{item.price} ₸</span>
                <button
                  onClick={() => addToCart(item)}
                  className="btn-primary text-sm px-4 py-2"
                >
                  {businessType === 'beauty' || businessType === 'barber' ? 'Записаться' : 'В корзину'}
                </button>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      {/* Masters (for beauty/barber) */}
      {(data.masters || []).length > 0 && (
        <ScrollAnimation>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Наши мастера</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.masters.map((master, index) => (
                <div key={master.id || index} className="card text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                    <img
                      src={master.avatar || 'https://via.placeholder.com/200'}
                      alt={master.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/200?text=Avatar';
                      }}
                    />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{master.name}</h4>
                  <p className="text-gray-600 text-sm">{master.specialty}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      )}

      {/* Service Booking Modal */}
      {selectedMaster && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Запись на услугу</h3>
            <p className="text-gray-600 mb-2">
              <strong>Услуга:</strong> {selectedMaster.name}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Цена:</strong> {selectedMaster.price} ₸
            </p>
            {selectedMaster.duration && (
              <p className="text-gray-600 mb-6">
                <strong>Длительность:</strong> {selectedMaster.duration} мин
              </p>
            )}
            <p className="text-gray-500 text-sm mb-6">
              В демо-версии запись выполняется автоматически. В полной версии вы сможете выбрать мастера и время.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => handleServiceBooking(selectedMaster, null)}
                className="flex-1 btn-primary"
              >
                Подтвердить запись
              </button>
              <button
                onClick={() => setSelectedMaster(null)}
                className="flex-1 btn-secondary"
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cart */}
      {showCart && cart.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-white rounded-xl shadow-2xl p-6 max-w-sm w-full z-40">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-900">Корзина</h3>
            <button
              onClick={() => setShowCart(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="space-y-3 max-h-64 overflow-y-auto mb-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.price} ₸</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 ml-4"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold text-gray-900">Итого:</span>
              <span className="text-xl font-bold text-primary-600">{totalPrice} ₸</span>
            </div>
            <button onClick={handleCheckout} className="w-full btn-primary">
              Оформить заказ
            </button>
          </div>
        </div>
      )}

      {/* Cart Button */}
      {!showCart && cart.length > 0 && (
        <button
          onClick={() => setShowCart(true)}
          className="fixed bottom-4 right-4 bg-primary-600 text-white p-4 rounded-full shadow-2xl hover:bg-primary-700 transition-all z-40"
        >
          <div className="flex items-center">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="ml-2 bg-white text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
              {cart.length}
            </span>
          </div>
        </button>
      )}

      {/* Success Message */}
      {orderComplete && (
        <div className="fixed top-20 right-4 bg-green-500 text-white p-4 rounded-lg shadow-2xl z-50 animate-slide-in-right">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Заказ успешно оформлен! (Демо)</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoStorefront;

