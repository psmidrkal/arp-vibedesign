import { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole =
  | 'ta-head'
  | 'ta-lead'
  | 'protocol-lead';

export interface RoleDefinition {
  id: UserRole;
  label: string;
  description: string;
  badgeColor: string;
  badgeBg: string;
}

export const ROLES: RoleDefinition[] = [
  {
    id: 'ta-head',
    label: 'TA Lead',
    description: 'Highest role. Manage Therapy leads, project leads. Override last-lead deprovisioning. Full audit trail access.',
    badgeColor: '#fff',
    badgeBg: '#1d4ed8',
  },
  {
    id: 'ta-lead',
    label: 'Therapy Lead',
    description: 'Assign project leads to MK Numbers within assigned TAs. View audit trail.',
    badgeColor: '#fff',
    badgeBg: '#0369a1',
  },
  {
    id: 'protocol-lead',
    label: 'Project Lead',
    description: 'Manage project team members. Equal authority across all project leads.',
    badgeColor: '#fff',
    badgeBg: '#6d28d9',
  },
];

export interface RolePermissions {
  canManageTALeads: boolean;
  canManageProtocolLeads: boolean;
  canManageTeamMembers: boolean;
  canManageOutputConsumers: boolean;
  canViewAuditTrail: boolean;
  canOverrideDeprovisioning: boolean;
  canAccessRolesPage: boolean;
  canUploadExcel: boolean;
  canViewAnnualReview: boolean;
}

export const PERMISSIONS: Record<UserRole, RolePermissions> = {
  'ta-head': {
    canManageTALeads: true,
    canManageProtocolLeads: true,
    canManageTeamMembers: true,
    canManageOutputConsumers: true,
    canViewAuditTrail: true,
    canOverrideDeprovisioning: true,
    canAccessRolesPage: true,
    canUploadExcel: true,
    canViewAnnualReview: true,
  },
  'ta-lead': {
    canManageTALeads: false,
    canManageProtocolLeads: true,
    canManageTeamMembers: false,
    canManageOutputConsumers: false,
    canViewAuditTrail: true,
    canOverrideDeprovisioning: false,
    canAccessRolesPage: true,
    canUploadExcel: false,
    canViewAnnualReview: false,
  },
  'protocol-lead': {
    canManageTALeads: false,
    canManageProtocolLeads: false,
    canManageTeamMembers: true,
    canManageOutputConsumers: false,
    canViewAuditTrail: false,
    canOverrideDeprovisioning: false,
    canAccessRolesPage: false,
    canUploadExcel: false,
    canViewAnnualReview: false,
  },
};

interface RoleContextValue {
  currentRole: UserRole;
  setCurrentRole: (role: UserRole) => void;
  permissions: RolePermissions;
  roleDefinition: RoleDefinition;
}

const RoleContext = createContext<RoleContextValue | null>(null);

export function RoleProvider({ children }: { children: ReactNode }) {
  const [currentRole, setCurrentRole] = useState<UserRole>('ta-head');

  const permissions = PERMISSIONS[currentRole];
  const roleDefinition = ROLES.find(r => r.id === currentRole)!;

  return (
    <RoleContext.Provider value={{ currentRole, setCurrentRole, permissions, roleDefinition }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error('useRole must be used inside RoleProvider');
  return ctx;
}