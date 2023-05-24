import { ReactNode } from "react";
import TopNav from "./TopNav";

interface LayoutProps {
  children: ReactNode;
}

/**
 * Layout component.
 * A Component that wraps the content with a top navigation bar.
 *
 * @param {LayoutProps} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="h-screen overflow-hidden bg-background">
      <TopNav />
      <main className="container relative mx-auto my-0 h-[calc(100%-60px)] max-w-xl rounded-lg bg-white p-4 md:my-4 md:h-[calc(100%-92px)]">
        {children}
      </main>
    </div>
  );
};

export default Layout;
