# TypeScript Express Backend Template

This is a simple backend starter project built with Express and TypeScript.
It is beginner-friendly and gives you a clean structure to add more APIs.

## What this folder structure is called

This structure is commonly called a **feature-based modular structure**.

You can also hear these names for the same idea:

- Module-based structure
- Vertical slice structure

In this project, each feature (like `todo`) keeps its own routes and controller together.
That makes code easier to find and scale as the app grows.

## Tech stack

- Node.js
- Express
- TypeScript
- Zod (for validation)
- tsc-watch (for auto-compile + auto-restart in dev)

## Project structure

```text
📦 src
├── 📄 env.ts
│     Validate and export environment variables
├── 📄 index.ts
│     Application entry point (creates HTTP server)
├── 📂 app
│   ├── 📄 index.ts
│   │     Creates Express app and mounts feature routers
│   ├── 📂 auth
│   │     Authentication feature (placeholder)
│   ├── 📂 weather
│   │     Weather feature (placeholder)
│   └── 📂 todo
│       ├── 📄 routes.ts
│       │     Todo API routes
│       └── 📄 controllers.ts
│             Todo controller logic
└── 📂 validation
    └── 📄 todo.schema.ts
          Zod schema + inferred Todo type
```

## Setup and run

1. Install dependencies:

```bash
npm install
```

2. Run in development mode:

```bash
npm run dev
```

This command uses `tsc-watch` to:

- Compile TypeScript to JavaScript
- Restart the server when files change

