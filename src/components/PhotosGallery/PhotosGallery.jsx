import { Grid, GridItem, PhotosGalleryItem } from 'components';

export const PhotosGallery = ({ photos }) => {
  return (
    <Grid>
      {photos.map(photo => (
        <GridItem key={photo.id}>
          <PhotosGalleryItem
            src={photo.src.large}
            alt={photo.alt}
            avg_color={photo.avg_color}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
