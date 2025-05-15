"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { NAV_LINKS } from "../constants/index";

export default function FooterUI() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-green-600">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-white bg-clip-text text-transparent">
            SchwiftyAPI
          </h2>
          <p className="p-4 text-white italic max-w-xs">
            Bringing multiverse madness to your fingertips.
          </p>
        </div>

        <ul className="flex flex-wrap justify-center md:justify-start gap-8 text-lg">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className="text-white border-2-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center text-green-200 py-6 border-t border-green-700">
        © {new Date().getFullYear()} SchwiftyAPI. All rights reserved.
      </div>
    </motion.footer>
  );
}
