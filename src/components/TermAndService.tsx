import React from 'react';

const TermsAndServices: React.FC = () => {
  return (
    <div className=" text-white font-sans p-6 max-w-4xl mx-auto">
      <section className='mt-20'>
      <h1 className="text-2xl font-bold mb-4">Terms and Services</h1>
      
      <p className="mb-6">
        Welcome to our website! These Terms and Conditions ("Agreement") govern your use of our website and the services we offer. Please read this Agreement carefully before using our website. By accessing or using our website, you agree to be bound by this Agreement. If you do not agree with any part of this Agreement, you may not access or use our website.
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">1. Services</h2>
        <p className="mb-2">
          Our website offers services from Bangladesh to the USA. These services may include but are not limited to the purchase and delivery of goods, booking of travel arrangements, and access to information related to these services. The availability of specific services may vary and is subject to change without notice.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">2. User Responsibilities</h2>
        <p className="mb-2">
          When using our website, you agree to provide accurate and complete information about yourself as required. You are responsible for maintaining the confidentiality of any account credentials or passwords associated with your use of our website. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">3. Prohibited Activities</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>You agree not to engage in any of the following activities while using our website:</li>
          <li>Violating any applicable laws, regulations, or third-party rights.</li>
          <li>Impersonating any person or entity, or falsely stating or misrepresenting your affiliation with a person or entity.</li>
          <li>Interfering with or disrupting the operation of our website or the servers or networks connected to our website.</li>
          <li>Engaging in any form of fraudulent activity or unauthorized access to our website or systems.</li>
          <li>Uploading or transmitting viruses, worms, or any other malicious code that may harm our website or the systems of other users.</li>
          <li>Collecting or storing personal data about other users without their consent.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">4. Intellectual Property</h2>
        <p className="mb-2">
          All content on our website, including but not limited to text, graphics, logos, images, and software, is the property of our company or its licensors and is protected by copyright and other intellectual property laws. You may not use, modify, reproduce, or distribute any content from our website without our prior written consent.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">5. Limitation of Liability</h2>
        <p className="mb-2">
          Our company strives to provide accurate and up-to-date information on our website. However, we make no warranties or representations regarding the accuracy, reliability, or completeness of the information or services provided. We shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of our website or the services offered.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">6. Governing Law and Jurisdiction</h2>
        <p className="mb-2">
          This Agreement shall be governed by and construed in accordance with the laws of Bangladesh. Any dispute arising out of or relating to this Agreement shall be submitted to the exclusive jurisdiction of the courts of Bangladesh.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">7. Modifications to the Agreement</h2>
        <p className="mb-2">
          We reserve the right to modify or update this Agreement at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our website after any modifications to the Agreement constitutes your acceptance of the modified Agreement.
        </p>
      </div>

      <p className="mt-8">
        Please review this Agreement periodically for any updates or changes. If you have any questions or concerns regarding these Terms and Conditions, please contact us.
      </p>
      </section>
    </div>
  );
};

export default TermsAndServices;