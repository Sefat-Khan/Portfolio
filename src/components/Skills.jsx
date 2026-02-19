import { motion } from "framer-motion";

const skills = [
  { name: "HTML", val: 95, color: "from-orange-500 to-red-500" },
  { name: "CSS", val: 90, color: "from-blue-500 to-indigo-500" },
  { name: "JS", val: 88, color: "from-yellow-400 to-orange-400" },
  { name: "React", val: 85, color: "from-cyan-400 to-blue-500" },
  { name: "Laravel", val: 92, color: "from-red-500 to-pink-600" },
  { name: "MySQL", val: 85, color: "from-blue-600 to-indigo-700" },
  { name: "Python", val: 85, color: "from-yellow-600 to-blue-700" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full px-6 py-32 lg:px-20 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h3 className="text-sm font-black uppercase tracking-[0.3em] text-blue-500 mb-2">
            Expertise
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Technical <span className="text-slate-500">Skills</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map(({ name, val, color }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-slate-700 hover:bg-slate-900"
            >
              <div className="flex justify-between items-end mb-4">
                <span className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {name}
                </span>
                <span className="text-sm font-mono text-slate-500">{val}%</span>
              </div>

              {/* Progress Bar Track */}
              <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                {/* Animated Fill */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${val}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={`absolute h-full rounded-full bg-linear-to-r ${color} shadow-[0_0_10px_rgba(59,130,246,0.5)]`}
                />
              </div>

              {/* Subtle hover effect light */}
              <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 blur-xl transition-opacity group-hover:opacity-10 bg-white/5" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
