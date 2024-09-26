import React from "react";

import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  preview?: boolean;
  children: React.ReactNode;
}

function Layout({ preview, children }: LayoutProps) {
  return (
    <div id="wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
