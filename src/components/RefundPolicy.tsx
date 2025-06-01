import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <div className="text-white font-sans p-6 max-w-4xl mx-auto">
      <section className='mt-20'>
        <h1 className="text-2xl font-bold mb-4">রিটার্ন এবং রিফান্ড</h1>

        <p className="mb-4">
          আমাদের সাথে কেনাকাটা করার জন্য আপনাকে ধন্যবাদ। ATC Tech Limited সেবা এবং গ্রাহক সন্তুষ্টিতে বিশ্বাস করে।
          আপনার ক্রয় সংক্রান্ত কোনো সমস্যা থাকলে অনুগ্রহ করে নির্দ্বিধায় আমাদের কল করুন অথবা ইমেল করুন।
          সাধারণভাবে ক্রয়ের তারিখ থেকে ৩ দিনের জন্য রিটার্ন উইন্ডো খোলা থাকে এবং তারপরে পণ্যটি ওয়ারেন্টি সহ ব্র্যান্ড এবং কোম্পানির নীতি অনুযায়ী স্বয়ংক্রিয়ভাবে অধিকারী হয়।
        </p>

        <p className="mb-4">
          একটি আইটেম প্রযোজ্য রিটার্ন উইন্ডোর মধ্যে ফেরতের জন্য যোগ্য হতে পারে যদি এটি নিম্নলিখিত শর্তগুলির একটি বা একাধিক পূরণ করে:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>শারীরিকভাবে ক্ষতিগ্রস্ত অবস্থায় সরবরাহ করা হয়েছিল</li>
          <li>অনুপস্থিত অংশ বা আনুষাঙ্গিক আছে</li>
          <li>ওয়েবসাইটে যা আদেশ বা বর্ণনা করা হয়েছিল তার থেকে আলাদা</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4">রিফান্ড প্রদান</h2>
        <div className="mb-6 bg-gray-800 p-4 rounded-lg">
          <p className="mb-2">১. আপনার রিফান্ড প্রক্রিয়াকরণের সময় নির্ভর করে রিফান্ডের ধরণ এবং আপনার ব্যবহৃত পেমেন্ট পদ্ধতির উপর।</p>
          <p className="mb-2">২. রিফান্ডের সময়কাল/প্রক্রিয়া শুরু হয় যখন এটিসি আপনার রিফান্ডের ধরণ অনুসারে আপনার রিফান্ড প্রক্রিয়া করে।</p>
          <p className="mb-2">৩. রিফান্ডের পরিমাণ আপনার ফেরত দেওয়া পণ্যের জন্য আইটেমের মূল্য এবং শিপিং ফি অন্তর্ভুক্ত করে।</p>
        </div>

        <h3 className="text-lg font-bold mb-2">রিফান্ডের ধরণ</h3>
        <div className="mb-6 bg-gray-800 p-4 rounded-lg">
          <p className="mb-2">এটিসি নিম্নলিখিত রিফান্ডের ধরণ অনুসারে আপনার রিফান্ড প্রক্রিয়া করবে:</p>
          <p className="mb-2 font-semibold">১. রিফান্ড থেকে রিফান্ড</p>
          <p className="mb-2 pl-4">- আপনার আইটেম গুদামে ফেরত দেওয়ার পরে এবং কিউসি সম্পন্ন হওয়ার পরে (সফলভাবে) রিফান্ড প্রক্রিয়া করা হয়। কোনও আইটেম কীভাবে ফেরত দিতে হয় তা জানতে, আমাদের রিফান্ড নীতি পড়ুন।</p>
          
          <p className="mb-2 font-semibold">২. বাতিল করা অর্ডার থেকে রিফান্ড</p>
          <p className="mb-2 pl-4">- বাতিলকরণ সফলভাবে প্রক্রিয়া করার পরে রিফান্ড স্বয়ংক্রিয়ভাবে ট্রিগার হয়।</p>
          
          <p className="mb-2 font-semibold">৩. ব্যর্থ ডেলিভারি থেকে রিফান্ড</p>
          <p className="mb-2 pl-4">- আইটেমটি বিক্রেতার কাছে পৌঁছানোর পরে রিফান্ড প্রক্রিয়া শুরু হয়। অনুগ্রহ করে মনে রাখবেন যে আপনার শিপিং ঠিকানার এলাকার উপর নির্ভর করে এতে আরও বেশি সময় লাগতে পারে।</p>
        </div>

        <h3 className="text-lg font-bold mb-2">রিফান্ড সময়সীমা</h3>
        <div className="mb-6 overflow-x-auto">
          <table className="min-w-full bg-gray-800 rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 border border-gray-700">পেমেন্ট পদ্ধতি</th>
                <th className="px-4 py-2 border border-gray-700">রিফান্ড অপশন</th>
                <th className="px-4 py-2 border border-gray-700">রিফান্ড সময়</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-gray-700">ডেবিট বা ক্রেডিট কার্ড</td>
                <td className="px-4 py-2 border border-gray-700">ডেবিট বা ক্রেডিট কার্ড পেমেন্ট রিভার্সাল</td>
                <td className="px-4 py-2 border border-gray-700">১০ কার্যদিবস</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-700">সমান মাসিক কিস্তি</td>
                <td className="px-4 py-2 border border-gray-700">ডেবিট বা ক্রেডিট কার্ড</td>
                <td className="px-4 py-2 border border-gray-700">১০ কার্যদিবস</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-700">রকেট (ওয়ালেট ডিবিবিএল)</td>
                <td className="px-4 py-2 border border-gray-700">মোবাইল ওয়ালেট রিভার্সাল / রকেট</td>
                <td className="px-4 py-2 border border-gray-700">৭ কার্যদিবস</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-700">নগদ</td>
                <td className="px-4 py-2 border border-gray-700">মোবাইল ওয়ালেট রিভার্সাল / নগদ</td>
                <td className="px-4 py-2 border border-gray-700">৫ কর্মদিবস</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-700">ডিবিবিএল নেক্সাস (অনলাইন ব্যাংকিং)</td>
                <td className="px-4 py-2 border border-gray-700">কার্ড পেমেন্ট রিভার্সাল (নেক্সাস)</td>
                <td className="px-4 py-2 border border-gray-700">৭ কার্যদিবস</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-700">বিকাশ</td>
                <td className="px-4 py-2 border border-gray-700">মোবাইল ওয়ালেট রিভার্সাল/বিকাশ</td>
                <td className="px-4 py-2 border border-gray-700">৫ কার্যদিবস</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-700">ক্যাশ অন ডেলিভারি (সিওডি)</td>
                <td className="px-4 py-2 border border-gray-700">ব্যাংক আমানত</td>
                <td className="px-4 py-2 border border-gray-700">৫ কার্যদিবস</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-700">এটিসি ভাউচার</td>
                <td className="px-4 py-2 border border-gray-700">রিফান্ড ভাউচার</td>
                <td className="px-4 py-2 border border-gray-700">১ কর্মদিবস</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-2 text-sm">দ্রষ্টব্য: সর্বোচ্চ রিফান্ড সময়সীমা সপ্তাহান্ত এবং সরকারি ছুটির দিনগুলি বাদ দেওয়া হয়।</p>
        </div>

        <h3 className="text-lg font-bold mb-2">ফেরতের পদ্ধতি</h3>
        <div className="mb-6 bg-gray-800 p-4 rounded-lg">
          <p className="font-semibold mb-2">ব্যাংক আমানত</p>
          <p className="mb-2 pl-4">প্রদত্ত ব্যাংক অ্যাকাউন্টের বিবরণ সঠিক হতে হবে। অ্যাকাউন্টটি সক্রিয় থাকতে হবে এবং কিছু ব্যালেন্স থাকতে হবে।</p>
          
          <p className="font-semibold mb-2">ডেবিট কার্ড বা ক্রেডিট কার্ড</p>
          <p className="mb-2 pl-4">যদি রিফান্ড সম্পন্ন হওয়ার পরেও আপনার কার্ড স্টেটমেন্টে ফেরত দেওয়া অর্থ প্রতিফলিত না হয় এবং আপনি এটিসি থেকে একটি বিজ্ঞপ্তি পান, তাহলে অনুগ্রহ করে আপনার ব্যক্তিগত ব্যাংকের সাথে যোগাযোগ করুন।</p>
          
          <p className="font-semibold mb-2">বিকাশ/রকেট/নগদ মোবাইল ওয়ালেট</p>
          <p className="mb-2 pl-4">ব্যাংক ডিপোজিটের মতোই, অর্থ প্রদানের সময় আপনি যে মোবাইল অ্যাকাউন্টের বিবরণ দিয়েছিলেন, সেই একই বিবরণে অর্থ ফেরত দেওয়া হবে।</p>
          
          <p className="font-semibold mb-2">রিফান্ড ভাউচার</p>
          <p className="mb-2 pl-4">এটিসির গ্রাহকের নিবন্ধিত ইমেল আইডিতে ভাউচার পাঠানো হবে এবং একই ইমেল আইডি দিয়ে ভাউচার রিডিম/মুক্ত করা যাবে।</p>
        </div>

        <div className="mb-6 bg-yellow-900 p-4 rounded-lg">
          <p className="font-bold mb-2">গুরুত্বপূর্ণ তথ্য:</p>
          <p className="mb-2">ভাউচার ডিসকাউন্ট কোড শুধুমাত্র একবার প্রয়োগ করা যাবে। অবশিষ্ট পরিমাণ ফেরত দেওয়া হবে না বা পরবর্তী ক্রয়ের জন্য ব্যবহার করা হবে না, এমনকি যদি অর্ডারের মূল্য ভাউচার মূল্যের চেয়ে কম হয়।</p>
          <p className="mb-2">কোনো ফেরতের ক্ষেত্রে, প্রাপ্ত নগদ ফেরতের পরিমাণ, যদি থাকে, ফেরতের পরিমাণের সাথে সমন্বয় করা হবে।</p>
          <p className="mb-2">ভাউচারের ক্ষেত্রে রিফান্ড পদ্ধতিতে কোনও পরিবর্তন আনা হবে না।</p>
        </div>

        
      </section>
    </div>
  );
};

export default RefundPolicy;