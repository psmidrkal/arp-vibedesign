import svgPaths from "./svg-6hwcrc560a";
import { User } from "lucide-react";

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

function NavItemWithBadge({ children, badge, active = false }: { children: React.ReactNode; badge?: number; active?: boolean }) {
  return (
    <a 
      href="#" 
      className={`text-primary-foreground hover:opacity-80 transition-opacity relative ${active ? 'border-b-2 border-primary-foreground' : ''}`}
    >
      {children}
      {badge !== undefined && badge > 0 && (
        <span className="absolute -top-1 -right-2 bg-destructive text-destructive-foreground rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">
          {badge}
        </span>
      )}
    </a>
  );
}

function ActionButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-primary text-primary-foreground px-6 py-2.5 hover:opacity-90 transition-opacity rounded-[var(--radius-button)]">
      {children}
    </button>
  );
}

export default function Frame() {
  return (
    <div className="bg-background min-h-screen">
      {/* Top Navigation Bar */}
      <header className="bg-primary px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <IconWhite />
          <span className="text-primary-foreground font-bold">ARP</span>
          <nav className="flex gap-6 ml-8">
            <NavItem active>Home</NavItem>
            <NavItem>My Studies</NavItem>
            <NavItemWithBadge badge={2}>My Tasks</NavItemWithBadge>
          </nav>
        </div>
        <div className="flex items-center gap-2 text-primary-foreground">
          <User size={16} />
          <span className="text-sm">smidrkal</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8 bg-[#e8e8e8] min-h-[calc(100vh-50px)]">
        {/* Milestone Deliverable Project Setup Section */}
        <section className="mb-10">
          <h3 className="mb-4 text-foreground">Milestone Deliverable Project Setup</h3>
          <div className="flex gap-3">
            <ActionButton>Request New Milestone</ActionButton>
            <ActionButton>Search Project Updates</ActionButton>
          </div>
        </section>

        {/* SDTM Data Extract Section */}
        <section className="mb-10">
          <h3 className="mb-4 text-foreground">SDTM Data Extract</h3>
          <div className="flex gap-3">
            <ActionButton>Request New SDTM Data Extract</ActionButton>
            <ActionButton>Search Requested SDTM Extract</ActionButton>
          </div>
        </section>

        {/* Audit Trail Report Section */}
        <section>
          <h3 className="mb-4 text-foreground">Audit Trail Report</h3>
          <ActionButton>Go to Audit Trail Report</ActionButton>
        </section>
      </main>
    </div>
  );
}