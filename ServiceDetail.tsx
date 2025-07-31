import { useParams, Navigate, Link } from "react-router-dom";
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
import {
  Calendar,
  Clock,
  Star,
  ArrowRight,
  Shield,
  Heart,
  Users,
  Award,
  CheckCircle,
  DollarSign,
  Timer,
  Stethoscope,
} from "lucide-react";

const serviceData = {
  rhinoplasty: {
    title: "Rhinoplasty",
    subtitle: "Nose Reshaping Surgery",
    description:
      "Enhance facial harmony with expert nose reshaping surgery for both aesthetic and functional improvements.",
    longDescription:
      "Rhinoplasty, commonly known as a nose job, is one of the most popular plastic surgery procedures. Our expert surgeons combine artistry with surgical precision to create natural-looking results that enhance your facial harmony while preserving or improving nasal function.",
    duration: "2-3 hours",
    recovery: "1-2 weeks",
    price: "Starting at $8,500",
    priceKsh: "Starting at KSh 1,100,000",
    popular: true,
    image: "👃",
    benefits: [
      "Improved facial balance and proportion",
      "Enhanced breathing and nasal function",
      "Boosted self-confidence",
      "Natural-looking, harmonious results",
      "Correction of birth defects or injuries",
      "Long-lasting outcomes",
    ],
    procedure: [
      "Initial consultation and 3D imaging",
      "Pre-operative health assessment",
      "Surgical procedure under general anesthesia",
      "Reshaping of nasal cartilage and bone",
      "Closing incisions with minimal scarring",
      "Recovery monitoring and follow-up care",
    ],
    recovery: [
      "Day 1-3: Rest with head elevated, minimal activity",
      "Week 1: Splint removal, return to light activities",
      "Week 2-4: Gradual return to normal activities",
      "Month 2-3: Most swelling subsides",
      "Month 6-12: Final results become apparent",
    ],
    faqs: [
      {
        question: "How long does rhinoplasty take?",
        answer:
          "The procedure typically takes 2-3 hours, depending on the complexity of the changes needed.",
      },
      {
        question: "Is rhinoplasty painful?",
        answer:
          "Most patients experience mild to moderate discomfort that is well-managed with prescribed pain medication.",
      },
      {
        question: "When can I see final results?",
        answer:
          "While initial results are visible after a few weeks, final results can take 6-12 months as swelling completely subsides.",
      },
      {
        question: "Will insurance cover rhinoplasty?",
        answer:
          "Insurance may cover rhinoplasty if it's performed to correct breathing problems or structural defects, but not for purely cosmetic reasons.",
      },
    ],
  },
  facelift: {
    title: "Facelift",
    subtitle: "Facial Rejuvenation Surgery",
    description:
      "Turn back time with advanced facial rejuvenation techniques that restore youthful contours.",
    longDescription:
      "A facelift, or rhytidectomy, is a surgical procedure that helps to reduce the signs of aging in the face and neck. Our advanced techniques focus on lifting and tightening facial tissues to create a more youthful, refreshed appearance while maintaining natural-looking results.",
    duration: "3-5 hours",
    recovery: "2-3 weeks",
    price: "Starting at $12,000",
    priceKsh: "Starting at KSh 1,560,000",
    popular: false,
    image: "✨",
    benefits: [
      "Smoother, firmer skin",
      "Reduced wrinkles and fine lines",
      "Lifted facial features",
      "Improved jawline definition",
      "Long-lasting results (10+ years)",
      "Enhanced self-confidence",
    ],
    procedure: [
      "Comprehensive consultation and planning",
      "Pre-operative preparation",
      "Surgery under general anesthesia",
      "Lifting and repositioning facial tissues",
      "Removal of excess skin",
      "Careful closure with minimal scarring",
    ],
    recovery: [
      "Week 1: Rest and recovery with assistance",
      "Week 2: Return to light activities",
      "Week 3-4: Most swelling and bruising subsides",
      "Month 2-3: Return to all normal activities",
      "Month 6: Final results become apparent",
    ],
    faqs: [
      {
        question: "How long do facelift results last?",
        answer:
          "Facelift results typically last 10-15 years, though this varies based on individual factors and lifestyle.",
      },
      {
        question: "What's the ideal age for a facelift?",
        answer:
          "Most patients are between 40-70 years old, but the ideal time depends on individual aging patterns and concerns.",
      },
      {
        question: "Are there non-surgical alternatives?",
        answer:
          "Yes, we offer non-surgical options like dermal fillers and thread lifts, though results are temporary compared to surgical facelifts.",
      },
    ],
  },
  liposuction: {
    title: "Liposuction",
    subtitle: "Body Contouring Surgery",
    description:
      "Remove stubborn fat deposits for a more contoured silhouette using advanced techniques.",
    longDescription:
      "Liposuction is a popular body contouring procedure that removes stubborn fat deposits that don't respond to diet and exercise. Using advanced techniques, we can help you achieve a more sculpted, proportionate body shape with minimal downtime.",
    duration: "1-3 hours",
    recovery: "1-2 weeks",
    price: "Starting at $3,500",
    priceKsh: "Starting at KSh 455,000",
    popular: true,
    image: "💪",
    benefits: [
      "Targeted fat removal",
      "Improved body contours",
      "Enhanced proportions",
      "Permanent fat cell removal",
      "Minimal scarring",
      "Quick recovery time",
    ],
    procedure: [
      "Consultation and treatment planning",
      "Marking of treatment areas",
      "Local or general anesthesia",
      "Small incisions for cannula insertion",
      "Fat removal using suction technique",
      "Compression garment application",
    ],
    recovery: [
      "Day 1-3: Wear compression garments, light walking",
      "Week 1: Return to office work",
      "Week 2-4: Gradual return to exercise",
      "Month 1-3: Continued improvement in contours",
      "Month 3-6: Final results visible",
    ],
    faqs: [
      {
        question: "How much fat can be removed safely?",
        answer:
          "Typically, 5-10 pounds of fat can be safely removed in a single session, depending on the patient's health and body area.",
      },
      {
        question: "Is liposuction permanent?",
        answer:
          "Yes, fat cells are permanently removed, but maintaining results requires a healthy lifestyle to prevent remaining cells from enlarging.",
      },
      {
        question: "Can liposuction help with weight loss?",
        answer:
          "Liposuction is for body contouring, not weight loss. It's best for patients near their ideal weight with localized fat deposits.",
      },
    ],
  },
  "breast-augmentation": {
    title: "Breast Augmentation",
    subtitle: "Breast Enhancement Surgery",
    description:
      "Enhance your natural curves with safe, FDA-approved implants and expert surgical techniques.",
    longDescription:
      "Breast augmentation is one of the most popular cosmetic procedures, designed to enhance breast size and shape using implants or fat transfer. Our board-certified surgeons work with you to achieve natural-looking results that complement your body proportions.",
    duration: "1-2 hours",
    recovery: "1-2 weeks",
    price: "Starting at $6,500",
    priceKsh: "Starting at KSh 845,000",
    popular: true,
    image: "🌺",
    benefits: [
      "Enhanced breast size and shape",
      "Improved body proportions",
      "Increased self-confidence",
      "Natural-looking results",
      "Multiple implant options",
      "Long-lasting outcomes",
    ],
    procedure: [
      "Detailed consultation and sizing",
      "Implant selection (saline or silicone)",
      "Surgery under general anesthesia",
      "Precise implant placement",
      "Careful incision closure",
      "Post-operative monitoring",
    ],
    recovery: [
      "Week 1: Rest and limited arm movement",
      "Week 2-4: Gradual return to normal activities",
      "Week 6: Return to exercise and lifting",
      "Month 3: Full healing and final positioning",
      "Annual follow-ups for monitoring",
    ],
    faqs: [
      {
        question: "How long do breast implants last?",
        answer:
          "Modern implants can last 10-20 years or longer, though they're not considered lifetime devices and may need replacement eventually.",
      },
      {
        question: "Can I breastfeed after augmentation?",
        answer:
          "Most women can breastfeed normally after augmentation, especially with submuscular placement and specific incision locations.",
      },
      {
        question: "What's the difference between saline and silicone?",
        answer:
          "Silicone implants feel more natural, while saline can be adjusted during surgery and have smaller incisions for insertion.",
      },
    ],
  },
  "tummy-tuck": {
    title: "Tummy Tuck",
    subtitle: "Abdominoplasty",
    description:
      "Achieve a flatter, more toned abdomen by removing excess skin and tightening muscles.",
    longDescription:
      "A tummy tuck, or abdominoplasty, is designed to remove excess skin and fat from the abdomen while tightening weakened or separated muscles. This procedure is ideal for individuals who have experienced significant weight loss or pregnancy-related changes.",
    duration: "2-5 hours",
    recovery: "2-4 weeks",
    price: "Starting at $9,500",
    priceKsh: "Starting at KSh 1,235,000",
    popular: false,
    image: "✨",
    benefits: [
      "Flatter, tighter abdomen",
      "Improved muscle tone",
      "Removal of excess skin",
      "Enhanced body contours",
      "Improved posture",
      "Increased confidence",
    ],
    procedure: [
      "Comprehensive evaluation",
      "Surgical planning and marking",
      "General anesthesia administration",
      "Muscle repair and tightening",
      "Excess skin and fat removal",
      "Drain placement and closure",
    ],
    recovery: [
      "Week 1-2: Rest with limited movement",
      "Week 3-4: Gradual activity increase",
      "Week 6-8: Return to normal activities",
      "Month 3-6: Continued healing and improvement",
      "Month 6+: Final results apparent",
    ],
    faqs: [
      {
        question: "Am I a good candidate for a tummy tuck?",
        answer:
          "Good candidates have excess abdominal skin, weakened muscles, and are at a stable weight with realistic expectations.",
      },
      {
        question: "Can I have children after a tummy tuck?",
        answer:
          "Yes, but pregnancy may affect results. We typically recommend completing your family before the procedure.",
      },
      {
        question: "What's the difference between a mini and full tummy tuck?",
        answer:
          "A mini tummy tuck addresses only the lower abdomen with a smaller incision, while a full tummy tuck treats the entire abdomen.",
      },
    ],
  },
};

