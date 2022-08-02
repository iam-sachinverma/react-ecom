import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  useEffect(() => {
    async function fetchRedirectResult() {
      const response = await getRedirectResult(auth);
      // console.log(response);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }
    fetchRedirectResult();
  });

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  // const logGoogleRedirect = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   console.log({ user });
  //! user not log beacuse we redirect to diffrent domain so website will mount again when redirect back
  //! to fix this we use useEffect(), getRedirectResult, auth
  // };

  return (
    <div>
      <h1>Hii sign-in page</h1>
      <button onClick={logGoogleUser}>sign-in with google popup</button>
      <button onClick={signInWithGoogleRedirect}>
        sign-in with google redirect
      </button>
    </div>
  );
};

export default SignIn;
