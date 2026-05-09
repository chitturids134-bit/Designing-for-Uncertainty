import React from 'react';

const SkeletonCard = ({ count = 4 }) => (
  <div className="space-y-4">
    {Array.from({ length: count }).map((_, index) => (
      <div
        key={index}
        className="animate-pulse rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"
      >
        <div className="h-6 w-2/3 rounded-full bg-gray-200 mb-4" />
        <div className="h-4 w-5/6 rounded-full bg-gray-200 mb-4" />
        <div className="grid grid-cols-2 gap-4">
          <div className="h-4 rounded-full bg-gray-200" />
          <div className="h-4 rounded-full bg-gray-200" />
        </div>
      </div>
    ))}
  </div>
);

export default SkeletonCard;
