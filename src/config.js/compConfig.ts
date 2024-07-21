type LoginConfigKeys = {
  loginV1: () => Promise<typeof import("../containers/login/v1")>;
  loginV2: () => Promise<typeof import("../containers/login/v2")>;
};

export const loginConfig : LoginConfigKeys = {
    loginV1: () => import("../containers/login/v1"),
    loginV2: () => import("../containers/login/v2"),
  };
  