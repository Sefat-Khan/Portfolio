import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full px-6 py-32 lg:px-20 bg-transparent overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-125 w-125 rounded-full bg-blue-600/10 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-blue-500 mb-2">
              Get in Touch
            </h3>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let's build something{" "}
              <span className="text-slate-500 text-outline">great</span>.
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-md">
              I’m currently open to new opportunities and interesting projects.
              Whether you have a question or just want to say hi, I’ll get back
              to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white hover:text-blue-400 transition-colors cursor-pointer group">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-blue-500/50">
                  <Mail size={20} />
                </div>
                <a
                  href="mailto:sefatkhan2231@gmail.com"
                  className="font-medium"
                >
                  sefatkhan2231@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-white hover:text-blue-400 transition-colors cursor-pointer group">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-blue-500/50">
                  <Phone size={20} />
                </div>
                <span className="font-medium">01308706982</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-500 ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-500 ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-500 ml-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600 resize-none"
                  required
                />
              </div>

              <button className="group relative w-full overflow-hidden rounded-xl bg-blue-600 py-4 font-bold text-white transition-all hover:bg-blue-500 active:scale-95">
                <span className="flex items-center justify-center gap-2">
                  Send Message{" "}
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer Label */}
      <footer className="mt-32 text-center text-slate-600 text-sm">
        © {new Date().getFullYear()} Sefat Khan. All rights reserved.
      </footer>
    </section>
  );
}
