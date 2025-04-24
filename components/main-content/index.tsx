"use client";

import React from "react";

const MainContent = ({children,}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="max-w-[1024px] flex w-full mx-auto pt-8">
      {children}
    </div>
  )
}

export default MainContent;