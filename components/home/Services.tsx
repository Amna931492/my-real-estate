import { ShieldCheck, Search, TrendingUp } from 'lucide-react';

const services = [
  { title: 'Property Management', desc: 'Secure and manage your property easily.', icon: <ShieldCheck size={40} className="text-blue-600" /> },
  { title: 'Easy Search', desc: 'Find your home with advanced AI filters.', icon: <Search size={40} className="text-blue-600" /> },
  { title: 'Investment Advice', desc: 'Maximize your profit with our experts.', icon: <TrendingUp size={40} className="text-blue-600" /> },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest text-sm mb-2">OUR SERVICES</h2>
          <h3 className="text-3xl md:text-5xl font-bold">Why Choose EstateFlow?</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="mb-6">{s.icon}</div>
              <h4 className="text-2xl font-bold mb-4">{s.title}</h4>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}