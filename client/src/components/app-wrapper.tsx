import React from "react";
import AsideBar from "./aside-bar";

interface Props {
  children: React.ReactNode;
}
const AppWrapper = ({ children }: Props) => {
  return (
    <div className="h-full">
      <AsideBar />
      <main className="lg:pl-[60px] pl-[60px] h-full">{children}</main>
    </div>
  );
};

export default AppWrapper;
