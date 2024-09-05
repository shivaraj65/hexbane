import React, { useState } from "react";
import styles from "@/styles/containerThemes/home/v1.module.scss"
import {
  CompassOutlined,
  HomeOutlined,
  SettingOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import type { RootState } from "../../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import ThemeToggle from "@/components/ui/themeToggle/themeToggle";
import Settings from "./pages/settings";

const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: "page1",
    icon: <HomeOutlined />,
    label: "Page 1",
  },
  {
    key: "page2",
    icon: <CompassOutlined />,
    label: "Page 2",
  },
  {
    key: "page3",
    icon: <BookOutlined />,
    label: "Page 3",
  },
  {
    key: "page4",
    icon: <SettingOutlined />,
    label: "Settings",
  },
];

const Home = () => {
  const [selectedMenu, setSelectedMenu] = useState<any>({
    key: "page4",
    icon: <SettingOutlined />,
    label: "Settings",
  });

  const theme = useSelector((state: RootState) => state.app.theme);
  const userInfo = useSelector((state: RootState) => state.app.userInfo);
  const dispatch = useDispatch();

  return (
    <Layout className={`${styles.homeContainer} bg-primary primaryText`}>
      <Sider
        theme={theme === "dark" ? "dark" : "light"}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          // console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          // console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <p>logo</p>

        <Menu
          theme={theme === "dark" ? "dark" : "light"}
          mode="inline"
          defaultSelectedKeys={[selectedMenu.key]}
          items={items}
          onSelect={(e) => {
            const [selectedItem] = items.filter((item) => item.key === e.key);
            setSelectedMenu(selectedItem || {});
          }}
        />
        <ThemeToggle />
      </Sider>
      <Layout className={`bg-primary primaryText ${styles.rightContainer}`}>
        {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}

        <div style={{ width: "100%", height: "100%" }}>
          {selectedMenu.key === "page4" && <Settings userInfo={userInfo} />}
        </div>

        {/* <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};

export default Home;
 