import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="/adimAndFamily/logo.png"
                alt="Adim & Family Investments logo"
                className="w-16 h-16"
              />
              <div>
                <h3 className="text-lg font-bold">ADIM & FAMILY</h3>
                <p className="text-xs text-red-400 font-semibold">INVESTMENTS CO. LTD</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A dynamic investment company providing innovative financial solutions and investment opportunities.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-white transition text-sm">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-white transition text-sm">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-white transition text-sm">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('objectives')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-white transition text-sm">
                  Objectives
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Real Estate Investment</li>
              <li>Financial Consulting</li>
              <li>Asset Management</li>
              <li>Business Development</li>
              <li>General Investment</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start text-sm">
                <Mail className="w-5 h-5 mr-2 text-red-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:adimfamilyinvestment@gmail.com" className="text-gray-300 hover:text-white transition">
                  adimfamilyinvestment@gmail.com
                </a>
              </div>
              <div className="flex items-start text-sm">
                <Phone className="w-5 h-5 mr-2 text-red-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+211929327000" className="text-gray-300 hover:text-white transition">
                  +211 929 327 000
                </a>
              </div>
              <div className="flex items-start text-sm">
                <MapPin className="w-5 h-5 mr-2 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">
                  ROC Building, Next to Emmanuel Parish, Hai Cinema, Juba
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-2">
            &copy; {currentYear} Adim & Family Investment Ltd. All rights reserved.
          </p>
          <p className="text-red-400 text-sm italic font-semibold">
            "Failing to PLAN is Planning to FAIL."
          </p>
        </div>
      </div>
    </footer>
  );
}
