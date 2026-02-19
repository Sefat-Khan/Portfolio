import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-transparent px-6 lg:px-20"
    >
      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="absolute top-1/4 -left-20 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px] animate-pulse" />
      <div
        className="absolute bottom-1/4 -right-20 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px] animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      {/* Background Decorative Grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

      <div className="relative z-10 mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* --- LEFT COLUMN: CONTENT --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1"
        >
          {/* Availability Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-6 flex items-center gap-3"
          >
            <motion.span
              animate={{
                boxShadow: [
                  "0 0 0px rgba(59,130,246,0)",
                  "0 0 20px rgba(59,130,246,0.4)",
                  "0 0 0px rgba(59,130,246,0)",
                ],
                borderColor: [
                  "rgba(59,130,246,0.3)",
                  "rgba(59,130,246,1)",
                  "rgba(59,130,246,0.3)",
                ],
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 rounded-full border bg-blue-500/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for freelance
            </motion.span>
          </motion.div>

          {/* Name Heading */}
          <div className="overflow-hidden py-2">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.4,
              }}
              className="text-6xl md:text-8xl font-black tracking-tighter text-white"
            >
              Sefat{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-100 via-slate-400 to-slate-600 opacity-90">
                Khan
              </span>
            </motion.h1>
          </div>

          {/* Role with Animated Gradient */}
          <motion.h2
            variants={itemVariants}
            className="mt-4 text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent"
          >
            Full Stack Web Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-xl text-lg leading-relaxed text-slate-400 font-light tracking-wide"
          >
            I bridge the gap between complex backend logic and seamless user
            experiences. As a{" "}
            <span className="text-white font-medium">Full Stack Developer</span>
            , I specialize in crafting high-performance interfaces with
            <strong className="text-sky-400 font-semibold"> React</strong> and
            architecting robust, scalable systems using{" "}
            <strong className="text-sky-400 font-semibold">
              Laravel & MySQL
            </strong>
            .
          </motion.p>

          {/* Action Buttons & Socials */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <a
              href="#projects"
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 font-bold text-black transition-all hover:pr-10"
            >
              <span className="relative z-10">View Projects</span>
              <ArrowUpRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              <div className="absolute inset-0 translate-y-full bg-blue-600 transition-transform group-hover:translate-y-0" />
            </a>

            <a
              href="/assets/sefat_khan.pdf" // 🔁 replace with your actual CV path
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 rounded-full border border-slate-700 px-8 py-4 font-bold text-white overflow-hidden transition-all hover:border-blue-500"
            >
              <span className="relative z-10">View CV</span>
              <ArrowUpRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-teal-600 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Sefat-Khan"
                className="p-3 rounded-full border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/sefat-khan-44296b2b8"
                className="p-3 rounded-full border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:sefatkhan2231@gmail.com"
                className="p-3 rounded-full border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* --- RIGHT COLUMN: PROFESSIONAL IMAGE --- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-80 md:w-[400px] md:h-[500px]">
            {/* Artistic Glow Backgrounds */}
            <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-blue-500/5 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-purple-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

            {/* Main Image Frame */}
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl group">
              <img
                src="/assets/sefat_khan.png" // CHANGE THIS TO YOUR IMAGE PATH
                alt="Sefat Khan"
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              />

              {/* Subtle Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

              {/* Decorative Corner Element */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-white text-sm font-bold tracking-wider uppercase">
                  Sefat Khan
                </p>
                <p className="text-blue-400 text-xs mt-1 italic italic">
                  Based in Dhaka, BD
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
