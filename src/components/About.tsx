import { Target, Eye } from 'lucide-react';
import logoPng from '/logo.png';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">About Adim & Family</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Who We Are</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Adim & Family Investment Ltd is a dynamic and growth-oriented investment company that provides innovative financial solutions and investment opportunities. With a strong foundation built on integrity, transparency, and professionalism, we specialize in various investment services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our company operates with a vision to create long-term value for our stakeholders while fostering financial growth and sustainability. Whether for individuals, businesses, or institutions, we strive to offer tailored investment solutions that align with our clients' goals.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Investment professionals"
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-lg shadow-xl">
              <p className="text-4xl font-bold">2025</p>
              <p className="text-sm">Established</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-xl text-white">
            <Eye className="w-12 h-12 mb-4 text-red-400" />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="leading-relaxed">
              To be a leading investment firm recognized for excellence, innovation, and impactful financial growth.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-600 to-red-700 p-8 rounded-xl text-white">
            <Target className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="leading-relaxed">
              To provide strategic investment solutions that drive wealth creation, business expansion, and sustainable development.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-xl">
          <div className="flex items-center justify-center mb-6">
            <img
              src={logoPng}
              alt="Adim & Family Investments logo"
              className="w-10 h-10 mr-3"
            />
            <h3 className="text-2xl font-bold text-blue-900">Company Details</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-gray-600 mb-2">Company Name</p>
              <p className="font-semibold text-blue-900">Adim & Family Investment Ltd</p>
            </div>
            <div>
              <p className="text-gray-600 mb-2">Industry</p>
              <p className="font-semibold text-blue-900">Investment & Financial Services</p>
            </div>
            <div>
              <p className="text-gray-600 mb-2">Headquarters</p>
              <p className="font-semibold text-blue-900">Juba, South Sudan</p>
            </div>
            <div>
              <p className="text-gray-600 mb-2">Business Type</p>
              <p className="font-semibold text-blue-900">Private Limited Company</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
