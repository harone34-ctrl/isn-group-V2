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
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Services() {
  const mainServices = [
    {
      icon: HeadphonesIcon,
      title: "Pôle Support & Assistance Technique",
      description: "Maintenance, dépannage et gestion de parcs informatiques pour particuliers et professionnels",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMHN1cHBvcnQlMjBwcm9mZXNzaW9uYWwlMjBvZmZpY2V8ZW58MXx8fHwxNzgwMDI5ODIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBkZXNrdG9wfGVufDF8fHx8MTc3OTkyNzc2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              Nos Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ce que nous faisons, nous le faisons bien
            </h1>
            <p className="text-xl text-slate-300">
              ISN Group concentre son expertise sur deux domaines maîtrisés : le support
              informatique de terrain et la conception web professionnelle.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-slate-900">
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
                    <div className="w-16 h-16 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-emerald-400" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-white">{service.title}</h2>
                    <p className="text-xl text-slate-400 mb-6">{service.description}</p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300">{feature}</span>
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
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Interventions Ponctuelles</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Des prestations à la demande
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Pas besoin de contrat à long terme — ISN Group intervient aussi ponctuellement
              selon vos besoins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:border-emerald-500/40 transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-emerald-400" />
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
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Votre besoin ne rentre pas dans une case ?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Chaque situation est différente. Décrivez-moi votre projet ou votre problème —
            je vous reviens rapidement avec une réponse concrète.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-slate-950 text-emerald-400 hover:bg-slate-900">
              Demander un devis personnalisé
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
