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

const CommunityApp = () => {
  return (
    <div>
      <Community />
      <Explore />
      <Product />
      <Developer />
      <Writers />
      <Marketing />
      <Form />
      <Footer />
    </div>
  );
};

export default CommunityApp;
