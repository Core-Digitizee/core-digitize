import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface LayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-black text-white flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 lg:px-20 py-10">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
