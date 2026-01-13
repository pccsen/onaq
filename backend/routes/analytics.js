const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Client = require('../models/Client');

// Get comprehensive analytics
router.get('/', async (req, res) => {
  try {
    const { businessType, startDate, endDate } = req.query;
    const query = {};
    
    if (businessType) query.businessType = businessType;
    
    let dateQuery = {};
    if (startDate && endDate) {
      dateQuery = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }

    // Get orders
    const ordersQuery = { ...query };
    if (Object.keys(dateQuery).length > 0) {
      ordersQuery.date = dateQuery;
    }
    const orders = await Order.find(ordersQuery);

    // Get clients
    const clients = await Client.find(query);

    // Calculate statistics
    const totalRevenue = orders.reduce((sum, order) => sum + order.price, 0);
    const totalOrders = orders.length;
    const totalClients = clients.length;
    const averageOrder = totalOrders > 0 ? totalRevenue / totalOrders : 0;

    // Orders by status
    const ordersByStatus = {
      новый: orders.filter(o => o.status === 'новый').length,
      подтвержден: orders.filter(o => o.status === 'подтвержден').length,
      выполнен: orders.filter(o => o.status === 'выполнен').length,
      отменен: orders.filter(o => o.status === 'отменен').length,
    };

    // Clients by status
    const clientsByStatus = {
      новый: clients.filter(c => c.status === 'новый').length,
      постоянный: clients.filter(c => c.status === 'постоянный').length,
      VIP: clients.filter(c => c.status === 'VIP').length,
    };

    // Revenue by day (last 7 days)
    const last7Days = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      date.setHours(0, 0, 0, 0);
      const nextDate = new Date(date);
      nextDate.setHours(23, 59, 59, 999);
      
      const dayOrders = orders.filter(o => {
        const orderDate = new Date(o.date);
        return orderDate >= date && orderDate <= nextDate;
      });
      
      last7Days.push({
        date: date.toISOString().split('T')[0],
        revenue: dayOrders.reduce((sum, o) => sum + o.price, 0),
        orders: dayOrders.length,
      });
    }

    // Top services/products
    const serviceCounts = {};
    orders.forEach(order => {
      if (serviceCounts[order.serviceName]) {
        serviceCounts[order.serviceName].count++;
        serviceCounts[order.serviceName].revenue += order.price;
      } else {
        serviceCounts[order.serviceName] = {
          count: 1,
          revenue: order.price,
        };
      }
    });

    const topServices = Object.entries(serviceCounts)
      .map(([name, data]) => ({ name, ...data }))
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 10);

    res.json({
      success: true,
      data: {
        overview: {
          totalRevenue,
          totalOrders,
          totalClients,
          averageOrder: Math.round(averageOrder),
        },
        ordersByStatus,
        clientsByStatus,
        revenueByDay: last7Days,
        topServices,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;

