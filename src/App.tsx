import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
const Index = lazy(() => import("./pages/Index"));
const Product = lazy(() => import("./pages/Product"));
const PartnersPage = lazy(() => import("./pages/Partner"));
const Contact = lazy(() => import("./pages/Contact"));
const Pricing = lazy(() => import("./pages/Pricing"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Solutions = lazy(() => import("./pages/Solutions"));
const SolutionsAgents = lazy(() => import("./pages/SolutionsAgents"));
import LoadingIndicator from "./components/LoadingIndicator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <Suspense fallback={<LoadingIndicator label="Loading page" />}> 
        <div className="min-h-screen flex flex-col">
          <ScrollToTop />
          <Navigation />
          <main className="flex-1">
            
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/platform" element={<Product />} />
                <Route path="/about" element={<PartnersPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/solutions-agents" element={<SolutionsAgents />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
          </main>
          <Footer />
        </div>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
