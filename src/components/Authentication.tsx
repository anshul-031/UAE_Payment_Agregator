import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

interface AuthenticationProps {
  onLogin: (username: string, password: string, rememberMe: boolean) => void;
}

interface User {
  username: string;
  password: string;
}

const users: User[] = [
  { username: 'demo', password: 'password' },
  { username: 'testuser', password: 'password123' },
];

const Authentication: React.FC<AuthenticationProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      onLogin(username, password, rememberMe);
      setError('');
      if (typeof navigate === 'function') {
        navigate('/');
      }
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="w-full mb-4 px-3 py-2 border rounded"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full mb-4 px-3 py-2 border rounded"
      />
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="rememberMe"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
          className="mr-2"
        />
        <label htmlFor="rememberMe">Remember Me</label>
      </div>
      <button
        onClick={handleLogin}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
      >
        Login
      </button>
      <div className="text-center">
        <Link to="/reset-password" className="text-blue-500 hover:underline">
          Reset Password
        </Link>
        <br />
        <Link to="/signup" className="text-blue-500 hover:underline">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Authentication;
