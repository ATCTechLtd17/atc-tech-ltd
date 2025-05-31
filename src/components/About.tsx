import { FC } from 'react';

const AboutPage: FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8  text-white" id="aboutus">
      <section className="mb-12 mt-20 bg-black text-center">
        <h1 className="text-5xl font-bold text-white mb-6 border-b-2 border-blue-500 pb-4 inline-block">
          ATC Tech Ltd. সম্পর্কে
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          ২০১৭ সাল থেকে উদ্ভাবনী প্রযুক্তি সমাধানের মাধ্যমে ব্যবসায়িক প্রতিষ্ঠানগুলোকে ক্ষমতায়ন
        </p>
      </section>

      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div className=" p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">আমাদের লক্ষ্য</h2>
            <p className="text-gray-300 mb-6">
              এই দ্রুত পরিবর্তনশীল অর্থনৈতিক পরিবেশে বিশ্বব্যাপী ব্যবসায়িক প্রতিষ্ঠানগুলোকে 
              কার্যকর সহায়তা সেবার সাথে অত্যাধুনিক আইটি সমাধান প্রদান করা।
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-300">
              <li>B2B যোগাযোগ এবং ডেটা বিনিময় উন্নতি</li>
              <li>এন্টারপ্রাইজ তথ্য অ্যাক্সেস নিরাপত্তা নিশ্চিতকরণ</li>
              <li>উচ্চ মানের সফটওয়্যার ডেভেলপমেন্ট সেবা প্রদান</li>
              <li>অর্থের বিনিময়ে মূল্য এবং কর্মচারী উন্নয়ন নিশ্চিতকরণ</li>
            </ul>
          </div>
          
          <div className=" p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">আমাদের দৃষ্টিভঙ্গি</h2>
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-200 italic">
                "উদ্ভাবনকে আলিঙ্গন করে, আমরা প্রযুক্তি সমাধানে বিশ্বব্যাপী নেতা হতে চাই, 
                ব্যবসায়িক প্রতিষ্ঠানগুলোকে সমৃদ্ধ হতে ক্ষমতায়িত করি। আমরা এমন এক ভবিষ্যতের 
                স্বপ্ন দেখি যেখানে নিরবচ্ছিন্ন যোগাযোগ এবং ডেটা নিরাপত্তা অগ্রগতিকে ত্বরান্বিত করবে।"
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-white mb-8 text-center">
          কেন <span className="text-blue-400">ATC Tech Ltd.</span> বেছে নেবেন
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "প্রকৃত সহযোগিতা",
              content: "ব্যবসায়িক লক্ষ্য বুঝতে এবং অর্জনে আমরা ক্লায়েন্টদের সাথে গভীর অংশীদারিত্ব করি"
            },
            {
              title: "সম্পূর্ণ উপলব্ধি",
              content: "আপনার ব্যবসায়িক প্রয়োজন এবং পরিচালনাগত চ্যালেঞ্জের পুঙ্খানুপুঙ্খ বিশ্লেষণ"
            },
            {
              title: "অবিরাম বাস্তবায়ন",
              content: "প্রতিবার সময়মতো সমাধান প্রদানের জন্য নিবেদিতপ্রাণ প্রতিশ্রুতি"
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
        <h2 className="text-3xl font-semibold text-white mb-8">আমাদের সমাধানসমূহ</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {['অনলাইন ইআরপি সিস্টেম', 'এনজিও ম্যানেজমেন্ট', 'পেট্রোল পাম্প সমাধান', 
            'ই-ম্যানেজমেন্ট প্ল্যাটফর্ম', 'কাস্টম সফটওয়্যার ডেভেলপমেন্ট', 'আইটি পরামর্শ']
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