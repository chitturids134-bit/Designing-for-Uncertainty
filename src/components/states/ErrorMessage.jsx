import React from 'react';

const ErrorMessage = ({ message, onRetry }) => (
  <div className="flex flex-col items-center justify-center p-12 text-center bg-white rounded-xl shadow-sm border border-gray-100">
    <span className="text-6xl mb-4">😵</span>
    <h3 className="text-xl font-bold text-gray-800 mb-2">Something went wrong</h3>
    <p className="text-gray-500 mb-6 max-w-sm">{message}</p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm"
      >
        Try again
      </button>
    )}
  </div>
);

export default ErrorMessage;
