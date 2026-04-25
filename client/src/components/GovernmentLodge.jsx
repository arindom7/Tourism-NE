const lodges = [
  {
    id: 1,
    name: "Dirang Lodge",
    state: "ARUNACHAL",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAu-zRAfiW9u079EjDzwyORtZHIURtPyrzFvAFxgW37ZkmJEF6r34g0w63AEdnLvHE9USXLJoWTkOTHIc8ku8Y429ML2Sf6rHtNgrqQ9Q5jKcgiTSO4uIR4QvHyx7rjmGx6P1k9dBY18CFn7TWJe2Iv44yzyky0u12k17NqjX9fiU97fgpHy8k0fN5bQgOX3cfFHfGzbUZRAL48OBh6q7qXJ7n7W7zss1qxESBig8gZUn5GX3zlGKDV6T8emMM1NWRL7eEvNT1IV2E",
    rotation: "-2deg",
  },
  {
    id: 2,
    name: "Kaziranga Aranya",
    state: "ASSAM",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDELKTJRN0GiUKK4s1ZOEZc7vIqT1TIpMg3j1JdvULTdZMMS1Cutbe4U2ev-i374o523qEoDtL_xm6cqwnQOmYDCewENHsZaRnZM-NaxS9XWWsqIXz6YAnK4pfM16Tdq1I_zL42IO8vlAzQGyG3pqEFYXvIS4bwL-cd3WJFfEcS307t-W3oO94-Z8s1UHVaGEhlhyOTkHMkqbNzgcfRgTzKbBFiOyIDY2pgOVU0wpW-HnTOCXXpkhRmrFrHDWWW7_rEit8RgKvlUxI",
    rotation: "3deg",
  },
];

function GovernmentLodge() {
  return (
    <section className="py-24 px-6 bg-tertiary overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <span className="text-orange-300 font-bold tracking-widest uppercase text-xs">Trusted Stays</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">Government Lodge Spotlight</h2>
          <p className="text-slate-200 text-lg mb-10 leading-relaxed max-w-lg">
            Discover authentic hospitality in premium locations managed by the Northeast Tourism Department. Reliable, culturally rich, and stunningly situated.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-orange-400/20 p-3 rounded-xl">
                <span className="material-symbols-outlined text-orange-300" data-icon="verified">verified</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Verified Safety</h4>
                <p className="text-slate-300 text-sm">Official government standard sanitization and security protocols.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-orange-400/20 p-3 rounded-xl">
                <span className="material-symbols-outlined text-orange-300" data-icon="location_on">location_on</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Prime Locations</h4>
                <p className="text-slate-300 text-sm">Situated at the most scenic vantage points in every district.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          {lodges.map((lodge) => (
            <div key={lodge.id} className={lodge.id === 1 ? "pt-12" : ""}>
              <div className="bg-white rounded-2xl overflow-hidden p-2 shadow-2xl" style={{ transform: `rotate(${lodge.rotation})` }}>
                <img className="w-full h-48 object-cover rounded-xl" alt={lodge.name} src={lodge.image} />
                <div className="p-4">
                  <div className="text-xs text-primary font-bold mb-1">{lodge.state}</div>
                  <div className="font-bold text-on-surface">{lodge.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GovernmentLodge;