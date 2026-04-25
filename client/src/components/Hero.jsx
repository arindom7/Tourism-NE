function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Northeast India Landscape"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzV1x6azwigbrK3LrSSIgo4qYi0uAYsVWBlFrShgwoOutmlGenUkiJIDstFT2yIWeUgpNTaa1PPQeplM1HRtTWoHuMC2vrc4DKA7agd8LQT_VV_bZkNSCxrEH8d_wzycE274l7sZLq8QyKdEjtAh27ky7lGBodyLiqBma-OvUCCWuS4X95HadfzAU80Ujpm0OYQkMFT0UN567jgAHAX8mthzj2fuIxn_k4xZgcDWwKioiDnU9RfJd4PybfRuVCZq33JtA-Cn7Onw8"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-8xl font-extrabold text-white tracking-tight mb-8 leading-tight">
          Discover the Northeast
        </h1>
        <div className="bg-white/95 p-2 rounded-full shadow-2xl flex items-center max-w-2xl mx-auto backdrop-blur-md">
          <span className="material-symbols-outlined text-tertiary ml-4" data-icon="search">search</span>
          <input
            className="w-full bg-transparent border-none focus:ring-0 text-on-surface px-4 py-3 placeholder:text-slate-400"
            placeholder="Where do you want to wander?"
            type="text"
          />
          <button className="bg-primary-container hover:bg-primary text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg active:scale-95">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;