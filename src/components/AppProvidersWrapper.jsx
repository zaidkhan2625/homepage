import { useEffect, lazy } from "react";

import {   LayoutProvider } from "@/context";


const AppProvidersWrapper = ({ children }) => {
  const handleChangeTitle = () => {
    if (document.visibilityState == "hidden")
      document.title = "Please come back :-(";
    else
      document.title = "Yum Reactjs - Multipurpose Food Tailwind CSS Template";
  };

  useEffect(() => {
    import("preline");

    document.addEventListener("visibilitychange", handleChangeTitle);
    return () => {
      document.removeEventListener("visibilitychange", handleChangeTitle);
    };
  }, []);

  return (
 
    <LayoutProvider>
    {children}
     
       
      </LayoutProvider>
  );
};
export default AppProvidersWrapper;
