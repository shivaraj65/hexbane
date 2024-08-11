//component leve configs for selection of components from appConfig
type LoginConfigKeys = {
  loginV1: () => Promise<typeof import("../containers/login/v1")>;
  loginV2: () => Promise<typeof import("../containers/login/v2")>;
};

type signupConfigKeys = {
  signupV1: () => Promise<typeof import("../containers/signup/v1")>;
  signupV2: () => Promise<typeof import("../containers/signup/v2")>;
};

export const loginConfig: LoginConfigKeys = {
  loginV1: () => import("../containers/login/v1"),
  loginV2: () => import("../containers/login/v2"),
};

export const signupConfig: signupConfigKeys = {
  signupV1: () => import("../containers/signup/v1"),
  signupV2: () => import("../containers/signup/v2"),
};
