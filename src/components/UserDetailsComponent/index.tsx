import React, { useState, FC } from "react";
import { useHistory } from "react-router-dom";
import Icon from "../../assets/icons/icons";
import UserDetails from "../../pages/userDetails/[slug]";
import styles from "./UserDetails.module.scss";

interface IProps {
  userDetails: any;
  id: string;
}

const tabsData = [
  { name: "General details", id: 1 },
  { name: "Documents", id: 2 },
  { name: "Bank Details", id: 3 },
  { name: "Loans", id: 4 },
  { name: "Savings", id: 5 },
  { name: "App and System", id: 6 },
];

const UserDetailsComponent: FC<IProps> = ({ userDetails, id }) => {
  const [active, setActive] = useState(1);
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  const tabs = tabsData.map((tab: any, i) => {
    return (
      <div
        key={tab.id}
        className={active === tab.id ? styles.active : styles.tabs}
        onClick={() => setActive(tab.id)}
      >
        <span>{tab.name}</span>
      </div>
    );
  });

  console.log("userdetail", userDetails);

  return (
    <div className={styles.userDetailContainer}>
      <div className={styles.content}>
        <div onClick={handleGoBack} className={styles.back}>
          <Icon name="back" /> <p>Back to Users</p>
        </div>
        <div className={styles.headers}>
          <div>
            <h3>User Details</h3>
          </div>
          <div className={styles.buttons}>
            <button className={styles.blacklist}>Blacklist User</button>
            <button className={styles.activate}>Activate User</button>
          </div>
        </div>
        <div className={styles.dashboardContainer}>
          <div className={styles.dashboard}>
            <img src={userDetails && userDetails.profile.avatar} />
            <div>
              <h4>
                {userDetails && userDetails.profile.firstName}{" "}
                {userDetails && userDetails.profile.lastName}
              </h4>
              <span>{userDetails && userDetails.accountNumber}</span>
            </div>
            <div className={styles.tiers}>
              <p>User Tier</p>
              <div>
                <Icon name="star" />
                <Icon name="star1" />
                <Icon name="star1" />
              </div>
            </div>
            <div>
              <h4>{userDetails && `₦ ${userDetails.accountBalance}`}</h4>
              <span>
                {userDetails && userDetails.accountNumber}/Providus Bank
              </span>
            </div>
          </div>
          <div className={styles.tabs}>{tabs}</div>
        </div>
        <div className={styles.details}>
          <div>
            <h3>Personal Information</h3>
            <div className={styles.container}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div>
            <h3>Education and Employment</h3>
            <div className={styles.container}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className={styles.container}>
            <h3>Socials</h3>
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className={styles.container}>
            <h3>Guarantor</h3>
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className={styles.container}>
            <h3>Personal Information</h3>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsComponent;
