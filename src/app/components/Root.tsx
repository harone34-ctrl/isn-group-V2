import { Outlet, Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { ScrollToTop } from "./ScrollToTop";

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
      <ScrollToTop />
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a4d92] border-b border-[#0d3d72]">
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="hidden md:flex items-center justify-end gap-4 py-2 text-sm text-blue-200 border-b border-[#0d3d72]">
            <a href="tel:+33767804247" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="h-4 w-4" />
              07 67 80 42 47
            </a>
            <a href="mailto:contact@isngroup.fr" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="h-4 w-4" />
              contact@isngroup.fr
            </a>
          </div>

          {/* Main navigation */}
          <nav aria-label="Navigation principale" className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#0a4d92] font-bold text-sm">ISN</span>
              </div>
              <div>
                <div className="font-bold text-xl text-white">ISN Group</div>
                <div className="text-xs text-blue-200">Support & Conception Web</div>
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
                      ? "text-white font-semibold"
                      : "text-blue-100 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact">
                <Button className="bg-white text-[#0a4d92] hover:bg-blue-50 font-semibold">Demander un devis</Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-blue-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav aria-label="Navigation mobile" className="md:hidden py-4 border-t border-[#0d3d72]">
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`py-2 transition-colors ${
                      isActive(item.href)
                        ? "text-white font-semibold"
                        : "text-blue-100"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-white text-[#0a4d92] hover:bg-blue-50">Demander un devis</Button>
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer aria-label="Pied de page" className="bg-[#0a4d92] text-blue-100 border-t border-[#0d3d72]">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-5 w-fit">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-[#0a4d92] font-bold text-sm">ISN</span>
                </div>
                <div className="font-bold text-white text-xl">ISN Group</div>
              </Link>
              <p className="text-base leading-relaxed">
                Votre technicien informatique de confiance — support de terrain et conception web professionnelle.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-5">Services</h3>
              <ul className="space-y-3 text-base">
                <li><Link to="/services" className="hover:text-white transition-colors">Maintenance &amp; Dépannage</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Gestion de parc informatique</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Création de sites vitrines</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Assistance utilisateur</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-5">Entreprise</h3>
              <ul className="space-y-3 text-base">
                <li><Link to="/about" className="hover:text-white transition-colors">À propos</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/legal" className="hover:text-white transition-colors">Mentions légales</Link></li>
                <li><Link to="/legal" className="hover:text-white transition-colors">Politique de confidentialité</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-5">Contact</h3>
              <a
                href="tel:+33767804247"
                className="flex items-center gap-3 text-3xl font-extrabold text-white hover:text-blue-200 transition-colors mb-5"
              >
                <Phone className="h-7 w-7 flex-shrink-0" />
                07 67 80 42 47
              </a>
              <ul className="space-y-3 text-base">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <a href="mailto:contact@isngroup.fr" className="hover:text-white transition-colors">contact@isngroup.fr</a>
                </li>
                <li>Du lundi au vendredi</li>
                <li>9h – 18h</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#0d3d72] mt-10 pt-8 text-center text-sm text-blue-200">
            <p>© 2026 ISN Group. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
