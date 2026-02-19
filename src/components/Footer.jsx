import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-transparent w-full px-6 pb-12 pt-20 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Brand & Nav */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black tracking-tighter text-white mb-2">
              SK<span className="text-blue-500">.</span>
            </h2>
            <p className="text-slate-500 text-sm max-w-50">
              Crafting digital excellence with code and creativity.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-400">
            {["Home", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition-colors hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            {[
              { Icon: Github, href: "https://github.com/Sefat-Khan" },
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/in/sefat-khan-44296b2b8",
              },
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                whileHover={{ y: -3 }}
                className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-slate-800 to-transparent mb-8" />

        {/* Bottom Section: Legal & Back to Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Sefat Khan. Built with React &
            Tailwind.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
          >
            Back to top
            <span className="p-2 rounded-full bg-slate-900 group-hover:-translate-y-1 transition-transform">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
