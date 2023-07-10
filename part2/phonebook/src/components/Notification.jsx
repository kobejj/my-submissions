import "./Notification.css";

/* eslint-disable react/prop-types */
const Notification = ({ message, error }) => {
  if (message === null) {
    return null;
  }

  return <div className={error ? "error" : "confirm"}>{message}</div>;
};

export default Notification;
