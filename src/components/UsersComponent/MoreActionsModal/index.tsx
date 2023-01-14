import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../assets/icons/icons";
import styles from "./MoreActionsModal.module.scss";

interface IProps {
  handleShowMore: Function;
  user: any;
}

const MoreActions: React.FC<IProps> = ({ handleShowMore, user }) => {
  return (
    <div className={styles.modalContainer} onClick={() => handleShowMore()}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.container}>
          <div className={styles.actions}>
            <div>
              <Link
                to={`userDetails/${user.id}`}
                style={{ textDecoration: "none", color: "#545F7D" }}
              >
                <Icon name="view" /> View Details
              </Link>
            </div>
            <div>
              {" "}
              <Icon name="blacklist" /> Blacklist User
            </div>
            <div>
              {" "}
              <Icon name="activate" /> Activate User
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreActions;
