import React, { useRef, useState } from "react";
import background from "../../asset/img/background.jpg";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  console.log(name);
  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-800"
      style={{ backgroundImage: `url(${background})` }}
      onSubmit={(e) => e.preventDefault()}
    >
      <form className="bg-black font-bold bg-opacity-75 text-white w-1/4 p-10 max-w-lg min-w-72">
        <h1 className="text-3xl">{isSignIn ? "Sign In" : "Sign Up"}</h1>

        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 mt-4 bg-gray-700 w-full rounded"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="p-2 mt-4 bg-gray-700 w-full rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 mt-4 bg-gray-700 w-full rounded"
        />
        <button className="w-full bg-red-600 p-2 mt-6 rounded ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <button className="text-sm font-thin mt-2" onClick={handleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered?Sign In Now"}
        </button>
      </form>
    </div>
  );
};

export default Login;
