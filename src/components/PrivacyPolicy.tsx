import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className=" text-white font-sans p-6 max-w-4xl mx-auto">
        <section className=''>
        <h1 className="text-2xl mt-20 font-bold mb-4">Privacy Policy</h1>
      
      <p className="mb-6">
        At our company, we are committed to protecting the privacy and personal information of our customers. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our website and services.
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">1. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Personal Information:</strong> When you use our services, we may collect personal information such as your name, email address, contact number, and billing information. This information is necessary to process your requests and provide you with our services.
          </li>
          <li>
            <strong>Usage Information:</strong> We may collect non-personal information about your interactions with our website and services, including your IP address, browser type, device information, and pages visited. This information helps us analyze trends, enhance user experience, and improve our services.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">2. Use of Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            We use your personal information to provide and deliver the services you request, process payments, and communicate with you about your account and any updates or changes to our services.
          </li>
          <li>
            We may use your information to improve our website and services, personalize your experience, and ensure the security and integrity of our systems.
          </li>
          <li>
            We may use aggregated and anonymized data for statistical analysis, research, and marketing purposes.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">3. Data Security</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
          </li>
          <li>
            We regularly review and update our security practices to maintain the confidentiality and integrity of your data.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">4. Third-Party Disclosure</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            We do not sell, trade, or transfer your personal information to outside parties without your consent, except in cases where it is necessary to provide the requested services or comply with legal requirements.
          </li>
          <li>
            We may share your information with trusted third-party service providers who assist us in operating our website, conducting business, or providing services on our behalf. These third parties are required to maintain the confidentiality of your information.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">5. Cookies and Tracking Technologies</h2>
        <p className="mb-2">
          We use cookies and similar tracking technologies to enhance your experience on our website, analyze trends, and gather information about user behavior. You have the option to disable cookies in your browser settings, but this may limit certain features and functionality of our website.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">6. Links to Third-Party Websites</h2>
        <p className="mb-2">
          Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of any third-party websites you visit.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">7. Children's Privacy</h2>
        <p className="mb-2">
          Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will promptly delete such information.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">8. Changes to the Privacy Policy</h2>
        <p className="mb-2">
          We may update this Privacy Policy from time to time. Any changes will be posted on our website, and the revised policy will be effective immediately upon posting.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">9. Contact Us</h2>
        <p className="mb-2">
          If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact our Privacy Officer at <a href="mailto:support@techsite.com" className="text-blue-400 hover:underline">support@techsite.com</a>
        </p>
      </div>

      <p className="mt-8 text-sm">
        By using our website and services, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy.
      </p>
   
        </section>
        </div>
      
  );
};

export default PrivacyPolicy;