import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function PrivacyPolicy() {
  return (
    <>
      <main className="pt-24 pb-20 px-4 md:px-12 max-w-7xl mx-auto">
        <section className="mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-primary mb-4 leading-none">Privacy Policy</h1>
          <p className="text-on-surface-variant max-w-2xl text-lg md:text-xl">Your privacy matters to us. This policy outlines how we collect, use, and protect your personal information when you explore Northeast India with Warm Explorer.</p>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-surface-container-low rounded-3xl p-8">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-tertiary mb-4">1. Information We Collect</h2>
                  <p className="text-on-surface-variant leading-relaxed mb-4">
                    We collect information you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside text-on-surface-variant space-y-2 ml-4">
                    <li>Personal details (name, email, phone number) when you contact us</li>
                    <li>Travel preferences and trip details</li>
                    <li>Payment information for bookings</li>
                    <li>Permit application data</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-tertiary mb-4">2. How We Use Your Information</h2>
                  <p className="text-on-surface-variant leading-relaxed mb-4">
                    Your information helps us provide better services:
                  </p>
                  <ul className="list-disc list-inside text-on-surface-variant space-y-2 ml-4">
                    <li>Process your travel bookings and permit applications</li>
                    <li>Send you travel updates and itinerary details</li>
                    <li>Improve our website and customer service</li>
                    <li>Communicate about new destinations and offers</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-tertiary mb-4">3. Information Sharing</h2>
                  <p className="text-on-surface-variant leading-relaxed mb-4">
                    We may share your information with:
                  </p>
                  <ul className="list-disc list-inside text-on-surface-variant space-y-2 ml-4">
                    <li>State Tourism Departments for permit processing</li>
                    <li>Verified accommodation partners for bookings</li>
                    <li>Registered travel agents for tour arrangements</li>
                  </ul>
                  <p className="text-on-surface-variant leading-relaxed mt-4">
                    We never sell your personal data to third parties.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-tertiary mb-4">4. Data Security</h2>
                  <p className="text-on-surface-variant leading-relaxed">
                    We implement industry-standard security measures to protect your data, including SSL encryption for all transfers and secure storage protocols. However, no method of transmission over the internet is 100% secure.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-tertiary mb-4">5. Your Rights</h2>
                  <p className="text-on-surface-variant leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside text-on-surface-variant space-y-2 ml-4">
                    <li>Access your personal data</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Opt-out of promotional communications</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-tertiary mb-4">6. Cookies & Tracking</h2>
                  <p className="text-on-surface-variant leading-relaxed">
                    We use cookies to enhance your browsing experience. You can disable cookies in your browser settings, though some features may not work properly.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-tertiary mb-4">7. Changes to Policy</h2>
                  <p className="text-on-surface-variant leading-relaxed">
                    We may update this policy periodically. Any changes will be posted on this page with a revised date. Your continued use constitutes acceptance of updated terms.
                  </p>
                </div>
                <div className="pt-8 border-t border-outline-variant/20">
                  <p className="text-on-surface-variant text-sm">
                    Last updated: April 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-primary p-8 rounded-3xl text-white relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary-container/20 rounded-full blur-2xl"></div>
              <span className="material-symbols-outlined text-5xl mb-6 block" data-icon="security">security</span>
              <h3 className="text-2xl font-bold mb-4">Your Data, Protected</h3>
              <p className="text-white/80 leading-relaxed font-body">We follow strict data protection protocols compliant with Indian IT laws to keep your information safe.</p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-tertiary mb-6">Quick Links</h3>
              <div className="space-y-4">
                <Link to="/contact-us" className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                  <span>Contact Us</span>
                </Link>
                <Link to="/permit-guidelines" className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                  <span>Permit Guidelines</span>
                </Link>
                <a href="#" className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                  <span>Terms of Service</span>
                </a>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-tertiary mb-6">Questions?</h3>
              <p className="text-on-surface-variant text-sm mb-6">
                If you have concerns about your privacy, contact our Data Protection Officer.
              </p>
              <Link to="/contact-us" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-full hover:bg-primary-container transition-all">
                Contact DPO
                <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default PrivacyPolicy