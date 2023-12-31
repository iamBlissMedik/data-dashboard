"use client";
import Button from "@mui/material/Button";
import { useSession, signIn, signOut } from "next-auth/react";
const Login = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        signed in as {session?.user?.email} <br />
        <Button variant="contained" color="error" onClick={() => signOut()}>
          Sign out{" "}
        </Button>
      </>
    );
  }
  return (
    <>
      <h2>Please log in</h2> <br />{" "}
      <Button variant="contained" color="success" onClick={() => signIn()}>
        Sign in
      </Button>
    </>
  );
};
export default Login;
