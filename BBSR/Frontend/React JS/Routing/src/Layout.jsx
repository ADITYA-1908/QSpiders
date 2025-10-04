import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function Layout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Outlet /> {/* Or your page components */}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
