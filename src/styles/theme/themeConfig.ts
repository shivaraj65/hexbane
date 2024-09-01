/**
 * antd theme/themeConfig.ts
 */

import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    fontSize: 15,
    colorPrimary: "#7a4fbf",
  },
  components: {
    Menu: {
      darkItemBg: "#0d0d0d",
      itemBg: "#ececec",
    },
    Layout: {
      siderBg: "#0d0d0d",
      lightSiderBg: "#ececec",
    },
  },
};

export default theme;
