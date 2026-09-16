# Tensorik Enterprise ERP

A modern enterprise resource planning platform built with Next.js, designed for manufacturing and industrial operations.

## Modules

| Module | Description |
|--------|-------------|
| **Dashboard** | Business overview with revenue, expenses, profit, and order metrics |
| **General Ledger** | Journal entries, financial summaries, and account activity |
| **Expenses** | Track, review, and manage business expenses |
| **Invoices** | Manage customer invoices, payments, and outstanding balances |
| **Procurement** | Purchase orders, suppliers, deliveries, and business spend |
| **Inventory** | Stock levels, warehouses, reorder points, and inventory value |
| **Sales** | Orders, customers, revenue, and sales performance |
| **HR & Payroll** | Employee records, workforce data, and people operations |
| **Users & Roles** | Workspace users, roles, and access permissions |
| **Audit Logs** | Activity record across the workspace |

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS 4, shadcn/ui
- **Icons:** Lucide React
- **Language:** TypeScript

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
  layout.tsx          # Root layout with metadata
  page.tsx            # Dashboard
  sign-in/page.tsx    # Sign-in page
  [...slug]/page.tsx  # Dynamic module routes
  globals.css         # Global styles

components/
  erp/
    erp-shell.tsx      # Main layout shell, sidebar, navigation
    module-workspace.tsx # Module page layouts
    mock-data.ts       # Demo data for all modules
    profile-state.ts   # User profile state management
    utility-pages.tsx  # Settings, profile, help, sign-in pages
  ui/
    button.tsx         # Button component

lib/
  utils.ts            # cn() utility for Tailwind class merging
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Create production build |
| `pnpm start` | Start production server |
