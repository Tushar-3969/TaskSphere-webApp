
# TradeNest Web App

A comprehensive trading platform built with React, Node.js, and MongoDB for managing stock portfolios, watchlists, and trading operations.

## 🚀 Project Overview

TradeNest is a full-stack trading application that provides users with a modern interface for:
- **Portfolio Management**: Track holdings and positions
- **Watchlist**: Monitor favorite stocks with real-time data
- **Trading Interface**: Place buy/sell orders with interactive UI
- **Dashboard**: Comprehensive overview of trading activities

## 🏗️ Architecture

```
TradeNest-webApp/
├── frontend/          # Landing page & marketing site
├── dashboard/         # Main trading dashboard (React)
└── backend/           # API server (Node.js + Express)
```

## 🛠️ Tech Stack

### Frontend (Dashboard)
- **React 19.1.1** - Modern React with latest features
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **CSS3** - Custom styling with modern design

### Frontend (Landing Page)
- **React 19.1.1** - Marketing and landing pages
- **Vite** - Build tool and development
- **Responsive Design** - Mobile-first approach

### Backend
- **Node.js** - JavaScript runtime
- **Express.js 5.1.0** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose 8.18.0** - MongoDB ODM
- **Passport.js** - Authentication middleware
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

### Dashboard Components
```
dashboard/src/components/
├── AppDash.jsx        # Main dashboard layout
├── Dashboard.jsx      # Dashboard container
├── Funds.jsx          # Funds management
├── Holdings.jsx       # Portfolio holdings
├── Home.jsx           # Dashboard home
├── Menu.jsx           # Navigation menu
├── Orders.jsx         # Order management
├── Positions.jsx      # Open positions
├── Summary.jsx        # Portfolio summary
├── TopBar.jsx         # Top navigation bar
├── WatchList.jsx      # Stock watchlist
└── BuyActionWindow.jsx # Buy/sell order interface
```

### Landing Page Components
```
frontend/src/Landing_page/
├── about/             # About page components
├── home/              # Homepage components
├── pricing/           # Pricing information
├── product/           # Product showcase
├── signup/            # User registration
└── support/           # Customer support
```

### Backend Structure
```
backend/
├── model/             # Mongoose models
├── schemas/           # Database schemas
├── index.js           # Main server file
└── package.json       # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (v5 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TradeNest-webApp
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Dashboard Dependencies**
   ```bash
   cd ../dashboard
   npm install
   ```

4. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Database Setup

1. **Start MongoDB**
   ```bash
   mongod
   ```

2. **Create Database**
   - MongoDB will automatically create the `TradeNest` database
   - Collections will be created when first data is inserted

### Running the Application

1. **Start Backend Server**
   ```bash
   cd backend
   npm start
   # Server runs on http://localhost:8080
   ```

2. **Start Dashboard**
   ```bash
   cd dashboard
   npm run dev
   # Dashboard runs on http://localhost:5173
   ```

3. **Start Frontend**
   ```bash
   cd frontend
   npm run dev
   # Frontend runs on http://localhost:5174
   ```

## 📊 Features

### Dashboard Features
- **Real-time Watchlist**: Monitor favorite stocks with hover actions
- **Portfolio Overview**: View holdings and positions
- **Order Management**: Place buy/sell orders with quantity and price
- **Interactive UI**: Hover effects and responsive design
- **Stock Search**: Search functionality for stocks and instruments

### Trading Features
- **Buy/Sell Orders**: Interactive order placement interface
- **Quantity & Price Input**: Customizable order parameters
- **Order History**: Track all placed orders
- **Position Management**: Monitor open positions

### User Experience
- **Responsive Design**: Works on desktop and mobile
- **Modern UI**: Clean, professional trading interface
- **Hover Actions**: Quick access to trading functions
- **Real-time Updates**: Live data integration

## 🔌 API Endpoints

### Backend API (Port 8080)

#### Holdings
- `GET /allHolding` - Retrieve all portfolio holdings

#### Positions
- `GET /allPositions` - Retrieve all open positions

#### Orders
- `POST /newOrder` - Place new buy/sell order
  ```json
  {
    "name": "STOCK_SYMBOL",
    "qty": 100,
    "price": 150.50,
    "mode": "BUY"
  }
  ```

## 🗄️ Database Schema

### Orders Schema
```javascript
{
  name: String,    // Stock symbol
  qty: Number,     // Quantity
  price: Number,   // Price per share
  mode: String     // BUY or SELL
}
```

### Holdings Schema
```javascript
{
  // Portfolio holdings structure
  // (Schema details in HoldingSchema.js)
}
```

### Positions Schema
```javascript
{
  // Open positions structure
  // (Schema details in PositionsSchema.js)
}
```

## 🎨 UI Components

### WatchList Component
- **Hover Actions**: Buy/Sell buttons appear on stock hover
- **Stock Information**: Name, percentage change, price
- **Interactive Elements**: Chart and options icons
- **Responsive Layout**: Adapts to different screen sizes

### BuyActionWindow Component
- **Order Interface**: Clean form for order placement
- **Input Validation**: Quantity and price inputs
- **API Integration**: Connects to backend order system
- **User Feedback**: Confirmation messages

## 🔧 Development

### Available Scripts

#### Dashboard
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

#### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Code Style
- **ESLint**: Configured for React best practices
- **React Hooks**: Modern React patterns
- **Component Structure**: Modular and reusable components
- **CSS Organization**: Structured styling approach

## 🚀 Deployment

### Production Build
1. **Build Dashboard**
   ```bash
   cd dashboard
   npm run build
   ```

2. **Build Frontend**
   ```bash
   cd frontend
   npm run build
   ```

3. **Deploy Backend**
   - Ensure MongoDB is accessible
   - Set environment variables
   - Use PM2 or similar process manager

### Environment Variables
```bash
# Backend
MONGODB_URI=mongodb://127.0.0.1:27017/TradeNest
PORT=8080

# Frontend
VITE_API_URL=http://localhost:8080
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📝 License

This project is licensed under the ISC License.

## 👥 Team

- **Developer**: Tushar Pathare
- **Project**: TradeNest Trading Platform

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**TradeNest** - Empowering traders with modern technology and intuitive interfaces.
=======

>>>>>>> e26cb53679fb1215eba2215c9a0b34dca7216cc9
