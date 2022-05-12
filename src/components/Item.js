import React, { useState } from "react";

const Item = ({ task, deleteItem }) => {
  const [checked, setChecked] = useState(false);


  return (
    <div className="list-item">
      <p className={checked ? 'checked' : null } onClick={() => setChecked(!checked)}>{task}</p>
      <p 
      className="click"
       onClick={() => deleteItem(task)}
       > x </p>
    </div>
  );
};

export default Item;
