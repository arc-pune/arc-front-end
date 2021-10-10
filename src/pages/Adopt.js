import React from "react";
import NavBar from "../components/NavBar";

import { Footer } from "../components/Footer";
import { AdoptMain } from "../components/AdoptMain";

export const Adopt = () => {
  return (
    <div>
      <NavBar></NavBar>
      <AdoptMain />
      <Footer />
    </div>
  );
};
