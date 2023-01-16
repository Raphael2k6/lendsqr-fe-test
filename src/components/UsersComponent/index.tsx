import React, { useState, useEffect } from "react";
import Icon from "../../assets/icons/icons";
import styles from "./UsersComponent.module.scss";
import { userInfos } from "./usersData";
import { getAPI } from "../../utils/Axios";
import { formatDate } from "../../utils/utilities";
import MoreActions from "./MoreActionsModal";
import FilterComponent from "../FilterComponent";

const UsersComponent = () => {
  const [users, setUsers] = useState([]);
  const [isClicked, setIsClicked] = useState<any>(0);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    getAPI("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const userInfo = userInfos.map((userInfo, i) => {
    return (
      <div key={userInfo.id} className={styles.cards}>
        <Icon name={userInfo.icon} />
        <p>{userInfo.name}</p>
        <span>{userInfo.val}</span>
      </div>
    );
  });

  const userData = users.map((user: any) => {
    const newuser = { ...user, status: "inactive" };
    return newuser;
  });

  const handleShowMore = (index: any) => {
    if (isClicked === index) {
      return setIsClicked(null);
    }
    setIsClicked(index);
  };

  const handleShowFilter = () => {
    console.log("hello");
    setShowFilter(!showFilter);
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.content}>
        <h3>Users</h3>
        <div className={styles.usersCardContainer}>{userInfo}</div>
        {users && users.length > 0 && (
          <div className={styles.tableContainer}>
            <div className={styles.tableHeader}>
              <span>
                <p>ORGANIZATION</p>{" "}
                <span onClick={handleShowFilter}>
                  <Icon name="filter" />
                </span>
              </span>
              <span>
                <p>USERNAME</p>
                <span onClick={handleShowFilter}>
                  <Icon name="filter" />
                </span>
              </span>
              <span>
                <p>EMAIL</p>
                <span onClick={handleShowFilter}>
                  <Icon name="filter" />
                </span>
              </span>
              <span>
                <p>PHONE NUMBER</p>{" "}
                <span onClick={handleShowFilter}>
                  <Icon name="filter" />
                </span>
              </span>
              <span>
                <p>DATE JOINED</p>

                <span onClick={handleShowFilter}>
                  <Icon name="filter" />
                </span>
              </span>
              <span>
                <p>STATUS</p>
                <span onClick={handleShowFilter}>
                  <Icon name="filter" />
                </span>
              </span>
            </div>
            <div className={styles.tableContent}>
              {userData.map((user: any, i) => {
                return (
                  <div className={styles.tableItems} key={i}>
                    <span>{user.orgName}</span>
                    <span>{user.userName}</span>
                    <span>{user.email}</span>
                    <span>{user.phoneNumber}</span>
                    <span>{formatDate(user.createdAt)}</span>
                    <div style={{ display: "flex", gap: 90 }}>
                      <span>{user.status}</span>
                      <div onClick={() => handleShowMore(user.id)}>
                        <Icon name="more" />
                      </div>
                      {isClicked === user.id ? (
                        <MoreActions
                          user={user}
                          handleShowMore={handleShowMore}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                );
              })}
              {showFilter && <FilterComponent />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersComponent;
