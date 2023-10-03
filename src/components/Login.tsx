"use client";
import { Avatar } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";
const Login = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        signed in as {session?.user?.email} <br />
        <p>Welcome {session?.user?.name}</p>
        <Avatar
          alt={session?.user?.name as string}
          src={session?.user?.image as string}
        />
        <button onClick={() => signOut()}>Sign out </button>
      </>
    );
  }
  return (
    <>
      Not Signed In <br /> <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};
export default Login;
