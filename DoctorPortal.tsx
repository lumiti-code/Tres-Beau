import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/AuthContext";
import {
  Calendar,
  Clock,
  Users,
  FileText,
  Settings,
  Bell,
  MessageSquare,
  Activity,
  Heart,
  TrendingUp,
  Phone,
  Video,
  Mail,
  Edit,
  Save,
  UserCheck,
  AlertCircle,
  CheckCircle,
  Star,
  DollarSign,
} from "lucide-react";

export default function DoctorPortal() {
  const { user } = useAuth();
  const [selectedTab, setSelectedTab] = useState("appointments");
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  // Mock data for doctor's dashboard
  const appointments = [
    {
      id: "1",
      patientName: "Sarah Johnson",
      patientEmail: "sarah.j@email.com",
      time: "9:00 AM",
      date: "Today",
      procedure: "Rhinoplasty Consultation",
      status: "confirmed",
      type: "in-person",
      notes: "First consultation for nose reshaping",
    },
    {
      id: "2",
      patientName: "Michael Chen",
      patientEmail: "m.chen@email.com",
      time: "11:30 AM",
      date: "Today",
      procedure: "Botox Follow-up",
      status: "confirmed",
      type: "video",
      notes: "2-week follow-up appointment",
    },
    {
      id: "3",
      patientName: "Emma Rodriguez",
      patientEmail: "emma.r@email.com",
      time: "2:00 PM",
      date: "Tomorrow",
      procedure: "Liposuction Pre-op",
      status: "pending",
      type: "in-person",
      notes: "Pre-operative assessment and planning",
    },
  ];

  const patients = [
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+254 700 123 456",
      lastVisit: "2024-01-15",
      nextAppointment: "2024-01-22",
      procedure: "Rhinoplasty",
      status: "Active Treatment",
      notes: "Excellent healing progress, no complications",
    },
    {
      id: "2",
      name: "Michael Chen",
      email: "m.chen@email.com",
      phone: "+254 700 234 567",
      lastVisit: "2024-01-10",
      nextAppointment: "2024-01-24",
      procedure: "Botox Treatment",
      status: "Follow-up",
      notes: "Very satisfied with results, considering additional areas",
    },
    {
      id: "3",
      name: "Emma Rodriguez",
      email: "emma.r@email.com",
      phone: "+254 700 345 678",
      lastVisit: "2024-01-08",
      nextAppointment: "2024-01-25",
      procedure: "Liposuction",
      status: "Pre-operative",
      notes: "All pre-op tests completed, cleared for surgery",
    },
  ];

  const todayStats = {
    appointmentsToday: 5,
    consultations: 3,
    surgeries: 1,
    revenue: "KSh 485,000",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={user?.avatar} />
                  <AvatarFallback>
                    {user?.firstName?.[0]}
                    {user?.lastName?.[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-3xl font-bold text-medical-navy">
                    Welcome, {user?.firstName} {user?.lastName}
                  </h1>
                  <p className="text-lg text-gray-600">
                    {user?.specialization}
                  </p>
                  <div className="flex items-center mt-1">
                    <Badge variant="secondary" className="mr-2">
                      {user?.department}
                    </Badge>
                    <Badge className="bg-green-100 text-green-800">
                      Online
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </Button>
                <Button variant="outline" size="sm">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Messages
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Calendar className="h-8 w-8 text-medical-purple" />
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">
                      Today's Appointments
                    </p>
                    <p className="text-2xl font-bold text-medical-navy">
                      {todayStats.appointmentsToday}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-medical-gold" />
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Consultations</p>
                    <p className="text-2xl font-bold text-medical-navy">
                      {todayStats.consultations}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Activity className="h-8 w-8 text-green-600" />
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Surgeries</p>
                    <p className="text-2xl font-bold text-medical-navy">
                      {todayStats.surgeries}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <DollarSign className="h-8 w-8 text-medical-purple" />
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Today's Revenue</p>
                    <p className="text-2xl font-bold text-medical-navy">
                      {todayStats.revenue}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="appointments">
                <Calendar className="h-4 w-4 mr-2" />
                Appointments
              </TabsTrigger>
              <TabsTrigger value="patients">
                <Users className="h-4 w-4 mr-2" />
                Patients
              </TabsTrigger>
              <TabsTrigger value="records">
                <FileText className="h-4 w-4 mr-2" />
                Medical Records
              </TabsTrigger>
              <TabsTrigger value="profile">
                <Settings className="h-4 w-4 mr-2" />
                Profile
              </TabsTrigger>
            </TabsList>

            {/* Appointments Tab */}
            <TabsContent value="appointments" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Today's Schedule
                  </CardTitle>
                  <CardDescription>
                    Manage your appointments and consultations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {appointments.map((appointment) => (
                      <div
                        key={appointment.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="text-center">
                            <div className="text-sm font-medium text-medical-navy">
                              {appointment.time}
                            </div>
                            <div className="text-xs text-gray-500">
                              {appointment.date}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-medical-navy">
                              {appointment.patientName}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {appointment.procedure}
                            </p>
                            <p className="text-xs text-gray-500">
                              {appointment.notes}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant={
                              appointment.status === "confirmed"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {appointment.status}
                          </Badge>
                          <Badge variant="outline">
                            {appointment.type === "video" ? (
                              <Video className="h-3 w-3 mr-1" />
                            ) : (
                              <Users className="h-3 w-3 mr-1" />
                            )}
                            {appointment.type}
                          </Badge>
                          <Button size="sm" variant="outline">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Contact
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Patients Tab */}
            <TabsContent value="patients" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Patient Management
                  </CardTitle>
                  <CardDescription>
                    View and manage your patients' information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {patients.map((patient) => (
                      <div
                        key={patient.id}
                        className="p-4 border rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <Avatar>
                              <AvatarFallback>
                                {patient.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-medium text-medical-navy">
                                {patient.name}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {patient.email}
                              </p>
                              <p className="text-sm text-gray-600">
                                {patient.phone}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge className="mb-2">{patient.status}</Badge>
                            <p className="text-sm text-gray-600">
                              {patient.procedure}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Last Visit:</span>
                            <span className="ml-2 text-medical-navy">
                              {patient.lastVisit}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-500">
                              Next Appointment:
                            </span>
                            <span className="ml-2 text-medical-navy">
                              {patient.nextAppointment}
                            </span>
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm text-gray-700">
                            {patient.notes}
                          </p>
                        </div>
                        <div className="mt-4 flex space-x-2">
                          <Button size="sm" variant="outline">
                            <FileText className="h-4 w-4 mr-1" />
                            View Records
                          </Button>
                          <Button size="sm" variant="outline">
                            <Phone className="h-4 w-4 mr-1" />
                            Call
                          </Button>
                          <Button size="sm" variant="outline">
                            <Mail className="h-4 w-4 mr-1" />
                            Email
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Medical Records Tab */}
            <TabsContent value="records" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Medical Records & Reports
                  </CardTitle>
                  <CardDescription>
                    Access patient records and generate reports
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <FileText className="h-8 w-8 text-medical-purple mb-4" />
                        <h3 className="font-semibold text-medical-navy mb-2">
                          Patient Files
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Access complete patient medical histories and
                          treatment records
                        </p>
                        <Button className="w-full" variant="outline">
                          View Files
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <TrendingUp className="h-8 w-8 text-medical-gold mb-4" />
                        <h3 className="font-semibold text-medical-navy mb-2">
                          Progress Reports
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Generate and review patient progress and outcome
                          reports
                        </p>
                        <Button className="w-full" variant="outline">
                          Generate Reports
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <Heart className="h-8 w-8 text-red-500 mb-4" />
                        <h3 className="font-semibold text-medical-navy mb-2">
                          Treatment Plans
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Create and modify personalized treatment plans
                        </p>
                        <Button className="w-full" variant="outline">
                          Manage Plans
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Settings className="h-5 w-5 mr-2" />
                      Professional Profile
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsEditingProfile(!isEditingProfile)}
                    >
                      {isEditingProfile ? (
                        <Save className="h-4 w-4 mr-2" />
                      ) : (
                        <Edit className="h-4 w-4 mr-2" />
                      )}
                      {isEditingProfile ? "Save Changes" : "Edit Profile"}
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          defaultValue={user?.firstName}
                          disabled={!isEditingProfile}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          defaultValue={user?.lastName}
                          disabled={!isEditingProfile}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          defaultValue={user?.email}
                          disabled={!isEditingProfile}
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="specialization">Specialization</Label>
                        <Input
                          id="specialization"
                          defaultValue={user?.specialization}
                          disabled={!isEditingProfile}
                        />
                      </div>
                      <div>
                        <Label htmlFor="department">Department</Label>
                        <Input
                          id="department"
                          defaultValue={user?.department}
                          disabled={!isEditingProfile}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          placeholder="+254 700 000 000"
                          disabled={!isEditingProfile}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="bio">Professional Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Enter your professional background and expertise..."
                      disabled={!isEditingProfile}
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
}
