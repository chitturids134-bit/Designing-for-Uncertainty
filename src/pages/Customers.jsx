import React from 'react';
import { useCustomers } from '../hooks/useCustomers';
import CustomerRow from '../components/CustomerRow';
import { SkeletonCard, ErrorMessage, EmptyState } from '../components/states';

const Customers = () => {
    const { data: customers, isLoading, error, refetch } = useCustomers();

    if (isLoading) {
      return (
        <div className="p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Customer Management</h1>
          </div>
          <SkeletonCard count={4} />
        </div>
      );
    }
  
    if (error) {
      return (
        <div className="p-8">
          <ErrorMessage
            message="We couldn't load the customer list. Check your connection and try again."
            onRetry={refetch}
          />
        </div>
      );
    }
  
    if (customers && customers.length === 0) {
      return (
        <div className="p-8">
          <EmptyState
            title="No customers found"
            message="Customer accounts will appear here when they place an order."
            actionLabel="Refresh customers"
            onAction={refetch}
          />
        </div>
      );
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 tracking-tight">Customer Management</h1>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-100">
                    <thead className="bg-gray-50 capitalize">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Customer</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Order History</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Total Value</th>
                            <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Details</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {customers.map(customer => (
                            <CustomerRow key={customer.id} customer={customer} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Customers;
