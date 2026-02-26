import { Menu, X } from "lucide-react";
import { useState } from "react";
import LogoGaori from "../assets/logo_gaori.png";
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-amber-900/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
              <img src={LogoGaori} alt="Logo Gaoriano" className="w-10 h-10" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Casino Gaoriano
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button className="text-gray-300 hover:text-amber-400 transition-colors">
              Inicio
            </button>
            <button className="text-gray-300 hover:text-amber-400 transition-colors">
              Servicios
            </button>
            <button className="text-gray-300 hover:text-amber-400 transition-colors">
              Contacto
            </button>
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
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-amber-400 hover:bg-amber-900/10 transition-colors"
            >
              Inicio
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-amber-400 hover:bg-amber-900/10 transition-colors"
            >
              Servicios
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-amber-400 hover:bg-amber-900/10 transition-colors"
            >
              Contacto
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
