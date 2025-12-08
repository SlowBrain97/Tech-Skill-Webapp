# Tech Skill Notification - Multi-language PWA Push Learning App

A Progressive Web App (PWA) for learning Web Fullstack development through Web Push Notifications.

## 🚀 Features

- **Multi-language Support**: English, Japanese, Vietnamese
- **PWA**: Installable, offline-capable
- **Push Notifications**: Scheduled learning reminders
- **Customizable Settings**: Difficulty levels, topics, notification frequency
- **Admin Dashboard**: CRUD operations for questions

## 🛠️ Tech Stack

### Frontend
- React + Vite + TypeScript
- TailwindCSS (Dark theme)
- Zustand + React Query
- React Router DOM v6
- react-i18next
- Service Worker + Web Push API

### Backend
- NestJS
- MongoDB + Mongoose
- JWT Authentication
- Web Push (VAPID)
- Cron Scheduler

## 📦 Installation

### Prerequisites
- Node.js (v18+)
- MongoDB (running locally or remote)

### Backend Setup

```bash
cd backend
npm install

# Configure environment variables
# Edit .env file with your MongoDB URI and VAPID keys

# Generate VAPID keys (optional)
npx web-push generate-vapid-keys

# Run seed script to populate initial questions
npx ts-node src/seed.ts

# Start backend
npm run start:dev
```

### Frontend Setup

```bash
cd frontend
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🔑 Environment Variables

### Backend (.env)
```
MONGO_URI=mongodb://localhost:27017/tech-skill-notification
JWT_SECRET=your-secret-key-change-in-production
VAPID_PUBLIC_KEY=your-vapid-public-key
VAPID_PRIVATE_KEY=your-vapid-private-key
PORT=3000
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Register user |
| POST | `/auth/login` | Login |
| GET | `/auth/profile` | Get profile |
| GET | `/questions/random` | Get random question |
| POST | `/questions` | Create question (Admin) |
| POST | `/notifications/subscribe` | Subscribe to push |

## 🎯 Usage

1. **Register/Login**: Create an account or login
2. **Configure Settings**: Set your preferred language, difficulty, topics
3. **Enable Notifications**: Subscribe to push notifications
4. **Admin**: Create questions via admin dashboard (role: admin)

## 📱 PWA Installation

The app can be installed on:
- Desktop (Chrome, Edge, Safari)
- Android (Chrome, Firefox)
- iOS (Safari)

## 🔧 Development

### Run Backend
```bash
cd backend
npm run start:dev
```

### Run Frontend
```bash
cd frontend
npm run dev
```

### Seed Database
```bash
cd backend
npx ts-node src/seed.ts
```

## 📝 License

MIT

## 👥 Contributing

Contributions welcome! Please open an issue or PR.
