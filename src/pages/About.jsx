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
    <div className="space-y-12 max-w-4xl mx-auto py-8 text-zinc-300">
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
              className="h-8 rounded hover:opacity-90 transition"
            />
          ))}
        </div>
      </section>

      {/* Regular Tools */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold text-white">
          Regular tools I use for programming:
        </h3>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 p-5 rounded-2xl border border-zinc-850 bg-zinc-950">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center p-2 rounded-xl bg-black border border-zinc-800/80 hover:border-zinc-700 hover:scale-105 transition duration-200"
              title={tool.name}
            >
              <img
                src={tool.img}
                alt={tool.name}
                className="w-10 h-10 object-contain rounded-md"
              />
              <span className="text-[11px] text-zinc-400 mt-2 truncate w-full text-center">
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
            href="https://www.linkedin.com/in/juliuswuwung/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-5 py-2.5 rounded-xl border border-zinc-800 bg-zinc-950 hover:border-zinc-700 hover:text-white transition"
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
            className="flex items-center gap-3 px-5 py-2.5 rounded-xl border border-zinc-800 bg-zinc-950 hover:border-zinc-700 hover:text-white transition"
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
