import React, { useRef, useState } from "react";
import background from "../../asset/img/background.jpg";
import { Validation } from "../../utils/helper";
import { auth } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [error, setError] = useState("");
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  console.log(error);

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSignInandSignUp = () => {
    let message = Validation(email.current.value, password.current.value);
    setError(
      isSignIn
        ? message
        : message != null
        ? "Password should contain atleast 8 character, one special character, one capital letter and one small letter and one number"
        : null
    );

    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          // Signed up
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + errorMessage);
        });
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-gradient-to-b from-black"
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
            required
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
        <p className="text-red-700 text-l font-bold">{error}</p>
        <button
          className="w-full bg-red-600 p-2 mt-6 rounded "
          onClick={handleSignInandSignUp}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <button className="text-sm font-thin mt-2" onClick={handleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </button>
      </form>
    </div>
  );
};

export default Login;
