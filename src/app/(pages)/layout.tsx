import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';
// import AOS from 'aos';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  return (
    
      <div className="flex flex-col w-full h-screen overflow-hidden">
          <main className="flex-1 overflow-y-auto bg-white" >
           <Navbar />
            {children}
          <Footer/>
          </main>
      </div>
  );
};

export default Layout;
