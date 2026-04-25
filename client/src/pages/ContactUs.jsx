import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function ContactUs() {
  return (
    <>
      <main className="pt-24 pb-20 px-4 md:px-12 max-w-7xl mx-auto">
        <section className="mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-primary mb-4 leading-none">Get in Touch.</h1>
          <p className="text-on-surface-variant max-w-2xl text-lg md:text-xl">Have questions about your Northeast India adventure? Our travel experts are here to help you plan the journey of a lifetime.</p>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-outline-variant/20">
              <h2 className="text-3xl font-bold text-tertiary mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-primary uppercase mb-2 ml-4">First Name</label>
                    <div className="flex items-center bg-surface-container-low rounded-2xl p-4">
                      <span className="material-symbols-outlined mr-3 text-tertiary" data-icon="person">person</span>
                      <input className="bg-transparent border-none focus:ring-0 w-full font-bold" placeholder="Your first name" type="text"/>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-primary uppercase mb-2 ml-4">Last Name</label>
                    <div className="flex items-center bg-surface-container-low rounded-2xl p-4">
                      <span className="material-symbols-outlined mr-3 text-tertiary" data-icon="person">person</span>
                      <input className="bg-transparent border-none focus:ring-0 w-full font-bold" placeholder="Your last name" type="text"/>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-primary uppercase mb-2 ml-4">Email Address</label>
                  <div className="flex items-center bg-surface-container-low rounded-2xl p-4">
                    <span className="material-symbols-outlined mr-3 text-tertiary" data-icon="mail">mail</span>
                    <input className="bg-transparent border-none focus:ring-0 w-full font-bold" placeholder="your@email.com" type="email"/>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-primary uppercase mb-2 ml-4">Phone Number</label>
                  <div className="flex items-center bg-surface-container-low rounded-2xl p-4">
                    <span className="material-symbols-outlined mr-3 text-tertiary" data-icon="call">call</span>
                    <input className="bg-transparent border-none focus:ring-0 w-full font-bold" placeholder="+91XXXXXXXXXX" type="tel"/>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-primary uppercase mb-2 ml-4">Subject</label>
                  <div className="flex items-center bg-surface-container-low rounded-2xl p-4">
                    <span className="material-symbols-outlined mr-3 text-tertiary" data-icon="help">help</span>
                    <select className="bg-transparent border-none focus:ring-0 w-full font-bold text-on-surface-variant">
                      <option>General Inquiry</option>
                      <option>Permit Information</option>
                      <option>Booking Assistance</option>
                      <option>Travel Guide Request</option>
                      <option>Partnership Opportunity</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-primary uppercase mb-2 ml-4">Message</label>
                  <div className="bg-surface-container-low rounded-2xl p-4">
                    <textarea className="bg-transparent border-none focus:ring-0 w-full font-bold h-32 resize-none" placeholder="Tell us about your travel plans..."></textarea>
                  </div>
                </div>
                <button className="w-full bg-primary text-white font-bold py-4 px-12 rounded-2xl hover:bg-primary-container transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined" data-icon="send">send</span>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-primary p-8 rounded-3xl text-white relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary-container/20 rounded-full blur-2xl"></div>
              <span className="material-symbols-outlined text-5xl mb-6 block" data-icon="headset_mic">headset_mic</span>
              <h3 className="text-2xl font-bold mb-4">Helpline</h3>
              <p className="text-white/80 leading-relaxed mb-6 font-body">Our travel experts are available 24/7 to assist you with your Northeast India journey.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined">call</span>
                  <div>
                    <p className="text-xs text-white/60">Toll Free</p>
                    <p className="font-bold">1800-XXX-XXXX</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined">whatsapp</span>
                  <div>
                    <p className="text-xs text-white/60">WhatsApp</p>
                    <p className="font-bold">+91XXXXXXXXXX</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-tertiary mb-6">Regional Offices</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-on-secondary-container" data-icon="location_on">location_on</span>
                  </div>
                  <div>
                    <p className="font-bold">Guwahati HQ</p>
                    <p className="text-sm text-on-surface-variant"> Tourism Department, Assam</p>
                    <p className="text-xs text-primary font-bold mt-1">+91 361-XXX-XXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-on-secondary-container" data-icon="location_on">location_on</span>
                  </div>
                  <div>
                    <p className="font-bold">Itanagar Office</p>
                    <p className="text-sm text-on-surface-variant">Arunachal Pradesh</p>
                    <p className="text-xs text-primary font-bold mt-1">+91 360-XXX-XXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-on-secondary-container" data-icon="location_on">location_on</span>
                  </div>
                  <div>
                    <p className="font-bold">Shillong Office</p>
                    <p className="text-sm text-on-surface-variant">Meghalaya</p>
                    <p className="text-xs text-primary font-bold mt-1">+91 364-XXX-XXXX</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-tertiary mb-6">Office Hours</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Monday - Friday</span>
                  <span className="font-bold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Saturday</span>
                  <span className="font-bold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Sunday</span>
                  <span className="font-bold">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="bg-surface-container-low rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-on-surface mb-4">Frequently Asked Questions</h2>
            <p className="text-on-surface-variant">Quick answers to common travel queries.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest p-6 rounded-2xl">
              <span className="material-symbols-outlined text-primary text-2xl mb-3 block" data-icon="description">description</span>
              <h4 className="font-bold mb-2">How do I apply for ILP?</h4>
              <p className="text-sm text-on-surface-variant">You can apply online through the state tourism websites or through our permit assistance service.</p>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-2xl">
              <span className="material-symbols-outlined text-primary text-2xl mb-3 block" data-icon="hotel">hotel</span>
              <h4 className="font-bold mb-2">Best time to visit?</h4>
              <p className="text-sm text-on-surface-variant">October to April offers the best weather. Monsoon (June-September) is for adventure seekers.</p>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-2xl">
              <span className="material-symbols-outlined text-primary text-2xl mb-3 block" data-icon="flight">flight</span>
              <h4 className="font-bold mb-2">How to reach NE India?</h4>
              <p className="text-sm text-on-surface-variant">Guwahati and Imphal airports have daily flights from major Indian cities.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default ContactUs