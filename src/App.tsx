import React from "react";
import ProgressBar from "./components/ProgressBar";

const Header = React.lazy( () => import("./components/Header"))
const MenuSocialMedia = React.lazy( () => import("./components/MenuSocialMedia"))
const Main = React.lazy( () => import("./components/Main"))
const Footer = React.lazy( () => import("./components/Footer"))

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <MenuSocialMedia />
      <ProgressBar />
    </>
  );
}

export default App;
