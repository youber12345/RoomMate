// src/HomePage.js
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>Click below to login:</p>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}

export default HomePage;
