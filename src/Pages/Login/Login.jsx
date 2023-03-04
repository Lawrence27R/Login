import React, { useContext, useEffect, useState } from 'react';
import { BsFillKanbanFill, BsGithub, BsGoogle } from 'react-icons/bs';
import { useSearchParams, Link } from 'react-router-dom';
import { AuthContext } from '../../config/Context/auth';
import { signInWithGithub, signInWithGoogle, signInWithEmail } from '../../config/firebase';

const Login = () => {
  const user = useContext(AuthContext).currentUser;
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      const returnUrl = searchParams.get('http://localhost:4001/Home');
      window.location.href = returnUrl || 'http://localhost:4001/Home';
    }
  }, [user, searchParams]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginWithEmail = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmail(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex-col overflow-hidden bg-base-300 flex justify-center items-center">
      <h1 className="md:text-6xl text-5xl flex gap-2 items-center font-bold text-center mb-4 cursor-pointer">
        <BsFillKanbanFill className="text-primary" />
        KanBan Board!
      </h1>
      <div className="py-12 px-12 bg-base-200 rounded-2xl shadow-xl z-20">
        <div>
          <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
            Login
          </h1>
          <p className="w-80 text-center text-sm mb-8 font-semibold text-base-content/60 tracking-wide cursor-pointer">
            {/* Create an account to enjoy all the services without any limtations */}
          </p>
          <form className="space-y-4 flex flex-col justify-center items-center mb-4">
            <input type="email" placeholder="Enter Your Email" value={email} onChange={handleEmailChange} className="py-3 px-4 w-full rounded-2xl mb-4 items-center justify-center" />
            <input type="password" placeholder="Enter Your Password" value={password} onChange={handlePasswordChange} className="py-3 px-4 w-full rounded-2xl mb-4 items-center justify-center" />
            <button onClick={handleLoginWithEmail} type="submit" className="py-3 w-64 text-md text-white btn-primary rounded-2xl flex justify-center text-center gap-2 items-center mb-4">
              <span>Login with Email</span>
            </button>
          </form>
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div className="space-y-4 flex flex-col justify-center items-center">
          <button onClick={signInWithGoogle} type="button" className="py-3 w-64 text-md text-white btn-primary rounded-2xl flex justify-center text-center gap-2 items-center">
            <BsGoogle size={20} />
            <span>Login with Google</span>
          </button>
          <button onClick={signInWithGithub} type="button" className="py-3 w-64 text-md text-white btn-primary rounded-2xl flex justify-center text-center gap-2 items-center">
            <BsGithub size={20} />
            <span>Login with Github</span>
          </button>
        </div>
      </div>
      <span>
        Dont have an account?
        <Link className="text-primary" to="/signup">Sign Up!</Link>
      </span>
    </div>
  );
};

export default Login;
