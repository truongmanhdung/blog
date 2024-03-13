import React from "react";
import '../assets/styles/layout.css'
import '../assets/styles/custom.css'
const LayoutProfile = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="backgroup-layout">
    <main className="container">{children}</main>
  </div>;
};

export default LayoutProfile;
