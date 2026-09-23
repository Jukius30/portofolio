// src/data/projects.js

import logoJukiverse from "../assets/logojukiverse.png";
import logoInicio from "../assets/iniciostudio.png";
import logoMinengens from "../assets/logominegens.png";
import logoKiwi from "../assets/kiwiprinting.png";

export const projectsData = [
  {
    slug: "jukiverse-store",
    title: "Jukiverse Store Website",
    category: "Web Development & API Integration",
    description:
      "Platform top-up kredit Minecraft berbasis ekonomi virtual dengan verifikasi sesi pemain dan integrasi gateway pembayaran otomatis.",
    longDescription:
      "Platform web top-up khusus server Minecraft berbasis ekonomi kredit virtual yang dibangun menggunakan Laravel 11 dan Bootstrap 5. Mengimplementasikan alur transaksi otomatis ujung-ke-ujung: otentikasi sesi pemain via custom middleware (CheckMinecraftAuth), pembuatan invoice dan pembayaran multi-metode dengan Midtrans Snap API, serta verifikasi webhook server-side yang memicu eksekusi perintah konsol instan ke server game melalui Pterodactyl API.",
    image: logoJukiverse, // sesuaikan dengan variabel asset import Anda
    tags: [
      "Laravel 11",
      "PHP",
      "Bootstrap 5",
      "Midtrans API",
      "Pterodactyl API",
      "MySQL",
    ],
    githubUrl: "https://github.com/Jukius30/JukiverseWeb", // sesuaikan dengan link repo Jukiverse Anda
    liveUrl: null, // ubah ke URL aktif jika web store sudah dideploy publik
  },
  {
    slug: "linkedin-scraper",
    title: "Software LinkedIn Scraper",
    category: "Automation & Data",
    description:
      "Alat automasi web scraping untuk ekstraksi data profil dan prospek profesional LinkedIn menggunakan browser automation.",
    longDescription:
      "Dibangun menggunakan Python dan Selenium dengan arsitektur headless browser. Dilengkapi fitur delay acak untuk meminimalisir deteksi anti-bot, pagination otomatis, serta ekspor data hasil scraping ke format CSV dan JSON.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "Selenium", "Web Scraping", "Automation"],
    githubUrl: "https://github.com/Jukius30/scrappingweb",
    liveUrl: null,
  },
  {
    slug: "email-verifier",
    title: "Software Email Verifier",
    category: "Backend & Tooling",
    description:
      "Skrip utilitas untuk validasi format sintaks email, verifikasi record DNS/MX domain, serta mitigasi bounce rate.",
    longDescription:
      "Utilitas berbasis CLI yang memverifikasi keabsahan alamat email dalam jumlah massal. Melakukan pengecekan multi-tahap: validasi regex RFC standard, verifikasi MX record domain DNS, dan simulasi handshake SMTP tanpa mengirim pesan nyata.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "DNS Lookup", "SMTP Validation", "CLI Tool"],
    githubUrl: "https://github.com/Jukius30/emailverif",
    liveUrl: null,
  },
  {
    slug: "iniciostudio-profile",
    title: "InicioStudio Profile Website",
    category: "Web Development",
    description:
      "Website profil agensi kreatif dengan arsitektur backend kokoh dan tata letak antarmuka responsif.",
    longDescription:
      "Situs portofolio agensi dengan sistem manajemen portofolio visual interaktif. Menggunakan Laravel dan Tailwind CSS untuk rendering halaman yang cepat, layout adaptif di layar mobile, dan SEO-friendly structure.",
    image: logoInicio,
    tags: ["Laravel", "PHP", "Blade", "Tailwind CSS", "MySQL"],
    githubUrl: "https://github.com/Jukius30/iniciostudio",
    liveUrl: "https://iniciostudio.web.id/",
  },
  {
    slug: "minegens-profile",
    title: "Minegens Profile Website",
    category: "Frontend Engineering",
    description:
      "Situs landing page komunitas modern dengan build cepat berbasis modul ES bawaan dan Tailwind CSS.",
    longDescription:
      "Landing page single-page application (SPA) yang menyajikan identitas brand server, pengumuman jadwal update, tautan Discord terintegrasi, dan panduan bergabung. Dibangun mengedepankan efisiensi bundle size dan rendering instan.",
    image: logoMinengens,
    tags: ["React.js", "Vite", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/Jukius30/minegens_profile_web",
    liveUrl: "https://minegens.vercel.app/",
  },
  {
    slug: "kiwiprinting-profile",
    title: "Kiwi Printing Profile Website",
    category: "Web Development",
    description:
      "Website profil perusahaan cetak dengan tata letak modern dan fitur interaktif.",
    longDescription:
      "Situs portofolio perusahaan cetak yang menampilkan layanan, karya, dan informasi kontak. Dibangun dengan teknologi web terkini untuk memberikan pengalaman pengguna yang optimal di berbagai perangkat.",
    image: logoKiwi,
    tags: ["React.js", "Vite", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/Jukius30/kiwiprinting",
    liveUrl: "https://kiwiprinting.vercel.app/",
  },
  {
    slug: "Trello-clone",
    title: "Trello Clone",
    category: "Web Development",
    description: "Website clone dari aplikasi manajemen proyek Trello dengan fitur dasar seperti task, daftar projek, dan login.",
    longDescription: "Website clone dari aplikasi manajemen proyek Trello yang dibangun menggunakan React.js, Tailwind CSS, dan supabase. Fitur utama meliputi pembuatan task, pengelolaan daftar projek, serta sistem login dan autentikasi pengguna.",
    image: "https://images.unsplash.com/photo-1581091870620-3c7e1f6b8f5d?auto=format&fit=crop&w=1200&q=80",
    tags: ["React.js", "Tailwind CSS", "Supabase", "JavaScript"],
    githubUrl: "https://github.com/Jukius30/trello-clone",
    liveUrl: "https://trello-clone-pink-six.vercel.app/",
  },
];
