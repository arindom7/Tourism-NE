import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function PermitGuidelines() {
  return (
    <>
      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <section className="mb-20">
          <h1 className="text-5xl md:text-6xl font-black text-primary tracking-tight mb-8">Travel Permits</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-on-surface-variant font-body">
                Entering the serene landscapes of Northeast India often requires specific documentation to protect local tribal cultures and sensitive border areas. Understanding the difference between the <span className="font-bold text-primary">Inner Line Permit (ILP)</span> and the <span className="font-bold text-tertiary">Protected Area Permit (PAP)</span> is your first step into this magical region.
              </p>
              <div className="p-8 bg-surface-container-low rounded-xl">
                <h3 className="text-xl font-bold text-primary mb-4">Inner Line Permit (ILP)</h3>
                <p className="text-on-surface-variant leading-relaxed font-body">
                  A mandatory travel document required by Indian citizens to enter protected states. It is an effort by the Government to regulate movement in certain areas located near the international borders of India.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-8 bg-surface-container-high rounded-xl">
                <h3 className="text-xl font-bold text-tertiary mb-4">Protected Area Permit (PAP)</h3>
                <p className="text-on-surface-variant leading-relaxed font-body">
                  Foreign nationals require a PAP to visit certain areas. These are generally issued for a specific period and for a group of two or more people traveling together through a registered travel agent.
                </p>
              </div>
              <p className="text-sm italic text-outline font-body px-4">
                *Please note that permit requirements can change. We recommend applying at least 2 weeks before your planned journey.
              </p>
            </div>
          </div>
        </section>
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[2px] w-12 bg-primary-container"></div>
            <h2 className="text-3xl font-bold text-on-surface">Regional Permits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden group hover:scale-[1.02] transition-transform duration-500 flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8MvTMasQVD9YA4TNEYTbsAik69WI_q0sGJngV102eIyAW19FPikO_Mn3VH4Pyv-7saaJQzoGIiThandmT0iM5R4ZtM0StWH4VWvyyOfcx8hyDRQHzUf3MSuKJRrZqS11W0aNr3ctJFyucRbGI6DWdeEyQZbXIydycl7yBydTKapj3hFpS54Fl31RKMEykWYwA8YBgkcpK0KbZ22cLidqO11C7L4MDE8QjjniiSfHgAa49Sw-vCjdMTUBuZ3YQBTTFRPF6Wq_QQ_s" />
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary">NORTHERN ZONE</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-on-surface">Arunachal Pradesh</h3>
                <div className="space-y-3 mb-8 flex-grow">
                  <div className="flex justify-between text-sm">
                    <span className="text-outline font-label">Permit Type</span>
                    <span className="font-bold text-on-surface">ILP / PAP</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-outline font-label">Target</span>
                    <span className="font-bold text-on-surface">All Visitors</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-outline font-label">Cost</span>
                    <span className="font-bold text-on-surface">₹100 - $30</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-outline font-label">Processing</span>
                    <span className="font-bold text-on-surface">2-5 Days</span>
                  </div>
                </div>
                <button className="w-full bg-primary-container hover:bg-primary text-on-primary-container hover:text-white font-bold py-4 rounded-full transition-colors flex items-center justify-center gap-2">
                  Apply Online
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden group hover:scale-[1.02] transition-transform duration-500 flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByjXyjb9BWw9YUTadMDqD94SJqbGFBauYuW5JIcMMLDEUBbojM5TkwMxD-kvCDlqzYjSJPBV8rDPKrsQCeCGCeMBPpSIByWIymNxET9vq8SIt8Y7X7dYKAuO_NHDAd7a1f--VW0qdoKWG1yajVqaR4eoUeOTpYGWGa-BxLleDZ_e_5w7cCKii-3TA2KOHemkuNynD25OFpjgnvWFALa17iLIqypaWCtqtCVsgkcj5V2WnOWIPW7oK0STt8HXEp3-GZfuiuOMGCKro" />
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary">CENTRAL ZONE</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-on-surface">Nagaland</h3>
                <div className="space-y-3 mb-8 flex-grow">
                  <div className="flex justify-between text-sm">
                    <span className="text-outline font-label">Permit Type</span>
                    <span className="font-bold text-on-surface">ILP Required</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-outline font-label">Target</span>
                    <span className="font-bold text-on-surface">Indian Citizens</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-outline font-label">Cost</span>
                    <span className="font-bold text-on-surface">₹50 - ₹500</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-outline font-label">Processing</span>
                    <span className="font-bold text-on-surface">1-3 Days</span>
                  </div>
                </div>
                <button className="w-full bg-primary-container hover:bg-primary text-on-primary-container hover:text-white font-bold py-4 rounded-full transition-colors flex items-center justify-center gap-2">
                  Apply Online
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden group hover:scale-[1.02] transition-transform duration-500 flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCodsuA9tDcHLbHvC-4lrVDnNmmvO4qwFbFPCbCm_FOTxHHKVBXsuv966b-fgTDuZphExhnQQiFQT5VA1ET-yiYItwe4g5qTbQxg2_3WU8jnQj2JTHHLIseUx7OtEbbceWknwjGF2yEPuhaOngJvnXVwL67WiXjQRd4Kztb7bz9eAGejGJUFrddTn_NmLFceeGqclpIhG8M7_0Jfolu1njyTFAORCodBG8UyPZN6E6UDgMyPccOesRWcjQJO4KJKnLdfPGVGsP5t5o" />
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary">EASTERN ZONE</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-on-surface">Manipur</h3>
                <div className="space-y-3 mb-8 flex-grow">
                  <div className="flex justify-between text-sm">
                    <span className="text-outline font-label">Permit Type</span>
                    <span className="font-bold text-on-surface">ILP / Entry Reg</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-outline font-label">Target</span>
                    <span className="font-bold text-on-surface">Non-Residents</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-outline font-label">Cost</span>
                    <span className="font-bold text-on-surface">₹100 - ₹2000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-outline font-label">Processing</span>
                    <span className="font-bold text-on-surface">Same Day</span>
                  </div>
                </div>
                <button className="w-full bg-primary-container hover:bg-primary text-on-primary-container hover:text-white font-bold py-4 rounded-full transition-colors flex items-center justify-center gap-2">
                  Apply Online
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden group hover:scale-[1.02] transition-transform duration-500 flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfpKCTihMn5qXuCwsfsZrc69IaYHIIR7LKd8WmWKYn_XjeljrLOmVwkH2K5n0A5MSLW47ERYJ3TLJP22aQspTVt9IOOspv744vT_YzW9XhX6Q14fY8yA7Yea0hXhGF8LIk8PHHWdadDnACaRmZFds4pzNGl4aplZjaMExeRhvYk0-OEb6VhDKY58o9qAIF7Ny3JaX6DS-18DFyn8-6ln_3vBpLxquU9l_zwTVXRLMf7jiMDdAXl4CzWvJatMMdausgvE84Mlog10k" />
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary">SOUTHERN ZONE</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-on-surface">Mizoram</h3>
                <div className="space-y-3 mb-8 flex-grow">
                  <div className="flex justify-between text-sm">
                    <span className="text-outline font-label">Permit Type</span>
                    <span className="font-bold text-on-surface">ILP Mandatory</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-outline font-label">Target</span>
                    <span className="font-bold text-on-surface">Indian Citizens</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-outline font-label">Cost</span>
                    <span className="font-bold text-on-surface">₹20 - ₹200</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-outline font-label">Processing</span>
                    <span className="font-bold text-on-surface">24 Hours</span>
                  </div>
                </div>
                <button className="w-full bg-primary-container hover:bg-primary text-on-primary-container hover:text-white font-bold py-4 rounded-full transition-colors flex items-center justify-center gap-2">
                  Apply Online
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-on-surface mb-4">Common Questions</h2>
            <p className="text-on-surface-variant font-body">Everything you need to know before you pack your bags.</p>
          </div>
          <div className="space-y-4">
            <div className="bg-surface-container-low rounded-2xl overflow-hidden transition-all duration-300">
              <button className="w-full p-6 text-left flex justify-between items-center group">
                <span className="text-lg font-bold text-primary">Can I get an ILP on arrival?</span>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">expand_more</span>
              </button>
              <div className="px-6 pb-6 text-on-surface-variant font-body leading-relaxed">
                While some states allow ILP on arrival at major airports and border check posts, it is highly recommended to apply online in advance to avoid long waiting times or potential entry delays.
              </div>
            </div>
            <div className="bg-surface-container-low rounded-2xl overflow-hidden transition-all duration-300">
              <button className="w-full p-6 text-left flex justify-between items-center group">
                <span className="text-lg font-bold text-primary">Do I need a separate permit for each state?</span>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">expand_more</span>
              </button>
              <div className="px-6 pb-6 text-on-surface-variant font-body leading-relaxed">
                Yes, each state manages its own entry requirements. If you are planning a multi-state tour, you will need to apply for individual permits for Arunachal Pradesh, Nagaland, Manipur, and Mizoram respectively.
              </div>
            </div>
            <div className="bg-surface-container-low rounded-2xl overflow-hidden transition-all duration-300">
              <button className="w-full p-6 text-left flex justify-between items-center group">
                <span className="text-lg font-bold text-primary">What documents are required for ILP?</span>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">expand_more</span>
              </button>
              <div className="px-6 pb-6 text-on-surface-variant font-body leading-relaxed">
                Typically, you will need a valid government-issued ID (Aadhar Card, Voter ID, or Passport) and recent passport-sized photographs. Some states may require proof of stay or local reference details.
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default PermitGuidelines