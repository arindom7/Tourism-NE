import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Journal() {
  return (
    <>
      <div className="flex pt-20">
        <aside className="hidden lg:flex flex-col h-screen w-72 p-6 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl fixed left-0 top-20 shadow-2xl shadow-orange-900/10 z-40 rounded-r-3xl">
          <div className="mb-10">
            <h2 className="text-xl font-black text-orange-800 font-headline">Traveler Journal</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">North East India</p>
          </div>
          <nav className="flex flex-col gap-2 flex-grow">
            <Link to="#" className="flex items-center gap-4 p-4 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all">
              <span className="material-symbols-outlined" data-icon="explore">explore</span>
              <span>Explore</span>
            </Link>
            <Link to="#" className="flex items-center gap-4 p-4 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all">
              <span className="material-symbols-outlined" data-icon="favorite">favorite</span>
              <span>Wishlist</span>
            </Link>
            <Link to="#" className="flex items-center gap-4 p-4 bg-orange-100 dark:bg-orange-900/30 text-orange-900 dark:text-orange-200 rounded-xl font-bold transition-all">
              <span className="material-symbols-outlined" data-icon="confirmation_number">confirmation_number</span>
              <span>Bookings</span>
            </Link>
            <Link to="#" className="flex items-center gap-4 p-4 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all">
              <span className="material-symbols-outlined" data-icon="auto_stories">auto_stories</span>
              <span>Travel Log</span>
            </Link>
            <Link to="#" className="flex items-center gap-4 p-4 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all">
              <span className="material-symbols-outlined" data-icon="settings">settings</span>
              <span>Settings</span>
            </Link>
          </nav>
          <button className="mt-auto bg-primary text-white py-4 px-6 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
            Get ILP Permit
          </button>
        </aside>
        <main className="flex-grow lg:ml-72 p-6 md:p-12">
          <header className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Upcoming Expedition</span>
                <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-on-surface mb-4 leading-none">The Seven Sisters Loop</h1>
                <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">A curated 12-day journey through the untouched valleys of Arunachal Pradesh and the living root bridges of Meghalaya.</p>
              </div>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-full border border-outline-variant/30 hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined text-xl" data-icon="download">download</span>
                  Export as PDF
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-primary-container text-on-primary-container font-bold rounded-full shadow-lg shadow-primary-container/20 hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-xl" data-icon="offline_pin">offline_pin</span>
                  Save Offline
                </button>
              </div>
            </div>
          </header>
          <section className="bg-surface-container-low rounded-3xl p-8 mb-16 flex flex-wrap items-center justify-between gap-8 border-none">
            <div className="flex items-center gap-6">
              <div className="bg-primary/10 p-4 rounded-2xl">
                <span className="material-symbols-outlined text-primary text-3xl" data-icon="calendar_month">calendar_month</span>
              </div>
              <div>
                <span className="text-on-surface-variant text-sm block">Duration</span>
                <span className="text-xl font-bold text-on-surface">12 Days / 11 Nights</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-tertiary/10 p-4 rounded-2xl">
                <span className="material-symbols-outlined text-tertiary text-3xl" data-icon="map">map</span>
              </div>
              <div>
                <span className="text-on-surface-variant text-sm block">States Visited</span>
                <span className="text-xl font-bold text-on-surface">AR, NL, MN, MZ</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-secondary/10 p-4 rounded-2xl">
                <span className="material-symbols-outlined text-secondary text-3xl" data-icon="distance">distance</span>
              </div>
              <div>
                <span className="text-on-surface-variant text-sm block">Total Distance</span>
                <span className="text-xl font-bold text-on-surface">1,450 km approx.</span>
              </div>
            </div>
            <div className="flex -space-x-3">
              <img alt="Traveler 1" className="w-12 h-12 rounded-full border-4 border-surface-container-low" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0qMMXvztL-7foTtaVT2rJ8B4WfH-ZEHGEVWD6atMInYdKOEtIb631ypALGXVNgewRANpnQaxbEDglbsL4x4MuZtj0J-WNKUUebuNeGzm3hKiCeKiv-6QkDeGV5X7JfGA3q0E5pMPNTlXqvK8RDvElz0WqIgebKcIdQe-_t2O71uYTnIF4NeD6_mYPnCWbrMkAR6T0RV0wxurRKKTPOmv7b-lwO6xMySicFbI5QhEdn-j5DPun3xg2NQ3ZImQ9VLI-YHLek7OC3pQ" />
              <img alt="Traveler 2" className="w-12 h-12 rounded-full border-4 border-surface-container-low" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA7ax1-jWHNJ3j6ZkzjGavhFEA5ss_xoCc2dYi-fWzBBks5O1ZtNT1wsOWYe9F_TSs_IP9C_lcUpzGTqwjheeJTl17yrSzs5miG-nNfspG5dxDIahHrCFlSqDby4t_7xFTrk-CWsAJw7lKArQ7VVyKQY509NhvJuA6_wKdXFEURzafW-wo8wwgHPlSGy2WDicFdaj_6vF4137-3K3MFddVXUIXewpcmx8ZPL0YhC0JaupY_A9oWj887rX08j8tRHtE_mXRNN-5q3Y" />
              <div className="w-12 h-12 rounded-full border-4 border-surface-container-low bg-primary text-white flex items-center justify-center font-bold text-sm">+2</div>
            </div>
          </section>
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
            <div className="xl:col-span-8 space-y-24">
              <article className="relative pl-8 md:pl-0">
                <div className="hidden md:block absolute -left-16 top-0 text-7xl font-black text-outline-variant/20 tracking-tighter">01</div>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-full md:w-1/2 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJj-3DpooC2AuFHuVKKONB_GB964DNSj1c6oe1wt884kw0PPx-9tFK9ccyqS8M62GdP2M71XzxzgrSFGIYsmec8281TuXNvLJJ48juZnq0GiA6K0Q70fMfC4k2Hd-6WetzdfHg8UYb5xHkXW-mIy0_mChfK2tgEZfndDq3IcPMsnzZY_wqy3Tdae4_-0lQ_5nBuglBtvheTXDazAZ0UBZBJavQzE31XcXDTcRo6WopaJa_LY_3Bx_TSxhkAmY0gh48yATH7Bwozdc" />
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="inline-flex px-4 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold mb-4 uppercase tracking-widest">Guwahati to Ziro</div>
                    <h3 className="text-3xl font-bold mb-4 text-on-surface">Arrival & The Gateway</h3>
                    <p className="text-on-surface-variant leading-relaxed mb-6">Touch down in Guwahati. Your journey begins with a scenic climb into the Apatani heartland. As the urban sprawl fades, the air thins and the scent of wild orchids takes over.</p>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4 text-on-surface">
                        <span className="material-symbols-outlined text-primary" data-icon="lunch_dining">lunch_dining</span>
                        <span>Traditional Assamese Breakfast at Gam's</span>
                      </li>
                      <li className="flex items-center gap-4 text-on-surface">
                        <span className="material-symbols-outlined text-primary" data-icon="directions_car">directions_car</span>
                        <span>6-hour private overland transfer</span>
                      </li>
                      <li className="flex items-center gap-4 text-on-surface">
                        <span className="material-symbols-outlined text-primary" data-icon="home_pin">home_pin</span>
                        <span>Check-in: Ziro Valley Homestay</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
              <article className="relative pl-8 md:pl-0">
                <div className="hidden md:block absolute -left-16 top-0 text-7xl font-black text-outline-variant/20 tracking-tighter">02</div>
                <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
                  <div className="w-full md:w-1/2 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmrgQtLd-gdwg0p3jQLl1skC-YP2GinOXyJ9MhzzPUzxIHzDrF_Xp5D-4QT5SuxTU_Cui468uHEPgaQNJiMi59J4Fp9yRw3rDxtNfP8uFjubnbNZ_jQhqxqHIsjakVdOROvZictqHHJWMyqSnpA7d-cgqJ7UqoNhtZtzL7Af8ai9CFlvGUrTxShoJPixjIlD92a_1A24rSmXiJfPwRZzSoEoVUf4gA9eIEB4JNNOHaHMhYEXrOw_WIePNr0Pzm-8b0yfvqXF3_rJc" />
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="inline-flex px-4 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold mb-4 uppercase tracking-widest">Apatani Cultural Trail</div>
                    <h3 className="text-3xl font-bold mb-4 text-on-surface">Echoes of the Apatani</h3>
                    <p className="text-on-surface-variant leading-relaxed mb-6">Spend the morning in the ancient village of Hong. Witness the unique sustainable farming methods that have made Ziro a UNESCO heritage site contender.</p>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4 text-on-surface">
                        <span className="material-symbols-outlined text-primary" data-icon="groups">groups</span>
                        <span>Guided cultural walk with local elders</span>
                      </li>
                      <li className="flex items-center gap-4 text-on-surface">
                        <span className="material-symbols-outlined text-primary" data-icon="forest">forest</span>
                        <span>Pine grove meditation session</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
              <article className="relative pl-8 md:pl-0">
                <div className="hidden md:block absolute -left-16 top-0 text-7xl font-black text-outline-variant/20 tracking-tighter">03</div>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-full md:w-1/2 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoJLinWf9HRb9qgxaqQg4pk6w-sqidmDqoihHDM8-vevpFtqrKrKxVUG98Con220yq9QxHKHvZ6s3VvRS1RTGTOiiPK5jZdY9gySvTyIBGtnvkHlWfXPhjfiGQSwpYQlX7RyHFVV4-EaYviw7pKBSNBnk44zAgB4C0ziTBy39BYYkIy_Y5tkx0SRs09zvQWoElQWrvjthdfH9mw5j04cuytZBSeBMxWYrYW2H6Fc2D0rEAcWtZvKrfUSn_08Uzads8rACdLVOb0uk" />
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="inline-flex px-4 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold mb-4 uppercase tracking-widest">Tawang Expedition</div>
                    <h3 className="text-3xl font-bold mb-4 text-on-surface">The High Pass</h3>
                    <p className="text-on-surface-variant leading-relaxed mb-6">A challenging but rewarding drive across the Sela Pass (13,700 ft). Frozen lakes and prayer flags dancing in the wind define today's journey.</p>
                    <div className="bg-surface-container p-6 rounded-2xl">
                      <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined" data-icon="warning">warning</span>
                        Travel Note
                      </h4>
                      <p className="text-sm text-on-surface-variant italic">Expect sudden temperature drops. Keep your ILP physical copy ready for army checkpoints at Sela.</p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <aside className="xl:col-span-4 space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-2xl shadow-orange-900/5 sticky top-28">
                <h3 className="text-2xl font-bold mb-6 text-on-surface">Permit Checklist</h3>
                <p className="text-on-surface-variant text-sm mb-8">Ensure all Inner Line Permits (ILP) are processed before entry.</p>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center font-bold text-primary">AR</div>
                      <div>
                        <span className="font-bold block">Arunachal</span>
                        <span className="text-xs text-green-600 font-bold">Approved</span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-green-600" data-icon="check_circle">check_circle</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center font-bold text-secondary">NL</div>
                      <div>
                        <span className="font-bold block">Nagaland</span>
                        <span className="text-xs text-orange-600 font-bold">In Review</span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-orange-600" data-icon="pending">pending</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-tertiary/10 rounded-xl flex items-center justify-center font-bold text-tertiary">MN</div>
                      <div>
                        <span className="font-bold block">Manipur</span>
                        <span className="text-xs text-slate-400 font-bold">Pending Action</span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-slate-300" data-icon="radio_button_unchecked">radio_button_unchecked</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center font-bold text-primary">MZ</div>
                      <div>
                        <span className="font-bold block">Mizoram</span>
                        <span className="text-xs text-green-600 font-bold">Approved</span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-green-600" data-icon="check_circle">check_circle</span>
                  </div>
                </div>
                <button className="w-full mt-10 py-4 bg-surface-container-high text-primary font-bold rounded-xl hover:bg-primary-fixed transition-colors">
                  Manage All Permits
                </button>
              </div>
              <div className="bg-primary p-8 rounded-3xl text-white">
                <span className="material-symbols-outlined text-4xl mb-4" data-icon="book">book</span>
                <h4 className="text-xl font-bold mb-2">Journal Contribution</h4>
                <p className="text-white/80 text-sm mb-6">Document your trip live and help the Regional Tourism Council with real-time road updates.</p>
                <button className="w-full py-3 bg-white/20 backdrop-blur-md rounded-xl font-bold border border-white/30 hover:bg-white/30 transition-all">
                  Start Writing
                </button>
              </div>
            </aside>
          </div>
        </main>
      </div>
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-lg flex justify-around items-center p-4 z-50 rounded-t-3xl shadow-[0_-8px_24px_rgba(0,0,0,0.05)] border-none">
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined" data-icon="explore">explore</span>
          <span className="text-[10px] uppercase font-bold">Explore</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined" data-icon="confirmation_number">confirmation_number</span>
          <span className="text-[10px] uppercase font-bold">Trips</span>
        </button>
        <div className="relative -top-8 bg-primary p-4 rounded-full shadow-xl shadow-primary/30">
          <span className="material-symbols-outlined text-white" data-icon="add">add</span>
        </div>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined" data-icon="favorite">favorite</span>
          <span className="text-[10px] uppercase font-bold">Saved</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined" data-icon="settings">settings</span>
          <span className="text-[10px] uppercase font-bold">Menu</span>
        </button>
      </div>
      <Footer />
    </>
  )
}

export default Journal