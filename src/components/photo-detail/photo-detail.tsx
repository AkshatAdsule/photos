import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { getPhotoBySlug } from "../../assets/photos";
import "./photo-detail.css";

function PhotoDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const photo = slug ? getPhotoBySlug(slug) : undefined;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        navigate("/");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  if (!photo) {
    return (
      <div className="photo-detail-container">
        <div className="not-found">
          <h1>Photo not found</h1>
          <button
            onClick={() => navigate("/")}
            className="back-button"
          >
            Back to Gallery
          </button>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(photo.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="photo-detail-container">
      <button
        onClick={() => navigate("/")}
        className="close-button"
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div className="photo-detail-content">
        <div className="photo-container">
          <motion.img
            src={photo.src}
            alt={photo.title}
            layoutId={`photo-${photo.id}`}
            className="detail-image"
          />
        </div>

        <aside className="photo-sidebar">
          <div className="sidebar-content">
            <h1>{photo.title}</h1>
            <p className="photo-date">{formattedDate}</p>
            <p className="photo-description">{photo.description}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default PhotoDetail;

