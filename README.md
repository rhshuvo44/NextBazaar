# NextBazaar — Frontend

Next.js 16 ecommerce frontend with App Router, Turbopack, Tailwind CSS v4, daisyUI 5, and Redux Toolkit.

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

## Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run lint` | ESLint check |
| `npm run type-check` | TypeScript type check |
| `npm run test:unit` | Jest unit tests |
| `npm run test:e2e` | Playwright e2e tests |

## Project structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── admin/              # Admin panel (dashboard, products, orders, vendors, users)
│   ├── auth/               # Signin, signup, password reset
│   ├── cart/               # Shopping cart
│   ├── shop/               # Product listing and categories
│   ├── vendor/             # Vendor portal
│   ├── wishlist/           # Wishlist
│   ├── layout.tsx          # Root layout with Redux provider
│   └── globals.css         # Tailwind + daisyUI theme config
├── components/
│   ├── auth/               # Auth form components
│   ├── form/               # Form inputs and controls
│   ├── layout/             # Navbar, footer, theme toggle
│   ├── modules/            # Feature-specific components (shop, cart)
│   └── ui/                 # Shared UI components (ProductCard, buttons)
├── lib/
│   ├── api.ts              # Typed fetch wrapper with JWT injection
│   ├── store.ts            # Redux store configuration
│   ├── slices/             # Redux slices (wishlist)
│   ├── wishlist.ts         # localStorage wishlist persistence
│   └── ReduxProvider.tsx   # Client-side Redux provider
├── types/                  # TypeScript interfaces
├── data/                   # Static fallback data
├── assets/                 # Images and media
├── __tests__/              # Tests
└── scripts/                # Build utilities
```

## Key conventions

- Path alias `@/` maps to `src/`
- Admin panel requires `ADMIN` role — access via `/admin`
- API client at `lib/api.ts` automatically injects JWT from localStorage
- Redux store uses typed hooks: `useAppDispatch`, `useAppSelector`
