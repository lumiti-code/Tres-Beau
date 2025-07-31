import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import EnquiryModal from "@/components/EnquiryModal";
import LiveChat from "@/components/LiveChat";
import {
  Calendar,
  Phone,
  Star,
  Shield,
  Award,
  Users,
  Heart,
  ArrowRight,
  CheckCircle,
  Play,
  Quote,
  MessageSquare,
  Video,
} from "lucide-react";
import CustomHospitalSlider from "@/components/ImageSwipe.tsx";

const services = [
  {
    title: "Rhinoplasty",
    description: "Enhance facial harmony with expert nose reshaping surgery.",
    image: "🎭",
    price: "Starting at KSH8,500",
  },
  {
    title: "Liposuction",
    description: "Remove stubborn fat for a more contoured silhouette.",
    image: "💃",
    price: "Starting at KSH3,500",
  },
  {
    title: "Breast Augmentation",
    description:
      "Achieve natural-looking results with personalized enhancement.",
    image: "🌸",
    price: "Starting at KSH7,200",
  },
  {
    title: "Facelift",
    description: "Turn back time with advanced facial rejuvenation techniques.",
    image: "✨",
    price: "Starting at KSH12,000",
  },
  {
    title: "Tummy Tuck",
    description: "Restore abdominal contours for a flatter, firmer appearance.",
    image: "🏃‍♀️",
    price: "Starting at KSH9,800",
  },
  {
    title: "Brazilian Butt Lift",
    description: "Enhance curves naturally using your own fat transfer.",
    image: "🍑",
    price: "Starting at KSH8,900",
  },
];

const doctors = [
  {
    name: "Dr. Maria Santos",
    specialty: "Facial Plastic Surgery",
    experience: "15+ years",
    image: "👩‍⚕️",
    rating: 4.9,
  },
  {
    name: "Dr. James Wilson",
    specialty: "Body Contouring",
    experience: "12+ years",
    image: "👨‍⚕️",
    rating: 4.8,
  },
  {
    name: "Dr. Sarah Chen",
    specialty: "Breast Surgery",
    experience: "10+ years",
    image: "👩‍⚕️",
    rating: 4.9,
  },
];

const testimonials = [
  {
    name: "Emily Rodriguez",
    procedure: "Rhinoplasty",
    rating: 5,
    text: "Dr. Santos transformed my confidence completely. The results exceeded my expectations and the recovery was smoother than I imagined.",
    image: "😊",
  },
  {
    name: "Michael Thompson",
    procedure: "Liposuction",
    rating: 5,
    text: "Professional, caring, and amazing results. The team at Tres Beau made me feel comfortable throughout the entire process.",
    image: "😄",
  },
  {
    name: "Jessica Park",
    procedure: "Breast Augmentation",
    rating: 5,
    text: "Natural-looking results that perfectly match my body. I couldn't be happier with my decision to choose Tres Beau.",
    image: "🥰",
  },
];

