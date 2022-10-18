import { useState } from "react";


const PointCounter = () => {
    const [points, setPoints] = useState(0); //default points is 0

    const addPoint = () => {
        setPoints(points + 1);
      };
    const containerStyles = {
    backgroundColor: "turquoise",
    border: '3px solid dodgerBlue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    margin: 'auto',
    gap: '10px'
    };

      return (
    <div className="App" style={containerStyles}>
      <p>Points: {points}</p>
      <button onClick={addPoint}>Add One Point</button>
    </div>
  );
}

export default PointCounter