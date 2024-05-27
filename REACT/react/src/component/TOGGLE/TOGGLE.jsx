import React, { useState } from "react";

const TOGGLE = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div style={{ margin: "1rem", backgroundColor: "purple", padding: "1rem" }}>
      {toggle && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptas
          autem vel in porro libero deleniti alias voluptate ea laudantium quas
          fuga cumque soluta recusandae rerum, molestiae accusantium quo?
          Reiciendis?
        </p>
      )}
      <div>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};

export default TOGGLE;
