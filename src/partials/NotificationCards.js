import React from "react";
import "./css/styles.css";
import SvgIcon from "./SvgIcon";

const readHandler = async (props) => {
  //   post request to readNotification api
  alert("Read");
};

const deleteHandler = async (props) => {
  //   post request to deleteNotification api
  alert("delete");
};

const nullHandler = async (props) => {
  //   alert("Nothing");
  return true;
};

const NotificationCard = (props) => {
  let onClickFun;

  if (props.onClick === "read") {
    onClickFun = readHandler;
  } else if (props.onClick === "delete") {
    onClickFun = deleteHandler;
  } else {
    onClickFun = nullHandler;
  }

  return (
    <div className="notification-card">
      <div className="notification-card-section-1">
        <p className="notification-card-section-1-text">{props.message}</p>
      </div>
      <div
        className="notification-card-section-2"
        onClick={() => {
          onClickFun();
        }}
        style={{ cursor: props.cursor }}
        title={props.title  }
      >
        {props.imgSrc ? <SvgIcon src={props.imgSrc} classname="new-svg" /> : ""}
      </div>
    </div>
  );
};

export default NotificationCard;
