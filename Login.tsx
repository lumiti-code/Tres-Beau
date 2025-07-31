import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Shield,
  Heart,
  Star,
  CheckCircle,
} from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  // Get redirect URL from location state or default based on role
  const getRedirectPath = (role: string) => {
    const from = location.state?.from || "/";
    if (from !== "/") return from;

    switch (role) {
      case "admin":
        return "/admin";
      case "doctor":
        return "/doctor-portal";
      case "patient":
      default:
        return "/patient-portal";
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setError(""); // Clear error when user starts typing
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Basic validation
    if (!formData.email || !formData.password) {
      setError("Please fill in all required fields");
      setIsLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    try {
      await login(formData.email, formData.password);

      // The login function will update the user context
      // We need to determine the role to redirect appropriately
      // Since we can't access the user immediately after login, we'll use mock logic
      const mockUserRole = formData.email.includes("admin")
        ? "admin"
        : formData.email.includes("dr.")
          ? "doctor"
          : "patient";

      const redirectPath = getRedirectPath(mockUserRole);
      navigate(redirectPath);
    } catch (err: any) {
      setError(err.message || "Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-navy via-purple-900 to-medical-navy">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Welcome Content */}
            <div className="text-white space-y-8">
              <div>
                <h1 className="text-5xl font-bold mb-6">
                  Welcome Back to
                  <span className="text-medical-gold block">
                    Tres Beau Medical
                  </span>
                </h1>
                <p className="text-xl text-purple-100 leading-relaxed">
                  Access your personalized patient portal and continue your
                  journey to enhanced beauty and confidence.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-medical-gold rounded-full flex items-center justify-center">
                    <Shield className="h-4 w-4 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Secure Access</h3>
                    <p className="text-purple-200 text-sm">
                      Your medical information is protected with bank-level
                      security
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-medical-gold rounded-full flex items-center justify-center">
                    <Heart className="h-4 w-4 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Personal Care</h3>
                    <p className="text-purple-200 text-sm">
                      Access your treatment plans, appointments, and progress
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-medical-gold rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Expert Support</h3>
                    <p className="text-purple-200 text-sm">
                      Direct communication with our medical team
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-medical-gold rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Track Progress</h3>
                    <p className="text-purple-200 text-sm">
                      Monitor your recovery and see your beautiful results
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-purple-400/30">
                <p className="text-purple-200">
                  "The patient portal made my entire experience seamless. I
                  could track everything and communicate easily with Dr.
                  Santos."
                </p>
                <p className="text-sm text-medical-gold mt-2">
                  - Sarah M., Rhinoplasty Patient
                </p>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="flex justify-center">
              <Card className="w-full max-w-md shadow-2xl border-0">
                <CardHeader className="space-y-1 text-center">
                  <CardTitle className="text-2xl font-bold text-medical-navy">
                    Sign In
                  </CardTitle>
                  <CardDescription>
                    Enter your credentials to access your account
                  </CardDescription>
                </CardHeader>

                <form onSubmit={handleSubmit}>
                  <CardContent className="space-y-4">
                    {error && (
                      <Alert variant="destructive">
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    )}

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

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
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

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="rememberMe"
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onCheckedChange={(checked) =>
                            setFormData((prev) => ({
                              ...prev,
                              rememberMe: !!checked,
                            }))
                          }
                        />
                        <Label
                          htmlFor="rememberMe"
                          className="text-sm text-gray-600"
                        >
                          Remember me
                        </Label>
                      </div>
                      <Link
                        to="/forgot-password"
                        className="text-sm text-medical-purple hover:text-purple-700 transition-colors"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  </CardContent>

                  <CardFooter className="flex flex-col space-y-4">
                    <Button
                      type="submit"
                      className="w-full bg-medical-purple hover:bg-purple-700 text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Signing In...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          Sign In
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </div>
                      )}
                    </Button>

                    <div className="text-center text-sm text-gray-600">
                      Don't have an account?{" "}
                      <Link
                        to="/register"
                        className="text-medical-purple hover:text-purple-700 font-medium transition-colors"
                      >
                        Create one now
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
