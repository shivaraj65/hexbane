import { Avatar, Col, Image, Row } from "antd";
import styles from "./profile.module.css";
import ErrorPage from "@/components/ui/errorPage";

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <Avatar
          size="large"
          src="https://api.dicebear.com/7.x/miniavs/svg?seed=6"
        />
        <span className={`${styles.userName} light-200`}>User Name</span>
      </div>
      <div className={styles.profileBody}>
        <Row>
          <Col span={12}>
            <div className={`${styles.scrollerContent} bg-primary`}>
              <table>
                <tr>
                  <td>User ID </td>
                  <td> John Doe</td>
                </tr>
                <tr>
                  <td>Email </td>
                  <td>johndoe@xyz.com</td>
                </tr>
                <tr>
                  <td>Account Status </td>
                  <td> Active</td>
                </tr>
                <tr>
                  <td>Auth Provider</td>
                  <td> Hexbane</td>
                </tr>
              </table>
            </div>
          </Col>
          <Col span={12}>
            <div className={`${styles.scrollerContent} bg-primary`}>
              <table>
                <tr>
                  <td> 2FA</td>
                  <td> Disabled</td>
                </tr>
                <tr>
                  <td>Password</td>
                  <td> *********</td>
                </tr>
              </table>
            </div>
          </Col>
        </Row>
      </div>

      {/* <ErrorPage
        title="🚧 Profile Page 🚧"
        message="Stay tuned! Coming soon ⏱️"
      /> */}
    </div>
  );
};

export default Profile;
