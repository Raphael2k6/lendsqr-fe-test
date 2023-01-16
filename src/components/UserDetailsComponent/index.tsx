import React, { useState, FC } from "react";
import { useHistory } from "react-router-dom";
import Icon from "../../assets/icons/icons";
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
            <img src={userDetails && userDetails.profile.avatar} alt="" />
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
            <div className={styles.content}>
              <div>
                <span>FULL NAME</span>
                <p>
                  {" "}
                  {userDetails && userDetails.profile.firstName}{" "}
                  {userDetails && userDetails.profile.lastName}
                </p>
                <span>MARITAL STATUS</span>
                <p>Single</p>
              </div>
              <div>
                <span>PHONE NUMBER</span>
                <p>{userDetails && userDetails.profile.phoneNumber}</p>
                <span>CHILDREN</span>
                <p>None</p>
              </div>
              <div>
                <span>EMAIL ADDRESS</span>
                <p>{userDetails && userDetails.profile.address}</p>
                <span>TYPE OF RESIDENCE</span>
                <p>Rented</p>
              </div>
              <div>
                <span>BVN</span>
                <p>{userDetails && userDetails.profile.bvn}</p>
              </div>
              <div>
                <span>GENDER</span>
                <p>{userDetails && userDetails.profile.gender}</p>
              </div>
            </div>
            <hr />
          </div>
          <div>
            <h3>Education and Employment</h3>
            <div className={styles.content}>
              <div>
                <span>EDUCATION LEVEL</span>
                <p>
                  {userDetails && userDetails.education.level}
                </p>
                <span>OFFICE EMAIL</span>
                <p>{userDetails && userDetails.education.officeEmail}</p>
              </div>
              <div>
                <span>EMPLOYMENT STATUs</span>
                <p>{userDetails && userDetails.education.employmentStatus}</p>
                <span>MONTHLY INCOME</span>
                <p>{userDetails && userDetails.education.monthlyIncome[0]}</p>
              </div>
              <div>
                <span>SECTOR OF EMPLOYMENT</span>
                <p>{userDetails && userDetails.education.sector}</p>
                <span>LOAN REPAYMENT</span>
                <p>Rented</p>
              </div>
              <div>
                <span>DURATION OF EMPLOYMENT</span>
                <p>{userDetails && userDetails.education.duration}</p>
              </div>
              <div>
                <span>GENDER</span>
                <p>{userDetails && userDetails.profile.gender}</p>
              </div>
            </div>
            <hr />
          </div>
          <div>
            <h3>Socials</h3>
            <div className={styles.content}>
              <div>
                <span>TWITTER</span>
                <p>
                  {" "}
                  {userDetails && userDetails.socials.twitter}{" "}
                </p>
              </div>
              <div>
                <span>FACEBOOK</span>
                <p>{userDetails && userDetails.socials.facebook}</p>
              </div>
              <div>
                <span>INSTAGRAM</span>
                <p>{userDetails && userDetails.socials.instagram}</p>
              </div>
            </div>
            <hr />
          </div>
          <div>
            <h3>Guarantor</h3>
            <div className={styles.content}>
              <div>
                <span>FULL NAME</span>
                <p>
                  {" "}
                  {userDetails && userDetails.guarantor.firstName}{" "}
                  {userDetails && userDetails.guarantor.lastName}
                </p>
              </div>
              <div>
                <span>PHONE NUMBER</span>
                <p>{userDetails && userDetails.guarantor.phoneNumber}</p>
              </div>
              <div>
                <span>EMAIL ADDRESS</span>
                <p>{userDetails && userDetails.guarantor.address}</p>
              </div>
              <div>
                <span>RELATIONSHIP</span>
                <p>Father</p>
              </div>
            </div>
            <hr />
          </div>
          <div>
            {/* <h3>Personal Information</h3> */}
            <div className={styles.content}>
              <div>
                <span>FULL NAME</span>
                <p>
                  {" "}
                  {userDetails && userDetails.profile.firstName}{" "}
                  {userDetails && userDetails.profile.lastName}
                </p>
              </div>
              <div>
                <span>PHONE NUMBER</span>
                <p>{userDetails && userDetails.profile.phoneNumber}</p>
              </div>
              <div>
                <span>EMAIL ADDRESS</span>
                <p>{userDetails && userDetails.profile.address}</p>
              </div>
              <div>
                <span>RELATIONSHIP</span>
                <p>{userDetails && userDetails.profile.bvn}</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsComponent;
