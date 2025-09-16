import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogIn, Mail, Lock, Shield, Bus } from "lucide-react";

const SignIn = () => {
  const [adminData, setAdminData] = useState({
    email: "",
    password: ""
  });

  const [driverData, setDriverData] = useState({
    email: "",
    password: ""
  });

  const handleAdminSignIn = (e) => {
    e.preventDefault();
    console.log("Admin sign in:", adminData);
    // Handle admin authentication
  };

  const handleDriverSignIn = (e) => {
    e.preventDefault();
    console.log("Driver sign in:", driverData);
    // Handle driver authentication  
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow">
            <LogIn className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your Trackify account</p>
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

          {/* Admin Sign In */}
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
                    Admin Portal
                  </CardTitle>
                  <p className="text-white/80">Manage routes and monitor the system</p>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleAdminSignIn} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="admin-email"
                        type="email"
                        placeholder="admin@trackify.com"
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
                        placeholder="Enter your password"
                        value={adminData.password}
                        onChange={(e) => setAdminData({ ...adminData, password: e.target.value })}
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
                    Sign In as Admin
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Driver Sign In */}
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
                    Driver Portal
                  </CardTitle>
                  <p className="text-white/80">Update your bus status and routes</p>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleDriverSignIn} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="driver-email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="driver-email"
                        type="email"
                        placeholder="driver@trackify.com"
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
                        placeholder="Enter your password"
                        value={driverData.password}
                        onChange={(e) => setDriverData({ ...driverData, password: e.target.value })}
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
                    Sign In as Driver
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-6">
          <p className="text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary story-link font-medium">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
