import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserPlus, Mail, Lock, User, Shield, Bus, IdCard, Hash } from "lucide-react";

const SignUp = () => {
  const [adminData, setAdminData] = useState({
    fullName: "",
    email: "",
    password: "",
    employeeId: ""
  });

  const [driverData, setDriverData] = useState({
    name: "",
    email: "",
    password: "",
    busNumber: ""
  });

  const handleAdminSignUp = (e) => {
    e.preventDefault();
    console.log("Admin sign up:", adminData);
    // Handle admin registration
  };

  const handleDriverSignUp = (e) => {
    e.preventDefault();
    console.log("Driver sign up:", driverData);
    // Handle driver registration
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow">
            <UserPlus className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Join Trackify</h1>
          <p className="text-muted-foreground">Create your account to get started</p>
        </div>

        <Tabs defaultValue="admin" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="admin" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Admin
            </TabsTrigger>
            <TabsTrigger value="driver" className="flex items-center gap-2">
              <Bus className="w-4 h-4" />
              Driver
            </TabsTrigger>
          </TabsList>

          {/* Admin Sign Up */}
          <TabsContent value="admin">
            <Card className="glass-card border-2 shadow-float">
              <CardHeader 
                className="bg-admin-pattern rounded-t-lg relative"
                style={{
                  backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('/src/assets/admin-office-bg.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <div className="relative z-10">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Admin Registration
                  </CardTitle>
                  <p className="text-white/80">Register as a system administrator</p>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleAdminSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="admin-name"
                        type="text"
                        placeholder="John Doe"
                        value={adminData.fullName}
                        onChange={(e) => setAdminData({ ...adminData, fullName: e.target.value })}
                        className="pl-10 border-2 focus:border-primary transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="admin-email"
                        type="email"
                        placeholder="admin@company.com"
                        value={adminData.email}
                        onChange={(e) => setAdminData({ ...adminData, email: e.target.value })}
                        className="pl-10 border-2 focus:border-primary transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="admin-password"
                        type="password"
                        placeholder="Create a strong password"
                        value={adminData.password}
                        onChange={(e) => setAdminData({ ...adminData, password: e.target.value })}
                        className="pl-10 border-2 focus:border-primary transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-id">Employee ID</Label>
                    <div className="relative">
                      <IdCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="admin-id"
                        type="text"
                        placeholder="EMP001"
                        value={adminData.employeeId}
                        onChange={(e) => setAdminData({ ...adminData, employeeId: e.target.value })}
                        className="pl-10 border-2 focus:border-primary transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    Register as Admin
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Driver Sign Up */}
          <TabsContent value="driver">
            <Card className="glass-card border-2 shadow-float">
              <CardHeader 
                className="bg-depot-pattern rounded-t-lg relative"
                style={{
                  backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('/src/assets/bus-depot-bg.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <div className="relative z-10">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Bus className="w-5 h-5" />
                    Driver Registration
                  </CardTitle>
                  <p className="text-white/80">Register as a bus driver</p>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleDriverSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="driver-name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="driver-name"
                        type="text"
                        placeholder="Jane Smith"
                        value={driverData.name}
                        onChange={(e) => setDriverData({ ...driverData, name: e.target.value })}
                        className="pl-10 border-2 focus:border-primary transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="driver-email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="driver-email"
                        type="email"
                        placeholder="driver@company.com"
                        value={driverData.email}
                        onChange={(e) => setDriverData({ ...driverData, email: e.target.value })}
                        className="pl-10 border-2 focus:border-primary transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="driver-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="driver-password"
                        type="password"
                        placeholder="Create a strong password"
                        value={driverData.password}
                        onChange={(e) => setDriverData({ ...driverData, password: e.target.value })}
                        className="pl-10 border-2 focus:border-primary transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bus-number">Bus Number</Label>
                    <div className="relative">
                      <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="bus-number"
                        type="text"
                        placeholder="B101"
                        value={driverData.busNumber}
                        onChange={(e) => setDriverData({ ...driverData, busNumber: e.target.value })}
                        className="pl-10 border-2 focus:border-primary transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    <Bus className="w-4 h-4 mr-2" />
                    Register as Driver
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-6">
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <Link to="/signin" className="text-primary story-link font-medium">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;