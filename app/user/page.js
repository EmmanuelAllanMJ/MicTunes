
import Profile from "@/components/User/Profile";
import { auth, currentUser, useUser } from "@clerk/nextjs";
import React from "react";

function User() {
      // const user =  currentUser();

  // console.log("User",user)

  return <div>
    <Profile />
  </div>;
}

export default User;
