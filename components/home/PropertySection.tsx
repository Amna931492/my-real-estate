"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, Calendar, Users, X, MapPin, Tv, Wifi, Coffee, Shield } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PROPERTIES = [
  {
    id: 1,
    title: "Luxurious Pearl Villa",
    location: "The Pearl, Doha",
    price: "$1,200",
    rating: "4.9",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    desc: "Experience pure architectural wonder and natural beauty where modern luxury meets the Arabian Gulf. Perfect for premium escapes with state-of-the-art automated systems.",
    thumbs: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: 2,
    title: "Porto Arabia Villa",
    location: "Marina Drive, Pearl",
    price: "$950",
    rating: "4.8",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    desc: "A stunning waterfront villa offering unmatched privacy and premium interior design. Beautiful sunset views over the marina.",
    thumbs: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: 3,
    title: "West Bay Elite Apartment",
    location: "Al Dafna, Doha",
    price: "$750",
    rating: "4.7",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    desc: "A sleek minimalist studio apartment in the heart of West Bay skyscraper zone. Ideal for business travelers looking for top aesthetics.",
    thumbs: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: 4,
    title: "Grand Lusail Penthouse",
    location: "Lusail Towers, Doha",
    price: "$1,500",
    rating: "5.0",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    desc: "Futuristic living experience overlooking the brand new Lusail Plaza. State-of-the-art tech integrated into high-ceiling architecture.",
    thumbs: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: 5,
    title: "Katara Heritage Suite",
    location: "Katara Cultural Village",
    price: "$680",
    rating: "4.6",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    desc: "Traditional Qatari structure mixed with elite modern luxury items. Steps away from the amphitheater.",
    thumbs: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: 6,
    title: "Msheireb Smart Condo",
    location: "Downtown Msheireb",
    price: "$820",
    rating: "4.8",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    desc: "Eco-friendly sustainable luxury living with fully automated smart-home devices and walk-in tech wardrobe.",
    thumbs: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: 7,
    title: "Souq Waqif Boutique Stay",
    location: "Old Souq, Doha",
    price: "$450",
    rating: "4.9",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    desc: "Authentic historic elements combined with world-class hospitality. Immerse yourself in local marketplace vibes.",
    thumbs: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: 8,
    title: "Al Waab Premium Mansion",
    location: "Al Waab, Doha",
    price: "$2,100",
    rating: "5.0",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    desc: "Mega luxury mansion layout designed for premium high-end families. Includes private indoor swimming pool.",
    thumbs: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&q=80"
    ]
  },
  // NAYE CARDS (Cards 9 to 12)
  {
    id: 9,
    title: "Banana Island Royal Villa",
    location: "Banana Island, Doha",
    price: "$1,850",
    rating: "4.9",
    img: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80",
    desc: "Maldives-style overwater villa experience right here in Doha. Private beach access with stunning crystal waters.",
    thumbs: [
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: 10,
    title: "West Bay Lagoon Mansion",
    location: "Lagoon Street, Doha",
    price: "$1,600",
    rating: "4.8",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    desc: "Beautiful landscape garden mansion with a private docking deck for luxury boats and yachts.",
    thumbs: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: 11,
    title: "Fox Hills Modern Studio",
    location: "Lusail City, Doha",
    price: "$520",
    rating: "4.5",
    img: "https://images.unsplash.com/photo-1560185127-6a2806647f81?auto=format&fit=crop&w=1200&q=80",
    desc: "Sleek and bright minimalist apartment in the newly built green sector of Lusail. Ideal for young couples.",
    thumbs: [
      "https://images.unsplash.com/photo-1560185127-6a2806647f81?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc2c78a9?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: 12,
    title: "The Waldorf Luxury Penthouse",
    location: "West Bay Towers",
    price: "$2,400",
    rating: "5.0",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    desc: "The pinnacle of skyscraper living. High ceilings, Italian marble flooring, and 360-degree panoramic views of Doha skyline.",
    thumbs: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=400&q=80"
    ]
  }
];

export default function PropertySection() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState(2);

  // SHURU MEIN 8 NAZAR AAYENGE (2 ROWS OF 4), BAD MEIN EXPAND HOKAR 12 HO JAYENGE
  const visibleProperties = showAll ? PROPERTIES : PROPERTIES.slice(0, 8);

  return (
    <section suppressHydrationWarning className="w-full bg-[#FDF5E6] py-16 px-4 md:px-12 relative min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        
        {/* SECTION HEADER */}
        {!selectedProperty && (
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-[#1A1A1A] tracking-tight uppercase italic">
              Recommended Places to Stay
            </h2>
            <button 
              onClick={() => setShowAll(!showAll)} 
              className="border border-black/20 text-xs font-bold px-5 py-2.5 rounded-full hover:bg-black hover:text-white transition-all active:scale-95 cursor-pointer"
            >
              {showAll ? "See Less" : "See All"}
            </button>
          </div>
        )}

        {/* PROPERTY CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {visibleProperties.map((property) => (
            <div
              key={property.id}
              onClick={() => setSelectedProperty(property)}
              className="bg-white rounded-[30px] overflow-hidden shadow-md cursor-pointer group hover:shadow-xl transition-shadow relative h-[380px] flex flex-col justify-end p-4 text-white"
            >
              <img
                src={property.img}
                alt={property.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[5]" />

              <div className="absolute top-4 left-4 z-10 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold border border-white/10">
                <span className="text-[#E9C4B1]">{property.price}</span> / night
              </div>
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Heart size={14} className="text-white group-hover:fill-white transition-colors" />
              </div>

              <div className="relative z-10 text-left">
                <p className="text-[10px] font-bold text-[#E9C4B1] uppercase tracking-wider mb-1 flex items-center gap-1">
                  <MapPin size={10} /> {property.location.split(',')[0]}
                </p>
                <h3 className="text-md font-black uppercase italic leading-tight mb-2 truncate">{property.title}</h3>
                <div className="flex items-center gap-1 text-[11px] text-white/80">
                  <Star size={12} fill="#E9C4B1" className="text-[#E9C4B1]" />
                  <span>{property.rating} • Reviews</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FULL SCREEN DETAILED OVERLAY LAYOUT */}
        <AnimatePresence>
          {selectedProperty && (
            <div className="fixed inset-0 z-[999] bg-[#FDF5E6] overflow-y-auto flex justify-center items-start p-0">
              
              <div className="w-full max-w-[1400px] min-h-screen bg-[#F9F6F0] rounded-none md:rounded-[45px] relative flex flex-col md:flex-row p-6 md:p-12 gap-8 text-black">
                
                <button 
                  onClick={() => setSelectedProperty(null)}
                  className="absolute top-6 right-6 z-[1100] bg-black text-white p-3 rounded-full hover:scale-105 transition-transform cursor-pointer shadow-lg"
                >
                  <X size={18} />
                </button>

                {/* LEFT COLUMN: Main Image Slide-In and Thumbnails */}
                <div className="flex-1 flex flex-col gap-5 overflow-hidden">
                  <div className="relative rounded-[35px] overflow-hidden h-[460px] shadow-md bg-gray-100">
                    <motion.img
                      key={selectedProperty.id}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      src={selectedProperty.img}
                      alt={selectedProperty.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {selectedProperty.thumbs.map((thumb, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + idx * 0.1, duration: 0.4 }}
                        className="h-28 rounded-[22px] overflow-hidden shadow-inner border border-black/5"
                      >
                        <img src={thumb} alt="gallery container" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-4 text-left">
                    <h4 className="text-xs font-black uppercase text-[#1A1A1A] tracking-wider mb-3">Property Amenities</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px] font-bold text-gray-600">
                      <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-black/5"><Wifi size={14} className="text-[#E9C4B1]" /> Free Wifi</div>
                      <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-black/5"><Tv size={14} className="text-[#E9C4B1]" /> Smart TV</div>
                      <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-black/5"><Coffee size={14} className="text-[#E9C4B1]" /> Coffee Bar</div>
                      <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-black/5"><Shield size={14} className="text-[#E9C4B1]" /> Security</div>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: Sticky Sidebar Panel */}
                <div className="w-full md:w-[440px] flex flex-col justify-between text-left pt-4 md:pt-0">
                  <div className="mb-6">
                    <span className="text-[10px] font-black tracking-[0.3em] text-[#E9C4B1] block mb-1 uppercase">Discover {selectedProperty.location}</span>
                    <h2 className="text-3xl md:text-4xl font-black italic uppercase text-black mb-4 leading-tight tracking-tight">{selectedProperty.title}</h2>
                    
                    <div className="flex items-center gap-2 mb-6 text-xs text-gray-500 font-bold">
                      <span className="bg-[#E9C4B1]/20 text-gray-800 px-3 py-1 rounded-md flex items-center gap-1"><Star size={12} fill="#E9C4B1" className="text-[#E9C4B1]"/> {selectedProperty.rating}</span>
                      <span>• Verified Luxury Estate</span>
                    </div>
                    
                    <p className="text-gray-600 text-xs leading-relaxed italic border-l-2 border-[#E9C4B1] pl-4">
                      {selectedProperty.desc}
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-[35px] border border-black/5 shadow-xl w-full mt-auto">
                    <div className="flex justify-between items-baseline mb-5">
                      <p className="text-xs text-gray-400 font-bold uppercase">Total Price</p>
                      <p className="text-2xl font-black text-black">{selectedProperty.price}<span className="text-xs text-gray-400 font-medium">/night</span></p>
                    </div>

                    <div className="flex flex-col gap-3 mb-5">
                      <div className="border border-gray-100 rounded-2xl p-3 flex items-center gap-3 bg-gray-50">
                        <Calendar size={16} className="text-gray-400" />
                        <div className="w-full">
                          <p className="text-[8px] text-gray-400 font-bold uppercase">Check In</p>
                          <DatePicker selected={checkIn} onChange={(d) => setCheckIn(d)} placeholderText="Select Date" className="text-xs font-bold bg-transparent outline-none w-full text-black" />
                        </div>
                      </div>

                      <div className="border border-gray-100 rounded-2xl p-3 flex items-center gap-3 bg-gray-50">
                        <Calendar size={16} className="text-gray-400" />
                        <div className="w-full">
                          <p className="text-[8px] text-gray-400 font-bold uppercase">Check Out</p>
                          <DatePicker selected={checkOut} onChange={(d) => setCheckOut(d)} placeholderText="Select Date" className="text-xs font-bold bg-transparent outline-none w-full text-black" />
                        </div>
                      </div>

                      <div className="border border-gray-100 rounded-2xl p-3 flex items-center justify-between bg-gray-50">
                        <div className="flex items-center gap-3">
                          <Users size={16} className="text-gray-400" />
                          <div>
                            <p className="text-[8px] text-gray-400 font-bold uppercase">Guests</p>
                            <p className="text-xs font-bold text-black">{guests} Visitors</p>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <button onClick={() => setGuests(g => Math.max(1, g-1))} className="w-6 h-6 border rounded-md flex items-center justify-center bg-white text-xs font-bold hover:bg-gray-100">-</button>
                          <button onClick={() => setGuests(g => g+1)} className="w-6 h-6 border rounded-md flex items-center justify-center bg-white text-xs font-bold hover:bg-gray-100">+</button>
                        </div>
                      </div>
                    </div>

                    <button className="w-full bg-[#E9C4B1] text-black font-black uppercase tracking-wider text-xs py-4 rounded-2xl shadow-lg shadow-[#E9C4B1]/30 hover:scale-[1.01] transition-transform active:scale-95 cursor-pointer">
                      Book Now
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
