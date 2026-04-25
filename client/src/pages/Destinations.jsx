const destinations = [
  {
    id: 1,
    title: "Tawang Monastery",
    state: "Arunachal Pradesh",
    difficulty: "Moderate Reach",
    description: "Cultural Heritage",
    price: "Entry: Free",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfDkN3oUXYEVNbxGmWg1SVomfTrrtBR1qobcvY7QzgD9AiI8wmL021htFA5E6psMdK3iWkcE5JGlJ4Cy_-BTTyThTih82r5zN5yc8soTND026E4-3VXktpmbI19Tn-kgtfU_-8PELjCXdK_W6VmN4-IdltPDG9rc51xylLevgRDcQqhrDJZb6iyWF9_2vjl5nqpUwekYav3X6kQt7PS_ZNCCiz8S8RwmBxVakriTuWft7-S0Pu6OzHvYEDLx9BYzWjVHNIOz4jvLo",
    tags: ["Permit Required", "Trending"],
    category: "Cultural",
  },
  {
    id: 2,
    title: "Living Root Bridges",
    state: "Meghalaya",
    difficulty: "Nature Trek",
    description: "Eco-Wonder",
    price: "Permit: No",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD99oLGE6cp6COBids47IcdFc3biyD807OPjOVjP0Ehj4_0bNC2BwVDFXVpSFcS8P-dojSGwpF32hrHKdkKRD3Q6njjXekoIJ9P-me2z4NdiHQ1PqJtUb-dDPs4ajZItEq5VBpokfvEcPCkvVWWFHX8Tt-0E6uJLFQFd9QTwrTW7575FBri6MWXoFJHWWjqeBWBjXn55fUkR7kpWM1d0_Sh2oSeG4zfDYF29S-7IZGXXlcjx4RX192OHkcbDMLIBVdrM7_wHHPyo80",
    tags: ["Must Visit"],
    category: "Nature",
  },
  {
    id: 3,
    title: "Gurudongmar Lake",
    state: "Sikkim",
    difficulty: "High Altitude",
    description: "Adventure",
    price: "Entry: $15",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqbPwqMx2L1JK4tIlu1dwPFmFN6_4IFn0_VWJi5QULg0KveDBi_gM_OpXLkwLOzaagG70uYTsV6C4DFwGR1BAjkCzVo-MLwNCVKUQreRZzvxqBphoPGxl1yQ7vAgF3NRH7TiuE95E2sCVSU9WnhLFuJLQGWWJnN8etwWBqNtn42ENSiH2a1O7mP3eb-oO70a5HzcPtbq2sT7TeTRNSMbo7EdMyKBvvAVqqsDRJ-putc82rRKT-_DSylbDP9TdApePnfUEDEk_9kDc",
    tags: ["Permit Required"],
    category: "Adventure",
  },
  {
    id: 4,
    title: "Kaziranga Safari",
    state: "Assam",
    difficulty: "Wildlife Tour",
    description: "Safari",
    price: "Permit: No",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqQh-LcsZPkyKQa_dyd-6A4prN5qunb2hR_xKjl5I3pQVmApdCSPzPO7Fg7wCF7-BpqxgeKIPaqORyohpnvofMT3HYvuBduufU_wf9vDkxIDb4RMboRFuRmikaUNCc8pev7uw6pRJboRWlGdWvIHPj-zI_u6zc6sDHpLPzEVjXZj8QR4JedlrsV-5LuGp4_MH-PCwEvg_sIYHq4_5Qv1wI_PlVA_x8wYprNlOCglIFrjytx3uqtKhV3IE2HOd0e2lNq-bNNcehkJc",
    tags: ["Wildlife Hotspot"],
    category: "Wildlife",
  },
  {
    id: 5,
    title: "Ziro Valley",
    state: "Arunachal Pradesh",
    difficulty: "Easy",
    description: "Festival Hub",
    price: "Entry: Free",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXCGXCY6wNMKpqImPaHA0Suc-Ffb28B30O9d299gWdRs4sz1DzioYDs08RqF7KQzaEsFaswCPNpa9-9NDLZs_Wkz70iiDqUfavqCvZNVGYx0ihOyUFCz1Pg9tFG6eY0zmeUEgQ4L_p0s0Pz-hFd_iSTnXh8nI7_fT5hzSMXrndvzy_wSp5MZKowZnN1GhOcXClcmC-ce6TlymIxaE93FSKzF_xnwRBXcJb8Yq9CgrWSgAKF6V185Tz48iCrZmZISzpbR1es1aOr4I",
    tags: ["Permit Required"],
    category: "Cultural",
  },
  {
    id: 6,
    title: "Loktak Lake",
    state: "Manipur",
    difficulty: "Photography",
    description: "Floating Lake",
    price: "Permit: No",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuQCIgCU0hbsUF5Y7rii3esbMUkMBLatR3D9kkDWuZTLQ6eknForfv_4E9O0MYjqzmJOHoNngU09NLSloddqyYcZ_lvUQHewzOvHBtevztq4Myp0OoDqySjxxOduu_Jo0mTxbgxzz9B95LSpQ3L53vCclosqYBkAdLaGXygTLN9AxWZtML2TRHJeDJbJJJz5uA6F44MXivqK45AUR6LI5e1ZpSIPHTpzud105d8CytPEZA6wrSPLgiKkooQlkRnLsuJfCH0m-bju4",
    tags: ["Unique Experience"],
    category: "Nature",
  },
]

