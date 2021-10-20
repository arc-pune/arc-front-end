import React from "react";
import NavBar from "../components/NavBar";
import ProfileMAin from "../components/ProfileMAin";

import { Footer } from "./../components/Footer";
const Profile = () => {
  return (
    <div>
      <div style={{ background: " #FAAF4F" }}>
        <NavBar />
      </div>

      <ProfileMAin />
      <Footer />
    </div>
  );
};

export default Profile;
