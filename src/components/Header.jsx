import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // Hide header on scroll down, show on scroll up for a professional UX
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: "Home", href: "/" }, // Changed naming for "Space" theme
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    >
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-10">
        <nav className="relative flex items-center justify-between rounded-full border border-white/10 bg-slate-950/40 px-6 py-3 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] before:absolute before:inset-0 before:rounded-full before:bg-linear-to-r before:from-blue-500/10 before:to-purple-500/10 before:opacity-50">
          {/* Logo with Cosmic Glow */}
          <a
            href="/"
            className="relative z-10 flex items-center gap-2 group cursor-pointer"
          >
            <div className="p-4 rounded-full bg-linear-to-tr from-blue-600 to-teal-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-110 transition-transform">
              <span className="text-xl font-bold tracking-widest text-white uppercase">
                SK
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-lg font-bold uppercase tracking-[0.2em] text-slate-400 transition-colors hover:text-white group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-400 transition-all group-hover:w-full" />
              </a>
            ))}

            <a
              href="#contact"
              className="relative overflow-hidden rounded-full bg-linear-to-tr from-blue-600 to-teal-500 px-6 py-2 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95"
            >
              Initiate Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-10 md:hidden text-white p-2"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="h-0.5 w-full bg-white rounded-full"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="h-0.5 w-full bg-blue-400 rounded-full"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="h-0.5 w-full bg-white rounded-full"
              />
            </div>
          </button>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="absolute left-0 top-full mt-4 w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950/90 p-8 backdrop-blur-2xl md:hidden"
              >
                <div className="flex flex-col gap-8 text-center">
                  {navLinks.map((link, i) => (
                    <motion.a
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-bold uppercase tracking-[0.3em] text-slate-300 hover:text-blue-400"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl border border-blue-500/50 bg-blue-500/10 py-4 text-sm font-bold uppercase tracking-widest text-blue-400"
                  >
                    Contact Me
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.header>
  );
}
