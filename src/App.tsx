import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Objectives from './components/Objectives';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminRoute from './components/AdminRoute';

function App() {
  // Simple route detection - check for both base paths
  const pathname = window.location.pathname;
  
  if (pathname === '/admin' || pathname === '/adim.Family/admin') {
    return <AdminRoute />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Objectives />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
