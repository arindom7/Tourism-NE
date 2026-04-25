import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Experiences() {
  return (
    <>
      <main className="pt-24 pb-20 px-4 md:px-12 max-w-7xl mx-auto">
        <section className="mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-primary mb-4 leading-none">The Route <br/>Less Traveled.</h1>
          <p className="text-on-surface-variant max-w-2xl text-lg md:text-xl">Navigate the mystical terrains of North East India through our curated transport network. From cloud-high airstrips to misty mountain roads.</p>
        </section>
        <div className="flex flex-wrap gap-4 mb-12 items-center">
          <button className="px-8 py-3 bg-primary-container text-on-primary-container font-bold rounded-full transition-transform active:scale-95">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined" data-icon="flight">flight</span>
              <span>Air</span>
            </div>
          </button>
          <button className="px-8 py-3 bg-surface-container-high text-on-surface-variant font-medium rounded-full hover:bg-surface-container-highest transition-all">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined" data-icon="directions_car">directions_car</span>
              <span>Road</span>
            </div>
          </button>
          <button className="px-8 py-3 bg-surface-container-high text-on-surface-variant font-medium rounded-full hover:bg-surface-container-highest transition-all">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined" data-icon="train">train</span>
              <span>Rail</span>
            </div>
          </button>
          <button className="px-8 py-3 bg-surface-container-high text-on-surface-variant font-medium rounded-full hover:bg-surface-container-highest transition-all">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined" data-icon="hail">hail</span>
              <span>Local</span>
            </div>
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            <div className="flex justify-between items-end">
              <h2 className="text-3xl font-bold text-tertiary">Airport Directory</h2>
              <span className="text-sm font-bold text-primary tracking-widest uppercase">7 States Covered</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2 relative h-80 rounded-3xl overflow-hidden group">
                <img alt="Guwahati Airport" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXHAAEY5dBpdM5rzLIJL_z4SbjH_7HoItvsbndscmgRpLaxtfPKin7xA_UcmXBmVehguttWgSwAJHjT-ppVCTsJwzqTVGLow6Ir9mQcBz1lXnuRzxWLjmoakKJSLqovdLq0ETSPHGhpqLUICAcin1q6wDLLzSCXk6OaA8c-_bGIK5-zFNdCchbkke9eDh8g67cyyq3QlrpQoC2ay4r3ee8Y7hs97gBG54nN6wvjJTqADpEzHtPLf1uUR2Jsc55Ir4dSjI5yHPFG5I" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="bg-primary-container text-on-primary-container text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">MAJOR HUB</span>
                  <h3 className="text-3xl font-bold text-white mb-2">Lokpriya Gopinath Bordoloi</h3>
                  <p className="text-white/80 font-body">Guwahati, Assam (GAU)</p>
                </div>
                <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-md rounded-2xl p-4 text-white">
                  <span className="material-symbols-outlined block text-center" data-icon="sunny">sunny</span>
                  <span className="text-sm font-bold">24°C</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-3xl hover:bg-surface-container-low transition-colors">
                <div className="flex justify-between mb-6">
                  <div className="h-12 w-12 bg-secondary-container rounded-2xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-secondary-fixed-variant" data-icon="cloud">cloud</span>
                  </div>
                  <span className="text-primary font-bold">IMF</span>
                </div>
                <h4 className="text-xl font-bold mb-1">Imphal International</h4>
                <p className="text-on-surface-variant text-sm mb-4">Manipur • Daily connectivity to Kolkata & Delhi</p>
                <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/20">
                  <span className="text-xs font-bold bg-tertiary-container/20 text-on-tertiary-container px-2 py-1 rounded">HELIPAD</span>
                  <span className="text-xs font-bold bg-tertiary-container/20 text-on-tertiary-container px-2 py-1 rounded">CARGO</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-3xl hover:bg-surface-container-low transition-colors">
                <div className="flex justify-between mb-6">
                  <div className="h-12 w-12 bg-secondary-container rounded-2xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-secondary-fixed-variant" data-icon="landscape">landscape</span>
                  </div>
                  <span className="text-primary font-bold">AJL</span>
                </div>
                <h4 className="text-xl font-bold mb-1">Lengpui Airport</h4>
                <p className="text-on-surface-variant text-sm mb-4">Aizawl, Mizoram • Tabletop runway specialist</p>
                <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/20">
                  <span className="text-xs font-bold bg-tertiary-container/20 text-on-tertiary-container px-2 py-1 rounded">TABLETOP</span>
                  <span className="text-xs font-bold bg-tertiary-container/20 text-on-tertiary-container px-2 py-1 rounded">SCENIC</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-primary p-8 rounded-3xl text-white relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary-container/20 rounded-full blur-2xl"></div>
              <span className="material-symbols-outlined text-5xl mb-6 block" data-icon="flight_takeoff">flight_takeoff</span>
              <h3 className="text-2xl font-bold mb-4">UDAN Connectivity</h3>
              <p className="text-white/80 leading-relaxed mb-6 font-body">Making regional air travel affordable. Connect to remote destinations like Pasighat and Tezu at subsidized rates through the RCS-UDAN scheme.</p>
              <a className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-full hover:bg-primary-container hover:text-white transition-all" href="#">
                Check Routes
                <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
              </a>
            </div>
            <div className="bg-surface-container-low p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-tertiary mb-6">Popular Corridors</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-primary text-sm" data-icon="route">route</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary tracking-tighter">ROAD CORRIDOR</p>
                    <p className="font-bold">Guwahati → Shillong</p>
                    <p className="text-xs text-on-surface-variant">2.5 Hours • Scenic NH-06</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-primary text-sm" data-icon="train">train</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary tracking-tighter">VISTADOME RAIL</p>
                    <p className="font-bold">Guwahati → Haflong</p>
                    <p className="text-xs text-on-surface-variant">5 Hours • Dima Hasao Peaks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="mt-20">
          <div className="bg-white rounded-3xl p-8 border border-outline-variant/20">
            <div className="flex flex-col md:flex-row gap-8 items-end">
              <div className="flex-1 w-full">
                <label className="block text-xs font-bold text-primary uppercase mb-2 ml-4">Departure City</label>
                <div className="flex items-center bg-surface-container-low rounded-2xl p-4">
                  <span className="material-symbols-outlined mr-3 text-tertiary" data-icon="location_on">location_on</span>
                  <input className="bg-transparent border-none focus:ring-0 w-full font-bold" placeholder="Guwahati" type="text"/>
                </div>
              </div>
              <div className="md:mb-4 hidden md:block">
                <span className="material-symbols-outlined text-primary" data-icon="swap_horiz">swap_horiz</span>
              </div>
              <div className="flex-1 w-full">
                <label className="block text-xs font-bold text-primary uppercase mb-2 ml-4">Destination</label>
                <div className="flex items-center bg-surface-container-low rounded-2xl p-4">
                  <span className="material-symbols-outlined mr-3 text-tertiary" data-icon="sports_score">sports_score</span>
                  <input className="bg-transparent border-none focus:ring-0 w-full font-bold" placeholder="Shillong" type="text"/>
                </div>
              </div>
              <button className="w-full md:w-auto bg-primary text-white font-bold py-4 px-12 rounded-2xl hover:bg-primary-container transition-all">
                Search Routes
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Experiences