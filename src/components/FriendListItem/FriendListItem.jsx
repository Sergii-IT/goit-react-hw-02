import PropTypes from "prop-types";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.friendItem}>
      <img className={styles.avatar} src={avatar} alt="User avatar" />
      <p className={styles.name}>{name}</p>
      <p className={`${styles.statusText} ${isOnline ? styles.onlineText : styles.offlineText}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
