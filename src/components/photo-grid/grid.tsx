import "./grid.css";
import Photo from "./photo";
import { photos } from "../../assets/photos";

function Grid() {
  // Organize photos into columns based on their type
  const columns = [
    photos.filter((_, i) => i % 3 === 0),
    photos.filter((_, i) => i % 3 === 1),
    photos.filter((_, i) => i % 3 === 2),
  ];

  return (
    <div className="m-auto masonry">
      <div className="wrapper switcher">
        {columns.map((columnPhotos, colIndex) => (
          <div key={colIndex} className="flow">
            {columnPhotos.map((photo) => (
              <Photo key={photo.id} photo={photo} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
