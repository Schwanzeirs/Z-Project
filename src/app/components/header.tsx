// components/Header.tsx
import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white relative z-10">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="logo">
          <Image src="/favicon.ico" alt="Logo" width={100} height={50} className="filter drop-shadow-[0_0_5px_#00ffcc]" />
        </div>
        <nav className="nav">
          <ul className="flex space-x-4">
            <li><a href="#home" className="font-bold hover:text-[#00ffcc] transition-colors">Home</a></li>
            <li><a href="#shop" className="font-bold hover:text-[#00ffcc] transition-colors">Shop</a></li>
            <li><a href="#about" className="font-bold hover:text-[#00ffcc] transition-colors">About</a></li>
            <li><a href="#contact" className="font-bold hover:text-[#00ffcc] transition-colors">Contact</a></li>
          </ul>
        </nav>
        <div className="search-bar flex space-x-2">
          <input type="text" placeholder="Search..." className="bg-[#111] border border-[#00ffcc] text-white px-4 py-2 rounded" />
          <button className="bg-[#00ffcc] text-black px-4 py-2 rounded cursor-pointer hover:bg-[#00cc99] transition-colors">Search</button>
        </div>
      </div>
      <div className="stripes absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white to-transparent"></div>
    </header>
  );
};

export default Header;
