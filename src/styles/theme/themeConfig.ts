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
      darkItemBg: "#212121",
      itemBg: "#ececec",
    },
    Layout: {
      siderBg: "#212121",
      lightSiderBg: "#ececec",
    },
  },
};

export default theme;
