import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calendar,
  Heart,
  Shield,
  Award,
  Users,
  Star,
  CheckCircle,
  Globe,
  Stethoscope,
  Target,
  Eye,
  Lightbulb,
  Handshake,
  TrendingUp,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function About() {
  const achievements = [
    {
      icon: Award,
      title: "15+ Years of Excellence",
      description:
        "Serving Kenya with world-class aesthetic surgery since 2009",
      color: "text-medical-gold",
      bgColor: "bg-yellow-100",
    },
    {
      icon: Users,
      title: "500+ Transformations",
      description: "Successfully performed procedures with natural results",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Star,
      title: "4.9/5 Patient Rating",
      description: "Consistently rated as Kenya's top aesthetic surgery center",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Shield,
      title: "Board Certified Surgeons",
      description: "All surgeons certified by international medical boards",
      color: "text-medical-purple",
      bgColor: "bg-purple-100",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description:
        "Your comfort, safety, and satisfaction are our highest priorities. We listen to your goals and create personalized treatment plans.",
    },
    {
      icon: Shield,
      title: "Safety & Excellence",
      description:
        "We maintain the highest safety standards with state-of-the-art facilities, advanced techniques, and rigorous protocols.",
    },
    {
      icon: CheckCircle,
      title: "Natural Results",
      description:
        "Our goal is to enhance your natural beauty while maintaining harmony and authenticity in every transformation.",
    },
    {
      icon: Handshake,
      title: "Integrity & Trust",
      description:
        "We build lasting relationships through honest communication, transparent pricing, and ethical medical practices.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We continuously adopt the latest technologies and techniques to provide you with the most advanced care available.",
    },
    {
      icon: Globe,
      title: "Accessibility",
      description:
        "Making world-class aesthetic surgery accessible to everyone through flexible financing and comprehensive care packages.",
    },
  ];

  const milestones = [
    {
      year: "2009",
      title: "Foundation",
      description:
        "Tres Beau Medical Group was established with a vision to bring world-class aesthetic surgery to Kenya.",
    },
    {
      year: "2012",
      title: "Facility Expansion",
      description:
        "Opened our state-of-the-art surgical facility in Westlands, Nairobi with advanced technology.",
    },
    {
      year: "2015",
      title: "International Recognition",
      description:
        "Received accreditation from the International Society of Aesthetic Plastic Surgery (ISAPS).",
    },
    {
      year: "2018",
      title: "1,000 Procedures Milestone",
      description:
        "Celebrated performing over 1,000 successful aesthetic procedures with outstanding patient satisfaction.",
    },
    {
      year: "2021",
      title: "Digital Innovation",
      description:
        "Launched virtual consultations and advanced 3D imaging technology for better patient experience.",
    },
    {
      year: "2025",
      title: "Excellence Award",
      description:
        "Named 'Best Aesthetic Surgery Center in East Africa' by the African Medical Excellence Awards.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-medical-gold/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-medical-purple/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center mb-6 px-6 py-3 bg-gradient-to-r from-medical-gold/20 to-yellow-400/20 border border-medical-gold/30 rounded-full backdrop-blur-sm">
                <span className="text-2xl mr-3">🏆</span>
                <span className="text-medical-gold font-semibold">
                  Kenya's Premier Aesthetic Surgery Center
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="text-white">About</span>
                <br />
                <span className="bg-gradient-to-r from-medical-gold via-yellow-400 to-medical-gold bg-clip-text text-transparent animate-gradient">
                  Tres Beau
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Where artistry meets medicine. For over 15 years, we've been
                transforming lives through world-class aesthetic surgery,
                combining cutting-edge techniques with compassionate care.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-medical-gold to-yellow-500 hover:from-yellow-500 hover:to-medical-gold text-black font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full transition-all duration-300"
                >
                  <Users className="h-5 w-5 mr-2" />
                  Meet Our Team
                </Button>
              </div>
            </div>

            {/* Right Content - Achievements Grid */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-medical-gold/40 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div
                    className={`w-12 h-12 ${achievement.bgColor} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <achievement.icon
                      className={`h-6 w-6 ${achievement.color}`}
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-32 bg-gradient-to-b from-white via-purple-50/30 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Story Content */}
            <div>
              <div className="inline-flex items-center mb-6 px-6 py-3 bg-gradient-to-r from-medical-purple/10 to-purple-100/50 border border-medical-purple/20 rounded-full">
                <span className="text-2xl mr-3">📖</span>
                <span className="text-medical-purple font-semibold">
                  Our Story
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Transforming Lives Through
                <span className="bg-gradient-to-r from-medical-purple via-purple-600 to-medical-purple bg-clip-text text-transparent block">
                  Expert Care
                </span>
              </h2>

              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Founded in 2009 by Dr. Maria Santos, Tres Beau Medical Group
                  began with a simple yet powerful vision: to make world-class
                  aesthetic surgery accessible to everyone in Kenya and East
                  Africa.
                </p>
                <p>
                  What started as a small practice has grown into Kenya's most
                  trusted aesthetic surgery center, known for combining
                  international expertise with personalized, compassionate care.
                </p>
                <p>
                  Today, we've performed over 2,500 successful procedures,
                  helping patients not just look better, but feel more confident
                  and empowered in their daily lives. Our team of
                  board-certified surgeons continues to set the standard for
                  excellence in aesthetic medicine across East Africa.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-medical-purple">
                    15+
                  </div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-medical-gold">
                    2,500+
                  </div>
                  <div className="text-sm text-slate-600">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">98%</div>
                  <div className="text-sm text-slate-600">
                    Satisfaction Rate
                  </div>
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-medical-purple/20 to-medical-gold/20 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <Stethoscope className="h-24 w-24 text-medical-purple mx-auto mb-4" />
                  <p className="text-slate-600 text-lg font-medium">
                    Our Beautiful Facility
                  </p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-medical-gold to-yellow-400 p-4 rounded-2xl shadow-xl">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-400 to-green-600 p-4 rounded-2xl shadow-xl">
                <Heart className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Mission &
              <span className="bg-gradient-to-r from-medical-gold via-yellow-400 to-medical-gold bg-clip-text text-transparent block">
                Vision
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Guiding principles that drive everything we do at Tres Beau
              Medical Group
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-medical-gold to-yellow-400 rounded-2xl flex items-center justify-center mr-4">
                  <Target className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-3xl font-bold">Our Mission</h3>
              </div>
              <p className="text-gray-200 text-lg leading-relaxed">
                To provide world-class aesthetic surgery and cosmetic procedures
                with the highest standards of safety, care, and artistry. We are
                committed to enhancing natural beauty while building confidence
                and improving quality of life for every patient we serve.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-medical-purple to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold">Our Vision</h3>
              </div>
              <p className="text-gray-200 text-lg leading-relaxed">
                To be the leading aesthetic surgery center in East Africa,
                recognized globally for excellence in patient care, surgical
                outcomes, and innovation. We envision a future where everyone
                has access to transformative aesthetic procedures that celebrate
                their unique beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-gradient-to-b from-white via-purple-50/30 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center mb-6 px-6 py-3 bg-gradient-to-r from-medical-purple/10 to-purple-100/50 border border-medical-purple/20 rounded-full">
              <span className="text-2xl mr-3">💎</span>
              <span className="text-medical-purple font-semibold">
                Our Core Values
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              What We
              <span className="bg-gradient-to-r from-medical-purple via-purple-600 to-medical-purple bg-clip-text text-transparent block">
                Stand For
              </span>
            </h2>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These values guide every decision we make and every interaction we
              have with our patients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-medical-purple/10 to-purple-100/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                    <value.icon className="h-8 w-8 text-medical-purple" />
                  </div>
                  <CardTitle className="text-xl text-slate-900 group-hover:text-medical-purple transition-colors">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed text-center">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center mb-6 px-6 py-3 bg-gradient-to-r from-medical-gold/20 to-yellow-100/50 border border-medical-gold/30 rounded-full">
              <span className="text-2xl mr-3">🗓️</span>
              <span className="text-medical-gold font-semibold">
                Our Journey
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Milestones &
              <span className="bg-gradient-to-r from-medical-gold via-yellow-500 to-medical-gold bg-clip-text text-transparent block">
                Achievements
              </span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-medical-purple via-medical-gold to-medical-purple"></div>

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}
                  >
                    <Card className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-medical-purple to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                            {milestone.year.slice(-2)}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-slate-900">
                              {milestone.title}
                            </h3>
                            <p className="text-medical-purple font-semibold">
                              {milestone.year}
                            </p>
                          </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Center Circle */}
                  <div className="w-6 h-6 bg-gradient-to-r from-medical-gold to-yellow-400 rounded-full border-4 border-white shadow-lg z-10"></div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-gradient-to-r from-medical-purple via-purple-600 to-medical-purple text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Begin Your
            <span className="bg-gradient-to-r from-medical-gold via-yellow-400 to-medical-gold bg-clip-text text-transparent block">
              Transformation?
            </span>
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto">
            Join thousands of satisfied patients who trusted us with their
            aesthetic journey. Schedule your consultation today and discover
            what makes Tres Beau special.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-medical-gold to-yellow-500 hover:from-yellow-500 hover:to-medical-gold text-black font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-medical-gold/25 transition-all duration-500 transform hover:scale-105"
            >
              <Calendar className="h-6 w-6 mr-3" />
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-medical-purple px-12 py-6 text-lg rounded-full transition-all duration-300"
            >
              <Phone className="h-6 w-6 mr-3" />
              Call Us Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Live Chat */}
      <LiveChat />
    </div>
  );
}
