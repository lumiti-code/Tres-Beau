import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Video,
  MapPin,
  Edit,
  Trash2,
  Plus,
  Filter,
  Search,
  CheckCircle,
  AlertCircle,
  XCircle,
} from "lucide-react";

export default function Appointments() {
  const { user, isAuthenticated } = useAuth();
  const [selectedTab, setSelectedTab] = useState("upcoming");

  // Mock appointments data
  const appointments = [
    {
      id: "1",
      patientName: "Sarah Johnson",
      doctorName: "Dr. Maria Santos",
      date: "2024-01-25",
      time: "10:00 AM",
      procedure: "Rhinoplasty Consultation",
      status: "confirmed",
      type: "in-person",
      location: "Clinic Room 1",
      notes: "First consultation for nose reshaping procedure",
      patientPhone: "+254 700 123 456",
      patientEmail: "sarah.j@email.com",
    },
    {
      id: "2",
      patientName: "Michael Chen",
      doctorName: "Dr. James Wilson",
      date: "2024-01-26",
      time: "2:30 PM",
      procedure: "Botox Follow-up",
      status: "pending",
      type: "video",
      location: "Video Call",
      notes: "2-week follow-up appointment",
      patientPhone: "+254 700 234 567",
      patientEmail: "m.chen@email.com",
    },
    {
      id: "3",
      patientName: "Emma Rodriguez",
      doctorName: "Dr. Maria Santos",
      date: "2024-01-28",
      time: "11:15 AM",
      procedure: "Liposuction Pre-op",
      status: "confirmed",
      type: "in-person",
      location: "Pre-op Suite",
      notes: "Pre-operative assessment and final planning",
      patientPhone: "+254 700 345 678",
      patientEmail: "emma.r@email.com",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="h-4 w-4" />;
      case "pending":
        return <AlertCircle className="h-4 w-4" />;
      case "cancelled":
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card className="p-8">
              <CardContent>
                <Calendar className="h-16 w-16 mx-auto text-medical-purple mb-4" />
                <h1 className="text-2xl font-bold text-medical-navy mb-4">
                  Access Your Appointments
                </h1>
                <p className="text-gray-600 mb-6">
                  Please sign in to view and manage your appointments.
                </p>
                <div className="space-x-4">
                  <Button className="bg-medical-purple hover:bg-purple-700">
                    Sign In
                  </Button>
                  <Button variant="outline">Create Account</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-medical-navy">
                  Appointments
                </h1>
                <p className="text-gray-600 mt-1">
                  {user?.role === "patient"
                    ? "Manage your upcoming appointments and consultation history"
                    : "View and manage patient appointments and schedules"}
                </p>
              </div>
              <Button className="bg-medical-purple hover:bg-purple-700">
                <Plus className="h-4 w-4 mr-2" />
                {user?.role === "patient"
                  ? "Book Appointment"
                  : "New Appointment"}
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Upcoming Appointments
                  </CardTitle>
                  <CardDescription>
                    Your confirmed appointments and consultations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {appointments
                      .filter((apt) => apt.status === "confirmed")
                      .map((appointment) => (
                        <div
                          key={appointment.id}
                          className="p-6 border rounded-lg hover:shadow-md transition-shadow bg-white"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-4">
                              <div className="text-center min-w-[80px]">
                                <div className="text-lg font-semibold text-medical-navy">
                                  {new Date(
                                    appointment.date,
                                  ).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                  })}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {appointment.time}
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                  <h3 className="font-semibold text-medical-navy">
                                    {appointment.procedure}
                                  </h3>
                                  <Badge
                                    className={getStatusColor(
                                      appointment.status,
                                    )}
                                  >
                                    {getStatusIcon(appointment.status)}
                                    <span className="ml-1 capitalize">
                                      {appointment.status}
                                    </span>
                                  </Badge>
                                </div>
                                <div className="space-y-1 text-sm text-gray-600">
                                  {user?.role !== "patient" && (
                                    <div className="flex items-center">
                                      <User className="h-4 w-4 mr-2" />
                                      <span>{appointment.patientName}</span>
                                    </div>
                                  )}
                                  <div className="flex items-center">
                                    <User className="h-4 w-4 mr-2" />
                                    <span>
                                      {user?.role === "patient"
                                        ? appointment.doctorName
                                        : appointment.patientName}
                                    </span>
                                  </div>
                                  <div className="flex items-center">
                                    {appointment.type === "video" ? (
                                      <Video className="h-4 w-4 mr-2" />
                                    ) : (
                                      <MapPin className="h-4 w-4 mr-2" />
                                    )}
                                    <span>{appointment.location}</span>
                                  </div>
                                  {appointment.notes && (
                                    <p className="text-gray-700 mt-2">
                                      {appointment.notes}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              {appointment.type === "video" && (
                                <Button
                                  size="sm"
                                  className="bg-blue-600 hover:bg-blue-700"
                                >
                                  <Video className="h-4 w-4 mr-1" />
                                  Join
                                </Button>
                              )}
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4 mr-1" />
                                Edit
                              </Button>
                              {user?.role !== "patient" && (
                                <Button size="sm" variant="outline">
                                  <Phone className="h-4 w-4 mr-1" />
                                  Call
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pending" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    Pending Appointments
                  </CardTitle>
                  <CardDescription>
                    Appointments awaiting confirmation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {appointments
                      .filter((apt) => apt.status === "pending")
                      .map((appointment) => (
                        <div
                          key={appointment.id}
                          className="p-6 border rounded-lg hover:shadow-md transition-shadow bg-white border-yellow-200"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-4">
                              <div className="text-center min-w-[80px]">
                                <div className="text-lg font-semibold text-medical-navy">
                                  {new Date(
                                    appointment.date,
                                  ).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                  })}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {appointment.time}
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                  <h3 className="font-semibold text-medical-navy">
                                    {appointment.procedure}
                                  </h3>
                                  <Badge
                                    className={getStatusColor(
                                      appointment.status,
                                    )}
                                  >
                                    {getStatusIcon(appointment.status)}
                                    <span className="ml-1 capitalize">
                                      {appointment.status}
                                    </span>
                                  </Badge>
                                </div>
                                <div className="space-y-1 text-sm text-gray-600">
                                  <div className="flex items-center">
                                    <User className="h-4 w-4 mr-2" />
                                    <span>
                                      {user?.role === "patient"
                                        ? appointment.doctorName
                                        : appointment.patientName}
                                    </span>
                                  </div>
                                  <div className="flex items-center">
                                    {appointment.type === "video" ? (
                                      <Video className="h-4 w-4 mr-2" />
                                    ) : (
                                      <MapPin className="h-4 w-4 mr-2" />
                                    )}
                                    <span>{appointment.location}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              {user?.role !== "patient" && (
                                <>
                                  <Button
                                    size="sm"
                                    className="bg-green-600 hover:bg-green-700"
                                  >
                                    <CheckCircle className="h-4 w-4 mr-1" />
                                    Confirm
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="text-red-600 hover:bg-red-50"
                                  >
                                    <XCircle className="h-4 w-4 mr-1" />
                                    Decline
                                  </Button>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="completed" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Completed Appointments
                  </CardTitle>
                  <CardDescription>
                    Your appointment history and past consultations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-gray-500">
                    <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No completed appointments yet.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cancelled" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <XCircle className="h-5 w-5 mr-2" />
                    Cancelled Appointments
                  </CardTitle>
                  <CardDescription>
                    Previously cancelled or rescheduled appointments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-gray-500">
                    <XCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No cancelled appointments.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />

      {/* Live Chat */}
      <LiveChat />
    </div>
  );
}
