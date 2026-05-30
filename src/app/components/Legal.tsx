import { Helmet } from "react-helmet-async";

export function Legal() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-400">
      <Helmet>
        <title>Mentions légales &amp; Confidentialité | ISN Group</title>
        <meta name="description" content="Mentions légales, politique de confidentialité et informations sur l'hébergement du site ISN Group." />
        <link rel="canonical" href="https://isn-group-v2.vercel.app/legal" />
        <meta property="og:url" content="https://isn-group-v2.vercel.app/legal" />
      </Helmet>
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-3xl font-bold text-white mb-12">Informations légales</h1>

        {/* Mentions légales */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-red-500 mb-6 pb-2 border-b border-neutral-800">
            Mentions légales
          </h2>
          <div className="space-y-4 text-sm leading-relaxed">
            <div>
              <h3 className="font-semibold text-white mb-1">Éditeur du site</h3>
              <p>ISN Group</p>
              <p>Statut : Micro-entreprise</p>
              <p>Responsable de publication : Boulfekhar Harone</p>
              <p>
                Contact :{" "}
                <a href="mailto:contact@isngroup.fr" className="text-red-500 hover:underline">
                  contact@isngroup.fr
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Hébergement</h3>
              <p>Ce site est hébergé par Vercel Inc.</p>
              <p>340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</p>
              <p>Site : vercel.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Propriété intellectuelle</h3>
              <p>
                L'ensemble du contenu de ce site (textes, visuels, structure) est la propriété
                exclusive d'ISN Group. Toute reproduction ou utilisation sans autorisation préalable
                est interdite.
              </p>
            </div>
          </div>
        </section>

        {/* Politique de confidentialité */}
        <section>
          <h2 className="text-xl font-semibold text-red-500 mb-6 pb-2 border-b border-neutral-800">
            Politique de confidentialité
          </h2>
          <div className="space-y-4 text-sm leading-relaxed">
            <div>
              <h3 className="font-semibold text-white mb-1">Données collectées</h3>
              <p>
                Ce site ne collecte aucune donnée personnelle sans votre consentement explicite.
                Les seules informations transmises sont celles que vous saisissez volontairement
                dans le formulaire de contact (nom, email, message).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Cookies</h3>
              <p>
                Ce site n'utilise aucun cookie traceur, cookie publicitaire ou outil d'analyse
                comportementale. Aucune donnée de navigation n'est transmise à des tiers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Vos droits</h3>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous
                disposez d'un droit d'accès, de rectification et de suppression de vos données.
                Pour exercer ces droits, contactez-nous à{" "}
                <a href="mailto:contact@isngroup.fr" className="text-red-500 hover:underline">
                  contact@isngroup.fr
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
