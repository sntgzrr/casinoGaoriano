import { Menu, X, ChevronDown, LogIn, Loader } from "lucide-react";
import { useState } from "react";
import LogoGaori from "../assets/logo_gaori.png";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { LoginModal } from "./LoginModal";
import { useAuth } from "../contexts/useAuth";
import { logout } from "../utils/services/authServices";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { authenticated, loading } = useAuth();

  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  const scrollToSection = (id) => {
    if (window.location.hash !== `#${id}`) {
      navigate(`/#${id}`);
      setIsMenuOpen(false);
      setIsServicesOpen(false);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogout = async () => {
    const logOutSuccess = await logout();
    if (logOutSuccess) {
      navigate('/')
      location.reload();
    }
  }

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300);
  }

  const services = [
    { id: "/barTomo", name: "Bar Tomo" },
    { id: "/piscina", name: "Piscina" },
    { id: "/caraCara", name: "Cara Cara" },
    { id: "/mall", name: "Mall" },
    { id: "/casinos", name: "Casinos" },
    { id: "/barArpia", name: "Bar Arpía" },
    { id: "/barSkyline", name: "Bar Skyline" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-amber-900/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <img onClick={() => navigate('/')} src={LogoGaori} alt="Logo Gaoriano" className="w-13 h-13 cursor-pointer" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => navigate('/')} className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer">
                Inicio
              </button>

              {/* Services Dropdown */}
              <div className="relative" onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
                <button className="text-gray-300 hover:text-amber-400 transition-colors flex items-center space-x-1 cursor-pointer">
                  <span>Servicios</span>
                  <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-40 bg-gray-900 border border-amber-900/30 rounded-lg shadow-xl overflow-hidden">
                    {services.map((service) => (
                      <button key={service.id} onClick={() => navigate(service.id)} className="w-full text-left px-4 py-3 text-gray-300 hover:text-amber-400 hover:bg-amber-900/20 transition-colors border-b border-gray-800 last:border-b-0 cursor-pointer">
                        {service.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer"
                onClick={() => scrollToSection('informacion')}
              >
                Información
              </button>
              {loading ? (
                <div className="flex items-center gap-2 px-5 py-2 bg-gray-600 text-white rounded-lg cursor-not-allowed">
                  <Loader size={15} className="animate-spin" />
                </div>
              ) : authenticated ? (
                <>
                  <button className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer"
                    onClick={() => navigate('/panelDeControl')}
                  >
                    Panel de Control
                  </button>
                  <button
                    onClick={() => handleLogout()}
                    className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black rounded-lg transition-all duration-300 shadow-lg shadow-amber-900/30 cursor-pointer"
                    style={{ fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.05em" }}
                  >
                    <LogIn size={15} />
                    CERRAR SESIÓN
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black rounded-lg transition-all duration-300 shadow-lg shadow-amber-900/30 cursor-pointer"
                  style={{ fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.05em" }}
                >
                  <LogIn size={15} />
                  INICIAR SESIÓN
                </button>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-amber-400 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              <button
                onClick={() => navigate('/')}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-amber-400 hover:bg-amber-900/10 transition-colors"
              >
                Inicio
              </button>

              {/* Mobile Services Submenu */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full px-4 py-2 text-gray-300 hover:text-amber-400 hover:bg-amber-900/10 transition-colors"
                >
                  <span>Servicios</span>
                  <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="bg-gray-900/50 ml-4">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => navigate(service.id)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-amber-400 hover:bg-amber-900/10 transition-colors"
                      >
                        {service.name}
                      </button>
                    ))}
                  </div>
                )}
                <button className="block w-full text-left px-4 py-2 text-gray-300 hover:text-amber-400 hover:bg-amber-900/10 transition-colors"
                  onClick={() => scrollToSection('informacion')}
                >
                  Información
                </button>
                {authenticated && (
                  <button className="block w-full text-left px-4 py-2 text-gray-300 hover:text-amber-400 hover:bg-amber-900/10 transition-colors"
                    onClick={() => navigate('/panelDeControl')}
                  >
                    Panel de Control
                  </button>
                )}
              </div>

              <div className="px-4 pt-2 pb-1">
                {!authenticated && (
                  <button
                    onClick={() => { setIsLoginOpen(true); setIsMenuOpen(false); }}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-gradient-to-r from-amber-600 to-amber-500 text-black rounded-lg"
                    style={{ fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.05em" }}
                  >
                    <LogIn size={15} />
                    INICIAR SESIÓN
                  </button>
                )}
                {authenticated && (
                  <button
                    onClick={() => handleLogout()}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-gradient-to-r from-amber-600 to-amber-500 text-black rounded-lg"
                    style={{ fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.05em" }}
                  >
                    <LogIn size={15} />
                    CERRAR SESIÓN
                  </button>
                )}
              </div>
            </nav>
          )}
        </div>
      </header>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
