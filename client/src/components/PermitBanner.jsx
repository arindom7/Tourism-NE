function PermitBanner() {
  return (
    <section className="py-16 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="bg-secondary-container rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-on-primary-container mb-4">Travel Permit Awareness</h2>
            <p className="text-on-secondary-container max-w-md text-lg">
              Some regions in the Northeast require an Inner Line Permit (ILP) or Protected Area Permit (PAP) for entry. Stay compliant and plan ahead.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <button className="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-on-primary-container transition-all">
              Apply for ILP
            </button>
            <button className="bg-white/50 backdrop-blur-md text-on-primary-container border border-primary-container/20 px-10 py-4 rounded-full font-bold hover:bg-white transition-all">
              View Guidelines
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PermitBanner;