import { UtilityCard } from "@/components/UtilityCard";

const utilities = [
  {
    title: "PDF Splitter & Renamer",
    description: "Splits multi-student DMC PDFs and renames using Excel mapping (Reg → Roll No). Built with FastAPI, Python, and React.",
    url: "https://regex-split-pdf.lovable.app/",
  },
  {
    title: "Drive → Google Sheet Sync Tool",
    description: "Seamlessly sync and manage data between Google Drive and Google Sheets with automated workflows.",
    url: "https://okiedokiedrivetosheet.vercel.app/",
  },
  {
    title: "Student Image Finder",
    description: "Instantly fetches student photos by Scholar ID for ID cards & verification. Built with FastAPI, React, and Node.js.",
    url: "https://okiedokieimages.vercel.app/",
  },
  {
    title: "Fee Receipt Portal",
    description: "Generates, validates, and retrieves student fee receipts with PDF preview. Built with FastAPI, React, and Node.js.",
    url: "https://okiedokie-databackup.vercel.app/",
  },
  {
    title: "Admit Card & DMC Finder",
    description: "Unified search portal for downloading admit cards & DMCs. Built with FastAPI, React, and Node.js.",
    url: "https://rksdcollegeadmitcard.vercel.app/",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary tracking-tight">
            Okie Dokie Utilities
          </h1>
          <div className="space-y-2 animate-fade-in-delay">
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A collection of professional educational utilities and tools
            </p>
            <p className="text-base md:text-lg text-muted-foreground/80 max-w-xl mx-auto">
              Streamline your administrative workflows with purpose-built solutions
            </p>
          </div>
        </div>
      </header>

      {/* Utilities Grid */}
      <main className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {utilities.map((utility, index) => (
            <UtilityCard
              key={utility.url}
              title={utility.title}
              description={utility.description}
              url={utility.url}
              delay={index * 100}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-border/50">
        <div className="text-center space-y-4">
          <p className="text-foreground/80 text-lg flex items-center justify-center gap-2">
            Crafted with <span className="text-red-500 animate-float">❤️</span> by{" "}
            <span className="font-semibold text-primary">Okie Dokie</span>
          </p>
          <p className="text-muted-foreground/40 text-sm">
            sumaiya khan
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
