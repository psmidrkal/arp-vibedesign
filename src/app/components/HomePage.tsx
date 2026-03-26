import { Target, Database, FileText, ArrowRight, Clock, CheckCircle, Info, Folder, Users, Settings, TrendingUp, BarChart, UserCheck } from "lucide-react";
import TopNav from "./shared/TopNav";
import { useRole } from "@/app/context/RoleContext";
import svgPaths from '@/imports/svg-6hwcrc560a';
import { useState } from "react";

interface HomePageProps {
  onNavigate: (screen: 'home' | 'milestone-details' | 'collaborators-approvers' | 'repository-setup' | 'milestone-summary' | 'my-studies' | 'admin' | 'reports' | 'sdtm-extract') => void;
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

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: Array<{ icon: React.ReactNode; label: string }>;
  buttonLabel: string;
  onClick?: () => void;
  disabled?: boolean;
  disabledTooltip?: string;
}

function FeatureCard({ icon, title, description, features, buttonLabel, onClick, disabled = false, disabledTooltip }: FeatureCardProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className={`
        bg-card p-6
        flex flex-col
        transition-all duration-200
        relative
        ${!disabled 
          ? 'hover:shadow-[var(--elevation-sm)]' 
          : 'opacity-60'
        }
      `}
      onMouseEnter={() => disabled && setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Disabled Tooltip */}
      {disabled && showTooltip && disabledTooltip && (
        <div 
          className="absolute top-4 right-4 bg-muted border border-border rounded-[var(--radius)] px-3 py-2 shadow-[var(--elevation-sm)] z-10 max-w-xs"
        >
          <div className="flex items-start gap-2">
            <Info size={16} className="text-primary mt-0.5 flex-shrink-0" />
            <p className="text-sm text-foreground">{disabledTooltip}</p>
          </div>
        </div>
      )}
      
      {/* Icon in light background box */}
      <div 
        className="w-12 h-12 rounded-[var(--radius)] flex items-center justify-center mb-4"
        style={{ backgroundColor: 'rgba(0, 133, 124, 0.1)' }}
      >
        <div className="text-primary">
          {icon}
        </div>
      </div>
      
      {/* Title */}
      <h3 className="mb-3 text-foreground" style={{ color: '#00857C' }}>
        {title}
      </h3>
      
      {/* Description */}
      <p className="mb-6 text-foreground leading-relaxed flex-grow text-sm">
        {description}
      </p>
      
      {/* Feature Tags */}
      <div className="flex flex-wrap gap-3 mb-5">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2 text-foreground opacity-75 text-sm">
            <div className="text-primary">
              {feature.icon}
            </div>
            <span>{feature.label}</span>
          </div>
        ))}
      </div>
      
      {/* CTA Button */}
      <button
        onClick={onClick}
        disabled={disabled}
        className={`
          w-full py-2.5 px-4 
          border-2 rounded-[var(--radius-button)]
          flex items-center justify-center gap-2
          transition-all duration-200
          text-sm
          ${!disabled 
            ? 'border-primary text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer' 
            : 'border-muted-foreground text-muted-foreground cursor-not-allowed'
          }
        `}
      >
        <span className="font-medium">{buttonLabel}</span>
        <ArrowRight size={18} />
      </button>
    </div>
  );
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const { currentRole } = useRole();
  
  // TA leads and Therapy leads should only have access to Roles page
  // Project Leads and other roles cannot access Roles
  const isRestrictedRole = currentRole === 'ta-head' || currentRole === 'ta-lead';

  return (
    <div className="bg-background min-h-screen">
      <TopNav onNavigate={onNavigate} activeScreen="home" />

      {/* Main Content */}
      <main className="p-8 bg-[#e8e8e8] min-h-[calc(100vh-50px)]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="mb-6 text-foreground" style={{ color: '#00857C' }}>Welcome to ARP</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Projects Card */}
            <FeatureCard
              icon={<Folder size={32} strokeWidth={2} />}
              title="Projects"
              description="Initiate new project setup requests with automated repository provisioning. Define project scope, collaborators, and technical requirements."
              features={[
                { icon: <Users size={16} />, label: 'Team Collaboration' },
                { icon: <Settings size={16} />, label: 'Auto Setup' }
              ]}
              buttonLabel="View My Projects"
              onClick={() => onNavigate('my-studies')}
              disabled={isRestrictedRole}
              disabledTooltip="Access restricted to project leads."
            />

            {/* SDTM Card */}
            <FeatureCard
              icon={<Database size={32} strokeWidth={2} />}
              title="SDTM"
              description="Request and manage SDTM data extracts. Generate comprehensive test data for study setup and testing scenarios."
              features={[
                { icon: <Clock size={16} />, label: 'Fast Processing' },
                { icon: <Database size={16} />, label: 'Bulk Data' }
              ]}
              buttonLabel="Manage SDTM"
              onClick={() => onNavigate('sdtm-extract')}
              disabled={isRestrictedRole}
              disabledTooltip="Access restricted to project leads."
            />

            {/* Reports Card */}
            <FeatureCard
              icon={<FileText size={32} strokeWidth={2} />}
              title="Reports"
              description="Access comprehensive analytics and insights. Track project progress, resource utilization, and team performance metrics."
              features={[
                { icon: <TrendingUp size={16} />, label: 'Analytics' },
                { icon: <BarChart size={16} />, label: 'Insights' }
              ]}
              buttonLabel="View Reports"
              onClick={() => onNavigate('reports')}
              disabled={isRestrictedRole}
              disabledTooltip="Access restricted to project leads."
            />

            {/* Roles Card */}
            <FeatureCard
              icon={<UserCheck size={32} strokeWidth={2} />}
              title="Roles"
              description="Manage TA leads and project leads across therapeutic areas. Assign roles and permissions for organizational oversight."
              features={[
                { icon: <Users size={16} />, label: 'Therapy Leads' },
                { icon: <UserCheck size={16} />, label: 'Project Leads' }
              ]}
              buttonLabel="Manage Roles"
              onClick={() => onNavigate('admin')}
              disabled={!isRestrictedRole}
              disabledTooltip="Access restricted to TA leads and Therapy leads."
            />
          </div>
        </div>
      </main>
    </div>
  );
}