import { X } from 'lucide-react';

interface RepositorySettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RepositorySettingsModal({ isOpen, onClose }: RepositorySettingsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-card rounded-[var(--radius-card)] max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="px-6 py-4 border-b border-border flex items-center justify-between">
          <h2 className="text-foreground m-0">Default Repository Settings</h2>
          <button 
            onClick={onClose} 
            className="text-muted-foreground hover:text-foreground transition-colors bg-transparent border-0 p-0 cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Repository Merge Settings */}
          <div className="mb-8">
            <h3 className="text-primary mb-4">Repository Merge Settings</h3>
            <ul className="space-y-2 ml-0 list-none">
              <li className="text-foreground flex items-start gap-2">
                <span className="text-foreground">•</span>
                <span>
                  <strong>Allow merge commits:</strong> Enabled (for main branch)
                </span>
              </li>
              <li className="text-foreground flex items-start gap-2">
                <span className="text-foreground">•</span>
                <span>
                  <strong>Allow squash merging:</strong> Enabled (for release branch)
                </span>
              </li>
              <li className="text-foreground flex items-start gap-2">
                <span className="text-foreground">•</span>
                <span>
                  <strong>Allow rebase merging:</strong> Disabled
                </span>
              </li>
              <li className="text-foreground flex items-start gap-2">
                <span className="text-foreground">•</span>
                <span>
                  <strong>Auto-delete head branches:</strong> Enabled (branches deleted after merge)
                </span>
              </li>
            </ul>
          </div>

          {/* Branch Protection Rules */}
          <div className="mb-6">
            <h3 className="text-primary mb-4">Branch Protection Rules</h3>

            {/* Main Branch */}
            <div className="mb-6">
              <h4 className="text-foreground mb-3">Main Branch (main)</h4>
              <ul className="space-y-2 ml-0 list-none">
                <li className="text-foreground flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <span>
                    <strong>Enforce admins:</strong> Enabled (admins cannot bypass protection)
                  </span>
                </li>
                <li className="text-foreground flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <span>
                    <strong>Require pull request reviews:</strong> Enabled
                  </span>
                </li>
                <li className="text-foreground flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <span>
                    <strong>Allow deletions:</strong> Disabled (main branch cannot be deleted)
                  </span>
                </li>
                <li className="text-foreground flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <span>
                    <strong>Allow force pushes:</strong> Disabled
                  </span>
                </li>
              </ul>
            </div>

            {/* Release Branches */}
            <div className="mb-4">
              <h4 className="text-foreground mb-3">Release Branches (release* and release/*)</h4>
              <ul className="space-y-2 ml-0 list-none">
                <li className="text-foreground flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <span>
                    <strong>Enforce admins:</strong> Enabled
                  </span>
                </li>
                <li className="text-foreground flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <span>
                    <strong>Require pull request reviews:</strong> Enabled
                  </span>
                </li>
                <li className="text-foreground flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <span>
                    <strong>Allow deletions:</strong> Enabled (can be deleted when merged to main)
                  </span>
                </li>
                <li className="text-foreground flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <span>
                    <strong>Allow force pushes:</strong> Disabled
                  </span>
                </li>
              </ul>
              <p className="text-muted-foreground text-sm italic mt-3 ml-0">
                This ruleset covers both patterns: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">release*</code> (e.g., release1, release2) and <code className="bg-muted px-1.5 py-0.5 rounded text-xs">release/*</code> (e.g., release/v1.0, release/v2.0)
              </p>
            </div>
          </div>

          {/* Note */}
          <div className="bg-muted border border-border rounded-[var(--radius)] p-4 mb-6">
            <p className="text-foreground m-0">
              <strong>Note:</strong> These settings will be automatically applied to your repository upon project creation.
            </p>
          </div>

          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-primary text-primary-foreground px-6 py-2.5 hover:opacity-90 transition-opacity rounded-[var(--radius-button)] cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
