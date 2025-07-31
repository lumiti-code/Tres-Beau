import { useState, useEffect } from "react";
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
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bell,
  Check,
  CheckCircle2,
  Clock,
  Calendar,
  User,
  AlertCircle,
  X,
  Mail,
  Phone,
  MessageCircle,
  Heart,
  Star,
  Archive,
  Trash2,
  Filter,
} from "lucide-react";

interface Notification {
  id: string;
  type: "appointment" | "system" | "promotion" | "reminder" | "message";
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  priority: "low" | "medium" | "high";
  actionUrl?: string;
  icon?: string;
}

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "appointment",
      title: "Appointment Confirmed",
      message:
        "Your consultation for Rhinoplasty has been scheduled for December 20, 2024 at 2:00 PM.",
      timestamp: new Date("2024-12-15T10:30:00"),
      read: false,
      priority: "high",
      actionUrl: "/appointments",
    },
    {
      id: "2",
      type: "reminder",
      title: "Pre-Procedure Instructions",
      message:
        "Please review your pre-procedure guidelines for your upcoming appointment.",
      timestamp: new Date("2024-12-14T09:15:00"),
      read: false,
      priority: "medium",
      actionUrl: "/appointments",
    },
    {
      id: "3",
      type: "system",
      title: "Profile Updated",
      message: "Your profile information has been successfully updated.",
      timestamp: new Date("2024-12-13T16:45:00"),
      read: true,
      priority: "low",
    },
    {
      id: "4",
      type: "promotion",
      title: "Special Holiday Offer",
      message:
        "Enjoy 20% off on selected non-surgical treatments this December!",
      timestamp: new Date("2024-12-12T08:00:00"),
      read: false,
      priority: "medium",
      actionUrl: "/services",
    },
    {
      id: "5",
      type: "message",
      title: "Message from Dr. Smith",
      message:
        "Thank you for choosing Tres Beau. Looking forward to your consultation.",
      timestamp: new Date("2024-12-11T14:20:00"),
      read: true,
      priority: "medium",
    },
    {
      id: "6",
      type: "reminder",
      title: "Follow-up Appointment",
      message:
        "Don't forget to schedule your follow-up appointment for next week.",
      timestamp: new Date("2024-12-10T11:30:00"),
      read: true,
      priority: "medium",
      actionUrl: "/appointments",
    },
  ]);

  const [filter, setFilter] = useState<
    | "all"
    | "unread"
    | "appointment"
    | "system"
    | "promotion"
    | "reminder"
    | "message"
  >("all");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "priority">(
    "newest",
  );

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification,
      ),
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, read: true })),
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id),
    );
  };

  const getNotificationIcon = (type: string, priority: string) => {
    switch (type) {
      case "appointment":
        return <Calendar className="h-5 w-5 text-medical-purple" />;
      case "system":
        return <AlertCircle className="h-5 w-5 text-blue-500" />;
      case "promotion":
        return <Star className="h-5 w-5 text-medical-gold" />;
      case "reminder":
        return <Clock className="h-5 w-5 text-orange-500" />;
      case "message":
        return <MessageCircle className="h-5 w-5 text-green-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const filteredNotifications = notifications
    .filter((notification) => {
      if (filter === "all") return true;
      if (filter === "unread") return !notification.read;
      return notification.type === filter;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return b.timestamp.getTime() - a.timestamp.getTime();
        case "oldest":
          return a.timestamp.getTime() - b.timestamp.getTime();
        case "priority":
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        default:
          return 0;
      }
    });

  const unreadCount = notifications.filter((n) => !n.read).length;

  const formatTimestamp = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const hours = diff / (1000 * 60 * 60);
    const days = diff / (1000 * 60 * 60 * 24);

    if (hours < 1) {
      return "Just now";
    } else if (hours < 24) {
      return `${Math.floor(hours)} hours ago`;
    } else if (days < 7) {
      return `${Math.floor(days)} days ago`;
    } else {
      return timestamp.toLocaleDateString();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      <Navigation />

      <div className="container mx-auto px-4 py-8 mt-20">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-medical-purple/10 rounded-xl">
                <Bell className="h-8 w-8 text-medical-purple" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">
                  Notifications
                </h1>
                <p className="text-slate-600 mt-1">
                  Stay updated with your appointments and important updates
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {unreadCount > 0 && (
                <Badge variant="destructive" className="bg-red-500">
                  {unreadCount} unread
                </Badge>
              )}
              {unreadCount > 0 && (
                <Button
                  onClick={markAllAsRead}
                  variant="outline"
                  size="sm"
                  className="border-medical-purple text-medical-purple hover:bg-medical-purple hover:text-white"
                >
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Mark all as read
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-slate-600" />
                <span className="text-sm font-medium text-slate-700">
                  Filter:
                </span>
              </div>

              <Tabs
                value={filter}
                onValueChange={(value: any) => setFilter(value)}
                className="w-auto"
              >
                <TabsList className="grid grid-cols-6 w-auto">
                  <TabsTrigger value="all" className="text-xs">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="unread" className="text-xs">
                    Unread
                  </TabsTrigger>
                  <TabsTrigger value="appointment" className="text-xs">
                    Appointments
                  </TabsTrigger>
                  <TabsTrigger value="reminder" className="text-xs">
                    Reminders
                  </TabsTrigger>
                  <TabsTrigger value="message" className="text-xs">
                    Messages
                  </TabsTrigger>
                  <TabsTrigger value="promotion" className="text-xs">
                    Offers
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-slate-700">
                  Sort by:
                </span>
                <Select
                  value={sortBy}
                  onValueChange={(value: any) => setSortBy(value)}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                    <SelectItem value="priority">Priority</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notifications List */}
        <div className="space-y-4">
          {filteredNotifications.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <Bell className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  No notifications found
                </h3>
                <p className="text-slate-600">
                  {filter === "unread"
                    ? "You're all caught up! No unread notifications."
                    : "No notifications match your current filter."}
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredNotifications.map((notification) => (
              <Card
                key={notification.id}
                className={`transition-all duration-200 hover:shadow-md ${
                  !notification.read
                    ? "bg-blue-50/50 border-blue-200"
                    : "hover:bg-slate-50/50"
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {getNotificationIcon(
                        notification.type,
                        notification.priority,
                      )}
                    </div>

                    <div className="flex-grow min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-grow">
                          <div className="flex items-center gap-3 mb-2">
                            <h3
                              className={`font-semibold ${!notification.read ? "text-slate-900" : "text-slate-700"}`}
                            >
                              {notification.title}
                            </h3>
                            <Badge
                              variant="outline"
                              className={`text-xs ${getPriorityColor(notification.priority)}`}
                            >
                              {notification.priority}
                            </Badge>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            )}
                          </div>
                          <p className="text-slate-600 mb-3 leading-relaxed">
                            {notification.message}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-slate-500">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {formatTimestamp(notification.timestamp)}
                            </span>
                            <Badge variant="secondary" className="text-xs">
                              {notification.type}
                            </Badge>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 flex-shrink-0">
                          {notification.actionUrl && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-medical-purple border-medical-purple hover:bg-medical-purple hover:text-white"
                              onClick={() =>
                                (window.location.href = notification.actionUrl!)
                              }
                            >
                              View
                            </Button>
                          )}
                          {!notification.read && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => markAsRead(notification.id)}
                              className="text-slate-600 hover:text-slate-900"
                            >
                              <Check className="h-4 w-4" />
                            </Button>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deleteNotification(notification.id)}
                            className="text-slate-400 hover:text-red-600"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Quick Actions */}
        <Card className="mt-8 bg-gradient-to-r from-medical-purple to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">
                Need Immediate Assistance?
              </h3>
              <p className="text-purple-100 mb-4">
                Our team is available 24/7 for urgent matters or emergency
                consultations.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Button
                  variant="secondary"
                  className="bg-white text-medical-purple hover:bg-purple-50"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-200 text-white hover:bg-purple-500"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Live Chat
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-200 text-white hover:bg-purple-500"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email Support
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
