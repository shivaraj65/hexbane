import "@/styles/globals.css";
import theme from "@/styles/theme/themeConfig";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import { store } from '../redux/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId="96265001529-q2srbrcjrc9l4v64du1al7t8k6t6vvj0.apps.googleusercontent.com">
      <Provider store={store}>
        <ConfigProvider theme={theme}>
          <Component {...pageProps} />
        </ConfigProvider>
      </Provider>
    </GoogleOAuthProvider>
  );
}
