// src/pages/About.jsx
function About() {
  const techBadges = [
    {
      name: "React",
      src: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    },
    {
      name: "Swift",
      src: "https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white",
    },
    {
      name: "Git",
      src: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
    },
    {
      name: "Java",
      src: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
    },
    {
      name: "Flutter",
      src: "https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white",
    },
    {
      name: "Laravel",
      src: "https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white",
    },
    {
      name: "PHP",
      src: "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",
    },
  ];

  const tools = [
    {
      name: "Tailwind CSS",
      url: "https://tailwindcss.com",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
      name: "XAMPP",
      url: "https://www.apachefriends.org",
      img: "https://w7.pngwing.com/pngs/54/423/png-transparent-white-and-yellow-logo-square-area-text-symbol-yellow-xampp-text-rectangle-orange-thumbnail.png",
    },
    {
      name: "MySQL",
      url: "https://www.mysql.com",
      img: "https://logowik.com/content/uploads/images/mysql.jpg",
    },
    {
      name: "Java",
      url: "https://www.java.com/en/",
      img: "https://logowik.com/content/uploads/images/731_java.jpg",
    },
    {
      name: "Laravel",
      url: "https://laravel.com",
      img: "https://w7.pngwing.com/pngs/399/620/png-transparent-laravel-hd-logo.png",
    },
    {
      name: "Bootstrap",
      url: "https://getbootstrap.com/",
      img: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow@2x.png",
    },
    {
      name: "Kotlin",
      url: "https://kotlinlang.org",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
    },
    {
      name: "Android",
      url: "https://www.android.com",
      img: "https://cdn.freebiesupply.com/logos/large/2x/android-logo-png-transparent.png",
    },
    {
      name: "VS Code",
      url: "https://code.visualstudio.com",
      img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png",
    },
  ];

  return (
    <div className="space-y-12 max-w-4xl mx-auto py-8 text-zinc-300 animate-fade-in-up">
      {/* Intro Section */}
      <section className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Hi there 👋
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-400">
          Welcome To My Profile
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
          I am an Informatics graduate from Universitas Ciputra Surabaya,
          specializing in Full Stack Development with a strong focus on backend
          architecture, API engineering, and responsive web platforms.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          💻 Tech Stack:
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {techBadges.map((badge) => (
            <img
              key={badge.name}
              src={badge.src}
              alt={badge.name}
              className="h-8 rounded hover:scale-105 transition-transform duration-200"
            />
          ))}
        </div>
      </section>

      {/* Regular Tools */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold text-white">
          Regular tools I use for programming:
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-3 p-5 rounded-2xl border border-zinc-850 bg-zinc-950">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center justify-center p-2 rounded-xl bg-black border border-zinc-800/80 hover:border-zinc-600 hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(255,255,255,0.04)] transition-all duration-200"
              title={tool.name}
            >
              <img
                src={tool.img}
                alt={tool.name}
                className="w-10 h-10 object-contain rounded-md group-hover:scale-110 transition-transform duration-200"
              />
              <span className="text-[11px] text-zinc-400 mt-2 truncate w-full text-center group-hover:text-zinc-200 transition-colors">
                {tool.name}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-4 pt-4 border-t border-zinc-850">
        <h3 className="text-xl font-bold text-white">Contact Me!</h3>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://github.com/Jukius30"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-5 py-2.5 rounded-xl border border-zinc-800 bg-zinc-950 hover:border-zinc-600 hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span className="text-sm font-medium">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/juliuswuwung/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-5 py-2.5 rounded-xl border border-zinc-800 bg-zinc-950 hover:border-zinc-600 hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            <img
              src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
              alt="LinkedIn"
              className="w-5 h-5 object-contain"
            />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>

          <a
            href="https://www.instagram.com/julius.sw/?hl=id"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-5 py-2.5 rounded-xl border border-zinc-800 bg-zinc-950 hover:border-zinc-600 hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg"
              alt="Instagram"
              className="w-5 h-5 invert object-contain"
            />
            <span className="text-sm font-medium">Instagram</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
