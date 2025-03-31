# React Router DOM - A Complete Guide

## 📖 What is React Router DOM?

React Router DOM is a client-side routing library for React applications. It allows developers to create Single Page Applications (SPAs) with multiple views, providing a seamless navigation experience without full page reloads. It manages the browser history and updates the UI based on the URL.

### ✨ Key Features:
- Enables declarative routing with components.
- Supports dynamic route parameters.
- Allows nested routing.
- Provides programmatic navigation.
- Handles redirects and 404 pages.
- Supports authentication-based protected routes.

## 📌 Installation

To install React Router DOM, use:

```sh
npm install react-router-dom
```

or

```sh
yarn add react-router-dom
```

## 🏗 Setting Up React Router

First, wrap your application with `<BrowserRouter>` in `index.js`:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

## 📂 Defining Routes

Use the `<Routes>` and `<Route>` components to define routes in your application:

```jsx
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
export default App;
```

## 🔄 Navigation with `<Link>`

### What is `<Link>`?
`<Link>` is a React Router component used for navigation between different pages without refreshing the browser.

Use the `<Link>` component to navigate between pages without reloading:

```jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
export default Navbar;
```

## 🔗 Using `<NavLink>` (for active links)

### What is `<NavLink>`?
`<NavLink>` is similar to `<Link>`, but it adds an `activeClassName` to the link when it matches the current URL, which helps in styling active links.

```jsx
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <NavLink to="/" activeClassName="active">Home</NavLink>
      <NavLink to="/about" activeClassName="active">About</NavLink>
    </nav>
  );
}
export default Navbar;
```

## 🚀 Programmatic Navigation with `useNavigate()`

Use `useNavigate` hook to navigate dynamically:

```jsx
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate('/about')}>Go to About</button>
  );
}
```

## 📦 Dynamic Routes (URL Parameters)

To create dynamic routes with parameters:

```jsx
import { Routes, Route, useParams } from 'react-router-dom';

function UserProfile() {
  const { username } = useParams();
  return <h1>Profile of {username}</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/user/:username" element={<UserProfile />} />
    </Routes>
  );
}
export default App;
```

## 🛠 Handling 404 Pages

Define a wildcard route (`*`) for handling 404 errors:

```jsx
function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;
```

## 🎭 Nested Routes

### What is `<Outlet>`?
`<Outlet>` is a special component that renders child routes inside a parent route. It acts as a placeholder for nested routes.

To structure nested routes:

```jsx
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="stats" element={<Stats />} />
      </Route>
    </Routes>
  );
}
```

## 🔑 Protected Routes (Authentication)

To restrict access to certain pages:

```jsx
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = false; // Change this based on auth logic
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
    </Routes>
  );
}
```

## 🌍 Redirects using `<Navigate>`

```jsx
import { Navigate } from 'react-router-dom';

function OldPage() {
  return <Navigate to="/newpage" />;
}
```

## 🎯 Conclusion

React Router DOM simplifies navigation in React apps. It supports dynamic routing, nested routes, protected routes, and more. Mastering it will make your apps more powerful!



