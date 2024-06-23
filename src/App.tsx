import React from "react";

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
    </>
  );
}

export default App;
