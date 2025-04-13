import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import React, { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface ContactInfo {
  icon: React.FC<{ className?: string }>;
  label: string;
  value: string;
  color: string;
}

const Contact = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formState);
  };

  const contactInfo: ContactInfo[] = [
    { icon: Mail, label: "Email", value: "support@atctechltd.com", color: "blue" },
    { icon: Phone, label: "Telephone", value: "02588878917-18", color: "blue" },
    { icon: MapPin, label: "Location", value: "BSMHTP, Joy Silicon Tower, Level # 7, Suit # A, Rajshahi, Bangladesh", color: "gray" }
  ];

  return (
    <div>
      <section className="py-12 md:py-20 relative" id="contact">
        <div className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-[#0F79B9] to-[#107EC1] bg-clip-text text-transparent">
                Bangladesh Office
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-${item.color}-500/20 rounded-lg flex items-center justify-center`}>
                      <item.icon className={`w-6 h-6 text-${item.color}-500`} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm md:text-base">{item.label}</p>
                      <p className="text-base md:text-lg">{item.value}</p>
                    </div>
                  </div>
                ))}
                <div className="mt-4">
                  <p className="text-gray-400 text-sm md:text-base">Additional Email</p>
                  <p className="text-base md:text-lg">atctechltdbd@gmail.com</p>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
            >
              {[
                { id: "name", label: "Name", type: "text" },
                { id: "email", label: "Email", type: "email" },
                { id: "message", label: "Message", type: "textarea" }
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-sm md:text-base font-medium text-gray-300 mb-2">
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      rows={4}
                      className="w-full px-4 py-3 text-sm md:text-base bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      value={formState[field.id as keyof FormState]}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      className="w-full px-4 py-3 text-sm md:text-base bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      value={formState[field.id as keyof FormState]}
                      onChange={handleInputChange}
                    />
                  )}
                </div>
              ))}

              <motion.button
                type="submit"
                className="w-full px-6 py-3 md:py-4 bg-gradient-to-r from-[#0F79B9] to-[#107EC1] rounded-lg font-semibold flex items-center justify-center space-x-2 text-sm md:text-base"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;