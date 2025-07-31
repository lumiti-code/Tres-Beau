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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Users,
  Images,
  FileText,
  Settings,
  Plus,
  MessageSquare,
  BarChart3,
  Calendar,
  DollarSign,
  Save,
  Edit,
  Trash2,
  HelpCircle,
} from "lucide-react";

export default function Admin() {
  const [selectedTab, setSelectedTab] = useState("dashboard");

  // Dialog states
  const [isAddingGalleryItem, setIsAddingGalleryItem] = useState(false);
  const [isAddingTeamMember, setIsAddingTeamMember] = useState(false);
  const [isAddingBlogPost, setIsAddingBlogPost] = useState(false);
  const [isAddingFaq, setIsAddingFaq] = useState(false);
  const [isAddingAppointment, setIsAddingAppointment] = useState(false);

  // Form states
  const [newGalleryItem, setNewGalleryItem] = useState({
    title: "",
    procedure: "",
    description: "",
    category: "",
    beforeImage: "",
    afterImage: "",
    featured: false,
  });

  const [newTeamMember, setNewTeamMember] = useState({
    name: "",
    specialty: "",
    bio: "",
    image: "",
    experience: "",
    education: "",
    certifications: "",
  });

  const [newBlogPost, setNewBlogPost] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    category: "General",
    featured: false,
  });

  const [newFaq, setNewFaq] = useState({
    question: "",
    answer: "",
    category: "General",
    featured: false,
  });

  const [newAppointment, setNewAppointment] = useState({
    patientName: "",
    patientEmail: "",
    patientPhone: "",
    procedure: "",
    doctor: "",
    date: "",
    time: "",
    type: "in-person",
    notes: "",
  });

  // Data states
  const [managedGalleryItems, setManagedGalleryItems] = useState([
    {
      id: "1",
      title: "Natural Rhinoplasty Result",
      procedure: "Rhinoplasty",
      description: "Beautiful, natural-looking nose reshaping",
      category: "Facial Surgery",
      beforeImage: "/api/placeholder/400/300",
      afterImage: "/api/placeholder/400/300",
      featured: true,
    },
    {
      id: "2",
      title: "Breast Augmentation",
      procedure: "Breast Surgery",
      description: "Enhanced confidence with natural results",
      category: "Breast Surgery",
      beforeImage: "/api/placeholder/400/300",
      afterImage: "/api/placeholder/400/300",
      featured: false,
    },
  ]);

  const [managedTeamMembers, setManagedTeamMembers] = useState([
    {
      id: "1",
      name: "Dr. Maria Santos",
      specialty: "Facial Plastic Surgery",
      bio: "Board-certified plastic surgeon with 15+ years experience",
      image: "/api/placeholder/400/400",
      experience: "15+ years",
      education: "Harvard Medical School",
      certifications: "Board Certified Plastic Surgeon",
    },
    {
      id: "2",
      name: "Dr. James Rodriguez",
      specialty: "Body Contouring",
      bio: "Expert in body sculpting and reconstructive procedures",
      image: "/api/placeholder/400/400",
      experience: "12+ years",
      education: "Johns Hopkins University",
      certifications: "ABPS Certification",
    },
  ]);
  const [blogPosts, setBlogPosts] = useState([
    {
      id: "1",
      title: "5 Things to Consider Before Surgery",
      excerpt: "Essential preparation tips for your procedure",
      content: "When considering plastic surgery...",
      author: "Dr. Maria Santos",
      category: "Tips",
      featured: true,
      date: "2024-01-20",
    },
  ]);
  const [faqs, setFaqs] = useState([
    {
      id: "1",
      question: "How do I prepare for surgery?",
      answer:
        "Follow all pre-operative instructions provided by your surgeon...",
      category: "General",
      featured: true,
    },
  ]);

  const [appointments, setAppointments] = useState([
    {
      id: "1",
      patientName: "Emily Thompson",
      patientEmail: "emily.t@email.com",
      patientPhone: "+1 (555) 123-4567",
      procedure: "Rhinoplasty Consultation",
      doctor: "Dr. Maria Santos",
      date: "2024-01-25",
      time: "10:00 AM",
      status: "confirmed",
      type: "in-person",
      notes: "Initial consultation for rhinoplasty procedure",
    },
    {
      id: "2",
      patientName: "James Wilson",
      patientEmail: "james.w@email.com",
      patientPhone: "+1 (555) 987-6543",
      procedure: "Follow-up Check",
      doctor: "Dr. James Rodriguez",
      date: "2024-01-26",
      time: "2:00 PM",
      status: "pending",
      type: "video",
      notes: "Post-surgery follow-up",
    },
  ]);

  // Form handlers
  const handleAddGalleryItem = () => {
    if (!newGalleryItem.title || !newGalleryItem.procedure) return;

    const item = {
      ...newGalleryItem,
      id: Date.now().toString(),
    };

    setManagedGalleryItems((prev) => [...prev, item]);
    setNewGalleryItem({
      title: "",
      procedure: "",
      description: "",
      category: "",
      beforeImage: "",
      afterImage: "",
      featured: false,
    });
    setIsAddingGalleryItem(false);
  };

  const handleAddTeamMember = () => {
    if (!newTeamMember.name || !newTeamMember.specialty) return;

    const member = {
      ...newTeamMember,
      id: Date.now().toString(),
    };

    setManagedTeamMembers((prev) => [...prev, member]);
    setNewTeamMember({
      name: "",
      specialty: "",
      bio: "",
      image: "",
      experience: "",
      education: "",
      certifications: "",
    });
    setIsAddingTeamMember(false);
  };

  const handleAddBlogPost = () => {
    if (!newBlogPost.title || !newBlogPost.content) return;

    const post = {
      ...newBlogPost,
      id: Date.now().toString(),
      date: new Date().toISOString().split("T")[0],
    };

    setBlogPosts((prev) => [...prev, post]);
    setNewBlogPost({
      title: "",
      excerpt: "",
      content: "",
      author: "",
      category: "General",
      featured: false,
    });
    setIsAddingBlogPost(false);
  };

  const handleAddFaq = () => {
    if (!newFaq.question || !newFaq.answer) return;

    const faq = {
      ...newFaq,
      id: Date.now().toString(),
    };

    setFaqs((prev) => [...prev, faq]);
    setNewFaq({
      question: "",
      answer: "",
      category: "General",
      featured: false,
    });
    setIsAddingFaq(false);
  };

  const handleAddAppointment = () => {
    if (
      !newAppointment.patientName ||
      !newAppointment.doctor ||
      !newAppointment.date
    )
      return;

    const appointment = {
      ...newAppointment,
      id: Date.now().toString(),
      status: "pending",
    };

    setAppointments((prev) => [...prev, appointment]);
    setNewAppointment({
      patientName: "",
      patientEmail: "",
      patientPhone: "",
      procedure: "",
      doctor: "",
      date: "",
      time: "",
      type: "in-person",
      notes: "",
    });
    setIsAddingAppointment(false);
  };

  const handleDeleteItem = (type: string, id: string) => {
    switch (type) {
      case "gallery":
        setManagedGalleryItems((prev) => prev.filter((item) => item.id !== id));
        break;
      case "team":
        setManagedTeamMembers((prev) =>
          prev.filter((member) => member.id !== id),
        );
        break;
      case "blog":
        setBlogPosts((prev) => prev.filter((post) => post.id !== id));
        break;
      case "faq":
        setFaqs((prev) => prev.filter((faq) => faq.id !== id));
        break;
      case "appointment":
        setAppointments((prev) =>
          prev.filter((appointment) => appointment.id !== id),
        );
        break;
    }
  };

  const analytics = {
    totalPatients: 1247,
    activeChats: 12,
    monthlyRevenue: 2340000,
    appointmentsToday: 8,
  };

  const sampleGalleryItems = [
    {
      id: "1",
      title: "Natural Rhinoplasty Result",
      procedure: "Rhinoplasty",
      description: "Beautiful, natural-looking nose reshaping",
    },
    {
      id: "2",
      title: "Breast Augmentation",
      procedure: "Breast Surgery",
      description: "Enhanced confidence with natural results",
    },
  ];

  const sampleTeamMembers = [
    {
      id: "1",
      name: "Dr. Maria Santos",
      specialty: "Facial Plastic Surgery",
      bio: "Board-certified plastic surgeon with 15+ years experience",
    },
    {
      id: "2",
      name: "Dr. James Rodriguez",
      specialty: "Body Contouring",
      bio: "Expert in body sculpting and reconstructive procedures",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-medical-navy">
            Admin Dashboard
          </h1>
          <p className="text-medical-gray mt-2">
            Manage your clinic's content, team, and settings
          </p>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-8 mb-8 bg-white">
            <TabsTrigger
              value="dashboard"
              className="data-[state=active]:bg-medical-purple data-[state=active]:text-white flex items-center gap-2"
            >
              <BarChart3 className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger
              value="gallery"
              className="data-[state=active]:bg-medical-purple data-[state=active]:text-white flex items-center gap-2"
            >
              <Images className="h-4 w-4" />
              Gallery
            </TabsTrigger>
            <TabsTrigger
              value="team"
              className="data-[state=active]:bg-medical-purple data-[state=active]:text-white flex items-center gap-2"
            >
              <Users className="h-4 w-4" />
              Team
            </TabsTrigger>
            <TabsTrigger
              value="schedule"
              className="data-[state=active]:bg-medical-purple data-[state=active]:text-white flex items-center gap-2"
            >
              <Calendar className="h-4 w-4" />
              Schedule
            </TabsTrigger>
            <TabsTrigger
              value="payments"
              className="data-[state=active]:bg-medical-purple data-[state=active]:text-white flex items-center gap-2"
            >
              <DollarSign className="h-4 w-4" />
              Payments
            </TabsTrigger>
            <TabsTrigger
              value="blog"
              className="data-[state=active]:bg-medical-purple data-[state=active]:text-white flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              Blog
            </TabsTrigger>
            <TabsTrigger
              value="faq"
              className="data-[state=active]:bg-medical-purple data-[state=active]:text-white flex items-center gap-2"
            >
              <MessageSquare className="h-4 w-4" />
              FAQ
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="data-[state=active]:bg-medical-purple data-[state=active]:text-white flex items-center gap-2"
            >
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Dashboard */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Patients
                  </CardTitle>
                  <Users className="h-4 w-4 text-medical-purple" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-medical-purple">
                    {analytics.totalPatients.toLocaleString()}
                  </div>
                  <p className="text-xs text-green-600">+12% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Chats
                  </CardTitle>
                  <MessageSquare className="h-4 w-4 text-medical-purple" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-medical-purple">
                    {analytics.activeChats}
                  </div>
                  <p className="text-xs text-green-600">3 new today</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Monthly Revenue
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-medical-purple" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-medical-purple">
                    KSh {analytics.monthlyRevenue.toLocaleString()}
                  </div>
                  <p className="text-xs text-green-600">+8% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Appointments Today
                  </CardTitle>
                  <Calendar className="h-4 w-4 text-medical-purple" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-medical-purple">
                    {analytics.appointmentsToday}
                  </div>
                  <p className="text-xs text-medical-gray">2 remaining</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button
                    variant="outline"
                    className="flex flex-col gap-2 h-auto py-4 border-medical-purple text-medical-purple hover:bg-medical-purple hover:text-white"
                    onClick={() => setSelectedTab("gallery")}
                  >
                    <Images className="h-6 w-6" />
                    <span className="text-center">Manage Gallery</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex flex-col gap-2 h-auto py-4 border-medical-purple text-medical-purple hover:bg-medical-purple hover:text-white"
                    onClick={() => setSelectedTab("team")}
                  >
                    <Users className="h-6 w-6" />
                    <span className="text-center">Manage Team</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex flex-col gap-2 h-auto py-4 border-medical-purple text-medical-purple hover:bg-medical-purple hover:text-white"
                    onClick={() => setSelectedTab("schedule")}
                  >
                    <Calendar className="h-6 w-6" />
                    <span className="text-center">View Schedule</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex flex-col gap-2 h-auto py-4 border-medical-purple text-medical-purple hover:bg-medical-purple hover:text-white"
                    onClick={() => setSelectedTab("payments")}
                  >
                    <DollarSign className="h-6 w-6" />
                    <span className="text-center">View Payments</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gallery Management */}
          <TabsContent value="gallery" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-medical-navy">
                Gallery Management
              </h2>
              <Dialog
                open={isAddingGalleryItem}
                onOpenChange={setIsAddingGalleryItem}
              >
                <DialogTrigger asChild>
                  <Button className="bg-medical-purple hover:bg-medical-purple-dark">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Gallery Item
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Add New Gallery Item</DialogTitle>
                    <DialogDescription>
                      Add a new before/after photo to the gallery
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="gallery-title">Title</Label>
                        <Input
                          id="gallery-title"
                          value={newGalleryItem.title}
                          onChange={(e) =>
                            setNewGalleryItem({
                              ...newGalleryItem,
                              title: e.target.value,
                            })
                          }
                          placeholder="e.g., Natural Rhinoplasty Result"
                        />
                      </div>
                      <div>
                        <Label htmlFor="gallery-procedure">Procedure</Label>
                        <Input
                          id="gallery-procedure"
                          value={newGalleryItem.procedure}
                          onChange={(e) =>
                            setNewGalleryItem({
                              ...newGalleryItem,
                              procedure: e.target.value,
                            })
                          }
                          placeholder="e.g., Rhinoplasty"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="gallery-description">Description</Label>
                      <Textarea
                        id="gallery-description"
                        value={newGalleryItem.description}
                        onChange={(e) =>
                          setNewGalleryItem({
                            ...newGalleryItem,
                            description: e.target.value,
                          })
                        }
                        placeholder="Describe the transformation and results"
                        rows={3}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="gallery-category">Category</Label>
                        <Select
                          value={newGalleryItem.category}
                          onValueChange={(value) =>
                            setNewGalleryItem({
                              ...newGalleryItem,
                              category: value,
                            })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Facial Surgery">
                              Facial Surgery
                            </SelectItem>
                            <SelectItem value="Body Contouring">
                              Body Contouring
                            </SelectItem>
                            <SelectItem value="Breast Surgery">
                              Breast Surgery
                            </SelectItem>
                            <SelectItem value="Non-Surgical">
                              Non-Surgical
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center space-x-2 mt-6">
                        <Switch
                          id="gallery-featured"
                          checked={newGalleryItem.featured}
                          onCheckedChange={(checked) =>
                            setNewGalleryItem({
                              ...newGalleryItem,
                              featured: checked,
                            })
                          }
                        />
                        <Label htmlFor="gallery-featured">
                          Featured in gallery
                        </Label>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setIsAddingGalleryItem(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleAddGalleryItem}
                      className="bg-medical-purple hover:bg-medical-purple-dark"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save Gallery Item
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {managedGalleryItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                    <Images className="h-12 w-12 text-gray-400" />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <CardDescription>{item.procedure}</CardDescription>
                        <Badge variant="outline" className="text-xs mt-1">
                          {item.category}
                        </Badge>
                      </div>
                      {item.featured && (
                        <Badge className="bg-yellow-500 text-black">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:text-red-700"
                        onClick={() => handleDeleteItem("gallery", item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Team Management */}
          <TabsContent value="team" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-medical-navy">
                Team Management
              </h2>
              <Dialog
                open={isAddingTeamMember}
                onOpenChange={setIsAddingTeamMember}
              >
                <DialogTrigger asChild>
                  <Button className="bg-medical-purple hover:bg-medical-purple-dark">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Team Member
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Add New Team Member</DialogTitle>
                    <DialogDescription>
                      Add a new doctor or staff member to the team
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4 px-6 max-h-96 overflow-y-auto">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="team-name">Full Name</Label>
                        <Input
                          id="team-name"
                          value={newTeamMember.name}
                          onChange={(e) =>
                            setNewTeamMember({
                              ...newTeamMember,
                              name: e.target.value,
                            })
                          }
                          placeholder="Dr. John Smith"
                        />
                      </div>
                      <div>
                        <Label htmlFor="team-specialty">Specialty</Label>
                        <Input
                          id="team-specialty"
                          value={newTeamMember.specialty}
                          onChange={(e) =>
                            setNewTeamMember({
                              ...newTeamMember,
                              specialty: e.target.value,
                            })
                          }
                          placeholder="Facial Plastic Surgery"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="team-experience">Experience</Label>
                        <Input
                          id="team-experience"
                          value={newTeamMember.experience}
                          onChange={(e) =>
                            setNewTeamMember({
                              ...newTeamMember,
                              experience: e.target.value,
                            })
                          }
                          placeholder="15+ years"
                        />
                      </div>
                      <div>
                        <Label htmlFor="team-image">Profile Image URL</Label>
                        <Input
                          id="team-image"
                          value={newTeamMember.image}
                          onChange={(e) =>
                            setNewTeamMember({
                              ...newTeamMember,
                              image: e.target.value,
                            })
                          }
                          placeholder="https://example.com/photo.jpg"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="team-bio">Bio</Label>
                      <Textarea
                        id="team-bio"
                        value={newTeamMember.bio}
                        onChange={(e) =>
                          setNewTeamMember({
                            ...newTeamMember,
                            bio: e.target.value,
                          })
                        }
                        placeholder="Brief biography and expertise"
                        rows={3}
                      />
                    </div>
                    <div>
                      <Label htmlFor="team-education">Education</Label>
                      <Input
                        id="team-education"
                        value={newTeamMember.education}
                        onChange={(e) =>
                          setNewTeamMember({
                            ...newTeamMember,
                            education: e.target.value,
                          })
                        }
                        placeholder="Harvard Medical School"
                      />
                    </div>
                    <div>
                      <Label htmlFor="team-certifications">
                        Certifications
                      </Label>
                      <Input
                        id="team-certifications"
                        value={newTeamMember.certifications}
                        onChange={(e) =>
                          setNewTeamMember({
                            ...newTeamMember,
                            certifications: e.target.value,
                          })
                        }
                        placeholder="Board Certified Plastic Surgeon"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setIsAddingTeamMember(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleAddTeamMember}
                      className="bg-medical-purple hover:bg-medical-purple-dark"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save Team Member
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {managedTeamMembers.map((member) => (
                <Card key={member.id} className="overflow-hidden">
                  <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Users className="h-12 w-12 text-gray-400" />
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.specialty}</CardDescription>
                    <p className="text-sm text-gray-500">{member.experience}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {member.bio}
                    </p>
                    <div className="text-xs text-gray-500 mb-3">
                      <p>
                        <strong>Education:</strong> {member.education}
                      </p>
                      <p>
                        <strong>Certifications:</strong> {member.certifications}
                      </p>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:text-red-700"
                        onClick={() => handleDeleteItem("team", member.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Schedule Management */}
          <TabsContent value="schedule" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-medical-navy">
                Schedule Management
              </h2>
              <Dialog
                open={isAddingAppointment}
                onOpenChange={setIsAddingAppointment}
              >
                <DialogTrigger asChild>
                  <Button className="bg-medical-purple hover:bg-medical-purple-dark">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Appointment
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Add New Appointment</DialogTitle>
                    <DialogDescription>
                      Schedule a new appointment for a patient
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4 px-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="patient-name">Patient Name</Label>
                        <Input
                          id="patient-name"
                          value={newAppointment.patientName}
                          onChange={(e) =>
                            setNewAppointment({
                              ...newAppointment,
                              patientName: e.target.value,
                            })
                          }
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <Label htmlFor="patient-email">Email</Label>
                        <Input
                          id="patient-email"
                          type="email"
                          value={newAppointment.patientEmail}
                          onChange={(e) =>
                            setNewAppointment({
                              ...newAppointment,
                              patientEmail: e.target.value,
                            })
                          }
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="patient-phone">Phone Number</Label>
                        <Input
                          id="patient-phone"
                          value={newAppointment.patientPhone}
                          onChange={(e) =>
                            setNewAppointment({
                              ...newAppointment,
                              patientPhone: e.target.value,
                            })
                          }
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <Label htmlFor="appointment-procedure">Procedure</Label>
                        <Select
                          value={newAppointment.procedure}
                          onValueChange={(value) =>
                            setNewAppointment({
                              ...newAppointment,
                              procedure: value,
                            })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select procedure" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Consultation">
                              Consultation
                            </SelectItem>
                            <SelectItem value="Rhinoplasty">
                              Rhinoplasty
                            </SelectItem>
                            <SelectItem value="Breast Augmentation">
                              Breast Augmentation
                            </SelectItem>
                            <SelectItem value="Facelift">Facelift</SelectItem>
                            <SelectItem value="Tummy Tuck">
                              Tummy Tuck
                            </SelectItem>
                            <SelectItem value="Follow-up">Follow-up</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="appointment-doctor">Doctor</Label>
                        <Select
                          value={newAppointment.doctor}
                          onValueChange={(value) =>
                            setNewAppointment({
                              ...newAppointment,
                              doctor: value,
                            })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select doctor" />
                          </SelectTrigger>
                          <SelectContent>
                            {managedTeamMembers.map((member) => (
                              <SelectItem key={member.id} value={member.name}>
                                {member.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="appointment-type">Type</Label>
                        <Select
                          value={newAppointment.type}
                          onValueChange={(value) =>
                            setNewAppointment({
                              ...newAppointment,
                              type: value,
                            })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="in-person">In-Person</SelectItem>
                            <SelectItem value="video">Video Call</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="appointment-date">Date</Label>
                        <Input
                          id="appointment-date"
                          type="date"
                          value={newAppointment.date}
                          onChange={(e) =>
                            setNewAppointment({
                              ...newAppointment,
                              date: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="appointment-time">Time</Label>
                        <Input
                          id="appointment-time"
                          type="time"
                          value={newAppointment.time}
                          onChange={(e) =>
                            setNewAppointment({
                              ...newAppointment,
                              time: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="appointment-notes">Notes</Label>
                      <Textarea
                        id="appointment-notes"
                        value={newAppointment.notes}
                        onChange={(e) =>
                          setNewAppointment({
                            ...newAppointment,
                            notes: e.target.value,
                          })
                        }
                        placeholder="Additional notes about the appointment..."
                        rows={3}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setIsAddingAppointment(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleAddAppointment}
                      className="bg-medical-purple hover:bg-medical-purple-dark"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Schedule Appointment
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Scheduled Appointments</CardTitle>
                <CardDescription>
                  Manage and view all scheduled appointments (
                  {appointments.length} total)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {appointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-medium text-medical-navy mb-1">
                            {appointment.patientName}
                          </h4>
                          <p className="text-sm text-gray-600 mb-1">
                            <strong>Procedure:</strong> {appointment.procedure}
                          </p>
                          <p className="text-sm text-gray-600 mb-1">
                            <strong>Doctor:</strong> {appointment.doctor}
                          </p>
                          <p className="text-sm text-gray-600 mb-1">
                            <strong>Date & Time:</strong> {appointment.date} at{" "}
                            {appointment.time}
                          </p>
                          <p className="text-sm text-gray-600 mb-1">
                            <strong>Contact:</strong> {appointment.patientEmail}{" "}
                            • {appointment.patientPhone}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge
                              className={`text-xs ${
                                appointment.status === "confirmed"
                                  ? "bg-green-100 text-green-800"
                                  : appointment.status === "pending"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                              }`}
                            >
                              {appointment.status}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {appointment.type}
                            </Badge>
                          </div>
                          {appointment.notes && (
                            <p className="text-sm text-gray-500 italic mt-2">
                              {appointment.notes}
                            </p>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:text-red-700"
                            onClick={() =>
                              handleDeleteItem("appointment", appointment.id)
                            }
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                  {appointments.length === 0 && (
                    <div className="text-center py-8">
                      <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        No appointments scheduled
                      </h3>
                      <p className="text-gray-500 mb-4">
                        Start by adding your first appointment
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payment Management */}
          <TabsContent value="payments" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-medical-navy">
                Payment Management
              </h2>
              <Button className="bg-medical-purple hover:bg-medical-purple-dark">
                <Plus className="h-4 w-4 mr-2" />
                Add Payment
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Total Revenue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">
                    KSh 2,340,000
                  </div>
                  <p className="text-xs text-gray-500">This month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Pending Payments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-600">
                    KSh 180,000
                  </div>
                  <p className="text-xs text-gray-500">5 payments</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Success Rate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-medical-purple">
                    98%
                  </div>
                  <p className="text-xs text-gray-500">Payment completion</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Payments</CardTitle>
                <CardDescription>
                  Track and manage patient payments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Emily Thompson</h4>
                        <p className="text-sm text-gray-600">
                          Rhinoplasty - KSh 85,000
                        </p>
                        <p className="text-sm text-gray-600">
                          Paid: KSh 20,000
                        </p>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800">
                        Partial
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Michael Davis</h4>
                        <p className="text-sm text-gray-600">
                          Consultation - KSh 5,000
                        </p>
                        <p className="text-sm text-gray-600">Paid: KSh 5,000</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        Paid
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Blog Management */}
          <TabsContent value="blog" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-medical-navy">
                Blog Management
              </h2>
              <Dialog
                open={isAddingBlogPost}
                onOpenChange={setIsAddingBlogPost}
              >
                <DialogTrigger asChild>
                  <Button className="bg-medical-purple hover:bg-medical-purple-dark">
                    <Plus className="h-4 w-4 mr-2" />
                    New Blog Post
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Create New Blog Post</DialogTitle>
                    <DialogDescription>
                      Write engaging content for your patients and visitors
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="blog-title">Title</Label>
                        <Input
                          id="blog-title"
                          value={newBlogPost.title}
                          onChange={(e) =>
                            setNewBlogPost({
                              ...newBlogPost,
                              title: e.target.value,
                            })
                          }
                          placeholder="5 Things to Consider Before Surgery"
                        />
                      </div>
                      <div>
                        <Label htmlFor="blog-author">Author</Label>
                        <Select
                          value={newBlogPost.author}
                          onValueChange={(value) =>
                            setNewBlogPost({
                              ...newBlogPost,
                              author: value,
                            })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select author" />
                          </SelectTrigger>
                          <SelectContent>
                            {managedTeamMembers.map((member) => (
                              <SelectItem key={member.id} value={member.name}>
                                {member.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="blog-category">Category</Label>
                        <Select
                          value={newBlogPost.category}
                          onValueChange={(value) =>
                            setNewBlogPost({
                              ...newBlogPost,
                              category: value,
                            })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Tips">Tips & Advice</SelectItem>
                            <SelectItem value="Procedures">
                              Procedures
                            </SelectItem>
                            <SelectItem value="Recovery">Recovery</SelectItem>
                            <SelectItem value="News">News</SelectItem>
                            <SelectItem value="General">General</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center space-x-2 mt-6">
                        <Switch
                          id="blog-featured"
                          checked={newBlogPost.featured}
                          onCheckedChange={(checked) =>
                            setNewBlogPost({
                              ...newBlogPost,
                              featured: checked,
                            })
                          }
                        />
                        <Label htmlFor="blog-featured">Featured post</Label>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="blog-excerpt">Excerpt</Label>
                      <Textarea
                        id="blog-excerpt"
                        value={newBlogPost.excerpt}
                        onChange={(e) =>
                          setNewBlogPost({
                            ...newBlogPost,
                            excerpt: e.target.value,
                          })
                        }
                        placeholder="Brief description of the blog post..."
                        rows={2}
                      />
                    </div>
                    <div>
                      <Label htmlFor="blog-content">Content</Label>
                      <Textarea
                        id="blog-content"
                        value={newBlogPost.content}
                        onChange={(e) =>
                          setNewBlogPost({
                            ...newBlogPost,
                            content: e.target.value,
                          })
                        }
                        placeholder="Write your blog post content here..."
                        rows={8}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setIsAddingBlogPost(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleAddBlogPost}
                      className="bg-medical-purple hover:bg-medical-purple-dark"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save Blog Post
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg line-clamp-2">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2 mt-1">
                          {post.excerpt}
                        </CardDescription>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline" className="text-xs">
                            {post.category}
                          </Badge>
                          {post.featured && (
                            <Badge className="bg-yellow-500 text-black text-xs">
                              Featured
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span>By {post.author}</span>
                      <span>{post.date}</span>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:text-red-700"
                        onClick={() => handleDeleteItem("blog", post.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* FAQ Management */}
          <TabsContent value="faq" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-medical-navy">
                FAQ Management
              </h2>
              <Dialog open={isAddingFaq} onOpenChange={setIsAddingFaq}>
                <DialogTrigger asChild>
                  <Button className="bg-medical-purple hover:bg-medical-purple-dark">
                    <Plus className="h-4 w-4 mr-2" />
                    Add FAQ
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Add New FAQ</DialogTitle>
                    <DialogDescription>
                      Create a new frequently asked question and answer
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div>
                      <Label htmlFor="faq-question">Question</Label>
                      <Input
                        id="faq-question"
                        value={newFaq.question}
                        onChange={(e) =>
                          setNewFaq({
                            ...newFaq,
                            question: e.target.value,
                          })
                        }
                        placeholder="How do I know if I'm a good candidate for surgery?"
                      />
                    </div>
                    <div>
                      <Label htmlFor="faq-answer">Answer</Label>
                      <Textarea
                        id="faq-answer"
                        value={newFaq.answer}
                        onChange={(e) =>
                          setNewFaq({
                            ...newFaq,
                            answer: e.target.value,
                          })
                        }
                        placeholder="Provide a detailed answer to help patients understand..."
                        rows={4}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="faq-category">Category</Label>
                        <Select
                          value={newFaq.category}
                          onValueChange={(value) =>
                            setNewFaq({
                              ...newFaq,
                              category: value,
                            })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="General">General</SelectItem>
                            <SelectItem value="Safety">Safety</SelectItem>
                            <SelectItem value="Recovery">Recovery</SelectItem>
                            <SelectItem value="Procedures">
                              Procedures
                            </SelectItem>
                            <SelectItem value="Pricing">Pricing</SelectItem>
                            <SelectItem value="Consultation">
                              Consultation
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center space-x-2 mt-6">
                        <Switch
                          id="faq-featured"
                          checked={newFaq.featured}
                          onCheckedChange={(checked) =>
                            setNewFaq({
                              ...newFaq,
                              featured: checked,
                            })
                          }
                        />
                        <Label htmlFor="faq-featured">Featured FAQ</Label>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setIsAddingFaq(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleAddFaq}
                      className="bg-medical-purple hover:bg-medical-purple-dark"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save FAQ
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>
                  Manage questions and answers for your patients ({faqs.length}{" "}
                  total)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div
                      key={faq.id}
                      className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-medium text-medical-navy mb-2">
                            {faq.question}
                          </h4>
                          <p className="text-medical-gray text-sm mb-3 line-clamp-2">
                            {faq.answer}
                          </p>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {faq.category}
                            </Badge>
                            {faq.featured && (
                              <Badge className="bg-yellow-500 text-black text-xs">
                                Featured
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:text-red-700"
                            onClick={() => handleDeleteItem("faq", faq.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                  {faqs.length === 0 && (
                    <div className="text-center py-8">
                      <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        No FAQs yet
                      </h3>
                      <p className="text-gray-500 mb-4">
                        Start by adding your first frequently asked question
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings */}
          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-2xl font-bold text-medical-navy">Settings</h2>

            <Card>
              <CardHeader>
                <CardTitle>Clinic Information</CardTitle>
                <CardDescription>
                  Update your clinic's basic information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="clinic-name">Clinic Name</Label>
                    <Input
                      id="clinic-name"
                      defaultValue="Tres Beau Medical Group"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+1 (555) 123-4567" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    defaultValue="123 Medical Center Dr, Suite 100&#10;Beverly Hills, CA 90210"
                    rows={3}
                  />
                </div>
                <Button className="bg-medical-purple hover:bg-medical-purple-dark">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
