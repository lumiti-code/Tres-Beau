import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import { Badge } from "@/components/ui/badge";
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
  User,
  Calendar,
  FileText,
  Wallet,
  Settings,
  Plus,
  CreditCard,
  Smartphone,
  ArrowUpRight,
  ArrowDownLeft,
  History,
  CheckCircle,
} from "lucide-react";

export default function PatientPortal() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [walletBalance, setWalletBalance] = useState(2500);
  const [showTransactionHistory, setShowTransactionHistory] = useState(false);
  const [showAddFunds, setShowAddFunds] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"mpesa" | "card" | null>(
    null,
  );
  const [addAmount, setAddAmount] = useState("");
  const [mpesaPhone, setMpesaPhone] = useState("");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  });

  // Mock transaction data
  const transactions = [
    {
      id: "1",
      type: "credit",
      amount: 1000,
      description: "Wallet top-up via M-Pesa",
      date: "2024-01-20",
      status: "completed",
      reference: "MP240120001",
    },
    {
      id: "2",
      type: "debit",
      amount: 150,
      description: "Consultation fee - Dr. Santos",
      date: "2024-01-18",
      status: "completed",
      reference: "CON240118001",
    },
    {
      id: "3",
      type: "credit",
      amount: 500,
      description: "Wallet top-up via Credit Card",
      date: "2024-01-15",
      status: "completed",
      reference: "CC240115001",
    },
    {
      id: "4",
      type: "debit",
      amount: 2500,
      description: "Rhinoplasty deposit payment",
      date: "2024-01-10",
      status: "completed",
      reference: "DEP240110001",
    },
  ];

  const handleAddFunds = () => {
    const amount = parseFloat(addAmount);
    if (amount > 0) {
      setWalletBalance((prev) => prev + amount);

      // Add new transaction
      const newTransaction = {
        id: Date.now().toString(),
        type: "credit" as const,
        amount: amount,
        description: `Wallet top-up via ${paymentMethod === "mpesa" ? "M-Pesa" : "Credit Card"}`,
        date: new Date().toISOString().split("T")[0],
        status: "completed" as const,
        reference: `${paymentMethod?.toUpperCase()}${Date.now()}`,
      };

      transactions.unshift(newTransaction);

      // Reset form
      setAddAmount("");
      setMpesaPhone("");
      setCardDetails({ number: "", expiry: "", cvv: "", name: "" });
      setPaymentMethod(null);
      setShowAddFunds(false);

      alert(
        `Successfully added KSh ${amount.toLocaleString()} to your wallet!`,
      );
    }
  };

  const getTransactionIcon = (type: string) => {
    return type === "credit" ? (
      <ArrowUpRight className="h-4 w-4 text-green-500" />
    ) : (
      <ArrowDownLeft className="h-4 w-4 text-red-500" />
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-medical-navy">
            Patient Portal
          </h1>
          <p className="text-medical-gray mt-2">
            Manage your appointments, documents, and account
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-white">
            <TabsTrigger
              value="dashboard"
              className="data-[state=active]:bg-medical-purple data-[state=active]:text-white flex items-center gap-2"
            >
              <User className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger
              value="appointments"
              className="data-[state=active]:bg-medical-purple data-[state=active]:text-white flex items-center gap-2"
            >
              <Calendar className="h-4 w-4" />
              Appointments
            </TabsTrigger>
            <TabsTrigger
              value="documents"
              className="data-[state=active]:bg-medical-purple data-[state=active]:text-white flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              Documents
            </TabsTrigger>
            <TabsTrigger
              value="wallet"
              className="data-[state=active]:bg-medical-purple data-[state=active]:text-white flex items-center gap-2"
            >
              <Wallet className="h-4 w-4" />
              Wallet
            </TabsTrigger>
            <TabsTrigger
              value="profile"
              className="data-[state=active]:bg-medical-purple data-[state=active]:text-white flex items-center gap-2"
            >
              <Settings className="h-4 w-4" />
              Profile
            </TabsTrigger>
          </TabsList>

          {/* Dashboard */}
          <TabsContent value="dashboard">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Welcome Back!</CardTitle>
                  <CardDescription>
                    Your patient dashboard overview
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Access your appointments, documents, and wallet from the
                    tabs above.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Next Appointment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium">Dr. Maria Santos</p>
                    <p className="text-sm text-gray-600">
                      Rhinoplasty Consultation
                    </p>
                    <p className="text-sm text-gray-600">
                      Jan 25, 2024 at 10:00 AM
                    </p>
                    <Badge className="bg-green-100 text-green-800">
                      Confirmed
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Wallet Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-medical-purple mb-2">
                    KSh 2,500
                  </div>
                  <Button
                    size="sm"
                    className="bg-medical-purple hover:bg-medical-purple-dark"
                  >
                    Add Funds
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Appointments */}
          <TabsContent value="appointments">
            <Card>
              <CardHeader>
                <CardTitle>Your Appointments</CardTitle>
                <CardDescription>
                  View and manage your upcoming and past appointments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">
                          Rhinoplasty Consultation
                        </h4>
                        <p className="text-sm text-gray-600">
                          Dr. Maria Santos
                        </p>
                        <p className="text-sm text-gray-600">
                          January 25, 2024 at 10:00 AM
                        </p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        Confirmed
                      </Badge>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Follow-up Check</h4>
                        <p className="text-sm text-gray-600">
                          Dr. James Wilson
                        </p>
                        <p className="text-sm text-gray-600">
                          February 15, 2024 at 2:00 PM
                        </p>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800">
                        Pending
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documents */}
          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle>Your Documents</CardTitle>
                <CardDescription>
                  Access your medical documents and forms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-medical-purple" />
                      <div>
                        <p className="font-medium">Pre-Surgery Instructions</p>
                        <p className="text-sm text-gray-600">
                          January 20, 2024
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-medical-purple" />
                      <div>
                        <p className="font-medium">Consultation Invoice</p>
                        <p className="text-sm text-gray-600">
                          January 18, 2024
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Wallet */}
          <TabsContent value="wallet">
            <div className="space-y-6">
              {/* Wallet Balance Card */}
              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-medical-purple to-purple-600 opacity-90" />
                <CardHeader className="relative text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Wallet className="h-5 w-5" />
                    Wallet Balance
                  </CardTitle>
                  <CardDescription className="text-purple-100">
                    Available funds for procedures and consultations
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative text-white">
                  <div className="text-4xl font-bold mb-6">
                    KSh {walletBalance.toLocaleString()}
                  </div>
                  <div className="flex gap-3">
                    <Dialog open={showAddFunds} onOpenChange={setShowAddFunds}>
                      <DialogTrigger asChild>
                        <Button
                          className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                          variant="outline"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Add Funds
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle>Add Funds to Wallet</DialogTitle>
                          <DialogDescription>
                            Choose your payment method and amount
                          </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-4">
                          {/* Amount Input */}
                          <div>
                            <Label htmlFor="amount">Amount (KSh)</Label>
                            <Input
                              id="amount"
                              type="number"
                              value={addAmount}
                              onChange={(e) => setAddAmount(e.target.value)}
                              placeholder="Enter amount"
                              min="100"
                            />
                          </div>

                          {/* Quick Amount Buttons */}
                          <div className="grid grid-cols-3 gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setAddAmount("1000")}
                            >
                              KSh 1,000
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setAddAmount("5000")}
                            >
                              KSh 5,000
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setAddAmount("10000")}
                            >
                              KSh 10,000
                            </Button>
                          </div>

                          {/* Payment Method Selection */}
                          <div className="space-y-2">
                            <Label>Payment Method</Label>
                            <div className="grid grid-cols-2 gap-2">
                              <Button
                                variant={
                                  paymentMethod === "mpesa"
                                    ? "default"
                                    : "outline"
                                }
                                className={
                                  paymentMethod === "mpesa"
                                    ? "bg-green-600 hover:bg-green-700"
                                    : ""
                                }
                                onClick={() => setPaymentMethod("mpesa")}
                              >
                                <Smartphone className="h-4 w-4 mr-2" />
                                M-Pesa
                              </Button>
                              <Button
                                variant={
                                  paymentMethod === "card"
                                    ? "default"
                                    : "outline"
                                }
                                className={
                                  paymentMethod === "card"
                                    ? "bg-blue-600 hover:bg-blue-700"
                                    : ""
                                }
                                onClick={() => setPaymentMethod("card")}
                              >
                                <CreditCard className="h-4 w-4 mr-2" />
                                Card
                              </Button>
                            </div>
                          </div>

                          {/* M-Pesa Details */}
                          {paymentMethod === "mpesa" && (
                            <div className="space-y-3 p-4 bg-green-50 rounded-lg">
                              <h4 className="font-medium text-green-800">
                                M-Pesa Payment Details
                              </h4>
                              <div>
                                <Label htmlFor="mpesa-phone">
                                  Phone Number
                                </Label>
                                <Input
                                  id="mpesa-phone"
                                  value={mpesaPhone}
                                  onChange={(e) =>
                                    setMpesaPhone(e.target.value)
                                  }
                                  placeholder="254712345678"
                                />
                              </div>
                              <div className="text-sm text-green-700">
                                <p>
                                  • You will receive an STK push notification
                                </p>
                                <p>• Enter your M-Pesa PIN to complete</p>
                                <p>• Transaction will be instant</p>
                              </div>
                            </div>
                          )}

                          {/* Card Details */}
                          {paymentMethod === "card" && (
                            <div className="space-y-3 p-4 bg-blue-50 rounded-lg">
                              <h4 className="font-medium text-blue-800">
                                Card Payment Details
                              </h4>
                              <div>
                                <Label htmlFor="card-name">
                                  Cardholder Name
                                </Label>
                                <Input
                                  id="card-name"
                                  value={cardDetails.name}
                                  onChange={(e) =>
                                    setCardDetails((prev) => ({
                                      ...prev,
                                      name: e.target.value,
                                    }))
                                  }
                                  placeholder="John Doe"
                                />
                              </div>
                              <div>
                                <Label htmlFor="card-number">Card Number</Label>
                                <Input
                                  id="card-number"
                                  value={cardDetails.number}
                                  onChange={(e) =>
                                    setCardDetails((prev) => ({
                                      ...prev,
                                      number: e.target.value,
                                    }))
                                  }
                                  placeholder="1234 5678 9012 3456"
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div>
                                  <Label htmlFor="card-expiry">
                                    Expiry Date
                                  </Label>
                                  <Input
                                    id="card-expiry"
                                    value={cardDetails.expiry}
                                    onChange={(e) =>
                                      setCardDetails((prev) => ({
                                        ...prev,
                                        expiry: e.target.value,
                                      }))
                                    }
                                    placeholder="MM/YY"
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="card-cvv">CVV</Label>
                                  <Input
                                    id="card-cvv"
                                    value={cardDetails.cvv}
                                    onChange={(e) =>
                                      setCardDetails((prev) => ({
                                        ...prev,
                                        cvv: e.target.value,
                                      }))
                                    }
                                    placeholder="123"
                                  />
                                </div>
                              </div>
                              <div className="text-sm text-blue-700">
                                <p>• Visa, Mastercard accepted</p>
                                <p>• Secure 256-bit SSL encryption</p>
                                <p>• Processing fee: 2.5%</p>
                              </div>
                            </div>
                          )}

                          {/* Submit Button */}
                          <Button
                            onClick={handleAddFunds}
                            className="w-full bg-medical-purple hover:bg-medical-purple-dark"
                            disabled={
                              !addAmount ||
                              !paymentMethod ||
                              parseFloat(addAmount) <= 0
                            }
                          >
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Add KSh{" "}
                            {addAmount
                              ? parseFloat(addAmount).toLocaleString()
                              : 0}{" "}
                            to Wallet
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button
                      variant="outline"
                      className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                      onClick={() =>
                        setShowTransactionHistory(!showTransactionHistory)
                      }
                    >
                      <History className="h-4 w-4 mr-2" />
                      Transaction History
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Transaction History */}
              {showTransactionHistory && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <History className="h-5 w-5" />
                      Transaction History
                    </CardTitle>
                    <CardDescription>
                      Your recent wallet transactions and payments
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {transactions.map((transaction) => (
                        <div
                          key={transaction.id}
                          className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                        >
                          <div className="flex items-center gap-3">
                            {getTransactionIcon(transaction.type)}
                            <div>
                              <p className="font-medium">
                                {transaction.description}
                              </p>
                              <p className="text-sm text-gray-600">
                                {transaction.date} • {transaction.reference}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p
                              className={`font-semibold ${
                                transaction.type === "credit"
                                  ? "text-green-600"
                                  : "text-red-600"
                              }`}
                            >
                              {transaction.type === "credit" ? "+" : "-"}KSh{" "}
                              {transaction.amount.toLocaleString()}
                            </p>
                            <Badge
                              className={`text-xs ${
                                transaction.status === "completed"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {transaction.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* Profile */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>
                  Manage your personal information and preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Personal Information</h4>
                    <p className="text-sm text-gray-600">
                      Update your contact details and personal information.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">
                      Communication Preferences
                    </h4>
                    <p className="text-sm text-gray-600">
                      Choose how you'd like to receive updates and reminders.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Security Settings</h4>
                    <p className="text-sm text-gray-600">
                      Update your password and security preferences.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />

      {/* Live Chat */}
      <LiveChat />
    </div>
  );
}
