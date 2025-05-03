
import React from 'react';

const FraudPolicy: React.FC = () => {
  return (
    <div className="text-white font-sans p-6 max-w-4xl mx-auto">
      <section className='mt-20'>
        <h1 className="text-2xl font-bold mb-4">Fraud Policy</h1>
        
        <p className="mb-6">
          Our company is committed to maintaining the highest standards of integrity and ethical behavior in all aspects of our operations. We take fraud prevention seriously and have implemented the following fraud policy to protect our customers and our business:
        </p>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">1. Definition of Fraud</h2>
          <p className="mb-2">Fraud is defined as any intentional act of deception, misrepresentation, or manipulation for the purpose of gaining an unfair advantage or causing harm to our company or our customers.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>This includes but is not limited to: identity theft, credit card fraud, unauthorized use of accounts, falsification of information, and any other fraudulent activity.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">2. Detection and Prevention</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We employ advanced security measures and fraud detection systems to monitor and identify potentially fraudulent activities.</li>
            <li>Any suspected fraudulent activity will be thoroughly investigated by our team, and appropriate action will be taken in accordance with our fraud prevention policies.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">3. Reporting Fraud</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>If you suspect or become aware of any fraudulent activity related to our services, we encourage you to report it immediately to our customer service team.</li>
            <li>Provide as much detail and evidence as possible to assist us in our investigation of the fraud.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">4. Consequences of Fraud</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Any individual or entity found to be engaged in fraudulent activities will be subject to legal action and may be reported to the relevant authorities.</li>
            <li>Our company reserves the right to terminate services and take legal action against any party involved in fraudulent activities.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">5. Customer Responsibility</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Customers are responsible for safeguarding their account information, passwords, and personal data to prevent unauthorized access and potential fraud.</li>
            <li>Customers should report any suspicious activity or unauthorized transactions on their accounts promptly to our customer service team.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">6. Cooperation with Authorities</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Our company is committed to cooperating fully with law enforcement authorities and regulatory agencies in the investigation and prosecution of fraud cases.</li>
            <li>We will provide any necessary information and support to assist in the resolution of fraud-related issues.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">7. Confidentiality</h2>
          <p className="mb-2">
            All reports of suspected fraud will be treated with the utmost confidentiality. We respect the privacy of individuals involved in fraud investigations and will handle information sensitively and securely.
          </p>
        </div>

        <p className="mt-8">
          Our fraud policy is designed to protect the interests of our customers and maintain the trust and integrity of our business operations. We appreciate your cooperation in helping us prevent and combat fraud.
        </p>
      </section>
    </div>
  );
};

export default FraudPolicy;