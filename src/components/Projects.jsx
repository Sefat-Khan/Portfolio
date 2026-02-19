import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react"; // Optional: npm i lucide-react

const projectData = [
  {
    title: "NextNest",
    image: "/assets/nextnest.png",
    desc: "NextNestBD is a Bangladeshi study-abroad consultancy that helps students with personalized guidance, university admissions, and visa support to make studying overseas smooth and stress-free.",
    tags: ["Tailwind", "Laravel", "MySQL"],
    link: "https://nextnestbd.com",
    github: "https://github.com/Sefat-Khan/NextNest_laravel.git",
  },
  {
    title: "ZotZoneR",
    image: "/assets/zotzonr.png",
    desc: "Zotzonr is a modern ecommerce web application built with Laravel, Inertia.js, and React. It provides a seamless single-page application experience while leveraging Laravel’s powerful backend ecosystem.",
    tags: ["React", "Tailwind", "Laravel", "Inertia", "MySQL"],
    link: "https://mertie-commutable-walter.ngrok-free.dev/",
    github: "https://github.com/Sefat-Khan/ZotZonR.git",
  },
  {
    title: "Fast Ecommerce",
    image: "/assets/fast.png",
    desc: "Integration with LLMs for a seamless conversational experience.",
    tags: ["React", "Nextjs", "Tailwind", "MongoDB"],
    link: "https://fast-cart-pi.vercel.app/",
    github: "https://github.com/Sefat-Khan/Fast_ecommerce.git",
  },
  {
    title: "Tech Quiz",
    image: "/assets/tech_quiz.png",
    desc: "A tech quiz application built with React and Firebase.",
    tags: ["React", "Firebase", "Tailwind"],
    link: "https://react-quiz-appeact.netlify.app/",
    github: "https://github.com/Sefat-Khan/React-Quiz-App.git",
  },
  {
    title: "Oil",
    image: "/assets/oil.png",
    desc: "A tech quiz application built with React and Firebase.",
    tags: ["Html", "Tailwind", "JavaScript"],
    link: "https://sefat-khan.github.io/oil/",
    github: "https://github.com/Sefat-Khan/oil.git",
  },
  {
    title: "Job Listing",
    image: "/assets/job_listing.png",
    desc: "A job listing application built with React and Firebase.",
    tags: ["Html", "Css", "JavaScript"],
    link: "https://sefat-khan.github.io/static-job-listings-master/",
    github: "https://github.com/Sefat-Khan/static-job-listings-master.git",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full px-6 py-32 lg:px-20 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-emerald-500 mb-2">
              Portfolio
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Featured <span className="text-slate-500">Works</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-md">
            A selection of my favorite projects, ranging from full-stack
            platforms to experimental UI experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 transition-all hover:border-emerald-500/50"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video w-full overflow-hidden bg-slate-800">
                <div className="h-full w-full bg-linear-to-br from-slate-800 to-slate-900 transition-transform duration-500 group-hover:scale-110 flex items-center justify-center text-slate-700 font-bold">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {project.desc}
                </p>

                {/* Footer Links */}
                <div className="mt-auto pt-6 flex items-center gap-4">
                  <a
                    href={project.link}
                    className="flex items-center gap-1 text-sm font-bold text-white hover:underline"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                  <a
                    href={project.github}
                    className="text-slate-500 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Hover Shimmer Effect */}
              <div className="absolute inset-0 pointer-events-none border-2 border-transparent group-hover:border-emerald-500/20 rounded-2xl transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
