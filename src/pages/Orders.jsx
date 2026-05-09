import React from 'react';
import { useOrders } from '../hooks/useOrders';
import OrderCard from '../components/OrderCard';
import { useNavigate } from 'react-router-dom';
import { SkeletonCard, ErrorMessage, EmptyState } from '../components/states';

const Orders = () => {
  const navigate = useNavigate();
  const { data: orders, isLoading, error, refetch } = useOrders();

  if (isLoading) {
    return (
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Recent Orders</h1>
        </div>
        <SkeletonCard count={4} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <ErrorMessage
          message="We couldn't load your orders. Check your connection and try again."
          onRetry={refetch}
        />
      </div>
    );
  }

  if (orders && orders.length === 0) {
    return (
      <div className="p-8">
        <EmptyState
          title="No orders yet"
          message="When a customer places an order, it will show up here."
          actionLabel="Browse inventory"
          onAction={() => navigate('/products')}
        />
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Recent Orders</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700">
          Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {orders.map(order => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
