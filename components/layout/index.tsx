import { ReactNode } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
