# OTAP - Network Engineers RAG System

A modern React-based web application for network engineers featuring an AI-powered assistant with a beautiful, industry-standard UI/UX design.

![OTAP Logo](https://img.shields.io/badge/OTAP-Network%20Engineers%20RAG-blue)
![React](https://img.shields.io/badge/React-18.2.0-61dafb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.0-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 Features

- **Modern Authentication System**
  - Animated login page with Jio branding
  - Secure credential validation
  - Smooth transition animations

- **AI-Powered Chat Interface**
  - Real-time messaging with network engineering AI assistant
  - Clean, intuitive chat UI similar to ChatGPT
  - Message history and conversation management
  - Typing indicators and loading states

- **Professional UI/UX**
  - Responsive design for all devices
  - Smooth animations and transitions
  - Dark mode support (coming soon)
  - Accessibility features

- **Technical Features**
  - Component-based React architecture
  - RESTful API integration
  - WebSocket support for real-time communication
  - State management with React Context
  - Tailwind CSS for styling

## 📸 Screenshots

### Login Page
- Animated Jio logo entrance
- Floating dots background animation
- Clean form design with validation

### Chat Interface
- Sidebar with chat history
- Message bubbles with user/assistant distinction
- Auto-resizing input area
- Mobile-responsive design

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Styling**: Tailwind CSS 3.3.0
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Real-time**: Socket.io Client
- **Routing**: React Router DOM v6
- **Build Tool**: Create React App

## 📋 Prerequisites

- Node.js >= 14.0.0
- npm >= 6.0.0
- Backend API server (for full functionality)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/otap-frontend.git
   cd otap-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` file with your configuration:
   ```env
   REACT_APP_API_URL=http://localhost:8000
   REACT_APP_WEBSOCKET_URL=ws://localhost:8000
   ```

4. **Start the development server**
   ```bash
   npm start
   ```
   
   The application will open at [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
otap-frontend/
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   │   ├── auth/       # Authentication components
│   │   ├── chat/       # Chat interface components
│   │   ├── common/     # Shared components
│   │   └── layout/     # Layout components
│   ├── hooks/          # Custom React hooks
│   ├── services/       # API services
│   ├── store/          # State management
│   ├── utils/          # Utility functions
│   └── styles/         # Global styles
├── .env.example        # Environment variables template
├── package.json        # Project dependencies
└── README.md          # Project documentation
```

## 🔐 Default Credentials

For demo purposes:
- **Username**: `root`
- **Password**: `Jio@75034`

⚠️ **Note**: Change these credentials in production!

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deploy to Static Hosting

The build folder can be deployed to any static hosting service:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop the build folder
- **GitHub Pages**: Use gh-pages package
- **AWS S3**: Upload to S3 bucket with static website hosting

## 🔌 API Integration

The application expects a backend API with the following endpoints:

- `POST /api/auth/login` - User authentication
- `POST /api/chat` - Send message and receive AI response
- `GET /api/chat/history` - Retrieve chat history
- `WebSocket /ws` - Real-time messaging (optional)

### API Request Format

```javascript
// Chat message
POST /api/chat
{
  "message": "How do I configure VLAN?",
  "history": [...previous messages]
}

// Expected response
{
  "response": "To configure VLAN...",
  "timestamp": "2024-01-01T12:00:00Z"
}
```

## 🛠️ Development

### Available Scripts

- `npm start` - Start development server
- `npm test` - Run tests
- `npm run build` - Build for production
- `npm run eject` - Eject from Create React App (one-way operation)

### Code Style

- ESLint configuration included
- Prettier for code formatting
- Follow React best practices
- Use functional components with hooks

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Jio for branding inspiration
- OpenAI ChatGPT for UI/UX inspiration
- React community for excellent documentation
- Tailwind CSS for the utility-first CSS framework

## 📞 Support

For support, email support@otap.com or join our Slack channel.

## 🔮 Future Enhancements

- [ ] Dark mode support
- [ ] Multi-language support
- [ ] Voice input/output
- [ ] File upload for network configs
- [ ] Export chat history
- [ ] Advanced search in chat history
- [ ] Integration with network monitoring tools
- [ ] Mobile applications (iOS/Android)

---

Made with ❤️ by the OTAP Team