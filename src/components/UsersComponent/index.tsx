import React, { useState, useEffect } from "react";
import Icon from "../../assets/icons/icons";
import styles from "./UsersComponent.module.scss";
import { userInfos } from "./usersData";
import { getAPI } from "../../utils/Axios";
import { formatDate } from "../../utils/utilities";
import MoreActions from "./MoreActionsModal";

const UsersComponent = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isClicked, setIsClicked] = useState<any>(0);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAPI("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
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
  // if (loading) {
  //   return <Loader />
  // }

  const userData = users.map((user: any) => {
    const newuser = { ...user, status: "inactive" };
    return newuser;
  });

  // const handleShowMore = () => {
  //   setShowMore(!showMore);
  // };

  const handleShowMore = (index: any) => {
    if (isClicked === index) {
      return setIsClicked(null)
    }
    setIsClicked(index)
  }

  console.log(isClicked)
  console.log("USER", )

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.content}>
        <h3>Users</h3>
        <div className={styles.usersCardContainer}>{userInfo}</div>
        {users && users.length > 0 && (
          <div className={styles.tableContainer}>
            <div className={styles.tableHeader}>
              <span>
                <p>ORGANIZATION</p> <Icon name="filter" />
              </span>
              <span>
                <p>USERNAME</p> <Icon name="filter" />
              </span>
              <span>
                <p>EMAIL</p> <Icon name="filter" />
              </span>
              <span>
                <p>PHONE NUMBER</p> <Icon name="filter" />
              </span>
              <span>
                <p>DATE JOINED</p>
                <Icon name="filter" />
              </span>
              <span>
                <p>STATUS</p> <Icon name="filter" />
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
                  <div style={{display: "flex", gap: 90}}>
                    <span>{user.status}</span>
                    <div onClick={() => handleShowMore(user.id)}>
                      <Icon name="more" />
                    </div>
                    {isClicked === user.id ? (
                      <MoreActions
                        user={user}
                        handleShowMore={handleShowMore}
                      />
                    ) : ""}
                  </div>
                </div>
                )
              }
                
               
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersComponent;
