"use client";

import { ReactNode } from "react";
import Button from "./shared/Button";
import Navlink from "./Navlink";

type MenuIconProps = {
  handler: boolean;
  children: ReactNode;
};

function Sidebar({ children, handler }: MenuIconProps) {
  return (
    <>
      <aside className={`sidebar ${handler && "sidebar-open"}`}>
        <ul className='font-lg'>
          {children}
          <Navlink
            href='https://blog.stonebob.eu.org'
            text='Blog'
            sidebarClose={() => {}}
          />
          <li>
            <Button customClasses='font-lg mt-2'>Resume</Button>
          </li>
        </ul>
      </aside>
      {handler && <div className='sidebar-overlay'></div>}
    </>
  );
}

export default Sidebar;
