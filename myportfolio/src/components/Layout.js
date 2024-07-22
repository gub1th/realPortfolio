import React from 'react';
import { Outlet } from "react-router-dom";
import Header from './Header';
import './Layout.css';

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;