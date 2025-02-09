"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { Menu, X } from "lucide-react"
// import Logo from "./Logo"
import Image from "next/image"
import LogoImg from "@/public/next.svg"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const links = ["Services", "Contact", "CEO"]

  return (
    <header className="fixed w-full top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
      <nav className="container mx-auto px-4 sm:px-6 py-2 sm:py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="group relative flex items-center">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
              <div className="w-12 h-12 sm:w-16 sm:h-16">
                {/* <Logo className="flex item-center justify-center text-gray-900 dark:text-gray-100" /> */}
                 <Image
                              src={LogoImg}
                              alt=""
                              width={200}
                              height={200}
                              className="object-cover text-[#000]"
                              priority
                            />
              </div>
              {/* <div className="text-2xl sm:text-3xl h-full font-bold bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                DevCrd
              </div> */}
            </motion.div>
            <div className="absolute bottom-0 h-0.5 bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-300 w-0 group-hover:w-full transition-all duration-300" />
          </Link>

          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase()}`}
                className="relative group text-lg text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-300 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            {links.map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase()}`}
                className="block text-lg text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
