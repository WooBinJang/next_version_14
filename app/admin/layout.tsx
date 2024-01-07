import React, { Children } from "react";

interface Props {
  children: React.ReactNode;
}
const layout = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside className="bg-slate-200 p-5 mr-5">
        <h1>Admin Sidebar</h1>
      </aside>
      {children}
    </div>
  );
};

export default layout;
