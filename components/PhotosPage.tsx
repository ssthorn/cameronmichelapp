// components/PhotosPage.tsx

import { useState, useEffect } from 'react';
import Image from 'next/image';
import photosData from '../public/photosofworkfolder/index.json';

interface Photo {
  url: string;
  name: string;
}

const PhotosPage: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const photoDirectory = '/photosofworkfolder';

    const photos: Photo[] = photosData.map((name: string) => ({
      url: `${photoDirectory}/${name}`,
      name,
    }));

    setPhotos(photos);
  }, []);

  return (
    <div className='md:pl-60'>
      <div>
        {photos.map((photo) => (
          <div key={photo.name}>
            <Image
            className='md:max-h-screen w-auto py-5'
              src={photo.url}
              alt={photo.name}
              width={2000} // Set the width according to your requirements
              height={2000} // Set the height according to your requirements
            />
            {/* <p>{photo.name}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotosPage;
