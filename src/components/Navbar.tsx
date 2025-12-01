import { useEffect, useState } from "react";
import logo from "@/assets/logo.webp";
import { removeBackground, loadImage } from "@/utils/backgroundRemoval";

export const Navbar = () => {
  const [processedLogo, setProcessedLogo] = useState<string>(logo);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processLogo = async () => {
      try {
        setIsProcessing(true);
        const img = await loadImage(logo);
        const blob = await removeBackground(img);
        const url = URL.createObjectURL(blob);
        setProcessedLogo(url);
      } catch (error) {
        console.error("Failed to remove background, using original logo:", error);
        // Fallback to original logo
        setProcessedLogo(logo);
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();

    return () => {
      if (processedLogo !== logo) {
        URL.revokeObjectURL(processedLogo);
      }
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4">
            <img 
              src={processedLogo} 
              alt="Okie Dokie Logo" 
              className={`h-10 w-10 md:h-14 md:w-14 transition-opacity duration-300 ${isProcessing ? 'opacity-50' : 'opacity-100'}`}
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-primary">
                Okie Dokie
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground hidden sm:block">
                Utilities
              </p>
            </div>
          </div>
          
          <div className="text-sm md:text-base text-muted-foreground">
            Campus Automation
          </div>
        </div>
      </div>
    </nav>
  );
};
