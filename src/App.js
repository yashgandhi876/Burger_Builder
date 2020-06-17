import React from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";
const App = () => {
  return (
    <Layout>
      <BurgerBuilder />
    </Layout>
  );
};
export default App;
