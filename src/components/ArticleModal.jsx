import React from "react";
import "../styles/ArticleModal.css";

const ArticleModal = ({ article, onClose, theme }) => {
  const { title, description, content, link, image_url } = article;

  return (
    <div className={`article-modal ${theme}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{title}</h2>
        {image_url && <img src={image_url} alt={title} />}
        <p>{description || "No description available."}</p>
        <p>{content || "Full content is available on the source site."}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </div>
  );
};

export default ArticleModal;
