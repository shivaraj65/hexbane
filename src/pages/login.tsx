import React, { lazy, Suspense } from "react";
import { loginConfig } from "@/config.js/compConfig";
import config from "@/config.js/appConfig";

const Login = () => {
    const Component = lazy(loginConfig[config.login]);

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
    );
};

export default Login;
