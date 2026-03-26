import { useState, useRef, useEffect } from 'react';
import { Home, Settings, ChevronDown, User, Shield } from 'lucide-react';
import svgPaths from '@/imports/svg-6hwcrc560a';
import { useRole, ROLES, UserRole } from '@/app/context/RoleContext';

type Screen =
  | 'home'
  | 'milestone-details'
  | 'collaborators-approvers'
  | 'repository-setup'
  | 'milestone-summary'
  | 'my-studies'
  | 'admin'
  | 'reports'
  | 'sdtm-extract';

interface TopNavProps {
  onNavigate: (screen: Screen) => void;
  activeScreen?: Screen;
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

function NavLink({
  children,
  active = false,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
      className={`text-primary-foreground hover:opacity-80 transition-opacity ${
        active ? 'border-b-2 border-primary-foreground pb-0.5' : ''
      }`}
    >
      {children}
    </a>
  );
}

export default function TopNav({ onNavigate, activeScreen }: TopNavProps) {
  const { currentRole, setCurrentRole, roleDefinition, permissions } = useRole();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleRoleSelect = (role: UserRole) => {
    setCurrentRole(role);
    setDropdownOpen(false);
  };

  return (
    <header className="bg-primary px-6 py-2 flex items-center justify-between">
      {/* Left: Logo + Nav links */}
      <div className="flex items-center gap-2">
        <IconWhite />
        <span className="text-primary-foreground font-bold">ARP</span>
        <nav className="flex gap-6 ml-8">
          <NavLink active={activeScreen === 'home'} onClick={() => onNavigate('home')}>
            <div className="flex items-center gap-2">
              <Home size={16} />
              <span>Home</span>
            </div>
          </NavLink>
        </nav>
      </div>

      {/* Right: Role badge + user / role switcher */}
      <div className="flex items-center gap-3">
        {/* Current role badge */}
        <span
          className="px-2 py-0.5 rounded-[var(--radius-tag)] text-xs font-medium"
          style={{
            backgroundColor: roleDefinition.badgeBg,
            color: roleDefinition.badgeColor,
            border: roleDefinition.id === 'output-consumer' ? '1px solid #9ca3af' : 'none',
          }}
        >
          {roleDefinition.label}
        </span>

        {/* User + role switcher */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 text-primary-foreground hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-0 p-0"
          >
            <User size={16} />
            <span className="text-sm">smidrkal</span>
            <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {dropdownOpen && (
            <div
              className="absolute right-0 top-full mt-2 w-72 bg-card border border-border shadow-[var(--elevation-sm)] z-50 rounded-[var(--radius-card)] overflow-hidden"
            >
              {/* Header */}
              <div className="px-4 py-3 border-b border-border bg-muted">
                <div className="flex items-center gap-2 mb-1">
                  <Shield size={14} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">Demo Role Switcher</span>
                </div>
                <p className="text-xs text-muted-foreground leading-snug">
                  Switch roles to demonstrate different capabilities to stakeholders.
                </p>
              </div>

              {/* Role list */}
              <div className="py-1 max-h-80 overflow-y-auto">
                {ROLES.map((role) => {
                  const isActive = role.id === currentRole;
                  // Only super admin can switch roles in a real scenario; here it's always enabled for demo
                  return (
                    <button
                      key={role.id}
                      onClick={() => handleRoleSelect(role.id)}
                      className={`w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-muted transition-colors border-0 ${
                        isActive ? 'bg-muted' : 'bg-card'
                      }`}
                    >
                      {/* Color dot */}
                      <span
                        className="mt-1 shrink-0 w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: role.badgeBg, border: role.id === 'output-consumer' ? '1px solid #9ca3af' : 'none' }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-foreground">{role.label}</span>
                          {isActive && (
                            <span className="text-xs px-1.5 py-0.5 rounded-[var(--radius-tag)] bg-primary text-primary-foreground">
                              Active
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{role.description}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Footer note */}
              <div className="px-4 py-2 border-t border-border bg-muted">
                <p className="text-xs text-muted-foreground">
                  Logged in as <span className="text-foreground">smidrkal</span> · TA Lead
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}