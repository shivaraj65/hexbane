import { loginConfig } from "./compConfig";

type configType = { login: keyof typeof loginConfig };

const config: configType = {
  login: "loginV2",
};

export default config;
