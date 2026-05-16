"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Globe, Play, Search, Calendar, Users, Minus, Plus } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DATA = [
  { 
    id: 1, 
    title: "MUSEUM OF FUTURE", 
    desc: "Experience architectural wonders and natural beauty where the desert meets the sea. Perfect for light themed escapes.",
    location: "Doha, Qatar", 
    img: "hero-bg.jpg",
    thumb: "https://i1-e.pinimg.com/1200x/8a/ff/ae/8affaea9820c5f1d63bdd4e4462a84ff.jpg" 
  },
  { 
    id: 2, 
    title: "LUSAIL PLAZA", 
    desc: "A futuristic skyline meeting the crystal blue waters. Discover the heart of the new Lusail City.",
    location: "Lusail Towers", 
    img: "https://i1-e.pinimg.com/1200x/6a/89/fe/6a89fecc81b002e040924bd1c296199c.jpg",
    thumb: "https://i1-e.pinimg.com/736x/2c/f1/eb/2cf1eb6148c695277b8c89732aba17c6.jpg" 
  },
  { 
    id: 3, 
    title: "SKYLINE TOWERS", 
    desc: "The iconic West Bay skyline at sunset. A perfect blend of traditional heritage and modern luxury.",
    location: "West Bay", 
    img: "https://i.pinimg.com/736x/72/d1/9e/72d19ef052863fe394d79ce067977f80.jpg", 
    thumb: "https://i1-e.pinimg.com/736x/fe/d5/71/fed571f24584421bd029804554f627ad.jpg" 
  }
];

