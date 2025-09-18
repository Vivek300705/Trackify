import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Search, Clock, Users, Zap, Shield, Play, Calendar } from "lucide-react";
import cityHeroBg from "@/assets/city-hero-bg.jpg";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const features = [
    {
      icon: MapPin,
      title: "Real-Time Tracking",
      description: "Track buses and trains live on interactive maps with precise location updates."
    },
    {
      icon: Clock,
      title: "Accurate ETAs",
      description: "Get reliable arrival time predictions based on real traffic conditions."
    },
    {
      icon: Search,
      title: "Smart Search",
      description: "Find routes by bus number, stop name, or destination with instant results."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built for small cities with community feedback and local insights."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for mobile devices with instant loading and smooth performance."
    },
    {
      icon: Shield,
      title: "Reliable Data",
      description: "Trusted by transport authorities with verified and up-to-date information."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section with Background Image */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${cityHeroBg})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Track Your Bus & Train
              <span className="block gradient-text text-primary-light">In Real Time</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Never miss your ride again. Get live updates, accurate arrival times, and complete route information 
              for public transport in your city.
            </p>

            {/* Enhanced Quick Search */}
            <div className="max-w-2xl mx-auto mb-12 animate-scale-in">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-6 h-6" />
                <Input
                  type="text"
                  placeholder="Search by bus number, route, or stop name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-14 pr-4 py-6 text-lg rounded-2xl glass-card border-2 border-white/20 bg-white/10 text-white placeholder-white/60 focus:border-primary-light focus:bg-white/20 transition-all duration-300"
                />
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/map">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-10 py-6 text-xl rounded-2xl group hover-scale border-0"
                >
                  <Play className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform" />
                  Track Now
                </Button>
              </Link>
              <Link to="/schedules">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-10 py-6 text-xl rounded-2xl border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-lg transition-all duration-300"
                >
                  <Calendar className="w-6 h-6 mr-3" />
                  View Schedule
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-6">
              Why Choose <span className="gradient-text">Trackify</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Built specifically for small cities with modern technology and user-friendly design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-float transition-all duration-500 border-2 hover:border-primary/30 glass-card hover-scale animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-500">
                      <Icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: "50+", label: "Active Routes" },
              { number: "200+", label: "Bus Stops" },
              { number: "99%", label: "Uptime" },
              { number: "5k+", label: "Daily Users" }
            ].map((stat, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="text-5xl sm:text-6xl font-bold mb-3 gradient-text">{stat.number}</div>
                <div className="text-white/90 text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;