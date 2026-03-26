
You are an expert product designer working on an enterprise access provisioning tool called “ARP” for a pharma organization.

Goal:
Update and refine the EXISTING ARP prototype in this file based on the functional requirements below, while:
- Reusing and extending the design patterns, layouts, and interaction styles that already exist in the prototype.
- Applying best UX practices for complex, role-based enterprise tools.
- Using the Merck design system that is already attached to this file (components, tokens, typography, etc.).
- Keeping the flows simple, clear, and easy to understand for stakeholders.

Important constraints:
- Do NOT redesign everything from scratch.
- Start from the current screens, navigation, and components.
- Adjust, extend, or consolidate what is already there where needed to meet the requirements.
- If there are multiple valid options, make reasonable design decisions and keep the experience coherent and consistent.
- This prototype is for communication and stakeholder review, not production code.

--------------------------------
1. ROLES & ROLE SWITCHING FOR DEMOS
--------------------------------

- Identify the roles implied by the requirements and by the existing prototype. At minimum, support:
  - Support Team / Admin
  - Therapeutic Area (TA) Lead
  - Compound/Protocol Lead / Project Lead
  - Consumer Lead (output access only)
  - Output Consumer / Reader
  - Higher-level lead (e.g., TA Head or Governance)
  - ARP Super Admin (for demos)

- Make me (the current user in the prototype) the most powerful role:
  - Introduce an “ARP Super Admin” or similar role for demo purposes.
  - Show this role clearly next to the logged-in name in the UI (e.g., top bar).

- Add a clear but simple **role switcher**:
  - Let me switch between roles directly in the prototype so I can demonstrate different capabilities to stakeholders.
  - Adapt visibility and available actions per role (you can use different frames, variants, or annotations to show differences).

--------------------------------
2. APPLY REQUIREMENTS TO EXISTING FLOWS
--------------------------------

Use the existing screens and patterns wherever possible. Extend or adjust them so that the prototype supports:

- **Therapeutic Area Lead Assignment**
  - A way for a support team to manage a list of TA leads.
  - Indicate that TA leads can be updated via a file (e.g., Excel) maintained by a support team.
  - This can be a dedicated admin/config area using current admin patterns.

- **Compound / Protocol Lead Assignment**
  - TA leads must be able to assign one or more project/compound leads per compound/protocol.
  - Support multiple leads per protocol with no hard limit.
  - Reuse existing list/detail or table layouts and extend them if needed.

- **Project Team Management**
  - Project leads can add/remove project team members for each project under their protocol.
  - All project leads share equal authority (no single “owner”).
  - Use existing table, form, or side-panel patterns where available.

- **Access Control Checks (Eligibility)**
  - Include a simple eligibility check pattern when assigning leads or team members
    (e.g., flagging ineligible users such as regions not approved).
  - Indicate that eligibility is based on a list maintained monthly by “Karl.”
  - Show clear feedback when a user is not eligible and prevent assignment in those cases.
  - Integrate this into existing add-user flows instead of adding entirely new flows, if possible.

- **Consumer / Output Access**
  - Support assigning output consumers (e.g., medical writers) with Read or Read/Write access to specific NetApp volumes (not Domino projects).
  - Introduce or adapt a screen/section for managing “Output Consumers” or “Output Access”.
  - Introduce the “Consumer Lead” role who can add users for output access only, with a simplified UI.

- **Audit Trail**
  - Provide a view where users can see who granted access, when, and which role/access was assigned.
  - Use existing table or log patterns if present; otherwise, extend the most similar pattern.
  - Support filtering/search at a basic level (design only).

- **Deprovisioning Rules**
  - Make sure the UX prevents removal of the last project lead for a protocol, unless:
    - A replacement is assigned at the same time, OR
    - A higher-level lead (e.g., TA Head or Super Admin) performs the action with explicit confirmation.
  - Represent this rule in the prototype using dialogs, warnings, and state indicators, aligned with existing components.

- **Annual Review Support**
  - Add or refine views that help with annual review of user access.
  - Show that consumer access can be automatically removed after a defined period (e.g., one year) and can be extended or revoked during review.
  - Use existing dashboard, list, or review patterns and keep it light-touch (MVP).

- **Future-Proofing & Integration**
  - Without over-designing, keep the structure open to:
    - Additional consumer leads, stealth projects, more granular access in the future.
  - Ensure screens and data structures are visually consistent, so they can be integrated with future dashboards.
  - Use notes/annotations for any assumptions or future extension points, rather than building full new systems.

--------------------------------
3. INTERACTIONS & ANNOTATIONS
--------------------------------

- Connect the most important flows interactively:
  - Assigning TA leads.
  - Assigning project leads to a protocol.
  - Managing project team members.
  - Assigning output consumers and setting read vs read/write.
  - Running eligibility checks (show both eligible and ineligible states).
  - Attempting to remove the last project lead (with and without higher-level permissions).
  - Performing annual review actions.

- Add concise annotations where necessary to:
  - Clarify role-specific behavior on a screen (e.g., which controls are visible for which role).
  - Explain business rules (eligibility, deprovisioning, annual review, consumer-only access).
  - Highlight where you made design decisions based on existing patterns in the prototype.

Please:
- Start from the current ARP screens and components in this file.
- Make changes that are **incremental, coherent, and just enough** to satisfy the requirements.
- Preserve the overall “feel” and structure of the existing prototype, while improving clarity and alignment with the requirements.
```
