# Claude Instructions for Adding Configuration to Existing Next.js Project

This file provides instructions for adding comprehensive tooling, configuration, and development setup to an existing Next.js project with completed UI.

## Overview

These instructions will add professional development tooling to your existing Next.js project:

- **Testing**: Jest (unit) + Playwright (e2e)
- **Code Quality**: ESLint + Prettier + TypeScript strict mode
- **Git Hooks**: Husky for pre-commit checks
- **Form Handling**: React Hook Form with Zod validation
- **Development Scripts**: Comprehensive npm scripts for all workflows

## Step 1: Install Dependencies

Add these dependencies to your existing project:

### Core Dependencies to Add

```bash
npm install @hookform/resolvers@^3.9.1 class-variance-authority@^0.7.1 clsx@^2.1.1 cmdk@1.0.4 date-fns@3.6.0 embla-carousel-react@8.5.1 input-otp@1.4.1 next-themes@^0.4.4 react-hook-form@^7.54.1 react-resizable-panels@^2.1.7 sonner@^1.7.1 tailwind-merge@^2.5.5 tailwindcss-animate@^1.0.7 vaul@1.1.2 zod@^3.24.1
```

### Development Dependencies to Add

```bash
npm install -D @eslint/eslintrc@^3.3.1 @playwright/test@^1.53.1 @testing-library/jest-dom@^6.6.3 @testing-library/react@^16.3.0 @testing-library/user-event@^14.6.1 @types/jest@^30.0.0 husky@^9.1.7 jest@^30.0.0 jest-environment-jsdom@^29.7.0 prettier@^3.5.3 ts-jest@^29.4.0
```

## Step 2: Update Package.json Scripts

Replace your scripts section with this comprehensive set:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "test:e2e:headed": "playwright test --headed",
    "prepare": "husky || true",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "typecheck": "tsc --noEmit",
    "check": "npm run typecheck && npm run lint && npm run format:check"
  }
}
```

## Step 3: Configuration Files

Create these configuration files in your project root:

### 1. TypeScript Configuration (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "target": "ES6",
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    "types/**/*.d.ts"
  ],
  "exclude": ["node_modules"]
}
```

### 2. Update Next.js Configuration (`next.config.mjs`)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ["app", "components", "lib", "hooks"],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

### 3. PostCSS Configuration (`postcss.config.mjs`)

```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;
```

### 4. ESLint Configuration (`eslint.config.js`)

```javascript
const { FlatCompat } = require("@eslint/eslintrc");
const path = require("path");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {},
});

module.exports = [...compat.extends("next/core-web-vitals", "next/typescript")];
```

### 5. Jest Configuration (`jest.config.js`)

```javascript
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/tests/", // Exclude Playwright tests
  ],
  collectCoverageFrom: [
    "components/**/*.{js,jsx,ts,tsx}",
    "app/**/*.{js,jsx,ts,tsx}",
    "lib/**/*.{js,jsx,ts,tsx}",
    "hooks/**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  moduleNameMapping: {
    "^@/(.*)$": "<rootDir>/$1",
  },
};

module.exports = createJestConfig(customJestConfig);
```

### 6. Jest Setup (`jest.setup.js`)

```javascript
import "@testing-library/jest-dom";
```

### 7. Playwright Configuration (`playwright.config.ts`)

```typescript
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 1,
  timeout: 60000,
  reporter: "html",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
    actionTimeout: 30000,
    navigationTimeout: 30000,
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
  ],
  webServer: {
    command: "npm run dev",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: !process.env.CI,
  },
});
```

### 8. Prettier Configuration (`.prettierrc`)

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

### 9. Update Git Configuration (`.gitignore`)

Add these lines to your existing .gitignore:

```
# tests
test-results/
tests/
playwright-report/
coverage/

# claude files
CLAUDE.md
TODO.md
PLAN.md

# prettier
.prettierignore
```

## Step 4: Utility Functions

Create `lib/utils.ts` if it doesn't exist:

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## Step 5: Initialize Development Tools

Run these commands to set up the development environment:

```bash
# Install all dependencies
npm install

# Setup Husky git hooks
npm run prepare

# Initialize Playwright browsers
npx playwright install

# Run initial checks
npm run check
```

## Development Workflow

Once configured, use these commands for development:

- **Start development**: `npm run dev`
- **Run all checks**: `npm run check` (typecheck + lint + format check)
- **Fix linting**: `npm run lint:fix`
- **Format code**: `npm run format`
- **Run unit tests**: `npm test`
- **Run e2e tests**: `npm run test:e2e`
- **Type checking**: `npm run typecheck`
- **Build for production**: `npm run build`

## Key Features Added

- **Comprehensive Testing**: Jest for unit tests, Playwright for e2e
- **Code Quality Tools**: ESLint, Prettier, TypeScript strict mode
- **Git Workflow**: Husky hooks for pre-commit quality checks
- **Development Scripts**: Complete set of npm scripts for all workflows
- **Type Safety**: Strict TypeScript configuration
- **Form Handling**: React Hook Form with Zod validation ready
- **Professional Setup**: Production-ready configuration

This setup transforms your existing Next.js project into a professional development environment with comprehensive tooling and quality checks.
