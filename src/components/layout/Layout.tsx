import { ReactNode } from "react";
import TopNav from "./TopNav";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen overflow-hidden bg-background">
      <TopNav />
      <main className="container mx-auto my-4 h-[calc(100%-92px)] max-w-xl rounded-lg bg-white p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
