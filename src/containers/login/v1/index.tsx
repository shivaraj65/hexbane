import React from 'react';
import { Col, Row } from 'antd';
import styles from './loginV1.module.css';

const Login =() => {
  return (
    <Row className={styles.loginContainerV1}>
      <Col span={16} className={styles.loginSideV1}>image</Col>
      <Col span={8}>login from v1</Col>
    </Row>
  );
}

export default Login;