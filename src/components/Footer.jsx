function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // src/components/Footer.jsx
    <footer className="border-t border-zinc-800/80 bg-black mt-auto py-8 text-center text-sm text-zinc-500">
      {/* Ganti max-w-5xl menjadi w-full */}
      <div className="w-full px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Isi footer tetap sama */}
      </div>
    </footer>
  );
}

export default Footer;
