import React from 'react';

const DeliveryPolicy: React.FC = () => {
  return (
    <div className="text-white font-sans p-6 max-w-4xl mx-auto">
      <section className='mt-20'>
        <h1 className="text-2xl font-bold mb-4">Delivery Policy</h1>
        
        <p className="mb-6">
          Thank you for choosing ATC Tech Limited as your trusted provider of software development, advanced level training, basic coding training for children, cybersecurity, and artificial intelligence services. This Delivery Policy outlines the terms and conditions regarding the delivery of products and services purchased through our platform. By placing an order with us, you agree to comply with and be bound by the following policies:
        </p>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Order Processing Time</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Orders are typically processed within 2-3 business days from the date of purchase.</li>
            <li>Processing times may vary depending on the nature of the product or service.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Delivery Methods</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We offer various delivery methods, including standard shipping, express shipping, and digital delivery, depending on the nature of the product or service.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Shipping Addresses</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>It is the responsibility of the customer to provide accurate and complete shipping information.</li>
            <li>We are not responsible for items delivered to incorrect addresses provided by the customer.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Shipping Restrictions</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Some products or services may have shipping restrictions based on geographic location or local regulations. Customers are responsible for checking and complying with these restrictions before placing an order.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Delivery Confirmation</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Upon successful delivery, customers will receive a confirmation email with relevant details, including tracking information (if applicable).</li>
            <li>Digital products or services will be delivered via email or through the customer's account on our platform.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Shipping Delays</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>While we strive to meet all delivery timelines, unforeseen circumstances such as weather conditions, customs delays, or other external factors may cause delays. We appreciate your understanding in such situations.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Returns Due to Non-Delivery</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>If a product is returned to us due to non-delivery (e.g., incorrect address provided), the customer will be responsible for any additional shipping charges.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Contact Information</h2>
          <p className="mb-2">
            If you have any questions or concerns regarding your order or our delivery policy, please contact our customer service team at atctechltdbd@gmail.com or +8801731805079.
          </p>
        </div>

        <p className="mt-8">
          Thank you for choosing ATC Tech Limited. We value your business and strive to provide you with the best service possible.
        </p>
      </section>
    </div>
  );
};

export default DeliveryPolicy;