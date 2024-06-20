import React from "react";
import PropTypes from "prop-types";

const USER = (props) => {
  return (
    <div>
      <h1>{props.userName}</h1>
      <h3>{props.userId}</h3>
      <h1>{props.user.id}</h1>
      <h3>{props.user.name}</h3>
    </div>
  );
};

USER.PropTypes = {
  userName: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

USER.defaultProps = {
  userName: "defaule name",
  userId: 0,
  user: {
    id: 0,
    name: "defaule name"
  }
};

export default USER;
