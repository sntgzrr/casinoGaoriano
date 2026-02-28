import LogoGaori from "../assets/logo_gaori.png";

export function Footer() {
  return (
    <footer className="bg-black border-t border-amber-900/30 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <img src={LogoGaori} alt="Logo Gaoriano" className="w-10 h-10" />
            <span className="text-lg font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Casino Gaoriano
            </span>
          </div>

          <p className="text-gray-400 text-sm text-center">
            © 2026 Fuerza Aeroespacial Colombiana. Todos los derechos reservados.
          </p>

          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
              Términos y Condiciones
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
              Privacidad
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs">
            ESALO - Creado por: @sntgzrr
          </p>
        </div>
      </div>
    </footer>
  )
}