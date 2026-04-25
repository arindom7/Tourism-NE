import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Stays() {
  return (
    <>
      <div className="flex pt-20 min-h-screen">
        <aside className="hidden md:flex flex-col h-screen w-72 sticky top-20 p-6 bg-white/80 backdrop-blur-xl border-r border-outline-variant/10">
          <div className="mb-8">
            <h2 className="font-headline text-xl font-black text-orange-800">Traveler Journal</h2>
            <p className="text-xs text-slate-500 font-label">North East India</p>
          </div>
          <nav className="flex flex-col gap-2 flex-grow">
            <div className="mb-6">
              <p className="text-[10px] uppercase tracking-widest text-outline mb-4 font-bold">Filter By State</p>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-3 p-2 rounded-xl hover:bg-surface-container transition-colors cursor-pointer">
                  <input className="rounded border-outline text-primary focus:ring-primary" type="checkbox"/>
                  <span className="text-sm font-label">Sikkim</span>
                </label>
                <label className="flex items-center gap-3 p-2 rounded-xl hover:bg-surface-container transition-colors cursor-pointer">
                  <input className="rounded border-outline text-primary focus:ring-primary" type="checkbox"/>
                  <span className="text-sm font-label">Meghalaya</span>
                </label>
                <label className="flex items-center gap-3 p-2 rounded-xl hover:bg-surface-container transition-colors cursor-pointer">
                  <input className="rounded border-outline text-primary focus:ring-primary" type="checkbox"/>
                  <span className="text-sm font-label">Arunachal</span>
                </label>
              </div>
            </div>
            <div className="mb-6">
              <p className="text-[10px] uppercase tracking-widest text-outline mb-4 font-bold">Stay Type</p>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-3 p-2 bg-orange-100/50 text-orange-900 rounded-xl font-bold cursor-pointer">
                  <span className="material-symbols-outlined text-sm" data-icon="account_balance">account_balance</span>
                  <span className="text-sm font-label">Govt Lodge</span>
                </label>
                <label className="flex items-center gap-3 p-2 text-slate-600 hover:bg-surface-container transition-colors rounded-xl cursor-pointer">
                  <span className="material-symbols-outlined text-sm" data-icon="hotel">hotel</span>
                  <span className="text-sm font-label">Hotel</span>
                </label>
                <label className="flex items-center gap-3 p-2 text-slate-600 hover:bg-surface-container transition-colors rounded-xl cursor-pointer">
                  <span className="material-symbols-outlined text-sm" data-icon="home">home</span>
                  <span className="text-sm font-label">Homestay</span>
                </label>
              </div>
            </div>
            <div className="mb-6">
              <p className="text-[10px] uppercase tracking-widest text-outline mb-4 font-bold">Amenities</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded-full">Wi-Fi</span>
                <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant text-[10px] font-bold rounded-full">AC</span>
                <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant text-[10px] font-bold rounded-full">Breakfast</span>
              </div>
            </div>
          </nav>
          <button className="mt-auto py-3 px-6 bg-primary-container text-on-primary-container font-bold rounded-full flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
            <span className="material-symbols-outlined text-lg" data-icon="description">description</span>
            <span className="text-sm">Get ILP Permit</span>
          </button>
        </aside>
        <main className="flex-grow p-8 max-w-7xl">
          <header className="mb-12">
            <h1 className="font-headline text-5xl font-extrabold tracking-tighter text-primary mb-4">Mountain Sanctuaries</h1>
            <p className="text-on-surface-variant max-w-2xl leading-relaxed">Discover a curated collection of stays across the Seven Sister states, from rustic government lodges to luxury retreats overlooking misty valleys.</p>
          </header>
          <section className="mb-16">
            <div className="flex items-end justify-between mb-6">
              <div>
                <h2 className="font-headline text-2xl font-bold text-tertiary">State Tourism Lodges</h2>
                <p className="text-sm text-on-surface-variant font-label">Official government hospitality, rooted in local culture.</p>
              </div>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
                </button>
                <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="flex gap-6 overflow-x-auto no-scrollbar pb-6">
              <div className="min-w-[400px] snap-start group relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 shadow-xl shadow-primary/5">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJKtw70Gyaqy1Ui5RCx9Jnl6GZ0bLnCaW1u2M7i3-fuP5OoH1xFKdBrX7vw16_PwYKouylMmyV_2i6Nz4LWJ27QdAdCalYe66eM1_6B5LEm23ETc7iSxnZNOoP7-C-nDYf71rV_y2F56SbZZnk5D6W6ArzpyMZ8RSAE_K-PoLlLeuOR-ycP_G8Rol9G8mPOiAI8QvF8YO8FwonEHxDp6LObd9a8geLKxDp7W5uF9-_LKAaOlllvYOu5u2X9WHJ-9EmV5_6XQ9676Y" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">Listed by State Tourism</div>
                </div>
                <div className="px-2">
                  <h3 className="font-headline text-lg font-bold">Khangchendzonga Tourist Villa</h3>
                  <p className="text-sm text-on-surface-variant font-label mb-2">Gangtok, Sikkim</p>
                  <div className="flex items-center justify-between">
                    <span className="font-headline font-bold text-primary">₹4,500 - ₹8,200</span>
                    <div className="flex gap-2 text-tertiary">
                      <span className="material-symbols-outlined text-sm" data-icon="wifi">wifi</span>
                      <span className="material-symbols-outlined text-sm" data-icon="restaurant">restaurant</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-w-[400px] snap-start group relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 shadow-xl shadow-primary/5">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv_MKRVHLk6MMiiMrKZRQdiS7Munhgg_f6fguRXX_fowV1i6F7dvSD3o2C_mVUO0DKzCt3N7WuFQZOWYxrJYag3G-UbokYUL6Snw2VOEWjyyQHpf2jdpo5QjoBXiQXS2ubKrdMVO3_rl6FPl_FvaPQfMZb_lLdv1qqchHT88IZVg7laUWLAvGajbgBF4u85O8G6j39tnlgF_LHQqrKj3GFuIVm48qu3yYiwh0wqgiVcKFMEdUAyM7Vs5lWIW2asUwv7x5dnXZOH3k" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">Listed by State Tourism</div>
                </div>
                <div className="px-2">
                  <h3 className="font-headline text-lg font-bold">Pine Wood Lakeside Inn</h3>
                  <p className="text-sm text-on-surface-variant font-label mb-2">Shillong, Meghalaya</p>
                  <div className="flex items-center justify-between">
                    <span className="font-headline font-bold text-primary">₹3,200 - ₹5,800</span>
                    <div className="flex gap-2 text-tertiary">
                      <span className="material-symbols-outlined text-sm" data-icon="ac_unit">ac_unit</span>
                      <span className="material-symbols-outlined text-sm" data-icon="local_parking">local_parking</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-w-[400px] snap-start group relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 shadow-xl shadow-primary/5">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2EHEo6HqTPkPWPNeEmzj1UNeRxXwsPqnlCmxj3cOxaQHeSraDM1O5qoC1mWdmEX4vnUUCYKDEAhXpjCXdYBvgcVZz0dmAPuh1Tqvm5hDjfPOJaalInzBcs04n0ihVxocZ8QEDCMyo8smMOPJIqlJbxosPhTd-jHPOhyQyJsVlpNUAppSE2SaxU-hVJV8IWmAnj7eGsYwseQw2nOGnoa9DgBTKsFrrTY2UDKgHh6qWuzQBNwMoB66BpqQDIOm3h7S-szHlzLAoXck" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">Listed by State Tourism</div>
                </div>
                <div className="px-2">
                  <h3 className="font-headline text-lg font-bold">Tawang Circuit House</h3>
                  <p className="text-sm text-on-surface-variant font-label mb-2">Tawang, Arunachal</p>
                  <div className="flex items-center justify-between">
                    <span className="font-headline font-bold text-primary">₹2,800 - ₹4,500</span>
                    <div className="flex gap-2 text-tertiary">
                      <span className="material-symbols-outlined text-sm" data-icon="coffee">coffee</span>
                      <span className="material-symbols-outlined text-sm" data-icon="landscape">landscape</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-headline text-3xl font-bold text-on-surface">Explore All Stays</h2>
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-surface-container-high rounded-full text-xs font-bold font-label">Sort: Featured</button>
                <button className="md:hidden px-4 py-2 bg-primary text-white rounded-full text-xs font-bold font-label">Filters</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                <div className="relative aspect-video">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo6kHOHLofDzqJ0k73-SJ-ZO7k_AidqjKVqa5v9hQHDnYFLJ_qsnP1NZUVahoMatiPtBENQGP78rFb_7J4wBILhK8cjTTzjBJllvsxkU8G9uCzs85pqRHLrFy8xajKNwuA4nnj5ePFxRFDB-pM0WPpesG0REYSOFEO54HclS9OKPd1D4GicVn_wNFrONG6ndJ5OPZZKzo9T0yWaYyNCbYurQ_ON7Mc6jfgb6sn-Lvsf3nj365KLn5BIH2xuYJw4pSAbX0R_HQs3PI" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="px-2 py-1 bg-white/80 backdrop-blur-md rounded-lg text-[10px] font-bold font-label">Hotel</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-headline font-bold text-lg leading-tight">Summit Alpine Resort</h4>
                    <span className="text-xs bg-orange-100 text-orange-900 px-2 py-1 rounded-full font-bold">4.8 ★</span>
                  </div>
                  <p className="text-xs text-on-surface-variant font-label mb-4">Lachung, North Sikkim</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/20">
                    <span className="font-headline font-bold text-primary">₹7,200/night</span>
                    <div className="flex gap-1">
                      <span className="material-symbols-outlined text-lg text-tertiary" data-icon="wifi">wifi</span>
                      <span className="material-symbols-outlined text-lg text-tertiary" data-icon="restaurant">restaurant</span>
                      <span className="material-symbols-outlined text-lg text-tertiary" data-icon="spa">spa</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                <div className="relative aspect-video">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIwOZE3ErZDoA-Ol-ysVGvAoj-LvmPJzssLhkg-2rGDkkPmOkn3bGLT5KCvu93ggm6eQach-d3eUfg1dQ29Ud2lOQ7vnuzjDWw1E6HB833S86gnKepf0tCq5ibPa5A7XTPTV6HQe9O1tEQ7FzDGOVnAui3Je2RsHotPD8rTQYX_9YBJ_pcy9kt2Q0fBc-fFx5OwW50Dg0UfsJ8QEr_yH1qdg-QXBGaJkP5u3QLvDUFzwKdKMkvJcNIbJkWhHFgC_MDXfiVwHNKvJM" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="px-2 py-1 bg-white/80 backdrop-blur-md rounded-lg text-[10px] font-bold font-label">Homestay</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-headline font-bold text-lg leading-tight">Mawlynnong Bamboo Nest</h4>
                    <span className="text-xs bg-orange-100 text-orange-900 px-2 py-1 rounded-full font-bold">4.9 ★</span>
                  </div>
                  <p className="text-xs text-on-surface-variant font-label mb-4">Mawlynnong, Meghalaya</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/20">
                    <span className="font-headline font-bold text-primary">₹1,800/night</span>
                    <div className="flex gap-1">
                      <span className="material-symbols-outlined text-lg text-tertiary" data-icon="eco">eco</span>
                      <span className="material-symbols-outlined text-lg text-tertiary" data-icon="local_cafe">local_cafe</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                <div className="relative aspect-video">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARsk4NZCAYC7X8TtmC4rDWdFfr7VkFjCPLBYddU5UCWEd3cSvIMaxVovT6BH9Jm0fHsKYX-1OnaHEfcvNUM2ieNUxP7Nv43c45BaRuDI03lOEwKQECvA4PUJ574DzXknJUofF_Xg5Vcmd8drQfKqcPyxGc3l46NVFDgVVqWP3lTwwx6b7xIUQ735-IWbvQ4aN_ynYwY-FzBTIkb-Ij7kouh6K5G9SNmTeIq7MFpleLNruZ8bJ3V-USu0JZ9jel_Hr24dQj_1W7MhI" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="px-2 py-1 bg-white/80 backdrop-blur-md rounded-lg text-[10px] font-bold font-label">Boutique</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-headline font-bold text-lg leading-tight">The Elgin Heritage Hotel</h4>
                    <span className="text-xs bg-orange-100 text-orange-900 px-2 py-1 rounded-full font-bold">4.7 ★</span>
                  </div>
                  <p className="text-xs text-on-surface-variant font-label mb-4">Pelling, West Sikkim</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/20">
                    <span className="font-headline font-bold text-primary">₹9,500/night</span>
                    <div className="flex gap-1">
                      <span className="material-symbols-outlined text-lg text-tertiary" data-icon="fireplace">fireplace</span>
                      <span className="material-symbols-outlined text-lg text-tertiary" data-icon="menu_book">menu_book</span>
                      <span className="material-symbols-outlined text-lg text-tertiary" data-icon="local_bar">local_bar</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                <div className="relative aspect-video">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcbplOchBF9jxBSLePUot9NW14p9GTNDMLOXy9Cqolz7ckmg2Y3ihz88o0E4T00Ns4uMcn2se4oEJX0jtsqngcd4T_0GpNt-pvVYd9zldf408jHr_Xp1xOwiaYzrSSBh47ZaN47J1ffjoR94KEKYoejlCBMstEB_4U8bdB0IanBCttuWFhuaBd0YTg4OEljEhf_z7ev-VANgV6h-NtPC7cIWmTMYvFd5N8sWr3x0HHtWj_Xh6-cc1ywhSW7zxxX0BrBXWkpuhMoac" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="px-2 py-1 bg-white/80 backdrop-blur-md rounded-lg text-[10px] font-bold font-label">Nature Lodge</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-headline font-bold text-lg leading-tight">Daporijo Eco Tents</h4>
                    <span className="text-xs bg-orange-100 text-orange-900 px-2 py-1 rounded-full font-bold">4.5 ★</span>
                  </div>
                  <p className="text-xs text-on-surface-variant font-label mb-4">Subansiri, Arunachal</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/20">
                    <span className="font-headline font-bold text-primary">₹3,500/night</span>
                    <div className="flex gap-1">
                      <span className="material-symbols-outlined text-lg text-tertiary" data-icon="hiking">hiking</span>
                      <span className="material-symbols-outlined text-lg text-tertiary" data-icon="outdoor_grill">outdoor_grill</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                <div className="relative aspect-video">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhIAd3G-VOPc8kbSH3LWOAPHt_vJjRRsjrl5gB7ThQg4fRm4UEbZArHkJSlOhcU3J7PM3u39Qwb05H-_I2Kile5ljqeBdk89tbVJyL3oKTK9uqtdLVyxc1nRn5Qgq3izWAMQrOPxyc-5YVQpujpeVIeODh8u9JTExbWxA1cMfrp-3xjLc47MPcIegJdJ5rdQ4jI3IUEGM1soNzgHyNTTH13KD5tIbhIbiv2S2JDw8BYvIFQk6TQrja5KOyEF7wJBl4TNjNOiZREa4" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="px-2 py-1 bg-white/80 backdrop-blur-md rounded-lg text-[10px] font-bold font-label">Estate Stay</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-headline font-bold text-lg leading-tight">Wild Mahseer Estate</h4>
                    <span className="text-xs bg-orange-100 text-orange-900 px-2 py-1 rounded-full font-bold">4.9 ★</span>
                  </div>
                  <p className="text-xs text-on-surface-variant font-label mb-4">Tezpur, Assam</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/20">
                    <span className="font-headline font-bold text-primary">₹12,000/night</span>
                    <div className="flex gap-1">
                      <span className="material-symbols-outlined text-lg text-tertiary" data-icon="set_meal">set_meal</span>
                      <span className="material-symbols-outlined text-lg text-tertiary" data-icon="history_edu">history_edu</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                <div className="relative aspect-video">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRuYUinKBHkeFMvmWYyUOD5AxdQI7OzPsKIFnLS6SrkGGI949kcPmmQSYYgkbKqS7Lsmgxo6fjwE6SBcKSty3SRhvWsfvqsRv0LPVXFxydNBHMsNefs0eCc3OT9J4i-5uQdXgsrDkjr1JXTh3c36w6KD0L8eAL9l0uPtbXmg2RQzsMefF5ZWhm4JjfIGv1TkQW19ahRmN_cy19XHJwgzXXv4qAE-RZc1OI0zLSsdUatmdN0yp4Od0yMoiWddGocv26ITm24wRpR68" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="px-2 py-1 bg-white/80 backdrop-blur-md rounded-lg text-[10px] font-bold font-label">Monastery Stay</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-headline font-bold text-lg leading-tight">Rumtek Pilgrim House</h4>
                    <span className="text-xs bg-orange-100 text-orange-900 px-2 py-1 rounded-full font-bold">4.6 ★</span>
                  </div>
                  <p className="text-xs text-on-surface-variant font-label mb-4">East Sikkim</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/20">
                    <span className="font-headline font-bold text-primary">₹1,200/night</span>
                    <div className="flex gap-1">
                      <span className="material-symbols-outlined text-lg text-tertiary" data-icon="self_improvement">self_improvement</span>
                      <span className="material-symbols-outlined text-lg text-tertiary" data-icon="volunteer_activism">volunteer_activism</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 flex justify-center">
              <button className="px-8 py-4 bg-surface-container-high hover:bg-surface-container-highest transition-colors rounded-full font-bold text-on-surface-variant flex items-center gap-3">
                Load More Hidden Gems
                <span className="material-symbols-outlined" data-icon="expand_more">expand_more</span>
              </button>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Stays