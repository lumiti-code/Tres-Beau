import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  Calendar,
  ArrowRight,
  Shield,
  Heart,
  Star,
  CheckCircle,
  UserPlus,
} from "lucide-react";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    agreeToMarketing: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setError(""); // Clear error when user starts typing
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName) {
      return "Please enter your full name";
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      return "Please enter a valid email address";
    }

    if (!formData.phone || formData.phone.length < 10) {
      return "Please enter a valid phone number";
    }

    if (!formData.password || formData.password.length < 8) {
      return "Password must be at least 8 characters long";
    }

    if (formData.password !== formData.confirmPassword) {
      return "Passwords do not match";
    }

    if (!formData.agreeToTerms) {
      return "Please agree to the Terms of Service and Privacy Policy";
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setIsLoading(false);
      return;
    }

    try {
      await register(formData);

      // Registration successful, redirect to patient portal
      navigate("/patient-portal");
    } catch (err: any) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-navy via-purple-900 to-medical-navy">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Welcome Content */}
            <div className="text-white space-y-8 lg:sticky lg:top-24">
              <div>
                <h1 className="text-5xl font-bold mb-6">
                  Join the
                  <span className="text-medical-gold block">
                    Tres Beau Family
                  </span>
                </h1>
                <p className="text-xl text-purple-100 leading-relaxed">
                  Create your account and start your personalized journey to
                  enhanced beauty and confidence with Kenya's premier medical
                  aesthetic center.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-medical-gold rounded-full flex items-center justify-center">
                    <UserPlus className="h-4 w-4 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Exclusive Access</h3>
                    <p className="text-purple-200 text-sm">
                      Get priority booking, special offers, and personalized
                      treatment recommendations
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-medical-gold rounded-full flex items-center justify-center">
                    <Shield className="h-4 w-4 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Secure Platform</h3>
                    <p className="text-purple-200 text-sm">
                      Your personal and medical information is protected with
                      advanced encryption
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-medical-gold rounded-full flex items-center justify-center">
                    <Heart className="h-4 w-4 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Personalized Care</h3>
                    <p className="text-purple-200 text-sm">
                      Customized treatment plans based on your unique goals and
                      medical history
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-medical-gold rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Expert Team</h3>
                    <p className="text-purple-200 text-sm">
                      Connect directly with our board-certified surgeons and
                      medical professionals
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-purple-400/30">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-medical-gold text-medical-gold"
                      />
                    ))}
                  </div>
                  <span className="text-medical-gold font-semibold">4.9/5</span>
                </div>
                <p className="text-purple-200 text-sm">
                  Over 2,000+ satisfied patients have transformed their lives
                  with Tres Beau Medical Group
                </p>
              </div>
            </div>

            {/* Right Side - Registration Form */}
            <div className="flex justify-center">
              <Card className="w-full max-w-md shadow-2xl border-0">
                <CardHeader className="space-y-1 text-center">
                  <CardTitle className="text-2xl font-bold text-medical-navy">
                    Create Account
                  </CardTitle>
                  <CardDescription>
                    Fill in your details to get started
                  </CardDescription>
                </CardHeader>

                <form onSubmit={handleSubmit}>
                  <CardContent className="space-y-4">
                    {error && (
                      <Alert variant="destructive">
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    )}

                    {/* Name Fields */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="First name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder="Last name"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+254 700 000 000"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    {/* Date of Birth and Gender */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth">Date of Birth</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="dateOfBirth"
                            name="dateOfBirth"
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={handleInputChange}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <Select
                          value={formData.gender}
                          onValueChange={(value) =>
                            handleSelectChange("gender", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                            <SelectItem value="prefer-not-to-say">
                              Prefer not to say
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="pl-10 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="pl-10 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Agreements */}
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="agreeToTerms"
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onCheckedChange={(checked) =>
                            setFormData((prev) => ({
                              ...prev,
                              agreeToTerms: !!checked,
                            }))
                          }
                          className="mt-1"
                        />
                        <Label
                          htmlFor="agreeToTerms"
                          className="text-sm text-gray-600 leading-5"
                        >
                          I agree to the{" "}
                          <Link
                            to="/terms"
                            className="text-medical-purple hover:text-purple-700"
                          >
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link
                            to="/privacy"
                            className="text-medical-purple hover:text-purple-700"
                          >
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="agreeToMarketing"
                          name="agreeToMarketing"
                          checked={formData.agreeToMarketing}
                          onCheckedChange={(checked) =>
                            setFormData((prev) => ({
                              ...prev,
                              agreeToMarketing: !!checked,
                            }))
                          }
                          className="mt-1"
                        />
                        <Label
                          htmlFor="agreeToMarketing"
                          className="text-sm text-gray-600 leading-5"
                        >
                          I would like to receive marketing communications and
                          special offers
                        </Label>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="flex flex-col space-y-4">
                    <Button
                      type="submit"
                      className="w-full bg-medical-gold hover:bg-yellow-500 text-black font-semibold"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                          Creating Account...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          Create Account
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </div>
                      )}
                    </Button>

                    <div className="text-center text-sm text-gray-600">
                      Already have an account?{" "}
                      <Link
                        to="/login"
                        className="text-medical-purple hover:text-purple-700 font-medium transition-colors"
                      >
                        Sign in here
                      </Link>
                    </div>

                    <div className="text-center">
                      <Link
                        to="/"
                        className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                      >
                        ← Back to Home
                      </Link>
                    </div>
                  </CardFooter>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
