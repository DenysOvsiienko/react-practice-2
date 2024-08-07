import { getPhotos } from 'apiService/photos';
import { Text, Form, PhotosGallery, Button, Loader } from 'components';
import { useEffect, useState } from 'react';

export const Photos = ({ tabIndex }) => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);

  const handlePhotoSearch = newQuery => {
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    async function getPhotosData() {
      try {
        setError(false);
        if (query === '') {
          setShowLoadMoreBtn(false);
          return;
        }
        setLoading(true);
        const data = await getPhotos(query, page);
        const totalPages = data.total_results / data.per_page;
        totalPages > page
          ? setShowLoadMoreBtn(true)
          : setShowLoadMoreBtn(false);
        if (data.photos.length === 0) {
          setShowLoadMoreBtn(false);
          return;
        }
        setPhotos(prevPhotos => [...prevPhotos, ...data.photos]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getPhotosData();
  }, [query, page]);

  return (
    <>
      <Text textAlign="center">Let`s begin search 🔎</Text>
      <Form onPhotoSearch={handlePhotoSearch} tabIndex={tabIndex} />
      {error && (
        <Text textAlign="center">
          Something went wrong. Please reload the page
        </Text>
      )}
      {photos.length > 0 && <PhotosGallery photos={photos} />}
      {showLoadMoreBtn && <Button onClick={handleLoadMore}>Load more</Button>}
      {loading && <Loader />}
    </>
  );
};
