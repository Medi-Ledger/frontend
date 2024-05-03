import React from 'react'
import FeatureCard from './FeatureCard';


const Features = () => {
  return (
    <div className="flex flex-col justify-around items-center px-10 py-10" id="features">
        <div className='text-3xl font-bold mb-10'>Features</div>
      <div className="grid grid-cols-2 gap-4">
        <FeatureCard
          title="Fortified Blockchain Security"
          content="Utilizing cutting-edge blockchain, safeguarding patient records against unauthorized access and breaches."
        />
        <FeatureCard
          title="Effortless Accessibility"
          content="Seamlessly accessible for both patients and doctors, ensuring swift retrieval of vital medical information."
        />
        <FeatureCard
          title="Interconnected Solutions"
          content="Integrating smoothly with current healthcare systems, fostering comprehensive patient care."
        />
        <FeatureCard
          title="Immutable Audit Trail"
          content="Every access, modification, or addition to patient records is permanently recorded on the blockchain, providing a transparent and tamper-proof audit trail for regulatory compliance."
        />
      </div>
    </div>
  );
}

export default Features