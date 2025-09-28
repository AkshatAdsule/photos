import "./grid.css";
import Photo from "./photo";

function Grid() {
  return (
    <div className="m-auto masonry">
      <div className="wrapper switcher">
        <div className="flow">
          <Photo type="portrait" />
          <Photo type="landscape" />
          <Photo type="landscape" />
          <Photo type="portrait" />
        </div>
        <div className="flow">
          <Photo type="landscape" />
          <Photo type="portrait" />
          <Photo type="landscape" />
          <Photo type="portrait" />
        </div>

        <div className="flow">
          <Photo type="portrait" />
          <Photo type="portrait" />
          <Photo type="landscape" />
          <Photo type="landscape" />
        </div>
      </div>
    </div>
  );
}

export default Grid;
