import { Link } from "react-router";
import { Button } from "./ui/button";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[600px] flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="text-8xl font-bold text-blue-600 mb-4">404</div>
        <h1 className="text-3xl font-bold mb-4">Page non trouvée</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button>
              <Home className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Button>
          </Link>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Page précédente
          </Button>
        </div>
      </div>
    </div>
  );
}
