const express = require('express');
const router = express.Router();

// Demo data for different business types
const demoData = {
  beauty: {
    businessName: "Салон красоты 'Элегант'",
    services: [
      { id: 1, name: "Стрижка женская", price: 2500, duration: 60, image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400" },
      { id: 2, name: "Окрашивание волос", price: 4500, duration: 120, image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400" },
      { id: 3, name: "Маникюр", price: 1500, duration: 45, image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400" },
      { id: 4, name: "Педикюр", price: 2000, duration: 60, image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400" },
      { id: 5, name: "Массаж лица", price: 3000, duration: 60, image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400" },
      { id: 6, name: "Укладка", price: 1800, duration: 45, image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=400" },
    ],
    masters: [
      { id: 1, name: "Анна Иванова", specialty: "Стрижки, окрашивание", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200" },
      { id: 2, name: "Мария Петрова", specialty: "Маникюр, педикюр", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200" },
      { id: 3, name: "Елена Сидорова", specialty: "Массаж, уход", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200" },
    ],
  },
  barber: {
    businessName: "Barbershop 'Classic'",
    services: [
      { id: 1, name: "Мужская стрижка", price: 1500, duration: 40, image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400" },
      { id: 2, name: "Бритье опасной бритвой", price: 2000, duration: 30, image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400" },
      { id: 3, name: "Стрижка + борода", price: 2500, duration: 60, image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400" },
      { id: 4, name: "Укладка", price: 800, duration: 20, image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400" },
      { id: 5, name: "Борода + усы", price: 1200, duration: 30, image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400" },
    ],
    masters: [
      { id: 1, name: "Иван Смирнов", specialty: "Классические стрижки", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200" },
      { id: 2, name: "Алексей Козлов", specialty: "Бритье, укладка", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200" },
    ],
  },
  flowers: {
    businessName: "Цветочный магазин 'Роза'",
    products: [
      { id: 1, name: "Букет роз (11 шт)", price: 3500, image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400", category: "Букеты" },
      { id: 2, name: "Букет тюльпанов", price: 2500, image: "https://images.unsplash.com/photo-1520763185298-1b434c919655?w=400", category: "Букеты" },
      { id: 3, name: "Композиция из хризантем", price: 2800, image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400", category: "Композиции" },
      { id: 4, name: "Букет микс (25 шт)", price: 4500, image: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=400", category: "Букеты" },
      { id: 5, name: "Горшечное растение", price: 2000, image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400", category: "Растения" },
      { id: 6, name: "Букет пионов", price: 3200, image: "https://images.unsplash.com/photo-1520763185298-1b434c919655?w=400", category: "Букеты" },
    ],
  },
  ecommerce: {
    businessName: "Мини e-commerce 'Уют'",
    products: [
      { id: 1, name: "Свеча ароматическая", price: 1200, image: "https://images.unsplash.com/photo-1606041011872-b991b1c93696?w=400", category: "Декор" },
      { id: 2, name: "Плед мягкий", price: 3500, image: "https://images.unsplash.com/photo-1586350977773-b3f7b80e40da?w=400", category: "Текстиль" },
      { id: 3, name: "Ваза керамическая", price: 2800, image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400", category: "Декор" },
      { id: 4, name: "Подушка декоративная", price: 2200, image: "https://images.unsplash.com/photo-1584100936595-c0654b55e3cb?w=400", category: "Текстиль" },
    ],
  },
};

// Get demo data by business type
router.get('/:businessType', (req, res) => {
  const { businessType } = req.params;
  const data = demoData[businessType];
  
  if (!data) {
    return res.status(404).json({ 
      success: false, 
      message: 'Тип бизнеса не найден' 
    });
  }
  
  res.json({ success: true, data });
});

// Get all demo data types
router.get('/', (req, res) => {
  res.json({ 
    success: true, 
    data: Object.keys(demoData),
    demoData 
  });
});

module.exports = router;

