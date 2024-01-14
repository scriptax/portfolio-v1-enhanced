"use client";

import { useState, useEffect } from "react";
import MenuIcon from "./MenuIcon";
import Button from "./shared/Button";
import Navlink from "./Navlink";
import Logo from "./Logo";
import AccentMenu from "./AccentMenu";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", screenHandler);
  }, []);

  const sidebarHandler = () => {
    if (window.innerWidth < 960) {
      setSidebar((sidebar) => !sidebar);
      document.body.style.overflowY = !sidebar ? "hidden" : "auto";
    }
  };
  const screenHandler = () => {
    setSidebar(window.innerWidth < 960 && false);
    document.body.style.overflowY =
      window.innerWidth < 960 ? "auto" : document.body.style.overflowY;
  };

  const links = ["About", "Skills", "Work", "Contact"];
  const linksFormatetd = links.map((link) => (
    <Navlink
      href={"#" + link}
      text={link}
      sidebarClose={sidebarHandler}
      key={link}
    />
  ));

  return (
    <>
      <nav className='navbar-primary justify-between text-white pt-1 pb-1'>
        <div className='container'>
          <div className='row align-center'>
            <h1 className='site-title mr-1 display-i-b'>
              <a href='# ' className='fontfam-temp'>
                <Logo />
              </a>
            </h1>
            <AccentMenu />
          </div>
          <ul className='display-f font-md'>
            {linksFormatetd}
            <Navlink
              href='https://blog.stonebob.eu.org'
              text='Blog'
              sidebarClose={sidebarHandler}
            />
            <Button>Resume</Button>
          </ul>
        </div>
        <MenuIcon handler={sidebar} sidebarHandler={sidebarHandler} />
      </nav>
      <Sidebar handler={sidebar}>{linksFormatetd}</Sidebar>
    </>
  );
};

export default Navbar;
