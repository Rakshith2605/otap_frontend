# OTAP Frontend Repository Contents

This repository contains a complete React-based frontend application for the OTAP (Network Engineers RAG) system.

## 📁 Repository Structure:

```
otap-frontend/
├── README.md              # Comprehensive documentation
├── package.json           # Dependencies and scripts
├── .env.example          # Environment variables template
├── .gitignore            # Git ignore rules
├── LICENSE               # MIT License
├── setup.sh              # Mac/Linux setup script
├── setup.bat             # Windows setup script
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── jsconfig.json         # JavaScript configuration
├── .eslintrc.json        # ESLint rules
│
├── public/               # Static assets
│   ├── index.html       # HTML template
│   └── manifest.json    # PWA manifest
│
└── src/                  # Source code
    ├── index.js          # Entry point
    ├── index.css         # Global styles
    ├── App.js            # Main App component
    ├── App.css           # App styles
    │
    ├── components/       # React components
    │   ├── auth/         # Authentication components
    │   │   ├── LoginPage.jsx
    │   │   └── LoadingTransition.jsx
    │   └── chat/         # Chat interface components
    │       └── ChatInterface.jsx
    │
    ├── services/         # API services
    │   └── api/
    │       ├── index.js  # API client setup
    │       ├── auth.js   # Authentication API
    │       └── chat.js   # Chat API
    │
    └── utils/            # Utility functions
        ├── constants.js  # App constants
        └── helpers.js    # Helper functions
```

## 🚀 Quick Start:

1. Extract the archive
2. Navigate to the directory: `cd otap-frontend`
3. Install dependencies: `npm install`
4. Copy environment file: `cp .env.example .env`
5. Update `.env` with your n8n webhook URL
6. Start development server: `npm start`

## 🔑 Default Credentials:
- Username: `root`
- Password: `Jio@75034`

## 🌐 n8n Webhook Integration:
Update the `.env` file with your n8n webhook URL:
```
REACT_APP_API_URL=http://localhost:5678/webhook-test/dcc1c536-588e-49af-a034-e1ff7e5af111
```

## 📦 Build for Production:
```bash
npm run build
```

The build folder can be deployed to any static hosting service (Vercel, Netlify, AWS S3, etc.)

---
Created with ❤️ by the OTAP Team