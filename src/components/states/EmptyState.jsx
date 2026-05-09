import React from 'react';

const EmptyState = ({ title, message, actionLabel, onAction }) => (
  <div className="flex flex-col items-center justify-center p-12 text-center bg-white rounded-xl shadow-sm border border-gray-100">
    <span className="text-6xl mb-4">📭</span>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-500 mb-8 max-w-sm">{message}</p>
    {actionLabel && onAction && (
      <button
        onClick={onAction}
        className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
      >
        {actionLabel}
      </button>
    )}
  </div>
);

export default EmptyState;
