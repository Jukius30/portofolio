// src/pages/ProjectDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-white">Project Not Found</h2>
        <p className="text-zinc-400">Proyek yang Anda cari tidak tersedia.</p>
        <Link
          to="/portfolio"
          className="inline-block px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-300 hover:text-white transition"
        >
          &larr; Kembali ke Portfolio
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto py-8 space-y-10">
      <div>
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-blue-400 transition"
        >
          &larr; Kembali ke Daftar Portofolio
        </Link>
      </div>

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            {project.category}
          </span>
          {/* Badge Status Ketersediaan Demo */}
          <span
            className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${
              project.liveUrl
                ? 'bg-emerald-950/40 border-emerald-800 text-emerald-400'
                : 'bg-zinc-900 border-zinc-800 text-zinc-400'
            }`}
          >
            {project.liveUrl ? 'Live Production' : 'Backend / CLI Only'}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          {project.title}
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-md text-xs font-medium bg-zinc-950 border border-zinc-800 text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Pratinjau Gambar */}
      <div className="w-full h-72 sm:h-96 bg-zinc-950 rounded-2xl border border-zinc-850 flex items-center justify-center p-6 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">Tentang Proyek</h2>
        <p className="text-base text-zinc-300 leading-relaxed">
          {project.longDescription}
        </p>
      </section>

      {/* Action Buttons */}
      <section className="flex flex-wrap items-center gap-4 pt-6 border-t border-zinc-850">
        {/* Tombol GitHub */}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition shadow-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span>GitHub Repository</span>
          </a>
        )}

        {/* Kondisional: Tombol Live Demo AKTIF atau Disabled State */}
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition shadow-sm"
          >
            <span>Live Project Demo</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-950 border border-zinc-800/80 text-zinc-500 text-sm cursor-not-allowed">
            <span className="w-2 h-2 rounded-full bg-zinc-600"></span>
            No Live Demo (CLI / Internal Engine)
          </span>
        )}
      </section>
    </article>
  );
}

export default ProjectDetail;