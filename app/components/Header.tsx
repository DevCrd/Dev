"use client"
import Link from "next/link"
import { motion } from "framer-motion"

const Header = () => {
  const links = ["About", "Services", "Contact", "CEO"]

  return (
    <header className="fixed w-full top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="group relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
            >
              DevCrd
            </motion.div>
            <div className="absolute bottom-0 h-0.5 bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-300 w-0 group-hover:w-full transition-all duration-300" />
          </Link>

          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase()}`}
                className="relative group text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-300 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

