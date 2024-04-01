import React from 'react'

const FeatureCard = ({ title, content }) => {
    return (
      <div className="rounded-lg p-6 mb-4 bg-[#F0F0F2]">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-700">{content}</p>
      </div>
    );
  };

export default FeatureCard