// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
function Counter() {
  const [color, setColor] = useState('#00E1FF');

function handelColorChange(event){
  setColor(event.target.value)
}
  return (
    <>
      <div className="colorPicerContainer">
        <h1>color picker</h1>
        <div className="color-dispaly" style={{ backgroundColor: color }}>
          <p>selected color {color}</p>
        </div>
        <label>select a color</label>
          <input type='color' value={color} onChange={handelColorChange}>
        </input>
      </div>
    </>
  );
}
export default Counter;
