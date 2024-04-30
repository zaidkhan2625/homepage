import { Suspense } from "react";
import { authBgOtherImg, waveOtherImg } from "@/assets/data";

const AuthLayout = ({ children }) => {
  return (
    <div className="bg-gradient-to-b from-primary/5 via-primary/5 to-primary/10">
      <div className="relative flex items-center bg-gradient-to-b from-primary/5 via-primary/5 to-primary/10 py-8 sm:py-16 md:h-screen md:py-36">
        <div className="container">
          <Suspense>{children}</Suspense>
        </div>

        <div>
          <div className="absolute end-0 start-0 top-1/2 -z-10 w-full -translate-y-1/3">
            <img
              width={1853}
              height={420}
              src={waveOtherImg}
              alt=""
              className="flex w-full opacity-50"
            />
          </div>
          <div className="absolute end-0 top-0 -z-10 hidden h-5/6 xl:flex">
            <img
              width={657}
              height={610}
              alt=""
              src={authBgOtherImg}
              className="z-0 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
