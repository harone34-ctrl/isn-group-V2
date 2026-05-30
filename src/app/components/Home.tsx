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
      <Helmet>
        <title>ISN Group – Support Informatique, Infogérance MSP &amp; Architecture Matérielle</title>
        <meta name="description" content="Innovative Systems &amp; Networks – Support informatique, infogérance MSP, architecture matérielle haute performance et maintenance d'infrastructure pour entreprises et professionnels." />
        <link rel="canonical" href="https://isn-group-v2.vercel.app/" />
        <meta property="og:url" content="https://isn-group-v2.vercel.app/" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-[#030712] text-amber-400">
        <div className="absolute inset-0 overflow-hidden">
          <ImageWithFallback
            src="/Serveur-informatique-1.png"
            alt="Technicien support informatique ISN Group"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[#030712]/65" />
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-amber-500/20 text-amber-300 border border-amber-500/40">
              Support Informatique & Conception Web
            </Badge>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
              Innovative Systems &amp; Networks
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Un technicien de terrain à votre service
            </h1>
            <p className="text-xl mb-8 text-slate-300">
              ISN Group vous accompagne au quotidien : dépannage, maintenance, gestion de parc
              informatique et création de sites web professionnels — avec fiabilité et transparence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-amber-500 text-[#030712] hover:bg-amber-400 font-semibold">
                  Demander un devis gratuit
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-amber-500/50 text-amber-300 hover:bg-amber-500/10">
                  Découvrir nos services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#030712]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Nos Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-400">
              Deux pôles d'expertise complémentaires
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Du support informatique de terrain à la création web sur mesure — ISN Group couvre
              l'essentiel de vos besoins numériques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="bg-[#0b132b] hover:border-amber-500/40 transition-all hover:shadow-[#0a4d92]/5 hover:shadow-lg">
                  <CardHeader>
                    <div className="w-16 h-16 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="h-10 w-10 text-amber-500" />
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
      <section className="py-20 bg-[#0b132b]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Pourquoi choisir ISN Group</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-400">
                Un partenaire fiable, proche et transparent
              </h2>
              <p className="text-slate-300 mb-8">
                ISN Group, c'est un technicien informatique passionné avec une solide expérience de
                terrain. Pas de promesses creuses, pas de jargon inutile — seulement des solutions
                concrètes et un suivi honnête.
              </p>

              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-amber-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-amber-400">{benefit.title}</h3>
                        <p className="text-slate-300">{benefit.description}</p>
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
                src="/support-IT.jpg"
                alt="Technicien informatique au travail"
                className="rounded-lg shadow-xl w-full h-auto opacity-80"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#030712]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Notre Approche</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-400">
              Simple, clair et efficace
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Écoute", description: "Prise en compte de votre situation et de vos besoins réels" },
              { step: "02", title: "Diagnostic", description: "Analyse précise du problème ou du projet, sans surcoût caché" },
              { step: "03", title: "Intervention", description: "Mise en œuvre rapide, sur site ou à distance selon le contexte" },
              { step: "04", title: "Suivi", description: "Vérification du résultat et accompagnement dans la durée" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-amber-500/20 mb-4">{item.step}</div>
                <h3 className="font-semibold text-xl mb-2 text-amber-400">{item.title}</h3>
                <p className="text-lg text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1e293b] to-[#030712] text-white border-t border-amber-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Un problème informatique ? Un projet web ?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Contactez ISN Group pour un devis gratuit et sans engagement. Réponse rapide garantie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-amber-500 text-[#030712] hover:bg-amber-400 font-semibold">
                Demander un devis gratuit
              </Button>
            </Link>
            <a href="tel:+33767804247">
              <Button size="lg" variant="outline" className="border-amber-500/50 text-amber-300 hover:bg-amber-500/10">
                Appelez-nous directement
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
