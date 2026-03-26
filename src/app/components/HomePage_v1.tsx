import svgPaths from "@/imports/svg-6hwcrc560a";
import { User, Home, ClipboardList, Settings } from "lucide-react";

interface HomePageProps {
  onNavigate: (screen: 'home' | 'new-milestone' | 'repository-setup' | 'my-studies' | 'my-tasks' | 'admin') => void;
}

function IconWhite() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.0001 35">
        <g>
          <path clipRule="evenodd" d={svgPaths.p176e6880} fill="white" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function NavItem({ children, active = false }: { children: React.ReactNode; active?: boolean }) {
  return (
    <a 
      href="#" 
      className={`text-primary-foreground hover:opacity-80 transition-opacity ${active ? 'border-b-2 border-primary-foreground' : ''}`}
    >
      {children}
    </a>
  );
}

function ActionButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-primary text-primary-foreground px-6 py-2.5 hover:opacity-90 transition-opacity rounded-[var(--radius-button)] cursor-pointer"
    >
      {children}
    </button>
  );
}

function DisabledButton({ children }: { children: React.ReactNode }) {
  return (
    <button 
      disabled
      className="bg-muted text-muted-foreground px-6 py-2.5 rounded-[var(--radius-button)] cursor-not-allowed opacity-50"
    >
      {children}
    </button>
  );
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="bg-background min-h-screen">
      {/* Top Navigation Bar */}
      <header className="bg-primary px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <IconWhite />
          <span className="text-primary-foreground font-bold">ARP</span>
          <nav className="flex gap-6 ml-8">
            <NavItem active>
              <div className="flex items-center gap-2">
                <Home size={16} />
                <span>Home</span>
              </div>
            </NavItem>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                onNavigate('my-tasks');
              }}
              className="text-primary-foreground hover:opacity-80 transition-opacity relative"
            >
              <div className="flex items-center gap-2">
                <ClipboardList size={16} />
                <span>My Tasks</span>
              </div>
              <span className="absolute -top-1 -right-2 bg-destructive text-destructive-foreground rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">
                2
              </span>
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              onNavigate('admin');
            }}
            className="text-primary-foreground hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center gap-2">
              <Settings size={16} />
              <span>Admin</span>
            </div>
          </a>
          <div className="flex items-center gap-2 text-primary-foreground">
            <User size={16} />
            <span className="text-sm">smidrkal</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8 bg-[#e8e8e8] min-h-[calc(100vh-50px)]">
        {/* Project Setup Section */}
        <section className="mb-10">
          <h3 className="mb-4 text-foreground">Project Setup</h3>
          <div className="flex gap-3">
            <ActionButton onClick={() => onNavigate('new-milestone')}>Create New Project</ActionButton>
            <ActionButton onClick={() => onNavigate('my-studies')}>Project Updates</ActionButton>
          </div>
        </section>

        {/* SDTM Data Extract Section */}
        <section className="mb-10">
          <h3 className="mb-4 text-foreground">SDTM Data Extract</h3>
          <div className="flex gap-3">
            <DisabledButton>Request New SDTM Data Extract</DisabledButton>
            <DisabledButton>Search Requested SDTM Extract</DisabledButton>
          </div>
        </section>

        {/* Audit Trail Report Section */}
        <section>
          <h3 className="mb-4 text-foreground">Audit Trail Report</h3>
          <DisabledButton>Go to Audit Trail Report</DisabledButton>
        </section>
      </main>
    </div>
  );
}