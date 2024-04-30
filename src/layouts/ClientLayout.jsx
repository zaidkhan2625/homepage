import { Suspense } from "react";
import { Footer, Navbar, Preloader } from "@/components";

const ClientLayout = ({ children }) => {
  return (
    <Suspense>
      <Suspense>
        <Navbar />
      </Suspense>

      <Suspense fallback={<Preloader />}>{children}</Suspense>

    
      <Suspense>
        <Footer />
      </Suspense>
    </Suspense>
  );
};

export default ClientLayout;