const states = [
  { name: "Arunachal Pradesh", checked: true },
  { name: "Meghalaya", checked: false },
  { name: "Nagaland", checked: false },
  { name: "Sikkim", checked: true },
  { name: "Assam", checked: false },
]

const categories = ["Nature", "Wildlife", "Cultural", "Adventure"]

import Footer from '../components/Footer'

function Destinations() {
  return (
    <>
      <main className="pt-24 min-h-screen flex flex-col md:flex-row gap-8 px-4 md:px-12 pb-20">
      <aside className="w-full md:w-80 space-y-10 sticky top-24 self-start">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-primary">Refine Your Journey</h2>
          <section>
            <h3 className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">States of the North East</h3>
            <div className="space-y-3">
              {states.map((state) => (
                <label key={state.name} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    defaultChecked={state.checked}
                    className="rounded border-outline-variant text-primary focus:ring-primary h-5 w-5 bg-surface-container-high transition-all"
                    type="checkbox"
                  />
                  <span className="text-on-surface-variant group-hover:text-primary transition-colors">{state.name}</span>
                </label>
              ))}
            </div>
          </section>
          <section>
            <h3 className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">Experience Category</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-secondary-container transition-all text-sm"
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>
          <section>
            <h3 className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">Budget Range</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input defaultChecked name="budget" type="radio" />
                <span>Backpacker ($ - $$)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input name="budget" type="radio" />
                <span>Mid-Range ($$ - $$$)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input name="budget" type="radio" />
                <span>Luxury ($$$+)</span>
              </label>
            </div>
          </section>
          <section className="p-5 bg-surface-container-low rounded-xl flex items-center justify-between">
            <div>
              <h4 className="font-bold text-primary">Permit Free Only</h4>
              <p className="text-xs text-on-surface-variant">Hide spots requiring ILP</p>
            </div>
            <div className="relative inline-flex items-center cursor-pointer">
              <input className="sr-only peer" type="checkbox" />
              <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
</div>
          </section>
        </div>
      </aside>
      <section className="flex-1 space-y-8">
        <div className="flex items-end justify-between border-b border-outline-variant pb-6">
          <div>
            <span className="text-secondary font-medium tracking-wide">Journal Entries</span>
            <h1 className="text-4xl font-extrabold text-primary tracking-tight">Curated Spots</h1>
          </div>
          <span className="text-sm font-medium text-on-surface-variant">Showing {destinations.length} Results</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <article
              key={dest.id}
              className="group relative bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{ boxShadow: "0 32px 48px -12px rgba(150, 71, 50, 0.06)" }}
            >
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={dest.title}
                  src={dest.image}
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {dest.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full ${
                        tag === "Permit Required" || tag === "Trending"
                          ? "bg-primary text-white backdrop-blur-sm"
                          : "bg-primary-container text-on-primary-container"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-primary transition-all">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-1">{dest.title}</h3>
                <p className="text-sm text-secondary flex items-center gap-1 mb-4">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  {dest.state} • {dest.difficulty}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-on-tertiary-fixed-variant bg-tertiary-fixed px-3 py-1 rounded-full">
                    {dest.description}
                  </span>
                  <span className="text-primary font-bold text-lg">{dest.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </>
  );
}

export default Destinations;