export default function Hero() {
  const [active, setActive] = useState(DATA[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [searchLocation, setSearchLocation] = useState(active.location);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [visitors, setVisitors] = useState(2);

  // AUTOMATIC TIMEOUT / INTERVAL LOGIC
  useEffect(() => {
    const timer = setInterval(() => {
      if (isAnimating) return;
      setIsAnimating(true);

      const currentIndex = DATA.findIndex((item) => item.id === active.id);
      const nextIndex = (currentIndex + 1) % DATA.length;

      setTimeout(() => {
        setActive(DATA[nextIndex]);
        setSearchLocation(DATA[nextIndex].location);
        setIsAnimating(false);
      }, 1000);
    }, 4000);

    return () => clearInterval(timer);
  }, [active, isAnimating]);

  const handlePlanetClick = (item) => {
    if (item.id === active.id || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActive(item);
      setSearchLocation(item.location);
      setIsAnimating(false);
    }, 1000); 
  };

  return (
    <section suppressHydrationWarning className="relative h-screen w-full overflow-hidden bg-[#FDF5E6] flex items-center justify-center p-2 md:p-4">
      
      <div className="relative z-20 w-full h-full max-w-[1400px] flex flex-col overflow-y-auto md:overflow-hidden rounded-[30px] md:rounded-[60px] shadow-2xl bg-black">
        
        {/* BACKGROUND IMAGE */}
        <AnimatePresence mode="wait">
          <motion.img 
            key={active.id} 
            src={active.img} 
            initial={{ y: "100%", opacity: 0.4 }} 
            animate={{ y: 0, opacity: 1 }}       
            exit={{ y: "-100%", opacity: 0 }}    
            transition={{ duration: 0.8, ease: "easeOut" }} 
            className="absolute inset-0 w-full h-full object-cover brightness-[0.4] md:brightness-[0.5]" 
          />
        </AnimatePresence>

        {/* MOVING CLOUDS */}
        <div className="absolute inset-0 pointer-events-none z-[10] overflow-hidden">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 w-[200%] h-[60%] opacity-30 md:opacity-40"
            style={{ 
              backgroundImage: "url('https://www.transparenttextures.com/patterns/clouds.png')",
              backgroundSize: 'contain',
              backgroundRepeat: 'repeat-x',
              filter: "brightness(1.5)", 
            }}
          />
        </div>

        {/* BALL ANIMATION */}
        <AnimatePresence>
          {isAnimating && (
            <motion.div 
              initial={{ x: "-10vw", opacity: 0 }}
              animate={{ x: "110vw", opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute top-1/2 z-[60] w-12 h-12 bg-white rounded-full shadow-[0_0_50px_20px_rgba(255,255,255,0.8)] pointer-events-none"
            />
          )}
        </AnimatePresence>

        {/* NAVBAR RESPONSIVE */}
        <nav className="relative z-[70] flex justify-between items-center px-6 md:px-12 py-6 md:py-8 text-white/90 text-[10px] md:text-[11px] font-medium tracking-wide">
          <div className="flex items-center">
            <img src="https://i1-e.pinimg.com/1200x/14/21/17/1421178fa46a627bff225c9f508bfce7.jpg" alt="Logo" className="h-8 md:h-12 w-auto object-contain" />
          </div>
          <div className="hidden lg:flex gap-8 items-center">
            {["DESTINATIONS", "ABOUT US", "WHERE TO GO", "EXPERIENCES", "CONTACT US"].map((link) => (
              <a key={link} href="#" className="hover:text-[#E9C4B1] transition-colors">{link}</a>
            ))}
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <button onClick={() => alert("Become a Host clicked!")} className="text-[9px] md:text-[10px] font-bold hover:text-[#E9C4B1] transition-colors flex items-center gap-1 bg-transparent border-none cursor-pointer text-white whitespace-nowrap">
              BECOME A HOST <Globe size={12} />
            </button>
            <button onClick={() => alert("Profile clicked!")} className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all cursor-pointer">
              <User size={16} />
            </button>
          </div>
        </nav>

        {/* MAIN CONTENT RESPONSIVE */}
        <div className="relative z-[30] flex-1 flex flex-col justify-between px-6 md:px-16 pb-8 md:pb-12 h-full">
          <div className="mt-4 md:mt-0">
            <motion.span className="text-white/80 text-[8px] md:text-[10px] font-bold tracking-[0.4em] md:tracking-[0.5em] mb-1 block">EXPLORE THE HERITAGE</motion.span>
            <AnimatePresence mode="wait">
              <motion.h1 key={active.id} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-white text-[42px] sm:text-[60px] md:text-[85px] font-black italic uppercase leading-none break-words">
                WELCOME TO <span className="text-[#E9C4B1]">Oman</span>
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Planet Slider & Desc Layout */}
          <div className="flex flex-col md:flex-row justify-end items-center gap-4 md:gap-8 my-6 md:mb-3 w-full">
            <div className="relative max-w-full md:max-w-[260px] text-center md:text-right px-4 md:pr-6 md:border-r md:border-b-0 border-b border-white/10 pb-4 md:pb-0">
              <p className="text-[11px] md:text-[12px] font-bold uppercase mb-1 md:mb-2 text-[#E9C4B1]">Discover {active.location.split(',')[0]}</p>
              <p className="text-white/60 text-[10px] md:text-[11px] italic leading-relaxed line-clamp-3 md:line-clamp-none">{active.desc}</p>
            </div>

            {/* PLANETS SLIDER */}
            <div className="relative w-[180px] h-[180px] md:w-[280px] md:h-[280px] flex items-center justify-center scale-90 md:scale-100">
                <div className="absolute w-[180px] h-[180px] md:w-[280px] md:h-[280px] border border-white/10 rounded-full" />
                <div className="absolute w-[130px] h-[130px] md:w-[200px] md:h-[200px] border border-white/15 rounded-full" />
                <div className="absolute w-[80px] h-[80px] md:w-[120px] md:h-[120px] border border-white/20 rounded-full" />
                <div className="flex flex-row md:flex-col gap-4 md:gap-6 items-center relative z-[70]">
                  {DATA.map((item) => (
                    <motion.div 
                      key={item.id}
                      onClick={() => handlePlanetClick(item)} 
                      className={`cursor-pointer rounded-full border-2 transition-all duration-300 overflow-hidden ${active.id === item.id ? "border-white w-12 h-12 md:w-16 md:h-16" : "border-white/20 w-8 h-8 md:w-10 md:h-10 opacity-40 grayscale"}`}
                    >
                      <img src={item.thumb} className="w-full h-full object-cover" alt="thumb" />
                    </motion.div>
                  ))}
                </div>
            </div>
          </div>

          {/* 100% RESPONSIVE SMART SEARCH BAR */}
          <div className="w-full bg-white/95 backdrop-blur-md rounded-[24px] md:rounded-[35px] flex flex-col md:flex-row items-stretch md:items-center p-3 gap-3 md:gap-0 shadow-2xl relative z-[80] mt-auto mb-4 md:mb-0">
            
            <div className="grid grid-cols-2 md:flex md:flex-row flex-1 divide-x divide-gray-100 gap-y-3 gap-x-0">
              
              {/* Location */}
              <div className="px-4 md:px-6 flex items-center gap-2 min-w-0">
                <Search size={14} className="text-gray-400 flex-shrink-0" />
                <div className="w-full text-black min-w-0">
                  <p className="text-[8px] text-gray-400 font-bold uppercase tracking-tighter text-left">Location</p>
                  <select value={searchLocation} onChange={(e) => setSearchLocation(e.target.value)} className="w-full text-xs md:text-sm font-black bg-transparent outline-none truncate">
                    {DATA.map(d => <option key={d.id} value={d.location}>{d.location}</option>)}
                  </select>
                </div>
              </div>
              
              {/* Check In */}
              <div className="px-4 md:px-6 flex items-center gap-2">
                <Calendar size={14} className="text-gray-400 flex-shrink-0" />
                <div className="w-full text-black">
                  <p className="text-[8px] text-gray-400 font-bold uppercase text-left">Check In</p>
                  <DatePicker selected={checkInDate} onChange={(d) => setCheckInDate(d)} placeholderText="Add Date" className="text-[11px] font-bold bg-transparent outline-none w-full" />
                </div>
              </div>

              {/* Check Out */}
              <div className="px-4 md:px-6 flex items-center gap-2 border-l border-gray-100 md:border-l">
                <Calendar size={14} className="text-gray-400 flex-shrink-0" />
                <div className="w-full text-black">
                  <p className="text-[8px] text-gray-400 font-bold uppercase text-left">Check Out</p>
                  <DatePicker selected={checkOutDate} onChange={(d) => setCheckOutDate(d)} placeholderText="Add Date" className="text-[11px] font-bold bg-transparent outline-none w-full" />
                </div>
              </div>

              {/* Visitors */}
              <div className="px-4 md:px-6 flex items-center justify-between text-black border-l border-gray-100">
                <div className="flex items-center gap-2 min-w-0">
                  <Users size={14} className="text-gray-400 flex-shrink-0" />
                  <div className="text-left min-w-0">
                    <p className="text-[8px] text-gray-400 font-bold uppercase">Visitors</p>
                    <p className="text-[11px] font-bold text-gray-700 italic truncate">{visitors} Guests</p>
                  </div>
                </div>
                <div className="flex gap-1 flex-shrink-0 ml-1">
                  <button onClick={() => setVisitors(v => Math.max(1, v - 1))} className="p-0.5 border rounded bg-white hover:bg-gray-100"><Minus size={10}/></button>
                  <button onClick={() => setVisitors(v => v + 1)} className="p-0.5 border rounded bg-white hover:bg-gray-100"><Plus size={10}/></button>
                </div>
              </div>

            </div>

            {/* Action Search Button */}
            <button className="bg-black w-full md:w-14 h-11 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center text-white md:ml-2 transition-transform active:scale-95 flex-shrink-0">
              <Play size={16} fill="white" className="rotate-0 md:rotate-0" />
              <span className="md:hidden ml-2 text-xs font-bold tracking-wider uppercase">Search Now</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}