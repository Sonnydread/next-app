"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { SiInstagram } from "react-icons/si"
import { FaLinkedin } from "react-icons/fa"
import { usePathname } from "next/navigation"
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
  Variants,
} from "framer-motion"
import { Menu, X, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Perfil", href: "#perfil" },
  { name: "Historia Profesional", href: "#historia" },
  { name: "Especialidades", href: "#especialidades" },
  { name: "Certificaciones", href: "#certificaciones" },
  { name: "Contácto", href: "#contacto" },
]

export default function Navbar() {
  const pathname = usePathname()
  const { scrollY } = useScroll()

  const [hidden, setHidden] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("perfil")
  const [isFirstRender, setIsFirstRender] = useState(true)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()

    if (previous !== undefined) {
      if (latest > previous && latest > 50) {
        setHidden(true)
      } else {
        setHidden(false)
      }
    }
  })

  useEffect(() => {
  const sections = navItems.map((item) =>
    document.querySelector(item.href)
  )

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    },
    {
      threshold: 0.6,
    }
  )

  sections.forEach((section) => {
    if (section) observer.observe(section)
  })

  return () => {
    sections.forEach((section) => {
      if (section) observer.unobserve(section)
    })
  }
}, [])

  const variants: Variants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: isFirstRender ? 0.5 : 0.3,
        ease: isFirstRender ? "easeInOut" : "easeOut",
      },
    },
    hidden: {
      y: "-100%",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  const onPageChange = () => {
    setTimeout(() => {
      setMenuOpen(false)
    }, 200)
  }

  return (
    <>
      {/* Desktop Navbar */}
      <motion.div
        variants={variants}
        animate={hidden ? "hidden" : "visible"}
        initial="visible"
        onAnimationComplete={() => setIsFirstRender(false)}
        className="fixed top-0 left-0 z-50 hidden w-full border-b border-gray-800 bg-black/30 px-6 py-4 backdrop-blur-sm md:flex"
      >
        <div className="mx-16 flex w-full max-w-[1920px] items-center justify-between">
          
          {/* Logo */}
          <div className="flex">
            <Image
              src="/img/logblue.png"
              alt="Logo"
              width={90}
              height={28}
              className="object-contain"
            />
          </div>

          {/* Nav Items */}
          <div className="flex flex-1 justify-center space-x-8">
           {navItems.map((item) => {
  const sectionId = item.href.replace("#", "")

  return (
    <a
      key={item.name}
      href={item.href}
      className="relative text-xl font-semibold uppercase text-white transition hover:text-gray-300"
    >
      {item.name}

      {activeSection === sectionId && (
        <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-blue-500" />
      )}
    </a>
  )
})}
          </div>

          {/* Socials */}
          <div className="mr-4 flex flex-row gap-6">
            <Link
              href="https://www.instagram.com/chefbetoreich?igsh=eHp3YTdkcmpzM3Q3"
              target="_blank"
            >
              <SiInstagram
                size={28}
                className="cursor-pointer text-[#2474c3] transition hover:scale-125"
              />
            </Link>

            <Link
              href="https://www.linkedin.com/in/humbertoglarza/"
              target="_blank"
            >
              <FaLinkedin
                size={29}
                className="cursor-pointer text-[#2474c3] transition hover:scale-125"
              />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Mobile Navbar */}
      <motion.div
        variants={variants}
        animate={hidden ? "hidden" : "visible"}
        initial="visible"
        onAnimationComplete={() => setIsFirstRender(false)}
        className="fixed top-0 left-0 z-50 w-full bg-black px-4 py-4 md:hidden"
      >
        <div className="flex items-center justify-between">
          <Image
            src="/img/logblue.png"
            alt="Navbar logo"
            width={90}
            height={28}
            className="object-contain"
          />

          <Button
            className="h-10 gap-2 rounded-xl bg-black/80 px-3 text-white backdrop-blur-md"
            variant="outline"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="size-5 text-white/60" />
            ) : (
              <Menu className="size-5 text-white/60" />
            )}

            <span>{isMenuOpen ? "Close" : "Menu"}</span>
          </Button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="menu"
            className="fixed top-0 left-0 z-50 flex h-screen w-full items-center bg-black/95 px-6"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
          >
            <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4">
              {navItems.map((item, i) => (
                <MenuItem
                  key={item.name}
                  href={item.href}
                  label={item.name.toUpperCase()}
                  delay={0.2 + i * 0.1}
                  onClick={onPageChange}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

interface MenuItemProps {
  href: string
  label: string
  delay: number
  onClick?: () => void
  className?: string
}

function MenuItem({
  href,
  label,
  delay,
  onClick,
  className,
}: MenuItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay,
        duration: 0.3,
      }}
    >
      <a
        href={href}
        className="relative block"
        onClick={onClick}
      >
        <Button
          variant="link"
          className={`font-space-grotesk px-0 text-3xl font-bold text-white ${className}`}
        >
          {label}
        </Button>
      </a>
    </motion.div>
  )
}