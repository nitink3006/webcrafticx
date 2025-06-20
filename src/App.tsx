import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TermsandCondition from "./components/TermsandCondition";
import RefundPolicy from "./components/RefundPolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { HelmetProvider } from "react-helmet-async";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <HelmetProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/terms" element={<TermsWrapper />} />
          <Route path="/refund" element={<RefundWrapper />} />
          <Route path="/privacy" element={<PrivacyWrapper />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

const TermsWrapper = () => {
  return (
    <div style={{ cursor: "auto", pointerEvents: "all", minHeight: "100vh" }}>
      <TermsandCondition />
    </div>
  );
};

const RefundWrapper = () => {
  return (
    <div style={{ cursor: "auto", pointerEvents: "all", minHeight: "100vh" }}>
      <RefundPolicy />
    </div>
  );
};

const PrivacyWrapper = () => {
  return (
    <div style={{ cursor: "auto", pointerEvents: "all", minHeight: "100vh" }}>
      <PrivacyPolicy />
    </div>
  );
};

export default App;