export default function ServiceDetail() {
  const { serviceSlug } = useParams();

  // If service doesn't exist, redirect to 404
  if (!serviceSlug || !serviceData[serviceSlug as keyof typeof serviceData]) {
    return <Navigate to="/404" replace />;
  }

  const service = serviceData[serviceSlug as keyof typeof serviceData];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-medical-navy via-purple-900 to-medical-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">{service.image}</div>
            {service.popular && (
              <Badge className="mb-4 bg-medical-gold text-black">
                <Star className="h-3 w-3 mr-1" />
                Most Popular
              </Badge>
            )}
            <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl text-purple-100 mb-6">{service.subtitle}</p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{service.duration}</span>
              </div>
              <div className="flex items-center">
                <Timer className="h-5 w-5 mr-2" />
                <span>{service.recovery} recovery</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                <span>{service.priceKsh}</span>
              </div>
            </div>
            <div className="mt-8">
              <BookingModal>
                <Button
                  size="lg"
                  className="bg-medical-gold text-black hover:bg-yellow-400"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Consultation
                </Button>
              </BookingModal>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About the Procedure */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Stethoscope className="h-6 w-6 mr-3 text-medical-gold" />
                    About the Procedure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {service.longDescription}
                  </p>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-6 w-6 mr-3 text-medical-gold" />
                    Key Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-3 text-green-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Procedure Steps */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-6 w-6 mr-3 text-medical-gold" />
                    Procedure Steps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {service.procedure.map((step, index) => (
                      <div key={index} className="flex">
                        <div className="flex-shrink-0 w-8 h-8 bg-medical-gold text-black rounded-full flex items-center justify-center font-bold mr-4">
                          {index + 1}
                        </div>
                        <p className="pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recovery Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-6 w-6 mr-3 text-medical-gold" />
                    Recovery Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {service.recovery.map((phase, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-medical-gold pl-4 py-2"
                      >
                        <p className="font-medium text-medical-navy">{phase}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* FAQs */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-6 w-6 mr-3 text-medical-gold" />
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {service.faqs.map((faq, index) => (
                      <div key={index}>
                        <h3 className="font-semibold text-medical-navy mb-2">
                          Q: {faq.question}
                        </h3>
                        <p className="text-gray-600 pl-4 border-l-2 border-gray-200">
                          A: {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Duration:</span>
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Recovery:</span>
                    <span>{service.recovery}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Starting Price:</span>
                    <span className="font-semibold text-medical-gold">
                      {service.priceKsh}
                    </span>
                  </div>
                  <div className="pt-4">
                    <BookingModal>
                      <Button className="w-full bg-medical-navy hover:bg-blue-800">
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule Consultation
                      </Button>
                    </BookingModal>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Get More Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Have questions about this procedure? Our expert team is here
                    to help.
                  </p>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/team">Meet Our Surgeons</Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/gallery">View Results Gallery</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Related Services */}
              <Card>
                <CardHeader>
                  <CardTitle>Related Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Link
                      to="/services"
                      className="block p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium">View All Services</span>
                      <ArrowRight className="h-4 w-4 ml-2 inline" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
