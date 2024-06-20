import React from 'react';
import PropTypes from "prop-types";

const USER = (props) => {
  return (
    <div>
      <h1>{props.userName}</h1>
      <h3>{props.userId}</h3>
    </div>
  )
}

USER.PropTypes = {
  userName: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired
};

USER.defaultProps = {
  userName: "defaule name",
  userId: 0
}

export default USER;