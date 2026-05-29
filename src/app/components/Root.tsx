import { Outlet, Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";

export function Root() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "À propos", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="hidden md:flex items-center justify-end gap-4 py-2 text-sm text-slate-400 border-b border-slate-800">
            <a href="tel:+33767804247" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <Phone className="h-4 w-4" />
              07 67 80 42 47
            </a>
            <a href="mailto:contact@isngroup.fr" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <Mail className="h-4 w-4" />
              contact@isngroup.fr
            </a>
          </div>

          {/* Main navigation */}
          <nav className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-slate-950 font-bold text-sm">ISN</span>
              </div>
              <div>
                <div className="font-bold text-xl text-white">ISN Group</div>
                <div className="text-xs text-slate-500">Support & Conception Web</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors ${
                    isActive(item.href)
                      ? "text-emerald-400 font-medium"
                      : "text-slate-300 hover:text-emerald-400"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact">
                <Button>Demander un devis</Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-slate-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-800">
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`py-2 transition-colors ${
                      isActive(item.href)
                        ? "text-emerald-400 font-medium"
                        : "text-slate-300"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full">Demander un devis</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black text-slate-400">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-slate-950 font-bold text-sm">ISN</span>
                </div>
                <div className="font-bold text-white text-xl">ISN Group</div>
              </div>
              <p className="text-sm">
                Votre technicien informatique de confiance – support de terrain et conception web.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services" className="hover:text-white transition-colors">Maintenance & Dépannage</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Gestion de parc informatique</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Création de sites vitrines</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Assistance utilisateur</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Entreprise</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors">À propos</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Mentions légales</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><Phone className="h-4 w-4" />07 67 80 42 47</li>
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" />contact@isngroup.fr</li>
                <li>Du lundi au vendredi</li>
                <li>9h - 18h</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
            <p>© 2026 ISN Group. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