export default function Index() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [consultationType, setConsultationType] = useState<
    "in-person" | "video" | null
  >(null);

  const handleBookConsultation = (type: "in-person" | "video") => {
    setConsultationType(type);
    setIsBookingModalOpen(true);
  };
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Completely Redesigned */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-medical-gold/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-medical-purple/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-medical-purple/5 to-medical-gold/5 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-medical-gold/30 transform rotate-45 animate-bounce delay-500"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-medical-purple/20 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-medical-gold/40 transform rotate-45 animate-bounce delay-1500"></div>
          <div className="absolute bottom-20 right-40 w-5 h-5 bg-medical-purple/30 rounded-full animate-bounce delay-2000"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Award Badge with Animation */}
              <div className="inline-flex items-center mb-8 px-6 py-3 bg-gradient-to-r from-medical-gold/20 to-yellow-400/20 border border-medical-gold/30 rounded-full backdrop-blur-sm animate-fade-in">
                <span className="text-2xl mr-3">🏆</span>
                <span className="text-medical-gold font-semibold">
                  Kenya's Premier Aesthetic Surgery Center
                </span>
              </div>

              {/* Main Headline with Gradient Text */}
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 animate-slide-up">
                <span className="text-white">Discover Your</span>
                <br />
                <span className="bg-gradient-to-r from-medical-gold via-yellow-400 to-medical-gold bg-clip-text text-transparent animate-gradient">
                  True Beauty
                </span>
                <br />
                <span className="text-white">Potential</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl animate-slide-up delay-300">
                Where artistry meets medicine. Experience world-class cosmetic
                surgery with natural results that enhance your confidence and
                celebrate your unique beauty.
              </p>

              {/* Enhanced CTA Options - Three Distinct Choices */}
              <div className="space-y-6 mb-12 animate-slide-up delay-500">
                {/* Free Enquiry - No Payment Required */}
                <div className="text-center">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-500 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-500 transform hover:scale-105"
                    onClick={() => setIsEnquiryModalOpen(true)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 flex items-center">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      Request Free Enquiry
                      <Badge className="ml-3 bg-white text-green-600 text-xs font-bold">
                        100% FREE
                      </Badge>
                    </div>
                    <div className="absolute inset-0 ring-2 ring-white/20 rounded-full group-hover:ring-white/40 transition-all duration-500"></div>
                  </Button>
                  <p className="text-gray-300 text-sm mt-3 max-w-md mx-auto">
                    Get answers to your questions, procedure information, and
                    pricing details - completely free with no obligation.
                  </p>
                </div>

                {/* Divider */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="h-px bg-white/20 flex-1"></div>
                  <span className="text-gray-400 text-sm font-medium">
                    Or choose a consultation
                  </span>
                  <div className="h-px bg-white/20 flex-1"></div>
                </div>

                {/* Paid Consultation Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-medical-gold to-yellow-500 hover:from-yellow-500 hover:to-medical-gold text-black font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-medical-gold/25 transition-all duration-500 transform hover:scale-105"
                    onClick={() => handleBookConsultation("in-person")}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="flex items-center mb-1">
                        <Calendar className="h-5 w-5 mr-2" />
                        <span>In-Person Consultation</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Badge className="bg-black/20 text-black font-semibold">
                          KSh 5,000
                        </Badge>
                        <span className="ml-2 opacity-80">• 45 minutes</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 ring-2 ring-white/20 rounded-full group-hover:ring-white/40 transition-all duration-500"></div>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-2 border-white/30 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg rounded-full transition-all duration-500 transform hover:scale-105"
                    onClick={() => handleBookConsultation("video")}
                  >
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="flex items-center mb-1">
                        <div className="w-6 h-6 bg-medical-purple/20 rounded-full flex items-center justify-center mr-2 group-hover:bg-medical-purple/40 transition-colors">
                          <Video className="h-3 w-3 fill-current" />
                        </div>
                        <span>Video Consultation</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Badge className="bg-white/20 text-white group-hover:bg-slate-900 group-hover:text-white font-semibold">
                          KSh 3,500
                        </Badge>
                        <span className="ml-2 opacity-80">• 30 minutes</span>
                      </div>
                    </div>
                  </Button>
                </div>

                {/* Payment Note */}
                <p className="text-center text-gray-400 text-sm">
                  💳 Consultation fees are fully deductible from your procedure
                  cost
                </p>
              </div>

              {/* Enhanced Trust Indicators */}
              <div className="grid grid-cols-3 gap-8 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 animate-slide-up delay-700">
                <div className="text-center group cursor-pointer transition-transform hover:scale-105">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-medical-gold to-yellow-400 bg-clip-text text-transparent mb-2">
                    2,500+
                  </div>
                  <div className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    Successful Transformations
                  </div>
                </div>
                <div className="text-center group cursor-pointer transition-transform hover:scale-105">
                  <div className="flex items-center justify-center mb-2">
                    <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-medical-gold to-yellow-400 bg-clip-text text-transparent">
                      4.9
                    </div>
                    <Star className="h-6 w-6 text-medical-gold ml-1 fill-current" />
                  </div>
                  <div className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    Patient Satisfaction
                  </div>
                </div>
                <div className="text-center group cursor-pointer transition-transform hover:scale-105">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-medical-gold to-yellow-400 bg-clip-text text-transparent mb-2">
                    15+
                  </div>
                  <div className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    Years Excellence
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Enhanced Visual Experience */}
            <div className="relative animate-slide-up delay-200">
              {/* Main Image Container with 3D Effect */}

            <CustomHospitalSlider></CustomHospitalSlider>
             {/* <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-medical-purple to-medical-gold rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-1000 transform scale-105"></div>

                 Primary Image
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                    alt="Professional medical consultation"
                    className="w-full h-[700px] object-cover transform transition-transform duration-1000 group-hover:scale-110"
                  />

                   Image Overlay with Gradient
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                   Floating Success Story
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl animate-fade-in delay-1000">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">Sarah M.</div>
                        <div className="text-sm text-slate-600">
                          Rhinoplasty Patient
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      "Life-changing results! Dr. Santos gave me the confidence
                      I never knew I could have."
                    </p>
                    <div className="flex mt-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
*/}
              {/* Floating Achievement Cards */}
              <div className="absolute -top-8 -left-8 bg-gradient-to-r from-medical-gold to-yellow-400 p-4 rounded-2xl shadow-2xl animate-float border-4 border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-white">
                    <div className="font-bold text-lg">Award Winner</div>
                    <div className="text-sm opacity-90">Best Clinic 2024</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-medical-purple to-purple-600 p-4 rounded-2xl shadow-2xl animate-float delay-500 border-4 border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-white">
                    <div className="font-bold text-lg">Board Certified</div>
                    <div className="text-sm opacity-90">Expert Surgeons</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -left-6 bg-white p-4 rounded-2xl shadow-2xl animate-bounce-slow border border-slate-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-medical-purple">
                    2,500+
                  </div>
                  <div className="text-xs text-slate-600">Happy Patients</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-medical-gold/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-20 left-10 w-16 h-16 bg-medical-purple/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Completely Redesigned */}
      <section className="py-32 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-medical-purple/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-medical-gold/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center mb-6 px-6 py-3 bg-gradient-to-r from-medical-purple/10 to-purple-100/50 border border-medical-purple/20 rounded-full">
              <span className="text-2xl mr-3">✨</span>
              <span className="text-medical-purple font-semibold">
                Premium Aesthetic Services
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Transform with
              <br />
              <span className="bg-gradient-to-r from-medical-purple via-purple-600 to-medical-purple bg-clip-text text-transparent">
                Expert Precision
              </span>
            </h2>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Experience world-class cosmetic procedures with cutting-edge
              techniques, personalized care, and natural-looking results that
              enhance your unique beauty.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-medical-purple/20 transform hover:-translate-y-2"
              >
                {/* Card Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-medical-purple/0 via-transparent to-medical-gold/0 group-hover:from-medical-purple/5 group-hover:to-medical-gold/5 rounded-3xl transition-all duration-500"></div>

                {/* Service Icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-medical-purple/10 to-medical-gold/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 mx-auto">
                    <span className="text-4xl">{service.image}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-medical-purple transition-colors">
                    {service.title}
                  </h3>

                  <div className="mb-4">
                    <span className="text-lg font-semibold bg-gradient-to-r from-medical-purple to-purple-600 bg-clip-text text-transparent">
                      {service.price}
                    </span>
                  </div>

                  <p className="text-slate-600 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <Button className="w-full bg-gradient-to-r from-medical-purple to-purple-600 hover:from-purple-600 hover:to-medical-purple text-white rounded-xl py-3 group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                    <span className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-medical-purple/0 group-hover:ring-medical-purple/20 transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link to="/services">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-medical-gold to-yellow-500 hover:from-yellow-500 hover:to-medical-gold text-black font-bold px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center">
                    View All Services
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </span>
                </Button>
              </Link>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 px-10 py-6 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center">
                  <Phone className="mr-3 h-5 w-5" />
                  Schedule Consultation
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - New Stunning Design */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-medical-gold/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-medical-purple/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center mb-6 px-6 py-3 bg-gradient-to-r from-medical-gold/20 to-yellow-400/20 border border-medical-gold/30 rounded-full backdrop-blur-sm">
              <span className="text-2xl mr-3">💬</span>
              <span className="text-medical-gold font-semibold">
                Patient Success Stories
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Real Results,
              <br />
              <span className="bg-gradient-to-r from-medical-gold via-yellow-400 to-medical-gold bg-clip-text text-transparent animate-gradient">
                Real Stories
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Hear from our patients who trusted us with their transformation
              journey and achieved life-changing results.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-medical-gold/40 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-gradient-to-r from-medical-gold to-yellow-400 rounded-full flex items-center justify-center">
                    <Quote className="h-4 w-4 text-black" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex mb-6 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-medical-gold fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-100 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-medical-purple to-purple-600 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-medical-gold">
                      {testimonial.procedure}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-medical-gold/0 group-hover:ring-medical-gold/30 transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-gray-300 mb-8 text-lg">
              Ready to start your transformation journey?
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-medical-gold to-yellow-500 hover:from-yellow-500 hover:to-medical-gold text-black font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-medical-gold/25 transition-all duration-500 transform hover:scale-105"
            >
              <span className="flex items-center">
                <Calendar className="mr-3 h-6 w-6" />
                Book Your Consultation
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-32 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center mb-6 px-6 py-3 bg-gradient-to-r from-medical-purple/10 to-purple-100/50 border border-medical-purple/20 rounded-full">
              <span className="text-2xl mr-3">👨‍⚕️</span>
              <span className="text-medical-purple font-semibold">
                Expert Medical Team
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Meet Our
              <br />
              <span className="bg-gradient-to-r from-medical-purple via-purple-600 to-medical-purple bg-clip-text text-transparent">
                Renowned Surgeons
              </span>
            </h2>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our board-certified plastic surgeons combine years of experience
              with cutting-edge techniques to deliver exceptional,
              natural-looking results.
            </p>
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-medical-purple/20 transform hover:-translate-y-3"
              >
                {/* Doctor Avatar */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-medical-purple/10 to-medical-gold/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <span className="text-6xl">{doctor.image}</span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full px-3 py-1 text-sm font-bold shadow-lg">
                    <div className="flex items-center">
                      <Star className="h-3 w-3 fill-current mr-1" />
                      {doctor.rating}
                    </div>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-medical-purple transition-colors">
                    {doctor.name}
                  </h3>

                  <p className="text-medical-purple font-semibold text-lg mb-2">
                    {doctor.specialty}
                  </p>

                  <div className="inline-flex items-center bg-gradient-to-r from-medical-gold/10 to-yellow-100/50 px-4 py-2 rounded-full mb-6">
                    <Award className="h-4 w-4 text-medical-gold mr-2" />
                    <span className="text-slate-700 font-medium text-sm">
                      {doctor.experience}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full bg-gradient-to-r from-medical-purple to-purple-600 hover:from-purple-600 hover:to-medical-purple text-white rounded-xl py-3 group-hover:shadow-lg transition-all duration-300">
                      View Profile
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full border-medical-gold text-medical-gold hover:bg-medical-gold hover:text-black rounded-xl py-3 transition-all duration-300"
                    >
                      Book Consultation
                    </Button>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-medical-purple/0 group-hover:ring-medical-purple/20 transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Team CTA */}
          <div className="text-center mt-16">
            <Link to="/team">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 px-10 py-6 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center">
                  Meet Our Full Team
                  <Users className="ml-3 h-5 w-5" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Completely Redesigned */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-medical-purple/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-medical-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-medical-purple/3 to-medical-gold/3 rounded-full blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center mb-6 px-6 py-3 bg-gradient-to-r from-medical-purple/10 to-purple-100/50 border border-medical-purple/20 rounded-full">
              <span className="text-2xl mr-3">🌟</span>
              <span className="text-medical-purple font-semibold">
                Why Choose Tres Beau
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Excellence in
              <br />
              <span className="bg-gradient-to-r from-medical-purple via-purple-600 to-medical-purple bg-clip-text text-transparent">
                Every Detail
              </span>
            </h2>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We're committed to providing the highest standard of care with
              personalized treatment plans, cutting-edge technology, and
              exceptional results that exceed expectations.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="group text-center">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-medical-purple/10 to-purple-100/50 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Shield className="h-12 w-12 text-medical-purple" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-medical-purple transition-colors">
                Board Certified
              </h3>
              <p className="text-slate-600 leading-relaxed">
                All our surgeons are board-certified with extensive training and
                years of specialized experience.
              </p>
            </div>

            <div className="group text-center">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-medical-gold/10 to-yellow-100/50 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Award className="h-12 w-12 text-medical-gold" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-medical-gold to-yellow-500 rounded-full flex items-center justify-center">
                  <Star className="h-4 w-4 text-black" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-medical-gold transition-colors">
                Award-Winning
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Recognized nationally for excellence in patient care, surgical
                outcomes, and innovation in aesthetic medicine.
              </p>
            </div>

            <div className="group text-center">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100/50 to-blue-200/30 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Users className="h-12 w-12 text-blue-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <Heart className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                Personalized Care
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Tailored treatment plans designed specifically for your unique
                goals, anatomy, and lifestyle.
              </p>
            </div>

            <div className="group text-center">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-100/50 to-pink-200/30 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Heart className="h-12 w-12 text-pink-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-pink-600 transition-colors">
                Compassionate
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We care deeply about your comfort, well-being, and confidence
                throughout your entire transformation journey.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-medical-purple via-purple-600 to-medical-purple rounded-3xl p-12 text-white">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="group cursor-pointer">
                <div className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-medical-gold to-yellow-400 bg-clip-text text-transparent">
                  2,500+
                </div>
                <div className="text-purple-100 group-hover:text-white transition-colors">
                  Successful Procedures
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-medical-gold to-yellow-400 bg-clip-text text-transparent">
                  98%
                </div>
                <div className="text-purple-100 group-hover:text-white transition-colors">
                  Patient Satisfaction
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-medical-gold to-yellow-400 bg-clip-text text-transparent">
                  15+
                </div>
                <div className="text-purple-100 group-hover:text-white transition-colors">
                  Years of Excellence
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-medical-gold to-yellow-400 bg-clip-text text-transparent">
                  #1
                </div>
                <div className="text-purple-100 group-hover:text-white transition-colors">
                  Rated in Kenya
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-medical-purple/10 text-medical-purple">
              Frequently Asked Questions
            </Badge>
            <h2 className="text-4xl font-bold text-medical-navy mb-4">
              Your Questions, Answered
            </h2>
            <p className="text-xl text-medical-gray max-w-3xl mx-auto">
              Get answers to the most common questions about our procedures,
              safety, and care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-medical-navy">
                    How do I know if I'm a good candidate for surgery?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medical-gray">
                    Our board-certified surgeons will evaluate your medical
                    history, goals, and physical condition during a
                    comprehensive consultation. We ensure you're physically and
                    emotionally ready for your chosen procedure.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-medical-navy">
                    What safety measures do you have in place?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medical-gray">
                    We operate in accredited facilities with board-certified
                    anesthesiologists, maintain strict sterile protocols, and
                    have emergency procedures in place. Your safety is our top
                    priority.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-medical-navy">
                    How long is the recovery process?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medical-gray">
                    Recovery time varies by procedure. Non-surgical treatments
                    may require no downtime, while surgical procedures can range
                    from 1-6 weeks. We provide detailed recovery plans for each
                    patient.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-medical-navy">
                    Do you offer financing options?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medical-gray">
                    Yes! We offer various payment plans including 0% interest
                    options for 3 months, extended payment plans, and accept
                    M-Pesa, credit cards, and medical financing companies.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-medical-navy">
                    What results can I expect?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medical-gray">
                    Results vary by individual, but we use advanced techniques
                    to achieve natural-looking outcomes. We'll show you
                    before/after photos during consultation and discuss
                    realistic expectations.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-medical-navy">
                    How do I prepare for my procedure?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medical-gray">
                    We provide comprehensive pre-operative instructions
                    including medication guidelines, dietary restrictions, and
                    lifestyle modifications. Our team will guide you through
                    every step.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-medical-purple text-medical-purple hover:bg-medical-purple hover:text-medical-gold"
            >
              View All FAQs
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-medical-purple/10 text-medical-purple">
              Our Process
            </Badge>
            <h2 className="text-4xl font-bold text-medical-navy mb-4">
              Your Journey to Transformation
            </h2>
            <p className="text-xl text-medical-gray max-w-3xl mx-auto">
              We guide you through every step of your aesthetic journey with
              care and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center relative">
              <div className="flex items-center justify-center w-16 h-16 bg-medical-purple rounded-full mx-auto mb-4">
                <span className="text-2xl font-bold text-medical-gold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-medical-navy mb-2">
                Consultation
              </h3>
              <p className="text-medical-gray">
                Meet with our surgeons to discuss your goals and develop a
                personalized treatment plan.
              </p>
              {/* Connecting line */}
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-medical-purple/20 -translate-x-4"></div>
            </div>

            <div className="text-center relative">
              <div className="flex items-center justify-center w-16 h-16 bg-medical-purple rounded-full mx-auto mb-4">
                <span className="text-2xl font-bold text-medical-gold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-medical-navy mb-2">
                Planning
              </h3>
              <p className="text-medical-gray">
                Review your treatment plan, receive pre-operative instructions,
                and schedule your procedure.
              </p>
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-medical-purple/20 -translate-x-4"></div>
            </div>

            <div className="text-center relative">
              <div className="flex items-center justify-center w-16 h-16 bg-medical-purple rounded-full mx-auto mb-4">
                <span className="text-2xl font-bold text-medical-gold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-medical-navy mb-2">
                Procedure
              </h3>
              <p className="text-medical-gray">
                Your procedure is performed in our state-of-the-art facility
                with the highest safety standards.
              </p>
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-medical-purple/20 -translate-x-4"></div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-medical-purple rounded-full mx-auto mb-4">
                <span className="text-2xl font-bold text-medical-gold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-medical-navy mb-2">
                Recovery
              </h3>
              <p className="text-medical-gray">
                Comprehensive aftercare support and follow-up appointments to
                ensure optimal healing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-medical-purple text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by Thousands</h2>
            <p className="text-xl text-purple-100">
              Our commitment to excellence shows in our results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-medical-gold mb-2">
                2,500+
              </div>
              <div className="text-purple-100">Successful Procedures</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-medical-gold mb-2">
                98%
              </div>
              <div className="text-purple-100">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-medical-gold mb-2">
                15+
              </div>
              <div className="text-purple-100">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-medical-gold mb-2">
                4.9★
              </div>
              <div className="text-purple-100">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-medical-purple/10 text-medical-purple">
              Patient Stories
            </Badge>
            <h2 className="text-4xl font-bold text-medical-navy mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-medical-gray max-w-3xl mx-auto">
              Real stories from real patients who trusted us with their
              transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="relative hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <Quote className="h-8 w-8 text-medical-purple mb-4" />
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-medical-gray mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{testimonial.image}</div>
                    <div>
                      <div className="font-semibold text-medical-navy">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-medical-gray">
                        {testimonial.procedure}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-gradient-to-br from-medical-purple via-purple-900 to-slate-900 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-medical-gold/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-medical-purple/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Begin Your
            <br />
            <span className="bg-gradient-to-r from-medical-gold via-yellow-400 to-medical-gold bg-clip-text text-transparent animate-gradient">
              Transformation?
            </span>
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Take the first step toward the confident, beautiful you. Choose how
            you'd like to start your journey with Kenya's premier aesthetic
            surgery center.
          </p>

          {/* Enhanced CTA Options */}
          <div className="space-y-8">
            {/* Free Enquiry - Prominent */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="mb-4">
                <Badge className="bg-green-500 text-white font-bold px-4 py-2 text-sm">
                  🎁 COMPLETELY FREE
                </Badge>
              </div>
              <h3 className="text-2xl font-bold mb-3">
                Start with a Free Enquiry
              </h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Get all your questions answered with no obligation. Perfect for
                exploring options, understanding procedures, and learning about
                pricing.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-500 text-white font-bold px-12 py-4 text-lg rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-500 transform hover:scale-105"
                onClick={() => setIsEnquiryModalOpen(true)}
              >
                <MessageSquare className="h-5 w-5 mr-3" />
                Request Free Information
              </Button>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center space-x-4">
              <div className="h-px bg-white/20 flex-1 max-w-32"></div>
              <span className="text-purple-200 text-sm font-medium">
                Or book a consultation
              </span>
              <div className="h-px bg-white/20 flex-1 max-w-32"></div>
            </div>

            {/* Paid Consultations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-medical-gold/40 transition-all duration-300">
                <h4 className="text-xl font-bold mb-2">
                  In-Person Consultation
                </h4>
                <p className="text-purple-100 text-sm mb-4">
                  45-minute detailed assessment with our surgeons
                </p>
                <div className="mb-4">
                  <span className="text-medical-gold font-bold text-lg">
                    KSh 5,000
                  </span>
                  <span className="text-purple-200 text-sm ml-2">
                    (fully deductible)
                  </span>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-medical-gold to-yellow-500 hover:from-yellow-500 hover:to-medical-gold text-black font-bold py-3 rounded-xl transition-all duration-300"
                  onClick={() => handleBookConsultation("in-person")}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Book In-Person
                </Button>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-medical-purple/40 transition-all duration-300">
                <h4 className="text-xl font-bold mb-2">Video Consultation</h4>
                <p className="text-purple-100 text-sm mb-4">
                  30-minute online consultation from home
                </p>
                <div className="mb-4">
                  <span className="text-medical-gold font-bold text-lg">
                    KSh 3,500
                  </span>
                  <span className="text-purple-200 text-sm ml-2">
                    (fully deductible)
                  </span>
                </div>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 font-bold py-3 rounded-xl transition-all duration-300"
                  onClick={() => handleBookConsultation("video")}
                >
                  <Video className="h-4 w-4 mr-2" />
                  Book Video Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Booking Modal */}
      <BookingModal
        open={isBookingModalOpen}
        onOpenChange={setIsBookingModalOpen}
        consultationType={consultationType}
      />

      {/* Enquiry Modal */}
      <EnquiryModal
        open={isEnquiryModalOpen}
        onOpenChange={setIsEnquiryModalOpen}
      />

      {/* Live Chat */}
      <LiveChat />
    </div>
  );
}
