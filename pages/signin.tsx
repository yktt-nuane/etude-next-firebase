import type { NextPage } from "next";
import { SignInForm } from "../components/SignInForm";

const SignInPage: NextPage = () => {
  return (
    <div style={{ margin: "1rem" }}>
      <h2>you need to sign in</h2>
      <SignInForm />
    </div>
  );
};

export default SignInPage;
