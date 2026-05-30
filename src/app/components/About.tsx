import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>À propos – Méthodologie Agile &amp; Expertise Terrain | ISN Group</title>
        <meta name="description" content="Découvrez ISN Group : une approche Agile, Itérative et Incrémentale du support informatique. Technicien passionné au service de votre infrastructure et de vos projets numériques." />
        <link rel="canonical" href="https://isn-group-v2.vercel.app/about" />
        <meta property="og:url" content="https://isn-group-v2.vercel.app/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-red-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-red-500/20 text-red-500 border border-red-500/30">
              À propos d'ISN Group
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Un technicien passionné, à votre service
            </h1>
            <p className="text-xl text-neutral-400">
              ISN Group, c'est avant tout une expertise terrain honnête, au service de vos
              besoins informatiques réels.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Notre Mission</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                De la technique au service de vos projets
              </h2>
              <div className="space-y-4 text-neutral-400">
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
                src="/carte-mères-red.jpg"
                alt="Cartes mères et matériel informatique ISN Group"
                className="rounded-lg shadow-xl w-full h-auto opacity-80"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Nos Valeurs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ce qui guide chaque intervention
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:border-red-500/40 transition-all">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-red-500" />
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-white">{value.title}</h3>
                    <p className="text-neutral-400">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Méthodologie</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Une approche Agile, Itérative et Incrémentale
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Chaque intervention suit une méthode éprouvée : avancer par cycles courts,
              ajuster en continu, et apporter de la valeur concrète à chaque étape.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                pillar: "Agile",
                number: "01",
                description:
                  "Priorité au besoin réel du client, adaptabilité face aux imprévus et communication directe à chaque étape. Pas de plan rigide qui ignore la réalité du terrain.",
                detail:
                  "Chaque intervention débute par une écoute active : je m'adapte à votre environnement, vos contraintes et vos priorités — pas l'inverse.",
              },
              {
                pillar: "Itératif",
                number: "02",
                description:
                  "On ne prétend pas tout résoudre d'un seul bloc. On progresse par cycles : chaque itération teste, valide et améliore la solution en place.",
                detail:
                  "En maintenance comme en création web, les retours de chaque cycle nourrissent le suivant. Le résultat final est plus robuste et mieux adapté.",
              },
              {
                pillar: "Incrémental",
                number: "03",
                description:
                  "La solution se construit couche par couche. Chaque incrément apporte une valeur concrète, même avant la livraison finale.",
                detail:
                  "Vous voyez les progrès à chaque étape, vous pouvez réorienter à tout moment, et vous ne payez que ce qui est effectivement livré.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-neutral-800/50 rounded-xl p-8 border border-neutral-700 hover:border-red-500/40 transition-all"
              >
                <div className="text-5xl font-bold text-red-500/20 mb-4">{item.number}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.pillar}</h3>
                <p className="text-neutral-400 mb-4">{item.description}</p>
                <p className="text-neutral-500 text-sm border-t border-neutral-700 pt-4">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <ImageWithFallback
                src="/serveur-cloud.jpg"
                alt="Salle de serveurs infrastructure cloud ISN Group"
                className="rounded-lg shadow-xl w-full h-auto opacity-80"
                loading="lazy"
              />
            </div>

            <div className="order-1 md:order-2">
              <Badge className="mb-4">Mes Engagements</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ce que vous pouvez attendre d'ISN Group
              </h2>
              <p className="text-neutral-400 mb-6">
                Chaque prestation repose sur les mêmes principes : écoute du besoin réel,
                diagnostic honnête, intervention efficace et suivi après livraison.
              </p>

              <div className="grid grid-cols-1 gap-3 mb-8">
                {engagements.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-950 text-white border-t border-neutral-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Parlons de votre projet
          </h2>
          <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
            Que ce soit pour un dépannage urgent, une gestion de parc ou un site web,
            contactez ISN Group pour un premier échange sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 font-semibold">
                Prendre contact
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-neutral-600 text-white hover:bg-neutral-800">
                Voir nos services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
