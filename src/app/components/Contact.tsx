import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    toast.success("Message envoyé !", {
      description: "Je vous répondrai dans les plus brefs délais.",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      details: ["07 67 80 42 47", "Du lundi au vendredi, 9h – 18h"],
      link: "tel:+33767804247",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@isngroup.fr", "Réponse sous 24h ouvrées"],
      link: "mailto:contact@isngroup.fr",
    },
    {
      icon: MapPin,
      title: "Zone d'intervention",
      details: ["Déplacement sur site", "Assistance à distance disponible"],
      link: null,
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Lundi – Vendredi : 9h – 18h", "Urgences : me contacter directement"],
      link: null,
    },
  ];

  const benefits = [
    "Devis gratuit et sans engagement",
    "Réponse sous 24h ouvrées",
    "Intervention sur site ou à distance",
    "Tarifs transparents, sans surprise",
  ];

  return (
    <div>
      <Helmet>
        <title>Contact &amp; Devis Gratuit – ISN Group</title>
        <meta name="description" content="Contactez ISN Group pour un devis gratuit et sans engagement. Support informatique, infogérance MSP, maintenance d'infrastructure. Réponse sous 24h ouvrées." />
        <link rel="canonical" href="https://isn-group-v2.vercel.app/contact" />
        <meta property="og:url" content="https://isn-group-v2.vercel.app/contact" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-red-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-red-500/20 text-red-500 border border-red-500/30">
              Contact
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Un besoin ? Parlons-en.
            </h1>
            <p className="text-xl text-neutral-400">
              Décrivez votre situation — panne, projet web ou gestion de parc — et je vous
              reviens rapidement avec une réponse concrète.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6 text-white">Coordonnées</h2>
              <p className="text-neutral-400 mb-8">
                Remplissez le formulaire ou contactez-moi directement — je suis disponible
                du lundi au vendredi.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-red-500" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1 text-white">{info.title}</div>
                        {info.details.map((detail, idx) => (
                          <div key={idx} className="text-sm text-neutral-400">{detail}</div>
                        ))}
                      </div>
                    </div>
                  );

                  return info.link ? (
                    <a
                      key={index}
                      href={info.link}
                      className="block hover:opacity-75 transition-opacity"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>

              <Card className="border-red-900 bg-red-950/40">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Ce que vous obtenez</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-400">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Demander un devis</CardTitle>
                  <CardDescription>
                    Tous les champs marqués d'un * sont obligatoires
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input
                          id="firstName"
                          placeholder="Jean"
                          value={formData.firstName}
                          onChange={(e) => handleChange("firstName", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom *</Label>
                        <Input
                          id="lastName"
                          placeholder="Dupont"
                          value={formData.lastName}
                          onChange={(e) => handleChange("lastName", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="jean.dupont@exemple.fr"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+33 6 12 34 56 78"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">
                        Entreprise / Organisation{" "}
                        <span className="text-neutral-500 font-normal">(facultatif)</span>
                      </Label>
                      <Input
                        id="company"
                        placeholder="Nom de votre entreprise ou organisme"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Besoin principal *</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => handleChange("service", value)}
                        required
                      >
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Sélectionnez un service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="depannage">Dépannage informatique</SelectItem>
                          <SelectItem value="maintenance">Maintenance & Entretien</SelectItem>
                          <SelectItem value="parc">Gestion de parc informatique</SelectItem>
                          <SelectItem value="assistance">Assistance utilisateur</SelectItem>
                          <SelectItem value="site-web">Création de site web vitrine</SelectItem>
                          <SelectItem value="refonte">Refonte de site existant</SelectItem>
                          <SelectItem value="other">Autre / Je ne sais pas encore</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Décrivez votre situation *</Label>
                      <Textarea
                        id="message"
                        placeholder="Expliquez votre problème ou votre projet en quelques lignes..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        required
                      />
                    </div>

                    <div className="flex items-start gap-2 text-sm text-neutral-400">
                      <CheckCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <p>
                        En soumettant ce formulaire, vous acceptez d'être recontacté par ISN Group
                        concernant votre demande. Vos données ne sont pas transmises à des tiers.
                      </p>
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      Envoyer ma demande
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Questions fréquentes
            </h2>
          </div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              {
                question: "Quel est le délai de réponse ?",
                answer: "Je réponds à toutes les demandes sous 24h ouvrées. Pour les urgences, contactez-moi directement par téléphone.",
              },
              {
                question: "Intervenez-vous sur site ?",
                answer: "Oui, je me déplace sur site pour les interventions qui le nécessitent. L'assistance à distance est également disponible pour les dépannages rapides.",
              },
              {
                question: "Travaillez-vous avec des particuliers ?",
                answer: "Oui, ISN Group accompagne aussi bien les particuliers que les professionnels, TPE et petites associations.",
              },
              {
                question: "Le devis est-il vraiment gratuit ?",
                answer: "Oui, le devis initial est entièrement gratuit et sans engagement. Je prends le temps de comprendre votre besoin avant de chiffrer.",
              },
            ].map((faq, index) => (
              <Card key={index} className="hover:border-red-500/30 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-400">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
