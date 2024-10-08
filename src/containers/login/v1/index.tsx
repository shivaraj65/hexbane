import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "antd";
import styles from "@/styles/containerThemes/login/v1.module.scss";
import { GoogleLogin } from "@react-oauth/google";
import JWTDecoder from "../googleHelper/jwtDecoder";
import type { RootState } from "../../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { updateUserInfo } from "@/redux/reducers/appSlice";
import { Input } from "antd";

const Login = () => {
  const [user, setUser] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <div className={`${styles.loginContainerV1} bg-primary primaryText`}>
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
        <hr />
        <div className={styles.passwordLoginContV1}>
          <div className={styles.componentWrapper}>
            <p className={`${styles.label}`}>Email</p>
            <Input
              value={email}
              size="large"
              placeholder=""
              variant="filled"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className={styles.componentWrapper}>
            <p className={`${styles.label}`}>Password</p>
            <Input.Password
              value={password}
              size="large"
              placeholder=""
              variant="filled"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <Button
            type="primary"
            block
            size={"large"}
            className={styles.loginButton}
          >
            LOGIN
          </Button>
        </div>
      </div>
      {/* <ThemeToggle /> */}
    </div>
  );
};

export default Login;
