// src/pages/Portfolio.jsx
import { Link } from "react-router-dom";
import { projectsData } from "../data/projects";

function Portfolio() {
  return (
    <section className="py-8 space-y-8 animate-fade-in-up">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
          Featured Projects
        </h1>
        <p className="text-zinc-400">
          Daftar perangkat lunak, automasi, dan platform web yang telah saya kembangkan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <article
            key={project.slug}
            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-850 bg-zinc-950/60 hover:border-zinc-700 hover:bg-zinc-950 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300"
          >
            {/* Wadah Gambar Pratinjau */}
            <div className="w-full h-48 bg-black flex items-center justify-center p-4 border-b border-zinc-850 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-black border border-zinc-800 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/portfolio/${project.slug}`}
                  className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Lihat Detail Proyek</span>
                  <span className="group-hover/link:translate-x-1 transition-transform duration-200">&rarr;</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;