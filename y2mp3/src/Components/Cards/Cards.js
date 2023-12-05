import React from "react";

export default function Cards(props) {
  return (
    <div className="Card-m">
      <div className="Card-main">
        <div className="Card-main_ic">
          <img src={props.ic} alt="hq" height="64px" width="64px"  />
        </div>
        <div className="Card-title">
          <div className="Card-main_title">{props.title}</div>
          <div className="Card-main_content">{props.content}</div>
        </div>
      </div>
    </div>
  );
}
