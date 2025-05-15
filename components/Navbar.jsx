
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '../constants/index';
import { motion } from 'framer-motion';
import CharacterSearch from './search';

export default function NavBarUI() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false); 

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearch = () => setShowSearch(!showSearch);

  return (
    <>
      <nav className="p-4 flex justify-between items-center bg-black text-green-600 shadow-xl relative z-30">
        <Link href="/">
          <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-white bg-clip-text text-transparent">
            SchwiftyAPI
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-12 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="cursor-pointer text-white hover:font-bold hover:border-b border-white text-xl"
            >
              {link.label}
            </Link>
          ))}

          {/* Search toggle button (desktop) */}
          <button
            onClick={toggleSearch}
            className="text-white border border-white px-4 py-1 rounded hover:bg-white hover:text-black"
          >
            {showSearch ? 'Close Search' : 'Search'}
          </button>
        </ul>

        {/* Hamburger Icon */}
        <div className="lg:hidden cursor-pointer z-40" onClick={toggleMenu}>
          <motion.div
            initial="closed"
            animate={menuOpen ? 'open' : 'closed'}
            className="w-8 h-8 flex flex-col justify-between"
          >
            <motion.span
              className="block h-1 bg-white rounded"
              variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 8 } }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-1 bg-white rounded"
              variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-1 bg-white rounded"
              variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -8 } }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } absolute top-20 left-0 w-full bg-black flex-col items-center gap-6 py-6 lg:hidden shadow-lg z-20`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-white text-lg hover:font-bold"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        {/* Search toggle in mobile menu */}
        <button
          onClick={() => {
            toggleSearch();
            setMenuOpen(false);
          }}
          className="text-white border border-white px-4 py-1 rounded hover:bg-white hover:text-black"
        >
          {showSearch ? 'Close Search' : 'Search'}
        </button>
      </motion.div>

      {/* Search Bar Component*/}
      {showSearch && (
        <div className="bg-gray-900 px-4 py-6 border-t border-gray-700 z-10">
          <CharacterSearch />
        </div>
      )}
    </>
  );
}
