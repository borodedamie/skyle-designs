import React from "react";
import Nav from './Nav'
import ContactHero from './ContactHero'
import Footer from './Footer'
const Layout = ({children}) => {
  return (
    <div>
      {/* <Nav/> */}
      <main>{children}</main>
      <ContactHero/>
      <Footer/>
    </div>
  );
};

export default Layout;
