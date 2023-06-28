import React from "react";
import {
  Community,
  Explore,
  Product,
  Developer,
  Writers,
  Marketing,
  Form,
} from "../../Components/Community export.js";
import { Footer } from "../../Components/modules/footer";
import { Navbar } from "../../Components/modules/navbar";
const CommunityApp = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-24">
      <Community />
      <Explore />
      <Product />
      <Developer />
      <Writers />
      <Marketing />
      <Form />
      <Footer />
      </div>
      
    </div>
  );
};

export default CommunityApp;
