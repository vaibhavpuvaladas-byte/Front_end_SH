# Gigly Frontend Components and Requirements Breakdown

Based on the provided documentation, here is a detailed breakdown of all the frontend parts, components, and requirements for the Gigly project.

## 1. Technology Stack and Setup
- **Framework:** Next.js and React will be used to build the interface.
- **Web3 Integration:** The `Thirdweb React SDK v5` will handle wallet connection, transactions, and smart contract reads (using hooks like `ConnectButton`, `useActiveAccount`, and `useReadContract`).
- **APIs:** You will use `open.er-api.com` for an off-chain rate conversion fallback (specifically for INR).

## 2. Design System and UI/UX Requirements
- **Theme:** Clean, professional freelance-marketplace vibe (resembling Fiverr/Upwork), combined with a modern fintech tone similar to Stripe.
- **Language:** **No blockchain jargon.** Words like "wallet", "gas", and "transaction hash" are strictly prohibited in the UI. Instead, use natural language such as "Payment secured", "Processing", and "Paid".
- **Color Scheme:**
  - **Base:** Neutral palette with white or light gray surfaces.
  - **Accent:** Teal or green (to match the "Gigly" branding).
  - **Status Colors:**
    - Green = Released/Success
    - Amber = Pending Review
    - Red/Coral = Disputed
- **Typography:** Modern, clean sans-serif font matching contemporary SaaS platforms. All labels must be in **sentence case** (no ALL CAPS).
- **Component Styling:**
  - Cards should have rounded corners (12px radius), soft 1px borders, and avoid heavy shadows.
  - The freelancer directory items should look like Fiverr listings: avatar circle, name, and a skill tag.
  - Job statuses should be displayed using colored pills or badges corresponding to the status colors mentioned above.
- **Layout & Responsiveness:**
  - The app should use a responsive grid that gracefully collapses into a single-column stack on mobile devices.
  - Top metric cards are required for dashboards (e.g., active jobs, total earned).

## 3. Authentication & Wallet Flow
- Users will authenticate through the Thirdweb `ConnectButton` utilizing Google OAuth or an email OTP for an in-app wallet setup. There are no seed phrases or external wallet apps.
- **Account Abstraction:** The wallet must support ERC-4337 Account Abstraction (`executionMode: "EIP4337"`) and sponsor gas for transactions (`sponsorGas: true` via Thirdweb Paymaster).
- **Onboarding:** After logging in, users are presented with a role picker ("I'm hiring" vs "I'm working"). This choice must be saved against their wallet address.

## 4. Key Application Views (Dashboards)

### Client Dashboard
- **Tabs:** "Browse freelancers" and "My jobs".
- **Browse Tab:** Displays a static demo directory of freelancers.
- **Funding Flow:** Clicking on a freelancer opens a simple form for a task title and USDC amount. Submitting this triggers the gasless `createJob` contract call.
- **Review System:** A "Needs review" section displays submitted work, offering two primary actions: "Approve" (triggering `approveAndRelease`) or "Dispute" (triggering `raiseDispute`).

### Freelancer Dashboard
- **Tabs:** "Incoming tasks" and "Earnings".
- **Real-time Tasks:** The "Incoming tasks" tab listens for `JobCreated` events (where freelancer matches the active address) and must update in near-real-time without manual page refreshes or database polling.
- **Submission Flow:** A "Submit work" button calls `submitWork`, starting a 24-hour review timer visible to both parties.
- **Claiming Payments:** If 24 hours elapse with no client action, a "Claim payment" button appears, which triggers the `claimAfterWindow` function.
- **Currency Dashboard:** Displays the freelancer's live USDC balance converted to EUR and INR, refreshing every 30 seconds. Note: An on-chain badge should visually distinguish the EUR value (from the Chainlink oracle) from the INR fallback API value.

### Admin/Arbiter Dashboard
- A simple internal screen listing disputed jobs with an option for the arbiter to `resolveDispute` and distribute funds.

## 5. State Handling
- **Empty States:** Must gracefully handle empty data (e.g., "No active jobs yet", "No freelancers found").
- **Error States:** Clearly display errors without exposing underlying technical jargon (e.g., wallet connection failures, insufficient USDC balances, stale oracle data).
- **Success States:** Provide immediate feedback on user actions (e.g., "Job funded", "Payment released").