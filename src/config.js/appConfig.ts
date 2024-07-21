import { loginConfig, signupConfig } from "./compConfig";

type configType = {
  login: keyof typeof loginConfig;
  signup: keyof typeof signupConfig;
};

const config: configType = {
  login: "loginV1",
  signup: "signupV1",
};

export default config;
