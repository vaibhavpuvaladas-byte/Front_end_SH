# Agent Instructions for Gigly Frontend

## 1. Frontend Technology Stack
- **Frameworks & Libraries:** Next.js and React.
- **Web3 Integration:** Thirdweb React SDK v5 (using hooks like `ConnectButton`, `useActiveAccount`, and `useReadContract`).
- **Hosting:** Free tiers of Vercel or Netlify.
- **External APIs:** `open.er-api.com` for INR conversion fallback (off-chain rate API).

## 2. UI/UX Design Requirements
- **Vibe & Tone:** Clean, professional freelance-marketplace (like Fiverr or Upwork) mixed with a clean fintech tone (inspired by Stripe).
- **Terminology:** Hide all blockchain jargon (wallet addresses, gas, transaction hashes). Use plain language like "Payment secured", "Processing", or "Paid".
- **Color Palette:**
  - Neutral base: white/light gray surfaces.
  - Accent color: teal or green (matching the "Gigly" name).
  - Status colors: green (released/success), amber (pending review), red/coral (disputed).
- **Typography:** Clean, modern sans-serif font matching contemporary SaaS dashboards. All labels must use sentence case with no all-caps text.
- **Components:** Rounded cards (12px radius, soft 1px borders, no heavy shadows). The freelancer directory features an avatar circle, name, and skill tag in a "Fiverr-style" listing card. Job statuses are displayed as colored pills or badges.
- **Layout:** Responsive grid collapsing into a single-column stack on mobile. Dashboards feature metric cards at the top (e.g., active jobs, total earned).

## 3. Authentication & Wallet Flow
- **Login Flow:** Google OAuth or email OTP via a Thirdweb in-app wallet (no seed phrase or separate wallet app).
- **Account Abstraction:** Wallet uses ERC-4337 Account Abstraction (`executionMode: "EIP4337"`) and a Thirdweb Paymaster with `sponsorGas: true`.
- **Role Picker:** Users pick "I'm hiring" or "I'm working", which is stored against their wallet address.

## 4. Application Workflows (Frontend)
- **Client Dashboard:**
  - "Browse freelancers" tab (static demo directory).
  - "My jobs" list.
  - Fund job flow triggering gasless `createJob`.
  - "Needs review" tab to "Approve" (`approveAndRelease`) or "Dispute" (`raiseDispute`).
- **Freelancer Dashboard:**
  - "Incoming tasks" tab updating in near-real-time by listening to `JobCreated` events.
  - "Submit work" button calling `submitWork` and starting a 24-hour countdown.
  - "Claim payment" button (enabled after 24h) triggering `claimAfterWindow`.
- **Currency Dashboard:** Displays USDC balance live in INR and EUR, refreshing every 30 seconds. On-chain badge for EUR oracle-sourced figure vs fallback API.
- **Admin/Arbiter View:** Internal screen listing "Disputed" jobs to resolve disputes and split funds.

## 5. Frontend State Handling
- **Empty States:** Display "No active jobs yet" or "No freelancers found".
- **Error States:** Handle and gracefully display wallet connect failures, insufficient USDC, rejected transactions, and stale oracle data warnings.
- **Success States:** Clear messages like "Job funded" or "Payment released".