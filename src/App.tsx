import { Toaster as ShadcnToaster } from "@/components/ui/toaster"; // Renamed to avoid conflict
import { Toaster as SonnerToaster } from "@/components/ui/sonner"; // This is the one for toast()
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound"; // Assuming NotFound.tsx exists

const queryClient = new QueryClient();

const App = () => {
  console.log("App component rendered. Routing initialized.");
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ShadcnToaster /> {/* For shadcn's own Toaster component if used directly */}
        <SonnerToaster richColors position="top-right" /> {/* For the toast() notifications */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} /> {/* Always Include This Line As It Is. */}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;