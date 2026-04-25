const destinations = [
  {
    id: 1,
    title: "Dawki River, Meghalaya",
    description: "Experience the unreal clarity of the Umngot River, where boats seem to glide through thin air.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnBymAba4zBJPl4u9zKoeBGD6X9xTXiCAeeR55azpZRNrl8UMgHSwq6gkc6FGhohxg0-eXZLqNlU2mp99xPPML92wd6CYqbplwD8aNy0zx2YjPpNNCM89LTm2dXGmNi-r9W5EIdl_4X8G4MHc8fvsfswPeiE3TFbL41qQHLhG48vopHR0UsngKYoL-hJOa0cpJA8506BWJEitCkLwJfvnF4ezp9oNC4tzo9Tg3da5llm8ZJ4N_xIb0C8lm_PTewKG3UHmf23Pi0O4",
    tags: ["Nature", "$$"],
  },
  {
    id: 2,
    title: "Kaziranga, Assam",
    description: "The sanctuary of the Great One-Horned Rhinoceros, a sprawling grassland of ancient wonders.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhUM7pMNofGEs2tpQqpuS6RkKtnkpx9PG_bFMqhMtoq6s_TeQwE2PQ0I4IaHVi4tfbTSgHZgBnoKiJrHPEm9asFSuUj2HrxCB25ImlHirgeau6UbY3fGqEMYCeqkw0DrScxYQrVCDZRvf38I1y8n3Tf0N0Gn8VQJ9XPI1ygXI9Euu45vZ9SV-1hjuXVaoZmdtduwAyf0CT2R090d3o84Bu7lk7tA2x9ylWUvNSvL7OfOWBDM7OCOpqs5h6ztL0DQVLldj-vjnQYEg",
    tags: ["Wildlife", "$$$"],
  },
  {
    id: 3,
    title: "Tawang, Arunachal",
    description: "Spiritual heights await at the second largest monastery in the world, nestled in the Himalayas.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGLHbEsFujhkqi-U_KZnbxHEp2oM-uBCcH5PlrePKfiPozuqORHLpx_v4niFQHmzucM8Vjp9_r-917h-Y_tIfgqruJgiCDsOw4M1Zck3b997YyndAyJRbNh-agkf2nRS5dRXg3QsvPCQ8-f7sB8ZlcioQVMBpksoF8Neo3GaOSl05H7PdZfRm9U5ND64hiToZlagn6oqKI5l_IM2bb91Ldx4kShbEQbJWJh5ol4Iaw7QuIR4fw88vTDe3x314Qk-CLpmJqL2BkizM",
    tags: ["Culture", "$$"],
  },
];

function TrendingDestinations() {
  return (
    <section className="py-20 px-6 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-xs">Curated for you</span>
            <h2 className="text-4xl font-bold text-on-surface mt-2">Trending Destinations</h2>
          </div>
          <a className="text-primary font-bold flex items-center gap-2 hover:underline" href="#">
            View All Destinations <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={dest.title}
                  src={dest.image}
                />
                <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white hover:text-primary transition-all">
                  <span className="material-symbols-outlined" data-icon="favorite">favorite</span>
                </button>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {dest.tags.map((tag) => (
                    <span key={tag} className="bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{dest.title}</h3>
                <p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed">{dest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingDestinations;