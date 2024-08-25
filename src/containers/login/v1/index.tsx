import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import styles from "./loginV1.module.css";
import { GoogleLogin } from "@react-oauth/google";
import JWTDecoder from "../googleHelper/jwtDecoder";
import type { RootState } from "../../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { updateUserInfo } from "@/redux/reducers/appSlice";
import ThemeToggle from "@/components/ui/themeToggle/themeToggle";

const Login = () => {
  const [user, setUser] = useState<any>(null);

  const userInfo = useSelector((state: RootState) => state.app.userInfo);
  const dispatch = useDispatch();

  const setGoogUserInfo = async () => {
    const userinfo = await JWTDecoder(user);
    console.log("userinfo", userinfo);

    //store the data into the database and set the state 101
    dispatch(
      updateUserInfo({
        id: "id",
        name: "string",
        picture: "String",
        email: "string",
        email_verified: false,
        password: "string",
        authOrigin: "string",
        secret: "string",
        totpStatus: false,
      })
    );
  };

  useEffect(() => {
    if (user) {
      setGoogUserInfo();
    }
  }, [user]);

  return (
    <Row className={styles.loginContainerV1}>
      <Col span={16} className={styles.loginSideV1}>
        {/* image */}
      </Col>
      <Col span={8}>
        <div className={styles.formContainerV1}>
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              console.log(credentialResponse);
              setUser(credentialResponse.credential);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          <div className={styles.passwordLoginContV1}>
            <p className={`muted ${styles.mutedtext}`}>hfffjhfjhor</p>
            <h1 className={"primary"}>irbgoebrgr</h1>
            <ThemeToggle />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
