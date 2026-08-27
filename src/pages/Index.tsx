import { UtilityCard } from "@/components/UtilityCard";
import { Navbar } from "@/components/Navbar";

const collegeUtilities = [
  {
    title: "Student Admission Portal",
    description: "Student Admission Portal for Lingyas Vidyapeeth. Features student application portal connected with erp, payment gateway integration and easy to use interface.",
    url: "https://student-admission-portal-rouge.vercel.app",
  },
  {
    title: "Hostel Request & Approve",
    description: "Student hostel room allocation portal with warden approval dashboard. Supports applications, re-applications, and status tracking.",
    url: "https://hostel-oderp.vercel.app/",
  },
  {
    title: "College Security Manager",
    description: "Tracks student security money refunds for RKSD. Features student application portal and admin approval dashboard.",
    url: "https://collegesecurity.vercel.app/",
  },
  {
    title: "Time Table Utility",
    description: "Time Table Adjustment.",
    url: "https://findingteacher.vercel.app/",
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
  {
    title: "Fee Form Download",
    description: "Portal for downloading forms for students whose fees have been submitted.",
    url: "https://fee-form.vercel.app/",
  },
  {
    title: "Gate Pass Verification",
    description: "Frontdesk application to verify parents or guardians coming to pick up students.",
    url: "https://wisdom-frontdesk.vercel.app/",
  },
];

const internalUtilities = [
  {
    title: "Okie Dokie Cab",
    description: "Corporate cab booking and tracking system for office staff. Streamlines ride scheduling and management for efficient daily commutes.",
    url: "https://odcab.lovable.app/",
  },
  {
    title: "Institute Hiring Checklist",
    description: "Administrative tracking tool for onboarding new institutes. Manages essential checklists to ensure a smooth hiring and integration process.",
    url: "https://odchecklist.lovable.app/",
  },
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
    title: "DGHE ERP",
    description: "Department of Higher Education ERP Portal.",
    url: "https://dghe-erp.vercel.app/",
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />

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

      {/* Utilities Section */}
      <main className="container mx-auto px-4 pb-20 space-y-16">
        
        {/* College Section */}
        <section className="space-y-8 animate-fade-in-delay">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h2 className="text-3xl font-bold text-primary tracking-tight">College</h2>
            <div className="h-px bg-border flex-1 ml-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {collegeUtilities.map((utility, index) => (
              <UtilityCard
                key={utility.url}
                title={utility.title}
                description={utility.description}
                url={utility.url}
                delay={index * 100}
              />
            ))}
          </div>
        </section>

        {/* Internal Apps Section */}
        <section className="space-y-8 animate-fade-in-delay" style={{ animationDelay: '0.2s' }}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h2 className="text-3xl font-bold text-primary tracking-tight">Internal Apps</h2>
            <div className="h-px bg-border flex-1 ml-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {internalUtilities.map((utility, index) => (
              <UtilityCard
                key={utility.url}
                title={utility.title}
                description={utility.description}
                url={utility.url}
                delay={index * 100}
              />
            ))}
          </div>
        </section>

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
