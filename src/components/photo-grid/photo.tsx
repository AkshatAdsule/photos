import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Photo as PhotoType } from "../../assets/photos";
import { saveScrollPosition } from "../../utils/scrollRestoration";

interface PhotoProps {
  photo: PhotoType;
}

function Photo({ photo }: PhotoProps) {
  return (
    <Link 
      to={`/photos/${photo.slug}`} 
      className="block"
      onClick={saveScrollPosition}
    >
      <motion.img
        src={photo.src}
        alt={photo.title}
        layoutId={`photo-${photo.id}`}
        className="cursor-pointer transition-opacity hover:opacity-90"
      />
    </Link>
  );
}

export default Photo;
