import { useState } from "react";

const services = [
  {
    title: "Movimiento de Suelos y Obra Civil",
    items: [
      "Limpieza, desmontes y extracción de árboles",
      "Demoliciones y retiro de escombros",
      "Nivelaciones, pozos, zanjas y compactación",
      "Caminos rurales: apertura, perfilado y mantenimiento",
      "Canales de drenaje y preparación de terrenos para construcción",
      "Venta y transporte de tierra: tosca, tierra negra, arena, ripio",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <path d="M4 40h40M8 40V28l8-8h6l4 4h10l4-4v20" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 20l-4-6M26 24l6-10" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Tratamiento y Gestión de Aguas",
    items: [
      "Lagunas de tratamiento de efluentes para tambos y feedlots",
      "Sistemas de potabilización y filtrado rural",
      "Instalación y conexión de tanques de agua",
      "Redes de distribución para riego y bebida animal",
      "Reservorios y sistemas de almacenamiento de agua",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <path d="M24 6c-8 10-14 16-14 24a14 14 0 0028 0c0-8-6-14-14-24z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 32c0 4.4 3.6 8 8 8" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: "Biodigestores",
    items: [
      "Diseño a medida según tipo y volumen de efluente",
      "Construcción y obra civil del biodigestor",
      "Generación de biogás a partir de residuos orgánicos",
      "Producción de biofertilizante para uso agrícola",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <circle cx="24" cy="24" r="14"/>
        <path d="M24 10v4M24 34v4M10 24h4M34 24h4" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="6"/>
      </svg>
    ),
  },
];



export default function GaiaPampa() {
  const [formData, setFormData] = useState({ nombre: "", telefono: "", ubicacion: "", detalle: "" });
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }} className="bg-stone-50 text-stone-800 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Space Grotesk', system-ui, sans-serif; }
        .hero-gradient {
          background: linear-gradient(165deg, #1a1a1a 0%, #2a2318 40%, #3d3520 70%, #1a1a1a 100%);
        }
        .gold-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, #b8941c, transparent);
        }
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.1);
        }
        .service-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .btn-gold {
          background: #8B6914;
          color: white;
          transition: background 0.2s ease, transform 0.1s ease;
        }
        .btn-gold:hover { background: #a47d1a; transform: translateY(-1px); }
        .btn-outline {
          border: 1.5px solid rgba(255,255,255,0.4);
          color: white;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .btn-outline:hover { border-color: #b8941c; background: rgba(184,148,28,0.1); }

        input:focus, textarea:focus, select:focus {
          outline: none;
          border-color: #8B6914;
          box-shadow: 0 0 0 3px rgba(139,105,20,0.1);
        }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-stone-900 bg-opacity-95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
          <button onClick={() => scrollTo("hero")} className="flex items-center">
            <img src="/logo-dark-bg.png" alt="GAIA Pampa" className="h-9 sm:h-11 w-auto" />
          </button>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 text-sm text-stone-300">
            {[["Servicios","servicios"],["Nosotros","nosotros"],["Contacto","contacto"]].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="hover:text-white transition-colors">{label}</button>
            ))}
            <button onClick={() => scrollTo("contacto")} className="btn-gold px-4 py-1.5 rounded text-sm font-medium">
              Pedir Presupuesto
            </button>
          </div>
          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round"/> : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round"/>}
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-stone-900 border-t border-stone-700 px-4 pb-4 pt-2 flex flex-col gap-3 text-stone-300 text-sm">
            {[["Servicios","servicios"],["Nosotros","nosotros"],["Contacto","contacto"]].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-left hover:text-white">{label}</button>
            ))}
            <button onClick={() => scrollTo("contacto")} className="btn-gold px-4 py-2 rounded text-sm font-medium mt-1">
              Pedir Presupuesto
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 relative z-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-widest uppercase mb-6" style={{ color: "#b8941c" }}>
              Pehuajó y alrededores, Buenos Aires
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              No solo movemos
              <br />
              <span style={{ color: "#b8941c" }}>tierra</span>
            </h1>
            <p className="text-stone-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg">
              Presupuestos claros, soluciones a medida y compromiso real con cada trabajo.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo("contacto")} className="btn-gold px-8 py-3 rounded font-display font-semibold text-base">
                Pedir Presupuesto
              </button>
              <button onClick={() => scrollTo("servicios")} className="btn-outline px-8 py-3 rounded font-display font-medium text-base">
                Conocer Servicios
              </button>
            </div>
          </div>
        </div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </section>

      {/* SERVICES */}
      <section id="servicios" className="py-20 sm:py-28 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "#8B6914" }}>Servicios</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            Soluciones integrales de diseño y ejecución
          </h2>
          <p className="text-stone-500 text-lg mb-14 max-w-2xl">
            Desde el relevamiento hasta la entrega final. Combinamos conocimiento técnico en ingeniería ambiental con equipos propios para llevar adelante cada proyecto de principio a fin.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {services.map((s, i) => (
              <div key={i} className="service-card bg-white rounded-lg p-8 border border-stone-200 cursor-default">
                <div className="mb-5" style={{ color: "#8B6914" }}>{s.icon}</div>
                <h3 className="font-display text-xl font-semibold text-stone-900 mb-4">{s.title}</h3>
                <ul className="space-y-2.5">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-stone-500 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#b8941c" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Consultancy banner */}
          <div className="bg-stone-900 rounded-lg p-8 sm:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "rgba(184,148,28,0.15)" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b8941c" strokeWidth="1.5">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 9h8M8 13h5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                ¿Tenés una problemática y no sabés por dónde empezar?
              </h3>
              <p className="text-stone-400 leading-relaxed">
                Contanos tu situación y te proponemos una solución a medida. Cada trabajo es distinto — nosotros nos encargamos de analizar, diseñar y ejecutar lo que haga falta.
              </p>
            </div>
            <button onClick={() => scrollTo("contacto")} className="btn-gold px-8 py-3 rounded font-display font-semibold text-sm whitespace-nowrap flex-shrink-0">
              Consultanos
            </button>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="gold-line max-w-4xl mx-auto" />

      {/* NOSOTROS + TRABAJOS */}
      <section id="nosotros" className="py-20 sm:py-28 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "#8B6914" }}>Nosotros</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
              Dos hermanos, una visión
            </h2>
            <p className="text-stone-600 leading-relaxed text-lg">
              Entendemos cada trabajo, sus problemas y sus tiempos. No solo ejecutamos, primero escuchamos lo que necesitás y te proponemos la mejor forma de resolverlo.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {/* REEMPLAZAR cada src="" por el link real de la imagen al publicar */}
            <img src="/images/camion-volcando.jpg" alt="Camión volcando tierra" className="w-full aspect-square object-cover rounded-lg border border-stone-200" />
            <img src="/images/skid-vereda-piedra.jpg" alt="Skid steer terminando vereda con piedra" className="w-full aspect-square object-cover rounded-lg border border-stone-200" />
            <img src="/images/zanja-larga.jpg" alt="Zanja de gran escala" className="w-full aspect-square object-cover rounded-lg border border-stone-200" />
            <img src="/images/retro-canal-campo.jpg" alt="Retropala trabajando en un canal" className="w-full aspect-square object-cover rounded-lg border border-stone-200" />
            <img src="/images/skid-obra-construccion.jpg" alt="Skid steer en obra en construcción" className="w-full aspect-square object-cover rounded-lg border border-stone-200" />
            <img src="/images/retro-saca-arbol.jpg" alt="Retropala extrayendo árbol" className="w-full aspect-square object-cover rounded-lg border border-stone-200" />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="py-20 sm:py-28 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "#8B6914" }}>Contacto</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
                Pedí tu presupuesto sin compromiso
              </h2>
              <p className="text-stone-500 text-lg mb-10 leading-relaxed">
                Contanos qué necesitás y nos ponemos en contacto para coordinar una visita y armar tu presupuesto a medida.
              </p>
              <div className="space-y-6 text-stone-600">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(139,105,20,0.1)" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-stone-400">Teléfono / WhatsApp</p>
                    <p className="font-medium text-stone-800">+54 2396 XX-XXXX</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(139,105,20,0.1)" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-stone-400">Email</p>
                    <p className="font-medium text-stone-800">gaiapampa.sas@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(139,105,20,0.1)" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-stone-400">Ubicación</p>
                    <p className="font-medium text-stone-800">Pehuajó, Buenos Aires</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {formSent ? (
                <div className="bg-white rounded-lg border border-stone-200 p-10 text-center">
                  <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: "rgba(74,103,65,0.1)" }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4A6741" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-stone-900 mb-2">¡Mensaje enviado!</h3>
                  <p className="text-stone-500">Nos ponemos en contacto a la brevedad para coordinar.</p>
                </div>
              ) : (
                <div className="bg-white rounded-lg border border-stone-200 p-8">
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">Nombre</label>
                      <input name="nombre" value={formData.nombre} onChange={handleChange} type="text" placeholder="Tu nombre"
                        className="w-full px-4 py-2.5 rounded border border-stone-200 bg-stone-50 text-stone-800 text-sm transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">Teléfono</label>
                      <input name="telefono" value={formData.telefono} onChange={handleChange} type="tel" placeholder="2396..."
                        className="w-full px-4 py-2.5 rounded border border-stone-200 bg-stone-50 text-stone-800 text-sm transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">Ubicación del trabajo</label>
                      <input name="ubicacion" value={formData.ubicacion} onChange={handleChange} type="text" placeholder="Partido, zona, ruta..."
                        className="w-full px-4 py-2.5 rounded border border-stone-200 bg-stone-50 text-stone-800 text-sm transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">Detalle del trabajo</label>
                      <textarea name="detalle" value={formData.detalle} onChange={handleChange} rows={4}
                        placeholder="Describí brevemente qué necesitás: tipo de obra, superficie estimada, plazo..."
                        className="w-full px-4 py-2.5 rounded border border-stone-200 bg-stone-50 text-stone-800 text-sm transition-all resize-none" />
                    </div>
                    <button onClick={handleSubmit} className="btn-gold w-full py-3 rounded font-display font-semibold text-base">
                      Enviar Consulta
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-900 text-stone-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <img src="/logo-dark-bg.png" alt="GAIA Pampa S.A.S." className="h-11 w-auto mb-2" />
              <p className="text-sm">Diseño y ejecución de infraestructura rural</p>
            </div>
            <div className="text-sm text-right">
              <p>Pehuajó, Buenos Aires, Argentina</p>
              <p className="mt-1">gaiapampa.sas@gmail.com</p>
            </div>
          </div>
          <div className="gold-line mt-8 mb-6" />
          <p className="text-xs text-stone-600 text-center">© 2026 GAIA Pampa S.A.S. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
