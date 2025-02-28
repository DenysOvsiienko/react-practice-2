import styles from './PhotosGalleryItem.module.css';

export const PhotosGalleryItem = ({ src, alt, avg_color }) => {
  return (
    <div
      className={styles.thumb}
      style={{ backgroundColor: avg_color, borderColor: avg_color }}
    >
      <img src={src} alt={alt} />
    </div>
  );
};
