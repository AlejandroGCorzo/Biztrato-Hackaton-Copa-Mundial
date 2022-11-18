import "./TiltCard.css";
import botin from "../../assets/botines/bot1.jpg";

export const TiltCard = () => {

  const tiltMove = (x, y) => `perspective(800px) scale(1.1) rotateX(${x}deg) rotateY(${y}deg)`;

  const handleMove = (e) => {
    const height = e.target.clientHeight
    const width = e.target.clientWidth
    const x = e.nativeEvent.layerX;
    const y = e.nativeEvent.layerY;
    const multiplier = 50;
    const xRotate = multiplier * ((x - width / 2) / width);
    const yRotate = -multiplier * ((y - height / 2) / height);
    e.target.style.transform = tiltMove(xRotate, yRotate)
  }

  const handleOut = (e) => {
    e.target.style.transform = tiltMove(0, 0)
  }

  return (
    <div className="container text-gray-300 lg:pl-[340px] p-8 pt-44 tiltContainer">
      <div
        className="tilt"
        onMouseMove={handleMove}
        onMouseOut={handleOut}
      >
        <div className="tiltContent">
          <img src={botin} alt="Botín de fútbol" />
        </div>
      </div>
    </div>
  )
}