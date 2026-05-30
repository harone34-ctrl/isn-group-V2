import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import { Button } from "./ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  HeadphonesIcon,
  Monitor,
  Globe,
  Wrench,
  Settings,
  LayoutTemplate,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Thermometer,
  HardDrive,
  Activity,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Services() {
  const mainServices = [
    {
      icon: HeadphonesIcon,
      title: "Pôle Support & Assistance Technique",
      description: "Maintenance, dépannage et gestion de parcs informatiques pour particuliers et professionnels",
      image: "/materiel-services-2.jpg",
      features: [
        "Maintenance préventive et curative du matériel",
        "Dépannage informatique sur site ou à distance",
        "Assistance et accompagnement des utilisateurs",
        "Installation et configuration de postes, périphériques et logiciels",
        "Gestion et optimisation de parcs informatiques",
        "Mise à jour des systèmes et applications",
      ],
    },
    {
      icon: Globe,
      title: "Pôle Conception Web",
      description: "Création de sites vitrines professionnels, modernes et sur mesure",
      image: "/conception-web.jpg",
      features: [
        "Création de sites vitrines professionnels sur mesure",
        "Design moderne, responsive et adapté à tous les écrans",
        "Optimisation des performances et du référencement (SEO)",
        "Intégration de formulaires de contact et d'outils de communication",
        "Livraison clé en main avec formation à la prise en main",
        "Maintenance et mises à jour du site après livraison",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Wrench,
      title: "Dépannage urgent",
      description: "Intervention prioritaire pour les pannes bloquantes, sur site ou à distance",
    },
    {
      icon: Monitor,
      title: "Déploiement de postes",
      description: "Installation et configuration de nouveaux équipements et postes de travail",
    },
    {
      icon: Settings,
      title: "Optimisation système",
      description: "Nettoyage, accélération et remise en état de machines lentes ou instables",
    },
    {
      icon: LayoutTemplate,
      title: "Refonte de site existant",
      description: "Modernisation ou migration d'un site web vieillissant vers une version actuelle",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Nos Services – Maintenance, MSP &amp; Assemblage Haute Performance | ISN Group</title>
        <meta name="description" content="Pôle support technique et conception web : maintenance préventive, infogérance MSP, assemblage et validation de configurations haute performance (MemTest86, Prime95, FurMark)." />
        <link rel="canonical" href="https://isn-group-v2.vercel.app/services" />
        <meta property="og:url" content="https://isn-group-v2.vercel.app/services" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-red-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-red-500/20 text-red-400 border border-red-500/30">
              Nos Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ce que nous faisons, nous le faisons bien
            </h1>
            <p className="text-xl text-neutral-300">
              ISN Group concentre son expertise sur deux domaines maîtrisés : le support
              informatique de terrain et la conception web professionnelle.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-12 items-center ${!isEven ? "md:grid-flow-dense" : ""}`}
                >
                  <div className={isEven ? "" : "md:col-start-2"}>
                    <div className="w-16 h-16 bg-red-500/10 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-red-400" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-white">{service.title}</h2>
                    <p className="text-xl text-neutral-400 mb-6">{service.description}</p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/contact">
                      <Button>
                        Demander un devis
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>

                  <div className={isEven ? "md:col-start-2" : "md:col-start-1 md:row-start-1"}>
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-xl w-full h-auto opacity-80"
                      loading="lazy"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* High Performance Hardware Section */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <Badge className="mb-4 bg-red-500/20 text-red-400 border border-red-500/30">
                Haute Performance
              </Badge>
              <h2 className="text-3xl font-bold mb-4 text-white">
                Assemblage &amp; Tests de Configurations Haute Performance
              </h2>
              <p className="text-xl text-neutral-400 mb-6">
                Conception sur mesure de postes de travail et de serveurs hautes performances,
                validés par des protocoles de stress-test industriels avant livraison.
              </p>
              <p className="text-neutral-300 mb-8">
                Chaque machine assemblée est soumise à une batterie de tests rigoureux pour
                garantir la stabilité à long terme. Aucune configuration ne quitte l'atelier
                sans avoir passé le protocole complet.
              </p>

              <div className="space-y-4">
                {[
                  {
                    name: "MemTest86",
                    desc: "Test exhaustif de la mémoire RAM — détection des erreurs de bit, instabilités de timing et défauts de bus mémoire.",
                  },
                  {
                    name: "Prime95",
                    desc: "Stress-test CPU en précision étendue — valide la stabilité du processeur, du refroidissement et de l'alimentation sous charge maximale.",
                  },
                  {
                    name: "FurMark",
                    desc: "Burn-in GPU en conditions extrêmes — contrôle de la dissipation thermique, des artefacts visuels et de la stabilité du driver graphique.",
                  },
                ].map((proto, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 bg-neutral-800/50 rounded-lg border border-neutral-700 hover:border-red-500/40 transition-all"
                  >
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-mono font-bold text-red-400">{proto.name}</span>
                      <p className="text-neutral-400 text-sm mt-1">{proto.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-800/30 rounded-xl p-8 border border-neutral-700">
              <h3 className="text-xl font-bold text-white mb-6">
                Protocole de validation avant livraison
              </h3>
              <div className="space-y-3">
                {[
                  "Montage et câblage soigné (gestion des flux d'air)",
                  "Configuration BIOS & activation XMP / EXPO",
                  "Installation et mise à jour complète du système",
                  "MemTest86 — 2 passes minimum sans erreur",
                  "Prime95 — 30 min Blend Test (CPU + RAM)",
                  "FurMark — 15 min burn-in GPU",
                  "Monitoring thermique sous charge (HWiNFO64)",
                  "Rapport de test remis avec la machine",
                ].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-400 text-xs font-bold">{idx + 1}</span>
                    </div>
                    <span className="text-neutral-300 text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Éco-efficience & Maintenance Préventive */}
      <section className="py-20 bg-gradient-to-br from-neutral-900 via-neutral-900 to-red-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4 bg-amber-500/20 text-amber-400 border border-amber-500/30">
              Éco-efficience &amp; Maintenance Préventive
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Maîtrise des coûts &amp; Survie de votre matériel face à la crise des composants
            </h2>
            <p className="text-neutral-400 text-lg">
              Quand racheter du matériel devient hors de prix, prolonger la durée de vie de l'existant
              n'est plus une option — c'est une stratégie.
            </p>
          </div>

          {/* Constat économique */}
          <div className="max-w-4xl mx-auto mb-14 p-6 bg-amber-950/25 border border-amber-500/25 rounded-xl">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-amber-400 mb-2">Contexte économique 2024–2026</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Samsung, SK Hynix et Micron ont massivement réorienté leurs chaînes de production
                  vers la mémoire HBM destinée aux puces IA (H100, MI300X…). Cette rareté artificielle
                  sur le marché grand public et professionnel a fait flamber les prix des{" "}
                  <span className="text-white font-medium">DDR5 de 40 à 60 %</span> et des{" "}
                  <span className="text-white font-medium">SSD NVMe de 50 à 80 %</span> en deux ans.
                  Renouveler un parc informatique au prix actuel n'est tout simplement plus viable pour
                  la majorité des PME.{" "}
                  <strong className="text-amber-300">
                    Votre matériel existant est un capital — ISN Group vous aide à le défendre.
                  </strong>
                </p>
              </div>
            </div>
          </div>

          {/* Trois solutions de terrain */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Thermique */}
            <div className="p-6 bg-neutral-800/50 rounded-xl border border-neutral-700 hover:border-red-500/40 transition-all flex flex-col">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                <Thermometer className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="font-bold text-white text-lg mb-2">Optimisation thermique chirurgicale</h3>
              <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                Un composant qui dépasse régulièrement 90 °C vieillit 3× plus vite. La chaleur est
                le principal accélérateur de dégradation des semi-conducteurs.
              </p>
              <ul className="space-y-2.5 mt-auto">
                {[
                  "Remplacement de pâte thermique haute performance",
                  "Nettoyage des radiateurs et optimisation des flux d'air",
                  "Profils de ventilation calibrés sous charge réelle (HWiNFO64)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-300">
                    <CheckCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SSD */}
            <div className="p-6 bg-neutral-800/50 rounded-xl border border-neutral-700 hover:border-red-500/40 transition-all flex flex-col">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                <HardDrive className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="font-bold text-white text-lg mb-2">Prolongation de la durée de vie des SSD</h3>
              <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                Avec les SSD NVMe à des prix historiquement hauts, chaque TBW (Terabytes Written) compte.
                Nous configurons votre système pour minimiser l'usure inutile.
              </p>
              <ul className="space-y-2.5 mt-auto">
                {[
                  "Activation et vérification du TRIM",
                  "Réduction des cycles d'écriture inutiles (swap, logs, fichiers temporaires)",
                  "Monitoring S.M.A.R.T. — anticiper la défaillance avant toute perte de données",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-300">
                    <CheckCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Audit stabilité */}
            <div className="p-6 bg-neutral-800/50 rounded-xl border border-neutral-700 hover:border-red-500/40 transition-all flex flex-col">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="font-bold text-white text-lg mb-2">Audit de stabilité électrique &amp; matériel</h3>
              <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                Nos protocoles industriels identifient les composants en fin de vie avant qu'ils ne
                provoquent une panne catastrophique — et la facture de remplacement qui va avec.
              </p>
              <ul className="space-y-2.5 mt-auto">
                {[
                  { tool: "MemTest86", desc: "Détection des erreurs RAM avant corruption de données" },
                  { tool: "Prime95", desc: "Validation de la stabilité CPU + alimentation sous charge max" },
                  { tool: "FurMark", desc: "Burn-in GPU — anticiper les défaillances graphiques" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-300">
                    <span className="font-mono text-xs text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5">
                      {item.tool}
                    </span>
                    <span>{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button>
                Protéger mon parc informatique
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Interventions Ponctuelles</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Des prestations à la demande
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Pas besoin de contrat à long terme — ISN Group intervient aussi ponctuellement
              selon vos besoins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:border-red-500/40 transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-red-400" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-950 text-white border-t border-neutral-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Votre besoin ne rentre pas dans une case ?
          </h2>
          <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
            Chaque situation est différente. Décrivez-moi votre projet ou votre problème —
            je vous reviens rapidement avec une réponse concrète.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-red-600 text-white hover:bg-red-500 font-semibold">
              Demander un devis personnalisé
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
