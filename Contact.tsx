import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  Navigation as NavigationIcon,
  Send,
  MessageSquare,
  Video,
  Users,
  Shield,
  Award,
  Heart,
  Stethoscope,
  Car,
  Bus,
  Plane,
  CheckCircle,
  Star,
  Globe,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredContact: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        preferredContact: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-medical-gold/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-medical-purple/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center mb-6 px-6 py-3 bg-gradient-to-r from-medical-gold/20 to-yellow-400/20 border border-medical-gold/30 rounded-full backdrop-blur-sm">
              <span className="text-2xl mr-3">📍</span>
              <span className="text-medical-gold font-semibold">
                Visit Our State-of-the-Art Facility
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Get in</span>
              <br />
              <span className="bg-gradient-to-r from-medical-gold via-yellow-400 to-medical-gold bg-clip-text text-transparent animate-gradient">
                Touch
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              We're here to answer your questions, schedule consultations, and
              guide you through your aesthetic journey with personalized care.
            </p>

            {/* Quick Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-medical-gold/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Call Us</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Speak directly with our team
                </p>
                <p className="text-medical-gold font-semibold">
                  +254 700 000 000
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-medical-purple/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Live Chat</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Instant support available
                </p>
                <p className="text-medical-gold font-semibold">
                  24/7 Available
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-medical-gold/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-medical-purple to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Visit Us</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Come see our facility
                </p>
                <p className="text-medical-gold font-semibold">
                  Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-white via-purple-50/30 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-lg text-slate-600">
                  Fill out the form below and we'll get back to you within 24
                  hours. Our team is here to help with any questions about
                  procedures, pricing, or scheduling.
                </p>
              </div>

              {isSubmitted ? (
                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-800 mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-green-700 mb-6">
                      Thank you for contacting us. Our team will respond within
                      24 hours.
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-green-600">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">
                        We're here to help!
                      </span>
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="shadow-xl border-0">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="mt-2"
                          />
                        </div>
                      </div>

                      {/* Contact Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400 mt-2" />
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="pl-10 mt-2"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400 mt-2" />
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="+254 700 000 000"
                              className="pl-10 mt-2"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Select
                          onValueChange={(value) =>
                            handleSelectChange("subject", value)
                          }
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="What is this regarding?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="consultation">
                              Schedule Consultation
                            </SelectItem>
                            <SelectItem value="procedure-info">
                              Procedure Information
                            </SelectItem>
                            <SelectItem value="pricing">
                              Pricing & Packages
                            </SelectItem>
                            <SelectItem value="aftercare">
                              Post-Surgery Care
                            </SelectItem>
                            <SelectItem value="appointment">
                              Existing Appointment
                            </SelectItem>
                            <SelectItem value="billing">
                              Billing Question
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Message */}
                      <div>
                        <Label htmlFor="message">Your Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          placeholder="Please provide details about your inquiry or any specific questions you have..."
                          className="mt-2 min-h-[120px]"
                        />
                      </div>

                      {/* Preferred Contact */}
                      <div>
                        <Label>How would you prefer to be contacted?</Label>
                        <Select
                          onValueChange={(value) =>
                            handleSelectChange("preferredContact", value)
                          }
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select contact preference" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="phone">Phone Call</SelectItem>
                            <SelectItem value="whatsapp">WhatsApp</SelectItem>
                            <SelectItem value="either">
                              No Preference
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-medical-purple to-purple-600 hover:from-purple-600 hover:to-medical-purple text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending Message...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Send className="h-5 w-5 mr-2" />
                            Send Message
                          </div>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Contact Information & Map */}
            <div className="space-y-8">
              {/* Office Information */}
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <MapPin className="h-6 w-6 mr-3 text-medical-purple" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Address */}
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Address
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Tres Beau Medical Group
                      <br />
                      123 Medical Plaza, 5th Floor
                      <br />
                      Westlands, Nairobi 00100
                      <br />
                      Kenya
                    </p>
                  </div>

                  {/* Contact Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2 flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-green-600" />
                        Phone
                      </h3>
                      <p className="text-slate-600">+254 700 000 000</p>
                      <p className="text-slate-600">+254 700 000 001</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2 flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-blue-600" />
                        Email
                      </h3>
                      <p className="text-slate-600">info@tresbeau.co.ke</p>
                      <p className="text-slate-600">
                        appointments@tresbeau.co.ke
                      </p>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3 flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-medical-purple" />
                      Office Hours
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Monday - Friday</span>
                        <span className="font-medium text-slate-900">
                          8:00 AM - 6:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Saturday</span>
                        <span className="font-medium text-slate-900">
                          9:00 AM - 4:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Sunday</span>
                        <span className="font-medium text-slate-900">
                          Emergency Only
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Emergency Contact */}
                  <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                    <h3 className="font-semibold text-red-800 mb-2">
                      24/7 Emergency
                    </h3>
                    <p className="text-red-700 text-sm mb-2">
                      Post-surgery emergency support
                    </p>
                    <p className="text-red-800 font-semibold">
                      +254 700 000 999
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Map */}
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <NavigationIcon className="h-6 w-6 mr-3 text-medical-gold" />
                    Find Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Embedded Map */}
                  <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden bg-gray-100 border">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8109669006937!2d36.80593351475382!3d-1.2846567990638658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a6bf7445dc1%3A0x940b62a3c8efde52!2sWestlands%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1640123456789!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Tres Beau Medical Group Location"
                    ></iframe>
                  </div>

                  {/* Directions */}
                  <div className="mt-6 space-y-4">
                    <h3 className="font-semibold text-slate-900">
                      Getting Here
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Car className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900">By Car</h4>
                          <p className="text-slate-600">
                            Free parking available in building
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <Bus className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900">
                            Public Transit
                          </h4>
                          <p className="text-slate-600">
                            Westlands Matatu terminus nearby
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <Plane className="h-4 w-4 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900">
                            From Airport
                          </h4>
                          <p className="text-slate-600">25 minutes from JKIA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media & Additional Info */}
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Globe className="h-6 w-6 mr-3 text-medical-purple" />
                    Connect With Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Social Media */}
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-3">
                        Follow Our Journey
                      </h3>
                      <div className="flex space-x-4">
                        <a
                          href="#"
                          className="w-10 h-10 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                        >
                          <Instagram className="h-5 w-5" />
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                        >
                          <Facebook className="h-5 w-5" />
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-medical-purple">
                          2,500+
                        </div>
                        <div className="text-sm text-slate-600">
                          Happy Patients
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-medical-gold">
                          15+
                        </div>
                        <div className="text-sm text-slate-600">
                          Years Experience
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Live Chat */}
      <LiveChat />
    </div>
  );
}
