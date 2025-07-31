import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { teamMembers } from "@/data/team";
import BookingModal from "@/components/BookingModal";
import DoctorReviews from "@/components/DoctorReviews";
import {
  Calendar,
  Star,
  GraduationCap,
  Award,
  Stethoscope,
  ArrowRight,
  Video,
} from "lucide-react";

export default function Team() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [consultationType, setConsultationType] = useState<
    "in-person" | "video" | null
  >(null);
  const [selectedDoctor, setSelectedDoctor] = useState<string>("");

  const handleBookConsultation = (
    type: "in-person" | "video",
    doctorId?: string,
  ) => {
    setConsultationType(type);
    setSelectedDoctor(doctorId || "");
    setIsBookingModalOpen(true);
  };
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="bg-gradient-to-br from-medical-blue/5 via-white to-medical-mint/10 pt-16 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-medical-blue/10 text-medical-blue">
              Expert Medical Team
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-medical-navy mb-6">
              Meet Our <span className="text-medical-blue">World-Class</span>
              <br />
              Surgeons
            </h1>
            <p className="text-xl text-medical-gray mb-8 max-w-3xl mx-auto">
              Our board-certified plastic surgeons combine decades of experience
              with the latest techniques to deliver exceptional, natural-looking
              results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gap-3 bg-medical-purple hover:bg-medical-purple-dark px-8 py-6 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => handleBookConsultation("in-person")}
              >
                <Calendar className="h-5 w-5" />
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-3 px-8 py-6 border-2 border-medical-purple text-medical-purple hover:bg-medical-purple hover:text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => handleBookConsultation("video")}
              >
                <Video className="h-5 w-5" />
                Video Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((doctor) => (
              <Card
                key={doctor.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl text-medical-navy mb-2">
                        {doctor.name}
                      </CardTitle>
                      <CardDescription className="text-medical-blue font-semibold text-lg mb-2">
                        {doctor.specialty}
                      </CardDescription>
                      <div className="flex items-center gap-2 mb-4">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-semibold">{doctor.rating}</span>
                        <span className="text-medical-gray">
                          • {doctor.experience}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-medical-gray leading-relaxed">
                    {doctor.bio}
                  </p>

                  {/* Education */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-medical-navy mb-2">
                      <GraduationCap className="h-4 w-4 text-medical-blue" />
                      Education
                    </h4>
                    <ul className="space-y-1">
                      {doctor.education.map((edu, index) => (
                        <li
                          key={index}
                          className="text-sm text-medical-gray flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-medical-blue rounded-full" />
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-medical-navy mb-2">
                      <Award className="h-4 w-4 text-medical-blue" />
                      Certifications
                    </h4>
                    <ul className="space-y-1">
                      {doctor.certifications.slice(0, 2).map((cert, index) => (
                        <li
                          key={index}
                          className="text-sm text-medical-gray flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-medical-blue rounded-full" />
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specialties */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-medical-navy mb-2">
                      <Stethoscope className="h-4 w-4 text-medical-blue" />
                      Specialties
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties
                        .slice(0, 3)
                        .map((specialty, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-medical-blue/10 text-medical-blue"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      {doctor.specialties.length > 3 && (
                        <Badge
                          variant="outline"
                          className="border-medical-blue text-medical-blue"
                        >
                          +{doctor.specialties.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 space-y-2">
                    <Button
                      className="w-full group bg-medical-purple hover:bg-medical-purple-dark text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() =>
                        handleBookConsultation("in-person", doctor.id)
                      }
                    >
                      Book with {doctor.name.split(" ")[1]}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-medical-purple text-medical-purple hover:bg-medical-purple hover:text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => handleBookConsultation("video", doctor.id)}
                    >
                      <Video className="mr-2 h-4 w-4" />
                      Video Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-medical-navy mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-medical-gray max-w-2xl mx-auto">
              Read reviews from verified patients who have experienced our
              exceptional care and results.
            </p>
          </div>

          {/* Featured doctor reviews */}
          <DoctorReviews
            doctorId="1"
            doctorName="Dr. Maria Santos"
            overallRating={4.9}
            totalReviews={60}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-medical-purple text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Ready to Meet Your Surgeon?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to meet our team and discuss your aesthetic
            goals in person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="gap-3 px-8 py-6 bg-medical-gold text-medical-purple hover:bg-yellow-300 hover:text-medical-purple-dark font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => handleBookConsultation("in-person")}
            >
              <Calendar className="h-5 w-5" />
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-3 px-8 py-6 border-2 border-medical-gold text-medical-gold hover:bg-medical-gold hover:text-medical-purple-dark font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => handleBookConsultation("video")}
            >
              <Video className="h-5 w-5" />
              Video Consultation
            </Button>
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
    </div>
  );
}
