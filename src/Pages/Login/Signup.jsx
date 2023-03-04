import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../config/firebase';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await user.updateProfile({ displayName: username });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex-col overflow-hidden bg-base-300 flex justify-center items-center">
      <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
        Sign up for an account
      </h1>
      <form onSubmit={handleSignup} className="py-12 px-12 bg-base-200 rounded-2xl shadow-xl z-20">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-3 px-4 w-full rounded-2xl mb-4 items-center justify-center"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="py-3 px-4 w-full rounded-2xl mb-4 items-center justify-center"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="py-3 px-4 w-full rounded-2xl mb-4 items-center justify-center"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="confirmPassword">
            Confirm password
          </label>
          <input
            className="py-3 px-4 w-full rounded-2xl mb-4 items-center justify-center"
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="space-y-4 flex flex-col justify-center items-center">
          <button
            className="py-3 space-y-4 w-64 text-md text-white btn-primary rounded-2xl flex justify-center text-center gap-2 items-center mb-4"
            type="submit"
          >
            Sign Up
          </button>
        </div>
        <span>
          Already have an account?
          <Link className="text-primary" to="/login">Login!</Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;
