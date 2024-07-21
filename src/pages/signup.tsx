import React, { lazy, Suspense } from "react";
import { signupConfig } from "@/config.js/compConfig";
import config from "@/config.js/appConfig";

const Signup = () => {
  const Component = lazy(signupConfig[config.signup]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

export default Signup;