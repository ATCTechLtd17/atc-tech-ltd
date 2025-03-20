import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <div className=" text-white font-sans p-6 max-w-4xl mx-auto">
     <section className='mt-20'>
     <h1 className="text-2xl font-bold mb-4">Refund Policy</h1>
      
      <p className="mb-6">
        Our company strives to ensure customer satisfaction with the services we offer from Bangladesh to the USA. In the event that you are not entirely satisfied with the service you have received, we offer the following refund policy:
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">1. Eligibility</h2>
        <p className="mb-2">Refunds may be considered in the following circumstances:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Service failure or non-performance as per the agreed terms.</li>
          <li>Cancellation of services in accordance with our cancellation policy.</li>
          <li>Refunds are not guaranteed and are subject to review and approval by our company.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">2. Refund Process</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To request a refund, you must contact our customer service team within the specified timeframe, providing relevant details and documentation to support your refund claim.</li>
          <li>Our team will review your request and may require additional information to process the refund.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">3. Refund Methods</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Approved refunds will be processed using the original method of payment, unless otherwise agreed upon by both parties.</li>
          <li>Refund processing times may vary and are subject to the policies of the payment service provider.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">4. Non-Refundable Items</h2>
        <p className="mb-2">
          Certain services may be non-refundable, such as fees for consultation, personalized services, or services that have been fully rendered as per the original agreement.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">5. Cancellation Policy</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Specific services may have their own cancellation policy, which will be communicated at the time of booking or purchase.</li>
          <li>Cancellation charges or penalties may apply in accordance with the terms and conditions of the specific service.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">6. Contact Us</h2>
        <p className="mb-2">
          If you have any questions about our refund policy or would like to request a refund, please contact our customer service team. We are here to assist you and address any concerns you may have.
        </p>
      </div>

      <p className="mt-8">
        Our refund policy is designed to be fair and transparent, ensuring that our customers are provided with appropriate recourse in the event of service-related issues.
      </p>
     </section>
    </div>
  );
};

export default RefundPolicy;