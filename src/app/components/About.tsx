import { Link } from "react-router";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle, Target, Shield, HandshakeIcon, Zap } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Shield,
      title: "Fiabilité",
      description:
        "Des interventions soignées, un suivi rigoureux et des solutions durables — pour que votre informatique tienne dans le temps.",
    },
    {
      icon: HandshakeIcon,
      title: "Proximité",
      description:
        "Un interlocuteur unique, disponible et à l'écoute. Vous savez toujours qui vous appelle et pourquoi.",
    },
    {
      icon: Zap,
      title: "Réactivité",
      description:
        "Délais d'intervention courts, communication claire à chaque étape, retour à la normale sans traîner.",
    },
    {
      icon: Target,
      title: "Transparence",
      description:
        "Devis détaillés, tarifs honnêtes et explications compréhensibles — sans jargon et sans mauvaises surprises.",
    },
  ];

  const engagements = [
    "Intervention sur site et à distance",
    "Diagnostic précis avant toute intervention",
    "Conseil impartial, sans vente forcée",
    "Suivi personnalisé de votre parc informatique",
    "Sites web livrés clé en main",
    "Accompagnement et formation à la prise en main",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              À propos d'ISN Group
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Un technicien passionné, à votre service
            </h1>
            <p className="text-xl text-blue-100">
              ISN Group, c'est avant tout une expertise terrain honnête, au service de vos
              besoins informatiques réels.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Notre Mission</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                De la technique au service de vos projets
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  ISN Group est fondé sur une conviction simple : l'informatique doit rester
                  accessible, compréhensible et fiable. Que vous soyez un professionnel en quête
                  d'un parc stable, ou un entrepreneur qui a besoin d'une présence web sérieuse,
                  j'apporte des réponses concrètes à vos problèmes concrets.
                </p>
                <p>
                  Mon parcours est avant tout un parcours de terrain. J'ai appris à diagnostiquer,
                  à réparer, à conseiller et à livrer — avec rigueur et sans détour. Cette
                  expérience, c'est ce que vous retrouvez dans chaque intervention.
                </p>
                <p>
                  Chez ISN Group, on ne survend pas. On ne promet pas l'impossible. On s'engage
                  sur ce qu'on maîtrise, et on le fait bien.
                </p>
              </div>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc3OTkyNzc2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Technicien au travail"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Nos Valeurs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ce qui guide chaque intervention
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1691435828932-911a7801adfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjByb29tJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Nzk5NTAyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Matériel informatique"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>

            <div className="order-1 md:order-2">
              <Badge className="mb-4">Mes Engagements</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ce que vous pouvez attendre d'ISN Group
              </h2>
              <p className="text-gray-700 mb-6">
                Chaque prestation repose sur les mêmes principes : écoute du besoin réel,
                diagnostic honnête, intervention efficace et suivi après livraison.
              </p>

              <div className="grid grid-cols-1 gap-3 mb-8">
                {engagements.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Parlons de votre projet
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Que ce soit pour un dépannage urgent, une gestion de parc ou un site web,
            contactez ISN Group pour un premier échange sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Prendre contact
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Voir nos services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
