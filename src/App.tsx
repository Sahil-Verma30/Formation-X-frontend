import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HackathonDetails from "./pages/HackathonDetails";
import Feed from "./pages/Feed";
import NotFound from "./pages/NotFound";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HackathonBrowse from "./components/HackathonBrowse";
import HackathonPage from "./pages/hackathons";
import OrganizerLogin from "./pages/OrganizerLogin";
import OrganizerSignup from "./pages/OrganizerSignup";
import SpacesPage from "./components/ui/Spaces";
import AboutPage from "./components/ui/aboutus";
import Dashboard from "./pages/Dashboard";
import { AppLayout } from "./components/layout/AppLayout";
import FoodDistribution from "./pages/FoodDistribution";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* HEADER - visible on all pages */}
          <Header />

          {/* ROUTES */}
          <main className="min-h-[calc(100vh-8rem)]"> {/* adjust height if needed */}
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/hackathons" element={<HackathonPage /> } />
              <Route path="/spaces" element={<SpacesPage /> } />
              <Route path="/aboutus" element={<AboutPage /> } />
              <Route path="/hackathon/:id" element={<HackathonDetails />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/organizer-signup" element={<OrganizerSignup />} />
              <Route path="/organizer-login" element={<OrganizerLogin />} />
              <Route path="/dashboard" element={<AppLayout><Dashboard /></AppLayout>} />
              <Route path="/dashboard/food-distribution" element={<AppLayout><FoodDistribution /></AppLayout>} />
              <Route path="/dashboard/settings" element={<AppLayout><Settings /></AppLayout>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* FOOTER - visible on all pages */}
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
);

export default App;
