import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/ArticleModal.css";
import imageNotFound from "../assets/image-not-found.png";

const ArticleModal = ({ article, onClose, theme }) => {
  const { title, description, link, image_url, pubDate } = article;

  const handleClickOutside = (event) => {
    if (event.target.classList.contains("article-modal-overlay")) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      className={`article-modal-overlay ${theme}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="article-modal-content"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{title}</h2>
        <div className="image-container">
          <img
            src={image_url || imageNotFound}
            alt={title}
            onError={(e) => (e.target.src = imageNotFound)}
          />
        </div>
        <p className="publish-date">
          <strong>Published on:</strong>{" "}
          {new Date(pubDate).toLocaleDateString()}
        </p>
        <p className="description">
          {description || "No description available."}
        </p>
        <div className="read-more-container">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ArticleModal;
