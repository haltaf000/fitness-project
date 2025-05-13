# Fitness Tracker MVP

[![React](https://img.shields.io/badge/React-18.2-blue)](https://react.dev/)
[![Django](https://img.shields.io/badge/Django-5.0-green)](https://www.djangoproject.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

A full-stack fitness tracking application with workout logging, progress tracking, and goal setting features.

![Dashboard Preview](./screenshots/dashboard.png)

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Development Setup](#development-setup)
- [Project Phases](#project-phases)
- [Contributing](#contributing)
- [License](#license)

## Features

### Phase 1: Core Implementation (Completed)
**Backend**
- ✅ JWT Authentication (Register/Login/Refresh)
- ✅ Run Tracking (CRUD operations)
- ✅ Weight Logging (CRUD operations)
- ✅ Admin Interface
- ✅ API Documentation (Swagger)
- ✅ PostgreSQL-ready configuration

**Frontend**
- ✅ User authentication flow
- ✅ Run logging with form validation
- ✅ Weight tracking interface
- ✅ Dashboard with metrics
- ✅ Responsive Material UI design
- ✅ React Query for state management
- ✅ Protected routes
- ✅ Toast notifications
- ✅ Progress charts (Chart.js)

## Tech Stack

**Backend**
- Django 5.2 + Django REST Framework
- PostgreSQL (Production), SQLite (Development)
- JWT Authentication (Simple JWT)
- DRF-YASG (Swagger Docs)
- WhiteNoise (Static files)
- CORS Headers

**Frontend**
- React 18
- Material UI 5
- React Router 6
- React Query (TanStack)
- Chart.js + react-chartjs-2
- react-hot-toast
- react-hook-form

## Development Setup

### Backend
```bash
git clone https://github.com/yourusername/fitness-project.git
cd fitness-project/fitness_backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate    # Windows

# Install dependencies
pip install -r requirements.txt

# Configure environment
cp .env.example .env
# Edit .env with your credentials

# Run migrations
python manage.py migrate
python manage.py runserver
```

## Project Phases

### Phase 1: Core Functionality (95% Complete)
**Remaining Tasks**
- Advanced chart visualizations
- Mobile-responsive optimizations
- Profile photo upload
- Export data (CSV/PDF)
- Unit tests coverage

### Phase 2: Enhanced Features
- Social Login (Google/Apple)
- Fitness Challenges System
- Workout Templates
- Mobile App (React Native)
- Push Notifications
- Community Features
- AI Workout Recommendations

### Phase 3: Deployment & Scaling
- Dockerize Application
- CI/CD Pipeline
- Kubernetes Cluster Setup
- Monitoring (Prometheus/Grafana)
- Load Testing
- Payment Integration (Premium Features)

## Contributing

1. Fork the repository
2. Create feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit changes:
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. Push to branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open Pull Request