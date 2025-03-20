import { FC } from 'react';

const AboutPage: FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8  text-white" id="aboutus">
      <section className="mb-12 mt-20 bg-black text-center">
        <h1 className="text-5xl font-bold text-white mb-6 border-b-2 border-blue-500 pb-4 inline-block">
          About ATC Tech Limited
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Empowering Businesses Through Innovative Technology Solutions Since 2017
        </p>
      </section>

      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div className=" p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              To provide state-of-the-art IT solutions with effective support services to 
              business houses globally in this fast-changing economic landscape.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-300">
              <li>Improving B2B communication and data exchange</li>
              <li>Securing enterprise information access</li>
              <li>Delivering high-quality software development services</li>
              <li>Ensuring value for money and employee growth</li>
            </ul>
          </div>
          
          <div className=" p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Our Vision</h2>
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-200 italic">
                "Embracing innovation, we strive to be a global leader in technology solutions, 
                empowering businesses to thrive. We envision a future where seamless communication 
                and data security fuel progress."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-white mb-8 text-center">
          Why Choose <span className="text-blue-400">ATC Tech</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "True Collaboration",
              content: "We partner deeply with clients to understand and achieve business goals"
            },
            {
              title: "Complete Understanding",
              content: "Thorough analysis of your business needs and operational challenges"
            },
            {
              title: "Persistent Execution",
              content: "Dedication to delivering solutions on time, every time"
            }
          ].map((item, index) => (
            <div key={index} className="p-6 bg-gray-900 rounded-lg border border-gray-700 hover:border-blue-500 hover:shadow-blue-900/30 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-white mb-8">Our Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {['Online ERP Systems', 'NGO Management', 'Petrol Pump Solutions', 
            'e-Management Platforms', 'Custom Software Development', 'IT Consulting']
            .map((solution, index) => (
              <div key={index} className="p-5 bg-gray-800 rounded-lg text-center hover:bg-gray-700 transition-colors">
                <p className="text-gray-200 font-medium">{solution}</p>
              </div>
            ))}
        </div>
      </section>

      

      
    </div>
  );
};

export default AboutPage;