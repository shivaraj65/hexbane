import React from "react";
import Image from "next/image";
import styles from "./errorPage.module.css";
import ScareCrowImg from "@/assets/images/error/Scarecrow.png";
import { Card, Col, Row } from "antd";

interface props {
  message: string;
  title: string;
}

const ErrorPage = ({ title = "", message = "" }: props) => {
  return (
    <div className={`${styles.errorContainer} bg-primary primaryText`}>
      <h1 className={styles.errorTitle}>{title}</h1>

      <Row className={styles.errorRow}>
        <Col span={10} className={styles.errorCol}>
          <div className={styles.imageContainer}>
            <Image
              src={ScareCrowImg}
              alt="404-Scarecrow"
              className={styles.image}
            />
          </div>
        </Col>
        <Col span={14} className={styles.errorCol}>
          <div className={styles.displayContent}>
            <h2 className={styles.displayContentInfo}>
              I have bad news for you
            </h2>
            <Card bordered={true} className={`${styles.errorCard} card`}>
              <p className={styles.displayContentText}>{message}</p>
            </Card>
            {/* <Button className="btn">Back to homepage</Button> */}
          </div>
        </Col>
      </Row>
      {/* <div className="display"></div> */}

      {/* <footer>
        <p>
          <a
            href="https://github.com/shivaraj65"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shivaraj65
          </a>{" "}
          - AtomifyStudios - HEXBANE
        </p>
      </footer> */}
    </div>
  );
};

export default ErrorPage;
