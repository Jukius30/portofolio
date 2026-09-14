// src/data/projects.js
export const projectsData = [
  {
    slug: 'jukiverse-store',
    title: 'Jukiverse Store Website',
    category: 'Web Development',
    description:
      'Platform web store server game terintegrasi sistem automasi gateway pembayaran dan pengiriman item instan ke backend server.',
    longDescription:
      'Proyek ini menangani alur transaksi digital dari pemilihan paket oleh pemain, pembuatan invoice otomatis melalui Midtrans/Payment Gateway, hingga pengiriman item/command langsung ke server Minecraft via API. Dilengkapi dashboard analitik pesanan dan riwayat transaksi.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Laravel', 'PHP', 'Blade', 'Payment Gateway', 'MySQL'],
    githubUrl: 'https://github.com/Jukius30',
    liveUrl: 'https://example.com', // Kosongkan (null / '') jika belum ada demo publik
  },
  {
    slug: 'linkedin-scraper',
    title: 'Software LinkedIn Scraper',
    category: 'Automation & Data',
    description:
      'Alat automasi web scraping untuk ekstraksi data profil dan prospek profesional LinkedIn menggunakan browser automation.',
    longDescription:
      'Dibangun menggunakan Python dan Selenium dengan arsitektur headless browser. Dilengkapi fitur delay acak untuk meminimalisir deteksi anti-bot, pagination otomatis, serta ekspor data hasil scraping ke format CSV dan JSON.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    tags: ['Python', 'Selenium', 'Web Scraping', 'Automation'],
    githubUrl: 'https://github.com/Jukius30',
    liveUrl: null,
  },
  {
    slug: 'email-verifier',
    title: 'Software Email Verifier',
    category: 'Backend & Tooling',
    description:
      'Skrip utilitas untuk validasi format sintaks email, verifikasi record DNS/MX domain, serta mitigasi bounce rate.',
    longDescription:
      'Utilitas berbasis CLI yang memverifikasi keabsahan alamat email dalam jumlah massal. Melakukan pengecekan multi-tahap: validasi regex RFC standard, verifikasi MX record domain DNS, dan simulasi handshake SMTP tanpa mengirim pesan nyata.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    tags: ['Python', 'DNS Lookup', 'SMTP Validation', 'CLI Tool'],
    githubUrl: 'https://github.com/Jukius30',
    liveUrl: null,
  },
  {
    slug: 'iniciostudio-profile',
    title: 'InicioStudio Profile Website',
    category: 'Web Development',
    description:
      'Website profil agensi kreatif dengan arsitektur backend kokoh dan tata letak antarmuka responsif.',
    longDescription:
      'Situs portofolio agensi dengan sistem manajemen portofolio visual interaktif. Menggunakan Laravel dan Tailwind CSS untuk rendering halaman yang cepat, layout adaptif di layar mobile, dan SEO-friendly structure.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Laravel', 'PHP', 'Blade', 'Tailwind CSS', 'MySQL'],
    githubUrl: 'https://github.com/Jukius30',
    liveUrl: 'https://example.com',
  },
  {
    slug: 'minegens-profile',
    title: 'Minegens Profile Website',
    category: 'Frontend Engineering',
    description:
      'Situs landing page komunitas modern dengan build cepat berbasis modul ES bawaan dan Tailwind CSS.',
    longDescription:
      'Landing page single-page application (SPA) yang menyajikan identitas brand server, pengumuman jadwal update, tautan Discord terintegrasi, dan panduan bergabung. Dibangun mengedepankan efisiensi bundle size dan rendering instan.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    tags: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Jukius30',
    liveUrl: 'https://example.com',
  },
];