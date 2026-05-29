import { Link } from "react-router";
import { Button } from "./ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  HeadphonesIcon,
  Monitor,
  Globe,
  Wrench,
  CheckCircle,
  Zap,
  HandshakeIcon,
  MessageCircle,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Home() {
  const services = [
    {
      icon: Wrench,
      title: "Maintenance & Dépannage",
      description:
        "Diagnostic rapide et résolution de pannes matérielles ou logicielles, sur site ou à distance.",
    },
    {
      icon: Monitor,
      title: "Gestion de Parc Informatique",
      description:
        "Installation, configuration et suivi de vos postes, périphériques et logiciels au quotidien.",
    },
    {
      icon: HeadphonesIcon,
      title: "Assistance Utilisateur",
      description:
        "Accompagnement des utilisateurs face aux problèmes courants, avec pédagogie et réactivité.",
    },
    {
      icon: Globe,
      title: "Conception de Sites Web",
      description:
        "Création de sites vitrines professionnels, modernes et optimisés, livrés clé en main.",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Réactivité",
      description: "Intervention rapide, diagnostic précis, et retour à la normale sans délai inutile.",
    },
    {
      icon: HandshakeIcon,
      title: "Proximité",
      description: "Un interlocuteur unique, disponible et attentif — pas un support anonyme.",
    },
    {
      icon: MessageCircle,
      title: "Transparence",
      description: "Devis clair, tarifs honnêtes et explications sans jargon technique superflu.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMHN1cHBvcnQlMjBwcm9mZXNzaW9uYWwlMjBvZmZpY2V8ZW58MXx8fHwxNzgwMDI5ODIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="IT Support"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Support Informatique & Conception Web
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Un technicien de terrain à votre service
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              ISN Group vous accompagne au quotidien : dépannage, maintenance, gestion de parc
              informatique et création de sites web professionnels — avec fiabilité et transparence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Demander un devis gratuit
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Découvrir nos services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Nos Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Deux pôles d'expertise complémentaires
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Du support informatique de terrain à la création web sur mesure — ISN Group couvre
              l'essentiel de vos besoins numériques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg">Voir tous nos services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Pourquoi choisir ISN Group</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Un partenaire fiable, proche et transparent
              </h2>
              <p className="text-gray-600 mb-8">
                ISN Group, c'est un technicien informatique passionné avec une solide expérience de
                terrain. Pas de promesses creuses, pas de jargon inutile — seulement des solutions
                concrètes et un suivi honnête.
              </p>

              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8">
                <Link to="/about">
                  <Button variant="outline">En savoir plus sur ISN Group</Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc3OTkyNzc2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Technicien informatique au travail"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Notre Approche</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, clair et efficace
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Écoute",
                description: "Prise en compte de votre situation et de vos besoins réels",
              },
              {
                step: "02",
                title: "Diagnostic",
                description: "Analyse précise du problème ou du projet, sans surcoût caché",
              },
              {
                step: "03",
                title: "Intervention",
                description: "Mise en œuvre rapide, sur site ou à distance selon le contexte",
              },
              {
                step: "04",
                title: "Suivi",
                description: "Vérification du résultat et accompagnement dans la durée",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-blue-600/20 mb-4">{item.step}</div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Un problème informatique ? Un projet web ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez ISN Group pour un devis gratuit et sans engagement. Réponse rapide garantie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Demander un devis gratuit
              </Button>
            </Link>
            <a href="tel:+33767804247">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Appelez-nous directement
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
